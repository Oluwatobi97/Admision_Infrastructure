import { database } from "../db";
import { school, sessions, verificationTokens } from "../db/schema";
import { TSchoolCreateAccount, TSession } from "./types";
import { v4 as uuid4 } from "uuid"
import { eq, sql } from "drizzle-orm";
import { UnauthorizedError } from "../utils/AppErrror";
import bcrypt from "bcryptjs";
import { setTimeLine } from "../utils/setTimeLine";
import { SEVEN_DAYS } from "../constants";




export class AuthRespository {
    private db: typeof database

    constructor () {
        this.db = database
    }

    async findUserByEmail (email: string) {
        return await this.db.select().from(school).where(eq(school.email, email)).then(result => result[ 0 ] || null)
    }
    async createUser (schoolDto: TSchoolCreateAccount, tokenHash: string, date: Date) {
        return await this.db.transaction(async (tsx) => {
            await tsx.insert(school).values(schoolDto)
            return await tsx.insert(verificationTokens).values({
                id: uuid4(),
                schoolId: schoolDto.id,
                tokenHash,
                expiresAt: date
            }).returning({ tokenHash: verificationTokens.tokenHash }).then(result => result[ 0 ] || null)
        })
    }

    async verifyEmailHasToken (tokenHash: string) {
        return await this.db.transaction(async (tsx) => {
            const schoolId = await tsx.select({ userId: verificationTokens.schoolId })
                .from(verificationTokens)
                .where(eq(verificationTokens.tokenHash, tokenHash))
                .then(result => result[ 0 ].userId || "")
            if (schoolId)
            {
                await tsx.delete(verificationTokens).where(eq(verificationTokens.schoolId, schoolId))
                await tsx.update(school).set({ isVerified: true }).where(eq(school.id, schoolId))
            }

            return schoolId
        })
    }

    async sessionTracsaction (sessionData: TSession, id: string) {
        return await this.db.transaction(async (tsx) => {
            await tsx.update(school).set({ failedAttempts: 0 }).where(eq(school.id, id))
            await tsx.delete(sessions).where(eq(sessions.schoolId, id))
            await tsx.insert(sessions).values(sessionData)
        })
    }
    async refreshSessionTrasaction (sessionId: string, token: string, newRefreshToken: string) {
        return await this.db.transaction(async (tsx) => {
            const session = await tsx.select().from(sessions).where(eq(sessions.id, sessionId)).then(result => result[ 0 ] || null)
            if (!session || session.revoked) throw new UnauthorizedError("invalid details")

            if (session.expiresAt < new Date())
            {
                await tsx.update(sessions).set({ revoked: true }).where(eq(sessions.id, sessionId))
                throw new UnauthorizedError("Session expired. Please log in again.")
            }

            const isValid = await bcrypt.compare(token, session.tokenHash)
            if (!isValid) throw new UnauthorizedError("invalid details")
            await tsx.delete(sessions).where(eq(sessions.id, sessionId))

            const newSessionId = uuid4()
            const newTokenHash = await bcrypt.hash(newRefreshToken, 10)

            await tsx.insert(sessions).values({
                expiresAt: setTimeLine(SEVEN_DAYS),
                id: newSessionId,
                tokenHash: newTokenHash,
                schoolId: session.schoolId
            })
        })
    }

    async lockAccountTransaction (date: Date, id: string) {

        await this.db.transaction(async (tsx) => {

            const updateFailedAttempts = await tsx.update(school).set({ failedAttempts: sql`failed_attempts + 1` })
                .where(eq(school.id, id)).returning({ failedAttempts: school.failedAttempts }).then(result => result[ 0 ].failedAttempts || 0)

            if (updateFailedAttempts && updateFailedAttempts >= 5)
                await tsx.update(school).set({ lockedUntil: date }).where(eq(school.id, id))
        })
    }

    async findUserSession (sessionId: string) {
        return await this.db.select().from(sessions).where(eq(sessions.id, sessionId))
    }
    async revokeSession (sessionId: string) {
        return await this.db.update(sessions).set({ revoked: true }).where(eq(sessions.id, sessionId))
    }

}
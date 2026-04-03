import { BASE_URL, FIFTHEN_MINUTES, SEVEN_DAYS } from "@/backend/constants";
import { TBaseAuth, TcreateSchool } from "@/backend/lib/zod-schema";
import { AuthRespository } from "@/backend/respository/AuthRepository";
import { UnauthorizedError } from "@/backend/utils/AppErrror";
import { sendEmail } from "@/backend/utils/sendEmail";
import { setTimeLine } from "@/backend/utils/setTimeLine";
import bcypt from "bcryptjs"
import { v4 as uuid4 } from "uuid"
import jwt, { JwtPayload } from "jsonwebtoken"
import bcrypt from "bcryptjs";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "@/backend/utils/jwt";


// handle db errors e.g email already exists amd 
export class AuthService {
    private authRepository: AuthRespository

    constructor () {
        this.authRepository = new AuthRespository()
    }

    async createAccount (schoolData: TcreateSchool) {
        const { email, password, schoolName } = schoolData

        const userId = uuid4()
        const passwordHash = await bcypt.hash(password, 10)
        const tokenHash = await bcypt.hash(userId, 10)
        const timeLine = setTimeLine(SEVEN_DAYS)

        await this.authRepository.createUser({ email, id: userId, passwordHash, isVerified: false, name: schoolName },
            tokenHash, timeLine)
        await sendEmail(`${ BASE_URL }verify/${ tokenHash }`, email)
        return
    }

    async verifyEmail (token: string) {
        const userId = this.authRepository.verifyEmailHasToken(token)
        if (!userId) throw new UnauthorizedError("Invalid request")
        return userId
    }
    async login (schoolData: TBaseAuth) {

        const school = await this.authRepository.findUserByEmail(schoolData.email)

        if (!school) throw new UnauthorizedError("Invalid Login credentials")

        const { passwordHash, isVerified, lockedUntil, id } = school

        const validPassword = await bcypt.compare(schoolData.password, passwordHash)
        const accountLocked = lockedUntil && new Date(lockedUntil) > new Date()
        if (accountLocked) throw new UnauthorizedError(`Account locked ${ new Date(lockedUntil) }`)

        if (!validPassword)
        {
            await this.authRepository.lockAccountTransaction(setTimeLine(FIFTHEN_MINUTES), id)
            throw new UnauthorizedError("Invalid Login credentials")
        }
        if (!isVerified) throw new UnauthorizedError("Your email address has not been verified, please verify to proceed")


        const sessionId = uuid4()
        const accessToken = signAccessToken({ sessionId })
        const refreshToken = signRefreshToken({ sessionId })

        const tokenHash = await bcrypt.hash(refreshToken, 10)

        await this.authRepository.sessionTracsaction({
            expiresAt: setTimeLine(FIFTHEN_MINUTES),
            schoolId: id,
            tokenHash,
            id: sessionId
        }, id)

        return { accessToken, refreshToken }
    }

    async refreshService (token: string) {

        const payload = verifyRefreshToken(token) as JwtPayload

        const { sessionId } = payload

        const newRefreshToken = signRefreshToken({ sessionId })
        const newAccesstoken = signAccessToken({ sessionId })

        await this.authRepository.refreshSessionTrasaction(sessionId, token, newRefreshToken)

        return { newRefreshToken, newAccesstoken }
    }
    async logoutService (token: string) {
        const payload = verifyRefreshToken(token) as JwtPayload
        const { sessionId } = payload

        const session = await this.authRepository.findUserSession(sessionId)
        if (session.length === 0) throw new UnauthorizedError("invalid details")
        await this.authRepository.revokeSession(sessionId)

    }
}
import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";


export const school = pgTable("school-table", {
    id: uuid('id').notNull().primaryKey(),
    name: text("text").notNull(),
    email: text("email").unique().notNull(),
    passwordHash: text("password_hash").notNull(),
    isVerified: boolean("is_verified").notNull(),
    failedAttempts: integer("failed_attempts").default(0),
    lockedUntil: timestamp("locked_until"),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const verificationTokens = pgTable('verification_tokens', {
    id: uuid('id').notNull().primaryKey(),
    schoolId: uuid("school_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    used: boolean("used").notNull().default(false),
})

export const sessions = pgTable('sessions', {
    id: uuid('id').notNull().primaryKey(),
    schoolId: uuid("school_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    revoked: boolean("revoked").notNull().default(false),
})
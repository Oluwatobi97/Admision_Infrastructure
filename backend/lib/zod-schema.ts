import z from 'zod'

// TODO SAVE THIS VALIDATION RULES INTO CONSTANT FILE

export const baseAuthSchema = z.object({
    email: z.email({ error: "Please Enter A Valid Email Address" }),
    password: z.string().min(3, { error: "Password should be at least 3 characters" })
        .max(20, { error: "Password cannot be more than 20 characters" })
})


export const createSchoolSchema = baseAuthSchema.extend({
    schoolName: z.string().min(3, { error: "School name should be at least three chracters" })
})


export type TBaseAuth = z.infer<typeof baseAuthSchema>
export type TcreateSchool = z.infer<typeof createSchoolSchema>
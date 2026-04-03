import { NextRequest, NextResponse } from "next/server";
import z, { ZodSchema } from "zod"
import { BadRequestError } from "../utils/AppErrror";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";




interface TValidator<T> {
    schema: ZodSchema,
    handler: (request: NextRequest, data: T) => Promise<Response | ResponseCookies>
}

// curing function
// intercept the fuction

export function zodValidator<T> (validator: TValidator<T>): typeof validator.handler {
    return async (request) => {
        const body = await request.json()
        const validatedData = validator.schema.safeParse(body)
        if (validatedData.error) throw new BadRequestError(validatedData.error.message)
        return await validator.handler(request, validatedData.data as T)
    }
}
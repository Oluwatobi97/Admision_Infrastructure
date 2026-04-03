import { AuthController } from "@/backend/controller/auth/auth.controller";
import { createSchoolSchema, TcreateSchool } from "@/backend/lib/zod-schema";
import { globalErrorHandler } from "@/backend/middleware/globalErrorHandler";
import { zodValidator } from "@/backend/middleware/validator";
import { NextRequest } from "next/server";



export const register = async (request: NextRequest, data: TcreateSchool) => {
    const authController = new AuthController()
    return await authController.createAccount(data)
}


export const POST = globalErrorHandler(zodValidator({ handler: register, schema: createSchoolSchema }))
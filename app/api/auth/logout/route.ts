import { AuthController } from "@/backend/controller/auth/auth.controller";
import { createSchoolSchema, TcreateSchool } from "@/backend/lib/zod-schema";
import { globalErrorHandler } from "@/backend/middleware/globalErrorHandler";
import { zodValidator } from "@/backend/middleware/validator";
import { NextRequest } from "next/server";



export const logout = async (request: NextRequest, token: string) => {
    const authController = new AuthController()
    return authController.logOutHandler(request, token)
}


export const POST = globalErrorHandler(logout)
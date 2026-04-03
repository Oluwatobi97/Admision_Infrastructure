import { AuthController } from "@/backend/controller/auth/auth.controller";
import { globalErrorHandler } from "@/backend/middleware/globalErrorHandler";
import { NextRequest } from "next/server";


const verify = async (request: NextRequest) => {
    const authController = new AuthController()
    return await authController.verifyEmail(request)
}


export const POST = globalErrorHandler(verify)

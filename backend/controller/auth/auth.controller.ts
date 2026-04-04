import { TBaseAuth, TcreateSchool } from "@/backend/lib/zod-schema";
import { AuthService } from "./auth.service";
import { NextRequest, NextResponse } from "next/server";
import { BadRequestError } from "@/backend/utils/AppErrror";

export class AuthController {
    authService: AuthService

    constructor () {
        this.authService = new AuthService()
    }

    async createAccount (schoolData: TcreateSchool) {
        await this.authService.createAccount(schoolData)
        return NextResponse.json(
            { message: "user created succesfully" },
            { status: 201 }
        )
    }

    async verifyEmail (request: NextRequest) {
        const searchParams = request.nextUrl.searchParams
        const tokenHash = searchParams.get("token")
        if (!tokenHash) throw new BadRequestError("Invalid request")
        const userId = await this.authService.verifyEmail(tokenHash)
        return NextResponse.json(
            { mesage: "Verrified", userId },
            { status: 200 }
        )
    }

    async login (schoolData: TBaseAuth) {
        const { accessToken, refreshToken } = await this.authService.login(schoolData)

        const response = NextResponse.json({ message: "login succesful", }, { status: 201 },)

        response.cookies.set("access-token", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/"
        })

        response.cookies.set("refresh-token", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/"
        })
        return response
    }

    async refreshHandler (request: NextRequest, token: string) {
        const { newAccesstoken, newRefreshToken } = await this.authService.refreshService(token)
        const response = NextResponse.json({ message: "Account refreshed", newAccesstoken }, { status: 201 })


        response.cookies.set("access-token", newAccesstoken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/"
        })


        response.cookies.set("refresh-token", newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/"
        })

        return response

    }

    async logOutHandler (request: NextRequest, token: string) {

        await this.authService.logoutService(token)
        const response = NextResponse.json({ message: "user logged out" }, { status: 201 })
        response.cookies
            .delete("access-token")
            .delete("refresh-token")

        return response

    }

}
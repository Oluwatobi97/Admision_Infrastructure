import { NextRequest } from "next/server";
import { UnauthorizedError } from "../utils/AppErrror";


export function getRefreshToken (handler: Function) {
    return async (request: NextRequest) => {
        const refreshToken = request.cookies.get("refresh-token")
        if (!refreshToken) throw new UnauthorizedError("Invalid credentials")
        return handler(request, refreshToken.value)
    }
}
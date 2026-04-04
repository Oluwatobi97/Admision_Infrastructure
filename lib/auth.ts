import { apiFetcher } from "./api";

export type TLoginDetails = {
    email: string;
    password: string
}

export type TRegisterDetails = {
    schoolName: string
    email: string;
    password: string;
}

export const login = async (data: TLoginDetails) => {
    return await apiFetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    })
}

export const register = async (data: TRegisterDetails) => {
    return await apiFetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    })
}


export const verifyEmail = async (token: string) => {
    return await apiFetcher(`/auth/verify?token=${ token }`, {
        method: "GET",
    })
}

export const refresh = async () => {
    return await apiFetcher("/auth/refresh", {
        method: "GET",
    })
}


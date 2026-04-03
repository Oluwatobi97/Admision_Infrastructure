import jwt from "jsonwebtoken";

export const signAccessToken = (payload: object) => {
    return jwt.sign(payload, "dkkdkjvndn", {
        expiresIn: "15m",
    });
};

export const signRefreshToken = (payload: object) => {
    return jwt.sign(payload, "dkkdkjvn", {
        expiresIn: "7d",
    });
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, "dkkdkjvndn");
};

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, "dkkdkjvn");
};

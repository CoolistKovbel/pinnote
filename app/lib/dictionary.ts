import { SessionOptions } from "iron-session";
import { Types } from "mongoose";

export interface SessionData {
    username?: string;
    image?: string;
    isPro?: boolean;
    isLoggedIn?: boolean;
    role?: string;
    email?: string;
    metaAddress?: string;
    userId?: string | Types.ObjectId;
}

export const defaultSession:SessionData =  {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
    cookieName: "KMS",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV  === "production"
    }
} 
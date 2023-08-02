import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            role: UserRole;
            username: string;
            email: string;
            accessToken: string;
        }
    }
}
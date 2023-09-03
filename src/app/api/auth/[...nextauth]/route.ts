import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
                        method: "POST",
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password
                        }),
                        headers: { "Content-Type": "application/json" }
                    });

                    const user = await res.json();

                    if (res.ok) {
                        return user;
                    } else {
                        throw new Error(user.error || "Invalid username or password");
                    }
                } catch (error) {
                    console.error("Error during authorization:", error);

                    // Type guard to check if error is an instance of Error
                    if (error instanceof Error) {
                        throw new Error(error.message || "An error occurred during authorization.");
                    } else {
                        throw new Error("An unexpected error occurred during authorization.");
                    }
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        }
    },
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };

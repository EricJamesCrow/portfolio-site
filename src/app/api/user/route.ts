import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    email: string;
    username: string;
    password: string;
}

export async function POST(request: Request) {
    if (process.env.NODE_ENV === "production") {
        return new Response("This endpoint is not available.", { status: 403 }); // Forbidden
    }
    
    const body:RequestBody = await request.json();

    const user = await prisma.user.create({
        data: {
            email: body.email,
            username: body.username,
            password: await bcrypt.hash(body.password, 10),
        }
    });

    const {password, ...userWithoutPass} = user;
    return new Response(JSON.stringify(userWithoutPass));
}


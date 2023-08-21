import prisma from "@/lib/prisma";

interface RequestBody {
    name: string;
    description: string;
    type: string;
    tech: string[];
    status: string;
    image?: string;

}

export async function POST(request: Request) {
    const body:RequestBody = await request.json();

    const project = await prisma.project.create({
        data: {
            name: body.name,
            description: body.description,
            type: body.type,
            tech: body.tech,
            status: body.status,
            image: body.image ? body.image : null,
        }
    });
    
    return new Response(JSON.stringify(project));
}

export async function GET() {
    const projects = await prisma.project.findMany();

    return new Response(JSON.stringify(projects));
}
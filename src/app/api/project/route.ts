import prisma from "@/lib/prisma";

interface RequestBody {
    name: string;
    description: string;
    url?: string;
    type: string;
    tech: string[];
    status: string;
    image?: string;

}

export async function POST(request: Request) {
    try {
        const body: RequestBody = await request.json();

        const project = await prisma.project.create({
            data: {
                name: body.name,
                description: body.description,
                url: body.url ? body.url : null,
                type: body.type,
                tech: body.tech,
                status: body.status,
                image: body.image ? body.image : null,
            }
        });

        return new Response(JSON.stringify(project));

    } catch (error) {
        return new Response(JSON.stringify({ error: error }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}

interface UpdateRequestBody {
    id: number; // You'll need the ID to know which project to update
    name?: string; // The question mark indicates the field is optional
    url?: string;
    description?: string;
    type?: string;
    tech?: string[];
    status?: string;
    image?: string;
}

export async function PATCH(request: Request) {
    const body: UpdateRequestBody = await request.json();

    if (!body.id) {
        return new Response('Project ID is required', { status: 400 }); // Bad Request
    }

    const data: Partial<UpdateRequestBody> = {};

    if (body.name !== "") data.name = body.name;
    if (body.description !== "") data.description = body.description;
    if (body.url !== "") data.url = body.url;
    if (body.type !== "") data.type = body.type;
    if (body.tech !== undefined) data.tech = body.tech;
    if (body.status !== "") data.status = body.status;
    if (body.image !== "") data.image = body.image;

    const updatedProject = await prisma.project.update({
        where: { id: body.id },
        data: data
    });

    return new Response(JSON.stringify(updatedProject));
}


export async function GET() {
    const projects = await prisma.project.findMany();

    return new Response(JSON.stringify(projects));
}
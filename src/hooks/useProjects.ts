import { useDispatch } from "react-redux";
import { setProjects, updateSingleProject, updateProjects } from "../redux/slices/projectSlice";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const PROJECTS_URL = "/api/project";

export const useProjects = () => {
    const dispatch = useDispatch();
    
    const fetchProjects = async () => {
        const res = await fetch(PROJECTS_URL);
        const projects = await res.json();
        if (res.ok) dispatch(setProjects(projects));
        else
        return null;
    };

    const addProject = async (
        name: string, 
        status: string, 
        description: string, 
        url: string, 
        tech: string[], 
        type: string, 
        image : string | undefined
        ) => {
            try {
                const res = await fetch(PROJECTS_URL, {
                    method: "POST",
                    body: JSON.stringify({
                    name,
                    status,
                    description,
                    url,
                    tech,
                    type,
                    image
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const newProject = await res.json();
                if (res.ok) {
                    dispatch(updateProjects(newProject));
                    return newProject;
                } else { 
                    if(newProject.error.name === "PrismaClientKnownRequestError") {
                        let error = capitalizeFirstLetter(newProject.error.meta.target[0]);
                        return `${error} already in use.`
                    }
                    return 'Error adding project!';
                };
            } catch (error) {
                return 'Internal server error.';
            }
    }

    const updateProject = async (
        id: number, 
        name?: string, 
        status?: string, 
        description?: string, 
        url?: string, 
        tech?: string[], 
        type?: string, 
        image?: string | null
    ) => {
        const requestBody: any = { id };
    
        if (name !== undefined) requestBody.name = name;
        if (status !== undefined) requestBody.status = status;
        if (description !== undefined) requestBody.description = description;
        if (url !== undefined) requestBody.url = url;
        if (tech !== undefined) requestBody.tech = tech;
        if (type !== '') requestBody.type = type;
        if (image !== undefined) requestBody.image = image;
    
        try {
            const res = await fetch(PROJECTS_URL, {
                method: "PATCH",
                body: JSON.stringify(requestBody),
                headers: { "Content-Type": "application/json" }
            });
            
            const updatedProject = await res.json();
            if (res.ok) {
                dispatch(updateSingleProject(updatedProject));
                return updatedProject;
            } else { 
                if(updatedProject.error.name === "PrismaClientKnownRequestError") {
                    let error = capitalizeFirstLetter(updatedProject.error.meta.target[0]);
                    return `${error} already in use.`
                }
                return 'Internal server error.';
            };
        } catch (error) {
            return 'Internal server error.';
        }
    };
    
    
    
    return { fetchProjects, addProject, updateProject };
};
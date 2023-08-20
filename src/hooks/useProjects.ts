import { useDispatch } from "react-redux";
import { setProjects, updateProjects } from "../redux/slices/projectSlice";

const PROJECTS_URL = "/api/project";

export const useProjects = () => {
    const dispatch = useDispatch();
    
    const fetchProjects = async () => {
        const res = await fetch(PROJECTS_URL);
        const projects = await res.json();
        if (res.ok) dispatch(setProjects(projects));
        else
        dispatch(setProjects(null));
    };

    const addProject = async (name: string, status: string, description: string, url: string, tech: string[], type: string, image? : string | null) => {
        const res = await fetch('/api/project', {
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
            dispatch(updateProjects(null));
            return null;
        };
    }
    
    return { fetchProjects, addProject };
};
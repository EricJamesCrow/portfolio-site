import { useDispatch } from "react-redux";
import { setProjects } from "../redux/slices/projectSlice";

const PROJECTS_URL = "/api/project";

export const useFetchProjects = () => {
    const dispatch = useDispatch();
    
    const fetchProjects = async () => {
        const response = await fetch(PROJECTS_URL);
        const projects = await response.json();
        if (response.ok) dispatch(setProjects(projects));
        else
        dispatch(setProjects(null));
    };
    
    return fetchProjects;
};
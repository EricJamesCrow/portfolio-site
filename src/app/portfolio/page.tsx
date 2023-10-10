import { Metadata } from 'next'
import PortfolioPage from "@/components/portfolio/page";

// lib
import { projects as staticProjects } from '@/lib/projects';

// types
import { Project } from '@/lib/types/projects'

const PROJECTS_URL = `${process.env.NEXTAUTH_URL}/api/project`;

export const metadata: Metadata = {
    title: 'Portfolio | CrowDevelopment, LLC',
    description: 'Portfolio of CrowDevelopment, LLC.',
  }

export default async function Portfolio() {
    const fetchProjects = async (): Promise<Project[]> => {
        const res = await fetch(PROJECTS_URL);
        const fetchedProjects: Project[] = await res.json();
        if (!res.ok) return [];
    
        // Create a map of static projects by their ID for easy lookup
        const staticProjectMap: Map<number, Project> = new Map(staticProjects.map(project => [project.id, project]));
    
        // Replace fetched projects with static ones based on ID
        return fetchedProjects.map(project => staticProjectMap.get(project.id) || project);
    };
    
    
    

    const projects = await fetchProjects();

    return (
        <PortfolioPage projects={projects}/>
    );
}

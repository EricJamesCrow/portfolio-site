import { Metadata } from 'next'
import PortfolioPage from "@/components/portfolio/page";

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
        const projects = await res.json();
        if (res.ok) return projects;
        else return [];
    };

    const projects = await fetchProjects();

    return (
        <PortfolioPage projects={projects}/>
    );
}

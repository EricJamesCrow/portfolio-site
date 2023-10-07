"use client";
import { useState } from 'react';
import localFont from 'next/font/local';

// components
import Card from '@/components/portfolio/card'
import SkeletonCard from '@/components/portfolio/skeleton'

// types
import { Project } from '@/lib/types/projects'

const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });
interface Props {
    projects: Project[];
}

const PortfolioPage: React.FC<Props> = ( { projects }) => {
    const [selectedButton, setSelectedButton] = useState<string>('Work');

    const filteredProjects = projects.filter((project: any) => project.type === selectedButton);

    const sortedProjects = filteredProjects.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <div className="bg-custom-color pb-12 min-h-[91.9vh] max-w-[1800px] mx-auto">
            <h1 className={`${railwayThin.className} mt-8 text-center font-thin text-white text-5xl lg:text-left lg:ml-20 lg:text-7xl`}>Portfolio</h1>
            <div className="mt-6 text-white font-light text-2xl flex justify-center lg:justify-start lg:ml-20">
                <button 
                    aria-label="Show work related projects"
                    className={`transition duration-300 ease-in-out bg-custom-color ${selectedButton === 'Work' ? 'border-b-2 border-white' : 'hover:bg-custom-dark text-[#9D9C9C]'} py-2 px-4 w-[128.65px]`} 
                    onClick={() => setSelectedButton('Work')}>
                    Work
                </button>
                <button 
                    aria-label="Show personal projects"
                    className={`transition duration-300 ease-in-out bg-custom-color ${selectedButton === 'Personal' ? 'border-b-2 border-white' : 'hover:bg-custom-dark text-[#9D9C9C]'} py-2 px-4`} 
                    onClick={() => setSelectedButton('Personal')}>
                    Projects
                </button>
            </div>
            <div className="grid grid-cols-1 gap-10 dark text-foreground bg-[#161616] m-4 md:m-8 lg:mx-20">
            {sortedProjects.length > 0 ? (
                    // If projects are available, render them
                    sortedProjects.map((project: any) => (
                        <Card 
                        key={project.id} 
                        image={project.image} 
                        name={project.name} 
                        description={project.description}
                        tech={project.tech}
                        url={project.url}
                        />
                    ))
                ) : (
                    // If no projects are available, render skeleton cards
                    <>
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </>
                )}
                </div>
        </div>
    );
}

export default PortfolioPage;

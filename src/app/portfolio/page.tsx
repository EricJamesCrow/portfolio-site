"use client";
import { useState } from 'react';
import localFont from 'next/font/local';

//redux
import { useSelector } from 'react-redux'

// components
import Card from '@/components/portfolio/card'

const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

const Portfolio: React.FC = () => {
    const projects = useSelector((state: any) => state.projects.projects);
    const [selectedButton, setSelectedButton] = useState<string>('Work');

    return (
        <div className="bg-custom-color min-h-[90vh]">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>Portfolio</h1>
            <div className="mt-2 text-white font-light text-2xl flex justify-center lg:justify-start lg:ml-8">
                <button 
                    className={`transition duration-300 ease-in-out bg-custom-color ${selectedButton === 'Work' ? 'border-b-2 border-white' : 'hover:bg-custom-dark text-[#9D9C9C]'} py-2 px-4 w-[128.65px]`} 
                    onClick={() => setSelectedButton('Work')}>
                    Work
                </button>
                <button 
                    className={`transition duration-300 ease-in-out bg-custom-color ${selectedButton === 'Personal' ? 'border-b-2 border-white' : 'hover:bg-custom-dark text-[#9D9C9C]'} py-2 px-4`} 
                    onClick={() => setSelectedButton('Personal')}>
                    Personal
                </button>
            </div>
            <div className="grid grid-cols-1 gap-10 dark text-foreground bg-[#161616] m-4 md:m-8">
                {projects.map((project: any) => (
                    <Card 
                    key={project.id || project.name} 
                    image={project.image} 
                    name={project.name} 
                    description={project.description}
                    tech={project.tech}
                    url={project.url}
                    />
                ))}
                </div>
        </div>
    );
}

export default Portfolio;

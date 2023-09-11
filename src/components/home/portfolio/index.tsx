"use client";
import localFont from 'next/font/local'
import Link from 'next/link'

// components
import Card from '@/components/home/portfolio/card'

// data
import { projects } from '@/lib/projects'

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const Portfolio: React.FC = () => {
    return (
        <div className="relative bg-[#1E1E1E]">
            <div className="px-8 py-8 text-white lg:px-20 max-w-[1800px] mx-auto">
                <div className={`${railwayThin.className} font-light flex items-center justify-between mb-6`}>
                        <h2 className="text-3xl leading-tight bg-gradient-custom lg:text-6xl">
                        Portfolio
                        </h2>
                        <Link
                        href="/portfolio"
                        aria-label="View all projects"
                        className="lg:text-2xl underline hover:text-gray-300 transition duration-75"
                        >
                        View All
                        </Link>
                </div>
                <div className="grid grid-cols-1 gap-10 mb-6 lg:grid-cols-3">
                    {projects.map((project: any) => (
                        <Card 
                        key={project.id} 
                        image={project.image} 
                        name={project.name} 
                        description={project.description}
                        tech={project.tech}
                        url={project.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
"use client";
import { type NextPage } from "next";
import DataTable from "@/components/admin/DataTable";
import EditProject from "@/components/admin/projects/editproject";
import AddProject from "@/components/admin/projects/addproject";
import {useDisclosure} from "@nextui-org/react";
import { useState } from "react";
//redux
import { useSelector } from 'react-redux'
// hooks
import { useProjects } from '@/hooks/useProjects'

const Projects: NextPage = () => {
    const { fetchProjects } = useProjects();
    fetchProjects();
    const projects = useSelector((state: any) => state.projects.projects);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [selectedProject, setSelectedProject] = useState<string>("");

    return (
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4 dark text-foreground bg-[#161616] mt-2">
            <div className="text-right w-full">
                <div className="max-w-[591.73px] mx-auto">
                    <button onClick={onOpen} className="bg-white text-black font-semibold text-sm h-9 rounded w-36 mb-2 lg:mb-6 hover:bg-gray-300 transition-all duration-200 mr-5 sm:mr-0">Add Project</button>
                    <DataTable projects={projects} setSelectedProject={setSelectedProject}/>
                </div>
            </div>
            <EditProject projects={projects} selectedProject={selectedProject} />
            <AddProject isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}

export default Projects;
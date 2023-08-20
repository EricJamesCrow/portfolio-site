"use client";
import DataTable from "@/components/admin/table/DataTable";
import EditProject from "@/components/admin/editproject";
import AddProject from "@/components/admin/addproject";
import {useDisclosure} from "@nextui-org/react";

const Projects: React.FC = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-4 dark text-foreground bg-[#161616] mt-2">
            <div className="text-right w-full">
                <div className="max-w-[591.73px] mx-auto">
                    <button onClick={onOpen} className="bg-white text-black font-semibold text-sm h-9 rounded w-36 mb-2 lg:mb-6 hover:bg-gray-300 transition-all duration-200">Add Project</button>
                    <DataTable />
                </div>
            </div>
            <EditProject />
            <AddProject isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}

export default Projects;
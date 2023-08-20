"use client";
import DataTable from "@/components/admin/table/DataTable";
import EditProject from "@/components/admin/editproject";

const Projects: React.FC = () => {
    return (
        <div className="w-[95%] grid grid-cols-2 gap-4 dark text-foreground bg-[#161616] mt-2">
            <div className="text-right max-w-[591.73px]">
                <button className="bg-white text-black font-semibold text-sm h-9 rounded w-36 mb-6 hover:bg-gray-300 transition-all duration-200">Add Project</button>
                <DataTable />
            </div>
            <EditProject />
        </div>
    )
}

export default Projects;
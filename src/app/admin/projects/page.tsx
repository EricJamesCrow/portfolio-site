import DataTable from "@/components/admin/table/DataTable";

const Projects: React.FC = () => {
    return (
        <div className="w-[95%] grid grid-cols-2 gap-4 dark text-foreground bg-[#161616] mt-2">
            <div className="text-right max-w-[591.73px]">
                <button className="bg-white text-black font-semibold text-sm h-9 rounded w-36 mb-6">Add Project</button>
                <DataTable />
            </div>
            <div>
                <div className="rounded-t-lg bg-[#27272A] h-11">
                </div>
                <div className="rounded-b-lg h-[504px] bg-[#18181B]">

                </div>
            </div>
        </div>
    )
}

export default Projects;
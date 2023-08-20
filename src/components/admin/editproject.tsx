import ImageDropzone from "@/components/ImageDropzone";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const EditProject: React.FC = () => {
    return (
        <div className="shadow-[0px 4px 12px rgba(0,0,0,0.1)] overflow-x-auto mb-4">
            <div className="rounded-t-lg bg-[#27272A] h-11 font-semibold flex items-center pl-8">
                Mantra Seeds
            </div>
            <div className="rounded-b-lg h-[504px] bg-[#18181B]">
                <div className="flex flex-col items-center sm:flex-row md:flex-col xl:flex-row">
                    <div className="flex-1 flex flex-col gap-4 mt-6 px-6">
                        <div className="flex gap-4">
                            <div className="font-semibold flex flex-col gap-1">
                                <label>Name</label>
                                <Input/>
                            </div>
                            <div className="font-semibold flex flex-col gap-1">
                                <label>Status</label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button 
                                        variant="bordered" 
                                        >
                                        Change Status
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="inProgress">In-Progress</DropdownItem>
                                        <DropdownItem key="completed">Completed</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="font-semibold flex flex-col gap-1">
                            <label>Description</label>
                            <Textarea/>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-semibold flex flex-col gap-1">
                                <label>URL</label>
                                <Input/>
                            </div>
                            <div className="font-semibold flex flex-col gap-1">
                                <label>Tech</label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button 
                                        variant="bordered" 
                                        >
                                        Change Tech
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="react">React</DropdownItem>
                                        <DropdownItem key="nodejs">Node.js</DropdownItem>
                                        <DropdownItem key="aws">AWS</DropdownItem>
                                        <DropdownItem key="redux">Redux</DropdownItem>
                                        <DropdownItem key="nextjs">Next.js</DropdownItem>
                                        <DropdownItem key="vercel">Vercel</DropdownItem>
                                        <DropdownItem key="express">Express.js</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col font-semibold px-5 mt-6 xl:mt-0 gap-2">
                        <label>Image</label>
                        <ImageDropzone onDrop={() => {}} />
                    </div>
                </div>
                <div className="font-semibold text-sm flex gap-4 justify-center mt-[42px]">
                    <button className="w-[121px] h-[38px] rounded-md border border-black bg-white text-black hover:bg-gray-200 hover:bg-gray-300 transition-all duration-200">Cancel</button>
                    <button className="w-[121px] h-[38px] rounded-md bg-[#4CAF50] hover:bg-[#388E3C] transition-all duration-200">Save Changes</button>
                </div>
            </div>
    </div>
    )
}

export default EditProject;
import {Modal, ModalContent, ModalHeader, ModalBody, Input, Textarea, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import ImageDropzone from "../ImageDropzone";
import { useMemo, useState } from "react";

interface AddProjectProps {
    isOpen: boolean;
    onOpenChange: () => void;
}

const AddProject: React.FC<AddProjectProps> = ({ isOpen, onOpenChange }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [tech, setTech] = useState([]);
    const [type, setType] = useState('');

    const [selectedKeys, setSelectedKeys] = useState(new Set([]));

    const selectedValue = useMemo(
      () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
      [selectedKeys]
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('/api/project', {
            method: "POST",
            body: JSON.stringify({
              name,
              status,
              description,
              url,
              tech,
              type
            }),
            headers: { "Content-Type": "application/json" }
          })

        if (res.ok) {
            console.log("Project added!");
        } else {
            const data = await res.json();
            console.log("Error adding project:", data);
        }
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="dark text-foreground">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Project</ModalHeader>
              <ModalBody>
              <form onSubmit={handleSubmit} className="shadow-[0px 4px 12px rgba(0,0,0,0.1)] overflow-x-auto mb-6">
                    <div className="rounded-b-lg h-[504px] bg-[#18181B]">
                        <div className="flex flex-col items-center">
                            <div className="flex-1 flex flex-col gap-4 px-6">
                                <div className="flex gap-4">
                                    <div className="font-semibold flex flex-col gap-1">
                                        <label>Name</label>
                                        <Input key="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className="font-semibold flex flex-col gap-1">
                                        <label>Status</label>
                                        <Dropdown className="dark text-foreground">
                                            <DropdownTrigger>
                                                <Button 
                                                className="w-[112.49px]"
                                                variant="bordered" 
                                                >
                                                {status ? status : "Select Status"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu 
                                            aria-label="Static Actions" 
                                            onAction={(key) => setStatus(key as string)}
                                            selectionMode="single"
                                            variant="flat"
                                            selectedKeys={[status]}
                                            >
                                                <DropdownItem key="In-progress">In-progress</DropdownItem>
                                                <DropdownItem key="Completed">Completed</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="font-semibold flex flex-col gap-1">
                                    <label>Description</label>
                                    <Textarea key="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </div>
                                <div className="flex gap-4">
                                    <div className="font-semibold flex flex-col gap-1">
                                        <label>URL</label>
                                        <Input key="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
                                    </div>
                                    <div className="font-semibold flex flex-col gap-1">
                                        <label>Tech</label>
                                        <Dropdown className="dark text-foreground">
                                            <DropdownTrigger>
                                                <Button 
                                                variant="bordered" 
                                                >
                                                Choose Tech
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu 
                                            aria-label="Single selection actions"
                                            variant="flat"
                                            closeOnSelect={false}
                                            disallowEmptySelection
                                            selectionMode="multiple"
                                            selectedKeys={selectedKeys}
                                            onSelectionChange={(keys: any) => {
                                                setSelectedKeys(new Set(keys));
                                                setTech(Array.from(keys));
                                            }}
                                            >
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
                                <div className="font-semibold flex flex-col gap-1">
                                        <label>Type</label>
                                        <Dropdown className="dark text-foreground">
                                            <DropdownTrigger>
                                                <Button 
                                                variant="bordered" 
                                                >
                                                {type ? type : "Select Type"}
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu 
                                            aria-label="Static Actions" 
                                            onAction={(key) => setType(key as string)}
                                            selectionMode="single"
                                            variant="flat"
                                            selectedKeys={[type]}
                                            >
                                                <DropdownItem key="Personal">Personal</DropdownItem>
                                                <DropdownItem key="Work">Work</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                            </div>
                            <div className="flex-1 flex flex-col font-semibold px-5 mt-4 gap-2">
                                <label>Image</label>
                                <ImageDropzone onDrop={() => {}} />
                            </div>
                        </div>
                        <div className="font-semibold text-sm flex gap-4 justify-center mt-[42px]">
                            <button type="button" onClick={onClose} className="w-[121px] h-[38px] rounded-md border border-black bg-white text-black hover:bg-gray-200 hover:bg-gray-300 transition-all duration-200">Cancel</button>
                            <button type="submit" className="w-[121px] h-[38px] rounded-md bg-[#4CAF50] hover:bg-[#388E3C] transition-all duration-200">Save Changes</button>
                        </div>
                    </div>
            </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}

export default AddProject;
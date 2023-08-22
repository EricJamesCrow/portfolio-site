import ImageDropzone from "@/components/ImageDropzone";
import {Input, Textarea} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useEffect, useState } from "react";

// hooks
import { useProjects } from "@/hooks/useProjects";
import { useUpload } from '@/hooks/useUpload'
import { useToast } from "@/components/ui/use-toast";

// button loader
import { Loader2 } from "lucide-react"

interface Props {
    projects: Row[];
    selectedProject: string;
}

interface Row {
    id: number;
    name: string;
    description?: string;
    url?: string;
    type: string;
    tech: string[];
    status: string;
    image?: string;
    updatedAt: string;
    createdAt?: string;
    }

const EditProject: React.FC<Props> = ({ projects, selectedProject }) => {
    const { updateProject } = useProjects();
    const { uploadImage } = useUpload();
    const { toast } = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<Row | undefined>();
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string | undefined>(undefined);
    const [status, setStatus] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [url, setUrl] = useState<string | undefined>(undefined);
    const [tech, setTech] = useState<string[] | undefined>(undefined);
    const [type, setType] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageURL, setImageURL] = useState<string | undefined>(undefined);  // for editing existing image
    const [image, setImage] = useState<File | null>(null);

    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());


    const handleImageSelect = (files: File[]) => {
        if (files.length === 0) return;
        const file = files[0];  // get the first file
        setImage(file);
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);
    };
    

    useEffect(() => {
        const project = projects.find(p => p.id === parseInt(selectedProject));
        setId(0)
        setName(undefined);
        setStatus(undefined);
        setDescription(undefined);
        setUrl(undefined);
        setTech(undefined);
        setType('');
        setImagePreview(null);
        setImage(null);
        setImageURL(undefined);
    
        if (project) {
            setCurrentProject(project);
            setStatus(project.status)
            setSelectedKeys(new Set(project.tech));  // directly use Set constructor with array
            setImageURL(project?.image);
            setId(project.id);
            setType(project.type);
        } else {
            setCurrentProject(undefined);
        }
    }, [selectedProject, projects]);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        let uploadedImageUrl = undefined;

        if(image) {
            try {
                uploadedImageUrl = await uploadImage(image);
            } catch (error) {
                console.log("Error uploading image:", error);
                toast({
                    variant: "destructive",
                    title: 'Error',
                    description: 'Error uploading image.',
                })
                setLoading(false);
                return;
            }
        }

        try {
            const res = await updateProject(id, name, status, description, url, tech, type, uploadedImageUrl);

            if(res) {
                toast({
                    title: 'Success',
                    description: `Project ${res.name} updated successfully.`,
                })
                setName('');
                setDescription('');
                setUrl('');
            } else {
                toast({
                    variant: "destructive",
                    title: 'Error',
                    description: 'Error adding project.',
                })
            }
        } catch (error) {
            console.log("Error updating project:", error);
            toast({
                variant: "destructive",
                title: 'Error',
                description: 'Error updating project.',
            })
        }
        return setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className="shadow-[0px 4px 12px rgba(0,0,0,0.1)] overflow-x-auto mb-4">
            <div className="rounded-t-lg bg-[#27272A] h-11 font-semibold flex items-center pl-8">
                {currentProject?.name}
            </div>
            <div className="rounded-b-lg h-[504px] bg-[#18181B]">
                <div className="flex flex-col items-center sm:flex-row md:flex-col xl:flex-row">
                    <div className="flex-1 flex flex-col gap-4 mt-6 px-6">
                        <div className="flex gap-4">
                            <div className="font-semibold flex flex-col gap-1">
                                <label>Name</label>
                                <Input 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                placeholder={currentProject?.name}
                                />
                            </div>
                            <div className="font-semibold flex flex-col gap-1">
                                <label>Status</label>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button 
                                        variant="bordered" 
                                        >
                                        {status ? status : "Select Status"}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu 
                                    aria-label="Static Actions"
                                    onAction={(key) => setStatus(key as string)}
                                    selectedKeys={Array.from(selectedKeys)}
                                    >
                                        <DropdownItem key="In-progress">In-progress</DropdownItem>
                                        <DropdownItem key="Completed">Completed</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="font-semibold flex flex-col gap-1">
                            <label>Description</label>
                            <Textarea
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder={currentProject?.description}
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="font-semibold flex flex-col gap-1">
                                <label>URL</label>
                                <Input
                                placeholder={currentProject?.url}
                                value={url} 
                                onChange={(e) => setUrl(e.target.value)}
                                />
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
                    <div className="flex-1 flex flex-col font-semibold px-5 mt-6 xl:mt-0 gap-2">
                        <label>Image</label>
                        {imageURL && !imagePreview && <img src={imageURL} alt="Selected Preview" className="w-full max-h-[200px] mb-2" />}
                        {imagePreview && <img src={imagePreview} alt="Selected Preview" className="w-full max-h-[200px] mb-2" />}
                        <ImageDropzone onDrop={handleImageSelect} />
                    </div>
                </div>
                <div className="font-semibold text-sm flex gap-4 justify-center mt-[42px]">
                <button type="submit" disabled={loading} className={`w-[121px] h-[38px] rounded-md ${loading ? `bg-[#388E3C]` : `bg-[#4CAF50] hover:bg-[#388E3C]`} transition-all duration-200 flex justify-center items-center`}>
                                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Save Changes'}
                                </button>
                </div>
            </div>
    </form>
    )
}

export default EditProject;
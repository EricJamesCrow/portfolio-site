import { useEffect, useState } from "react";

// components
import LabeledInput from "./form/labeled-input";
import Description from "./form/description";
import Status from "./form/status";
import Tech from "./form/tech";
import Type from "./form/type";
import ImageComponent from "./form/image-component";
import SaveButton from "../save-button";

// hooks
import { useProjects } from "@/hooks/useProjects";
import { useUpload } from '@/hooks/useUpload'
import { useCustomToast } from "@/hooks/useCustomToast";

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
    const { showSuccessToast, showDestructiveToast } = useCustomToast();
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
    const [hasChanged, setHasChanged] = useState<boolean>(false);
    
    
    useEffect(() => {
        const hasChanged = () => {
            if(name !== undefined && name !== "" && name !== currentProject?.name) return true;
            if(status !== undefined && status !== "" && status !== currentProject?.status) return true;
            if(description !== undefined && description !== "" && description !== currentProject?.description) return true;
            if(url !== undefined && url !== "" && url !== currentProject?.url) return true;
            if(tech !== undefined && tech !== currentProject?.tech) return true;
            if(type !== undefined && type !== "" && type !== currentProject?.type) return true;
            if(image !== null) return true;
            return false;
        }
        setHasChanged(hasChanged());
    }, [name, status, description, url, tech, type, image]);

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);


    const handleImageSelect = (files: File[]) => {
        if (files.length === 0) return;
        
        // Revoke the previous imagePreview URL
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        const file = files[0];
        setImage(file);
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);
    };

    const resetForm = () => {
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
    }
    
    useEffect(() => {
        const project = projects.find(p => p.id === parseInt(selectedProject));
        resetForm();
    
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

    if (!currentProject) return null;
    

    const handleImageUpload = async () => {
        if (!image) return undefined;
        try {
            return await uploadImage(image);
        } catch (error) {
            showDestructiveToast('Error uploading image.');
            return null;
        }
    };
    
    const handleProjectUpdate = async (uploadedImageUrl: string | undefined) => {
        try {
            const res = await updateProject(id, name, status, description, url, tech, type, uploadedImageUrl);
            if (typeof res == 'object') {
                showSuccessToast(`Project ${res.name} updated successfully.`);
                // only clear name, desc, url as the other fields still need the same values
                setName('');
                setDescription('');
                setUrl('');
            } else {
                showDestructiveToast(res);
            }
        } catch (error) {
            showDestructiveToast('Error updating project.');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    
        const uploadedImageUrl = await handleImageUpload();
        if (uploadedImageUrl !== null) { 
            await handleProjectUpdate(uploadedImageUrl);
        }
    
        setLoading(false);
    };
    
    
    return (
        <form onSubmit={handleSubmit} className="shadow-[0px 4px 12px rgba(0,0,0,0.1)] overflow-x-auto mb-4">
            <div className="rounded-t-lg bg-[#27272A] h-11 font-semibold flex items-center pl-8">
                {currentProject?.name}
            </div>
            <div className="rounded-b-lg h-[504px] bg-[#18181B]">
                <div className="flex flex-col items-center sm:flex-row md:flex-col xl:flex-row">
                    <div className="flex-1 flex flex-col gap-4 mt-6 px-6">
                        <div className="flex gap-4">
                            <LabeledInput
                            label="Name"
                            loading={loading}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={currentProject?.name}
                            />
                            <Status
                            label="Status"
                            loading={loading}
                            status={status}
                            selectedKeys={Array.from(selectedKeys)}
                            setStatus={setStatus}
                            />
                        </div>
                        <Description
                        label="Description"
                        loading={loading}
                        value={description}
                        setDescription={setDescription}
                        placeholder={currentProject?.description}
                        />
                        <div className="flex gap-4">
                            <LabeledInput
                            label="URL"
                            loading={loading}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder={currentProject?.url}
                            />
                            <Tech 
                            loading={loading}
                            selectedKeys={selectedKeys}
                            setTech={setTech}
                            setSelectedKeys={setSelectedKeys}
                            />
                        </div>
                        <Type loading={loading} type={type} setType={setType} />
                        </div>
                        <ImageComponent
                        imageURL={imageURL}
                        imagePreview={imagePreview}
                        onImageSelect={handleImageSelect}
                        />
                </div>
                <div className="font-semibold text-sm flex gap-4 justify-center mt-[42px]">
                <SaveButton loading={loading} disabled={!hasChanged}/>
                </div>
            </div>
    </form>
    )
}

export default EditProject;
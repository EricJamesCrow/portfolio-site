import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
} from "@nextui-org/react";
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
import { useProjects } from '@/hooks/useProjects'
import { useUpload } from '@/hooks/useUpload'
import { useCustomToast } from "@/hooks/useCustomToast";

interface Props {
    isOpen: boolean;
    onOpenChange: () => void;
}

const AddProject: React.FC<Props> = ({ isOpen, onOpenChange }) => {
    const { addProject } = useProjects();
    const { uploadImage } = useUpload();
    const { showSuccessToast, showDestructiveToast } = useCustomToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [tech, setTech] = useState<string[]>([]);
    const [type, setType] = useState<string>('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const [hasChanged, setHasChanged] = useState<boolean>(false);

    useEffect(() => {
        const hasChanged = () => {
            if (name !== "") return true;
            if (status !== "") return true;
            if (description !== "") return true;
            if (url !== "") return true;
            if (tech.length > 0) return true;
            if (type !== "") return true;
            if (imagePreview !== null) return true;
            return false;
        }
        setHasChanged(hasChanged());
    }, [name, status, description, url, tech, type, imagePreview, image])

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
        setName('');
        setStatus('');
        setDescription('');
        setUrl('');
        setTech([]);
        setType('');
        setImagePreview(null);
        setImage(null);
    }

    const handleImageUpload = async () => {
        if (!image) return undefined;
        try {
            return await uploadImage(image);
        } catch (error) {
            console.error("Error uploading image:", error);
            showDestructiveToast('Error uploading image.');
            return null;
        }
    };

    const handleAddProject = async (uploadedImageUrl: string | undefined) => {
        try {
            const res = await addProject(name, status, description, url, tech, type, uploadedImageUrl);
            if(typeof res == 'object') {
                resetForm();
                showSuccessToast(`Project ${res.name} added successfully!`);
            } else {
                showDestructiveToast(res);
            }
    
        } catch (error) {
            showDestructiveToast(`Error adding project: ${error}}`);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (!name || !status || !description || !url || !tech || !type) {
            showDestructiveToast('Please fill out all fields.');
            setLoading(false);
            return;
        }

        const uploadedImageUrl = await handleImageUpload();
        if (uploadedImageUrl !== null) {
            await handleAddProject(uploadedImageUrl);
        }

        setLoading(false);
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
                                    <LabeledInput
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    loading={loading}
                                    />
                                    <Status
                                    label='Status'
                                    status={status}
                                    setStatus={setStatus}
                                    loading={loading}
                                    selectedKeys={[status]}
                                    />
                                </div>
                                <Description
                                label={'Description'}
                                loading={loading}
                                value={description}
                                setDescription={setDescription}
                                />
                                <div className="flex gap-4">
                                    <LabeledInput
                                    label="URL"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    loading={loading}
                                    />
                                    <Tech
                                    selectedKeys={selectedKeys}
                                    setTech={setTech}
                                    setSelectedKeys={setSelectedKeys}
                                    loading={loading}
                                    />
                                </div>
                            <Type
                            loading={loading}
                            type={type}
                            setType={setType}
                            />
                            </div>
                            <ImageComponent
                            imagePreview={imagePreview}
                            onImageSelect={handleImageSelect}
                            />
                        </div>
                        <div className="font-semibold text-sm flex gap-4 justify-center mt-[42px]">
                            <button type="button" 
                            onClick={onClose} 
                            className="w-[121px] h-[38px] rounded-md border border-black bg-white text-black hover:bg-gray-200 hover:bg-gray-300 transition-all duration-200"
                            >Cancel
                            </button>
                            <SaveButton loading={loading} disabled={!hasChanged}/>
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
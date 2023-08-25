import ImageDropzone from "../../../ImageDropzone";
import Image from "next/image";

interface Props {
    imageURL?: string;
    imagePreview?: string | null;
    onImageSelect: (files: File[]) => void;
}

const ImageComponent: React.FC<Props> = ({ imageURL, imagePreview, onImageSelect }) => {
    return (
        <div className="flex-1 flex flex-col font-semibold px-5 mt-4 gap-2">
        <label>Image</label>
        {imageURL && !imagePreview && 
        <Image src={imageURL} 
        alt="Selected Preview" 
        className="w-full 
        max-h-[200px] 
        mb-2" 
        width={400}
        height={200}
        />}
        {imagePreview && <Image 
        src={imagePreview} 
        alt="Selected Preview" 
        className="w-full max-h-[200px] mb-2" 
        width={400}
        height={200}
        />}
        <ImageDropzone onDrop={onImageSelect} />
    </div>
    )
    }

export default ImageComponent;

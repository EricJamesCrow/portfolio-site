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
            {(imageURL || imagePreview) && <div className="relative w-full h-[150px] overflow-hidden mb-2">
                {imageURL && !imagePreview && 
                <Image 
                    src={imageURL} 
                    alt="Selected Preview" 
                    layout="fill"
                    objectFit="cover"
                />}
                {imagePreview && 
                <Image 
                    src={imagePreview} 
                    alt="Selected Preview" 
                    layout="fill"
                    objectFit="cover"
                />}
            </div>}
            <ImageDropzone onDrop={onImageSelect} />
        </div>
    )
}

export default ImageComponent;

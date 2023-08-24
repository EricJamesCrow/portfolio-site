import ImageDropzone from "../../../ImageDropzone";

interface Props {
    imageURL?: string;
    imagePreview?: string | null;
    onImageSelect: (files: File[]) => void;
}

const ImageComponent: React.FC<Props> = ({ imageURL, imagePreview, onImageSelect }) => {
    return (
        <div className="flex-1 flex flex-col font-semibold px-5 mt-4 gap-2">
        <label>Image</label>
        {imageURL && !imagePreview && <img src={imageURL} alt="Selected Preview" className="w-full max-h-[200px] mb-2" />}
        {imagePreview && <img src={imagePreview} alt="Selected Preview" className="w-full max-h-[200px] mb-2" />}
        <ImageDropzone onDrop={onImageSelect} />
    </div>
    )
    }

export default ImageComponent;

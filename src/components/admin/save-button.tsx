// button loader
import { Loader2 } from "lucide-react"

interface Props {
    loading: boolean;
    disabled?: boolean;
}

const SaveButton: React.FC<Props> = ({ loading, disabled }) => {
    return (
        <button type="submit" disabled={loading || disabled} className={`w-[121px] h-[38px] rounded-md ${loading ? `bg-[#388E3C]` : `bg-[#4CAF50] hover:bg-[#388E3C]`} ${disabled ? 'bg-[#A9A9A9] text-gray-500 hover:bg-[#A9A9A9]' : ''} transition-all duration-100 flex justify-center items-center`}>
        {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Save Changes'}
        </button>
    )
};

export default SaveButton;
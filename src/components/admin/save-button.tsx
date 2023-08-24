// button loader
import { Loader2 } from "lucide-react"

interface Props {
    loading: boolean;
}

const SaveButton: React.FC<Props> = ({ loading }) => {
    return (
        <button type="submit" disabled={loading} className={`w-[121px] h-[38px] rounded-md ${loading ? `bg-[#388E3C]` : `bg-[#4CAF50] hover:bg-[#388E3C]`} transition-all duration-200 flex justify-center items-center`}>
        {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Save Changes'}
        </button>
    )
};

export default SaveButton;
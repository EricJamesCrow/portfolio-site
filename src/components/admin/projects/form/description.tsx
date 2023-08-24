import { Textarea } from "@nextui-org/react";

import { Dispatch, SetStateAction } from "react";

interface Props {
    label: string;
    loading: boolean;
    value: string | undefined;
    setDescription: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string | undefined>>;
    placeholder?: string;
}

const Description: React.FC<Props> = ({
    label,
    loading,
    value,
    setDescription,
    placeholder,
}) => {
    return (
        <div className="font-semibold flex flex-col gap-1">
            <label>{label}</label>
            <Textarea 
                isDisabled={loading}
                value={value} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Description;

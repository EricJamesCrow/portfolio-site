import { Input } from "@nextui-org/react";

interface Props {
    label: string;
    loading: boolean;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const LabeledInput: React.FC<Props> = ({
    label,
    loading,
    value,
    onChange,
    placeholder,
}) => {
    return (
        <div className="font-semibold flex flex-col gap-1">
            <label>{label}</label>
            <Input 
                isDisabled={loading}
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default LabeledInput;
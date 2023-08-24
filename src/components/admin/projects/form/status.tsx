import { Dispatch, SetStateAction } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface Props {
    label: string;
    loading: boolean;
    status: string | undefined;
    selectedKeys: string[];
    setStatus: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string | undefined>>;
}

const Status: React.FC<Props> = ({
    label,
    loading,
    status,
    selectedKeys,
    setStatus,
}) => {
    return (
        <div className="font-semibold flex flex-col gap-1">
            <label>{label}</label>
            <Dropdown className="dark text-foreground">
                <DropdownTrigger>
                    <Button 
                    isDisabled={loading}
                    className="w-[112.49px]"
                    variant="bordered" 
                    >
                    {status ? status : "Select Status"}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                aria-label="Static Actions" 
                onAction={(key) => setStatus(key as string)}
                selectionMode="single"
                variant="flat"
                selectedKeys={selectedKeys}
                >
                    <DropdownItem key="In-progress">In-progress</DropdownItem>
                    <DropdownItem key="Completed">Completed</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    </div>
    );
}

export default Status;

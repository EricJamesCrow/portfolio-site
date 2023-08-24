import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";

interface Props {
    loading: boolean;
    type: string;
    setType: (type: string) => void;
}

const Type: React.FC<Props> = ({ loading, type, setType }) => {
    return (
        <div className="font-semibold flex flex-col gap-1">
            <label>Type</label>
            <Dropdown className="dark text-foreground">
                <DropdownTrigger>
                    <Button 
                    isDisabled={loading}
                    variant="bordered" 
                    >
                    {type ? type : "Select Type"}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                aria-label="Static Actions" 
                onAction={(key) => setType(key as string)}
                selectionMode="single"
                variant="flat"
                selectedKeys={[type]}
                >
                    <DropdownItem key="Personal">Personal</DropdownItem>
                    <DropdownItem key="Work">Work</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    </div>
    )
}

export default Type;
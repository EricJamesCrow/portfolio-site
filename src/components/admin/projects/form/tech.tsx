import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";

import { Dispatch, SetStateAction } from "react";

interface Props {
    selectedKeys: Set<string>;
    setTech: Dispatch<SetStateAction<string[]>> | Dispatch<SetStateAction<string[] | undefined>>;
    setSelectedKeys: Dispatch<SetStateAction<Set<string>>>;
    loading: boolean;
  }

const Tech: React.FC<Props> = ({ selectedKeys, setSelectedKeys, setTech, loading }) => {
    return (
        <div className="font-semibold flex flex-col gap-1">
            <label>Tech</label>
            <Dropdown className="dark text-foreground">
                <DropdownTrigger>
                    <Button 
                    isDisabled={loading}
                    variant="bordered" 
                    >
                    Choose Tech
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                aria-label="Single selection actions"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys: any) => {
                    setSelectedKeys(new Set(keys));
                    setTech(Array.from(keys));
                }}
                >
                    <DropdownItem key="react">React</DropdownItem>
                    <DropdownItem key="nodejs">Node.js</DropdownItem>
                    <DropdownItem key="express">Express.js</DropdownItem>
                    <DropdownItem key="mongodb">MongoDB</DropdownItem>
                    <DropdownItem key="aws">AWS</DropdownItem>
                    <DropdownItem key="redux">Redux</DropdownItem>
                    <DropdownItem key="nextjs">Next.js</DropdownItem>
                    <DropdownItem key="vercel">Vercel</DropdownItem>
                    <DropdownItem key="qt">Qt</DropdownItem>
                    <DropdownItem key="python">Python</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    </div>
    )
}

export default Tech;
  
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
                    <DropdownItem key="React">React</DropdownItem>
                    <DropdownItem key="NodeJS">Node.js</DropdownItem>
                    <DropdownItem key="Express">Express.js</DropdownItem>
                    <DropdownItem key="MongoDB">MongoDB</DropdownItem>
                    <DropdownItem key="AWS">AWS</DropdownItem>
                    <DropdownItem key="Redux">Redux</DropdownItem>
                    <DropdownItem key="NextJS">Next.js</DropdownItem>
                    <DropdownItem key="Vercel">Vercel</DropdownItem>
                    <DropdownItem key="QT">Qt</DropdownItem>
                    <DropdownItem key="Python">Python</DropdownItem>
                    <DropdownItem key="Electron">Electron</DropdownItem>
                    <DropdownItem key="Django">Django</DropdownItem>
                    <DropdownItem key="C++">C++</DropdownItem>
                    <DropdownItem key="Java">Java</DropdownItem>
                    <DropdownItem key="MySQL">MySQL</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    </div>
    )
}

export default Tech;
  
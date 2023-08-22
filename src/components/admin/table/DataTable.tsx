"use client";
import React, { useEffect } from "react";
import { Selection as ReactSelection } from "@react-types/shared";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

interface Row {
    id: string;
    name: string;
    description?: string;
    url?: string;
    type: string;
    tech: string[];
    status: string;
    image?: string;
    updatedAt: string;
    createdAt?: string;
    }
    
interface Column {
    key: string;
    label: string;
    }


const columns: Column[] = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "type",
    label: "TYPE",
  },
  {
    key: "tech",
    label: "TECH",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "updatedAt",
    label: "LAST UPDATED",
  },
];

interface DataTableProps {
    projects: Row[];
    setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
}

const DataTable: React.FC<DataTableProps> = ({ projects, setSelectedProject }) => {
  
  useEffect(() => {
    console.log(projects);
  }, [projects])

  return (
    <Table 
      aria-label="Projects Data Table"
      selectionMode="single" 
      onSelectionChange={(key: ReactSelection) => {
        const keyArray = Array.from(key as Set<string>);
        if (keyArray.length > 0) {
            setSelectedProject(keyArray[0]);
        } else {
            setSelectedProject("");
        }
    }}
    
    
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={projects} emptyContent={"No rows to display."}>
        {(item) => (
          <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {(() => {
                      if (columnKey === 'tech') {
                          return item[columnKey][0];
                      } else if (columnKey === 'updatedAt' || columnKey === 'lastUpdated') { // Assuming the actual key is 'updatedAt'
                          const date = new Date(item['updatedAt']);
                          return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                      } else {
                          return getKeyValue(item, columnKey);
                      }
                  })()}
              </TableCell>
              )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable;

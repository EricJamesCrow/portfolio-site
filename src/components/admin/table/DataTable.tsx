"use client";
import React, { useState } from "react";
import { Selection as ReactSelection } from "@react-types/shared";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
//redux
import { useSelector } from 'react-redux'

interface Row {
    id: string;
    name: string;
    description?: string;
    type: string;
    tech: string[];
    status: string;
    image?: string;
    updatedAt: string;
    createdAt?: string;
    }

    // const rows: Row[] = [
    //   {
    //     id: '1',
    //     name: 'Project Alpha',
    //     description: 'A platform for managing tasks efficiently.',
    //     type: 'Web App',
    //     tech: ['React', 'Node.js', 'MongoDB'],
    //     status: 'In-Progress',
    //     image: 'https://example.com/image1.jpg',
    //     updatedAt: '2023-08-17',
    //     createdAt: '2023-01-01'
    //   },
    //   {
    //     id: '2',
    //     name: 'Project Beta',
    //     description: 'A mobile application for e-commerce.',
    //     type: 'Mobile App',
    //     tech: ['Flutter', 'Firebase'],
    //     status: 'Completed',
    //     image: 'https://example.com/image2.jpg',
    //     updatedAt: '2023-07-15',
    //     createdAt: '2023-02-10'
    //   },
    //   {
    //     id: '3',
    //     name: 'Project Gamma',
    //     type: 'Desktop App',
    //     tech: ['Electron', 'TypeScript'],
    //     status: 'In-Progress',
    //     updatedAt: '2023-08-05',
    //     createdAt: '2023-03-20'
    //   },
    //   {
    //     id: '4',
    //     name: 'Project Delta',
    //     description: 'A platform for real-time collaboration.',
    //     type: 'Web App',
    //     tech: ['Vue.js', 'Express', 'PostgreSQL'],
    //     status: 'In-Review',
    //     image: 'https://example.com/image3.jpg',
    //     updatedAt: '2023-06-30',
    //     createdAt: '2023-04-15'
    //   }
    // ];
    

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

export default function DataTable() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const rows: Row[] = useSelector((state: any) => state.projects.projects)
  if (!rows) return null;
  console.log(rows)



  return (
    <Table 
      aria-label="Projects Data Table"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={(keys: ReactSelection) => {
        const stringKeys = Array.from(keys).map(String);
        setSelectedKeys(new Set(stringKeys));
    }}
    
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No rows to display."}>
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

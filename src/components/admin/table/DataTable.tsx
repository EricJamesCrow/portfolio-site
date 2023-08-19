"use client";
import React, { useState } from "react";
import { Selection as ReactSelection } from "@react-types/shared";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

interface Row {
    key: string;
    name: string;
    type: string;
    tech: string;
    status: string;
    lastUpdated: string;
    }

interface Column {
    key: string;
    label: string;
    }

const rows: Row[] = [
  {
    key: "1",
    name: "Nucleomutics",
    type: "Personal",
    tech: "Electron",
    status: "In-Progress",
    lastUpdated: "8/17/2023",
  },
  {
    key: "2",
    name: "Mantra Seeds",
    type: "Work",
    tech: "MERN",
    status: "Completed",
    lastUpdated: "8/17/2023",
  },
  {
    key: "3",
    name: "E-Phys Analyzer",
    type: "Personal",
    tech: "Qt",
    status: "Completed",
    lastUpdated: "8/17/2023",
  },
];

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
    key: "lastUpdated",
    label: "LAST UPDATED",
  },
];

export default function DataTable() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));

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
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

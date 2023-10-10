import { StaticImageData } from 'next/image';
export interface Project {
    id: number;
    name: string;
    description: string;
    url: string;
    type: string;
    tech: string[];
    status?: string;
    image: string | StaticImageData;
    createdAt?: string;
    updatedAt?: string;
  }
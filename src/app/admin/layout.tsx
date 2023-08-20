"use client";
import React from 'react';
import { usePathname } from 'next/navigation'

import SideNav from '@/components/admin/sidenav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getTitle = () => {
    const path = pathname.split('/').filter(Boolean); // Split the route into parts
    return path.length > 1 ? path[1].charAt(0).toUpperCase() + path[1].slice(1) : 'Dashboard'; // Return the capitalized second part of the path, or "Admin" if it doesn't exist
  }

  return (
    <div className="flex flex-col min-h-screen items-center lg:flex-row lg:items-start">
      <SideNav />
      <div className="w-full flex flex-col items-center justify-center lg:items-start">
        <h1 className="text-white font-bold text-[24px] mt-6 lg:text-4xl lg:ml-12 lg:mt-10">{getTitle()}</h1>
        <div style={{height: '0.25px'}} className="bg-custom-gray mt-4 w-[85%] md:w-[90%] lg:hidden"></div>
        <main className="w-full flex flex-col items-center justify-center">
            {children}
        </main>
      </div>
    </div>
  )
}

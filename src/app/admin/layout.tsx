import React from 'react';

import SideNav from '@/components/admin/sidenav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen items-center lg:flex-row lg:items-start">
      <SideNav />
      <div className="w-full flex flex-col items-center justify-center lg:items-start">
        <h1 className="text-white font-bold text-[24px] mt-6 lg:text-4xl lg:ml-12 lg:mt-10">Dashboard</h1>
        <div style={{height: '0.25px'}} className="bg-custom-gray mt-4 w-[85%] md:w-[90%] lg:hidden"></div>
        <main className="w-full flex flex-col items-center justify-center">
            {children}
        </main>
      </div>
    </div>
  )
}

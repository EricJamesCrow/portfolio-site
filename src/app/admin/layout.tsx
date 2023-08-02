'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import styles from './admin.module.css';
import Image from 'next/image';

// components
import SideNav from '../../components/admin/sidenav/sidenav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const getTitle = () => {
    const path = pathname.split('/').filter(Boolean); // Split the route into parts
    return path.length > 1 ? path[1].charAt(0).toUpperCase() + path[1].slice(1) : 'Admin Dashboard'; // Return the capitalized second part of the path, or "Admin" if it doesn't exist
  }


  return (
    <>
      <SideNav isOpen={isOpen} handleToggle={handleToggle}/>
      <div className={styles.background}>
        <div className={styles.hamburgerWrapper}>
          <Image
            src="/hamburger_icon.svg"
            width={45}
            height={45}
            alt="Menu Button"
            className={styles.hamburger}
            onClick={handleToggle}
          />
        </div>
        <h1>{getTitle()}</h1>
        <span className={styles.span}></span>
      </div>
      {children}
    </>
  )
}

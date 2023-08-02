import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react";

import styles from './sidenav.module.css';

interface SideNavProps {
    isOpen: boolean;
    handleToggle: () => void;
  }  

const SideNav: React.FC<SideNavProps> = ({ isOpen, handleToggle }) => {
    const { data: session } = useSession();
    const sideNavStyles = isOpen ? `${styles.sideNav} ${styles.open}` : styles.sideNav;

    // {session && session.user && 
    //     <div>
    //       <p>Signed in as {session.user.email}</p>
    //       <p>Role: {session.user.role}</p>
    //       <button onClick={()=>signOut()}>
    //         Sign Out
    //       </button>
    //     </div>
    //   }

    return (
        <div className={sideNavStyles}>
            <div className={styles.closeWrapper}>
                <Image
                src="/close_icon.svg"
                width={34}
                height={34}
                alt="Close Button"
                className={styles.close}
                onClick={handleToggle}
                />
            </div>
            <ul className={styles.sideNavLinks}>
                <li>
                    <Link href="/admin" aria-label="Admin Dashboard" onClick={handleToggle}>Dashboard</Link>
                </li>
                <li>
                    <Link href="/admin/projects" aria-label="Admin Projects" onClick={handleToggle}>Projects</Link>
                </li>
                <li>
                <   Link href="/admin/services" aria-label="Admin Services" onClick={handleToggle}>Services</Link>
                </li>
                <li>
                <   Link href="/admin/videos" aria-label="Admin Videos" onClick={handleToggle}>Videos</Link>
                </li>
                <li>
                <   Link href="/admin/songs" aria-label="Admin Songs" onClick={handleToggle}>Songs</Link>
                </li>
            </ul>
            <div className={styles.signOutWrapper}>
                <button type="submit" className={styles.styledButton} onClick={() => signOut()}>Sign Out</button>
            </div>
      </div>
    )
}

export default SideNav;
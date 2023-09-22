"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

const Scroll: React.FC = () => {
	const pathname = usePathname();
	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
    
    return null;
};

export default Scroll;
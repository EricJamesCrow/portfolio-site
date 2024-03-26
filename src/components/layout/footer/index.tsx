"use client";
import { PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';
import { usePathname } from 'next/navigation'

const Footer: React.FC = () => {
    const pathname = usePathname()

    if (pathname.startsWith('/admin')) {
        return null;
    }
    
    return (
        <div className="relative bg-custom-color text-white w-full min-h-36 flex flex-col items-center py-12">
            <div className="flex gap-3 mb-4">
                <a href="https://www.linkedin.com/in/ericcrow/" aria-label="Open Eric Crow's LinkedIn in a new window" target="_blank">
                    <PiLinkedinLogo size={40} className="hover:cursor-pointer"/>
                </a>                
                <a href="https://github.com/EricJamesCrow" aria-label="Open Eric Crow's Github in a new window" target="_blank">
                    <PiGithubLogo size={40} className="hover:cursor-pointer"/>
                </a>
            </div>
            <p>© 2024 CrowDevelopment, LLC</p>
        </div>
    )
}

export default Footer;
import { PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';

const Footer: React.FC = () => {
    return (
        <div className="relative bg-custom-color text-white w-full min-h-36 flex flex-col items-center py-12">
            <div className="flex gap-3 mb-4">
                <a href="https://www.linkedin.com/in/ericcrow/" target="_blank">
                    <PiLinkedinLogo size={40} className="hover:cursor-pointer"/>
                </a>                
                <a href="https://github.com/EricJamesCrow" target="_blank">
                    <PiGithubLogo size={40} className="hover:cursor-pointer"/>
                </a>
            </div>
            <p>© 2023 CrowDevelopment, LLC</p>
        </div>
    )
}

export default Footer;
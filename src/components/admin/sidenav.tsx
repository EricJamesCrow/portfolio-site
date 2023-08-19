import localFont from 'next/font/local'
import Button from '@/components/admin/button'
import Link from 'next/link'

import { GoHome } from 'react-icons/go'
import { FaGithub } from 'react-icons/fa';
import { BsActivity } from 'react-icons/bs';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { FiGlobe } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';

const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' })

const SideNav: React.FC = () => {
    return (
        <div className="hidden lg:block w-72 bg-[#262626] h-screen pl-4 relative">
            <h1 className={`${railwayThin.className} text-white font-thin text-[36px] leading-tight my-4`}>Crow Development</h1>
            <div className="flex flex-col items-start justify-center mt-10 w-80 text-white font-bold">
                <div>
                    <h2 className="ml-3">MAIN MENU</h2>
                    <div className="mt-3">
                        <Link href="/admin" aria-label="Dashboard">
                            <Button
                            text={'Dashboard'}
                            IconComponent={GoHome}
                            />
                        </Link>
                        <Link href="/admin/projects" aria-label="Projects">
                            <Button
                            text={'Projects'}
                            IconComponent={FaGithub}
                            />
                        </Link>
                    </div>
                </div>
                <div className="mt-20">
                    <h2 className="ml-3">ANALYTICS</h2>
                    <div className="mt-3">
                        <Button
                        text={'Real Time Data'}
                        IconComponent={BsActivity}
                        />
                        <Button
                        text={'Page Views'}
                        IconComponent={BsFileEarmarkCode}
                        />
                        <Button
                        text={'Traffic Sources'}
                        IconComponent={FiGlobe}
                        />
                    </div>
                </div>
                <div className="absolute bottom-4">
                    <Button
                    text={'Settings'}
                    IconComponent={FiSettings}
                    />
                    <Button
                    text={'Logout'}
                    IconComponent={MdOutlineLogout}
                    />
                </div>
            </div>
        </div>
    )
}

export default SideNav;
import { type NextPage } from "next";
import { Metadata } from 'next'
import Image from 'next/image';
import localFont from 'next/font/local';
import { topTechnologies as technologies } from '@/lib/tech';
import EricCrow from '../../../public/EricCrow.webp';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

export const metadata: Metadata = {
    title: 'About | CrowDevelopment, LLC',
    description: 'About CrowDevelopment, LLC.',
  }

const About: NextPage = () => {
    return (
        <div className="pb-12 min-h-[70vh] dark text-foreground max-w-[1800px] mx-auto">
            <h1 className={`${railwayThin.className} mt-8 text-center font-thin text-white text-5xl lg:text-left lg:ml-20 lg:text-7xl`}>About</h1>
            <div className="text-white font-light flex flex-col sm:m-12 mt-12 xl:mx-20">
                <div className='xl:flex'>
                    <Image
                        src={EricCrow}
                        alt="Image of Eric Crow"
                        placeholder="blur"
                        width={300}
                        height={300}
                        className="rounded mx-auto lg:h-[30vw] lg:w-[30vw] max-w-[520px] max-h-[520px]"
                    />
                    <div className="m-4 mt-8 xl:mt-0 xl:mx-20">
                        <div>
                            <h2 className="font-thin text-2xl mb-2 lg:text-3xl lg:mb-4">About Me</h2>
                            <p className="lg:text-xl">My name is Eric Crow and I&apos;m a Computer Science student at Western Governors University, set to graduate this fall. Over my academic journey, I have developed a strong interest in web development, particularly with React. This has led to hands-on projects, including a full-stack web application for Mantra Seeds. Such experiences have significantly improved my skills in React. As I approach graduation, I&apos;m not only looking forward to a professional web development role but also actively offering services for freelance web projects, keen to help businesses establish a robust online presence.</p>
                        </div>
                        <div className="mt-8">
                            <h2 className="font-thin text-2xl mb-2 lg:text-3xl lg:mb-4">Education</h2>
                            <p className="lg:text-xl">Western Governors University</p>
                            <p className="font-semibold lg:text-xl">Bachelor of Science in Computer Science</p>
                            <p className="italic lg:text-xl">Expected Graduation: April 2024</p>
                        </div>
                    </div>
                </div>
                <div className="m-4 xl:mt-20">
                    <h2 className="font-thin text-2xl mb-2 lg:text-3xl lg:mb-4l">Skills</h2>
                    <div className="mt-6 lg:mt-12 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 items-center gap-12 md:gap-20">
                        {technologies.map((tech) => (
                                <div key={tech.id} className="mx-auto">
                                    <Image 
                                    width={100}
                                    height={100}
                                    src={tech.image} 
                                    alt={`${tech.name} logo`} />
                                </div>
                        ))}    
                    </div>
                </div>
                <div className="m-4 mb-0 xl:mt-20">
                    <h2 className="font-thin text-2xl mb-2 lg:text-3xl lg:mb-4l">Certifications</h2>
                    <div className="mt-6 lg:mt-12 grid grid-cols-1 grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-20 items-center">
                        <Image
                            src="/CompTIA_A_plus.png"
                            alt="CompTIA A+ Certification Badge"
                            width={200}
                            height={200}
                            className="lg:w-[250px] lg:h-[250px] mx-auto"
                        />
                        <Image
                            src="/CompTIA_Network_plus.png"
                            alt="CompTIA Network+ Certification Badge"
                            width={200}
                            height={200}
                            className="lg:w-[250px] lg:h-[250px] mx-auto"
                        />
                        <Image
                            src="/CompTIA_Cert_Badges_Specialist.png"
                            alt="CompTIA CIOS Certification Badge"
                            width={200}
                            height={200}
                            className="lg:w-[250px] lg:h-[250px] mx-auto"
                        />
                        <Image
                            src="/ITILv4.png"
                            alt="ITILv4 Certification Badge"
                            width={200}
                            height={200}
                            className="lg:w-[250px] lg:h-[250px] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
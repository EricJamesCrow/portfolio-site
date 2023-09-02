import Image from 'next/image';
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

const About: React.FC = () => {
    return (
        <div className="pb-12 min-h-[70vh] dark text-foreground">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>About</h1>
            <div className="text-white flex flex-col lg:mx-10">
                <div className='lg:flex mt-8'>
                    <Image
                        src="/EricCrow.png"
                        alt="About"
                        width={300}
                        height={300}
                        className="rounded mx-auto lg:h-[550px] lg:w-[550px]"
                    />
                    <div className="m-4 mt-8 lg:mt-0 lg:mx-20">
                        <h2 className="font-semibold text-3xl mb-2 lg:text-4xl lg:mb-4">About Me</h2>
                        <p className="lg:text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
                <div className="m-4 lg:mt-20">
                    <h2 className="font-semibold text-3xl mb-2 lg:text-4xl lg:mb-4">Education</h2>
                    <p className="lg:text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                </div>
                <div className="m-4 lg:mt-20">
                    <h2 className="font-semibold text-3xl mb-2 lg:text-4xl lg:mb-4l">Certifications</h2>
                    <div className="mt-6 lg:mt-12 grid grid-cols-1 grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-20 items-center">
                        <Image
                            src="/CompTIA_A_plus.png"
                            alt="CompTIA A+ Certification"
                            width={200}
                            height={200}
                            className="lg:w-[300px] lg:h-[300px] mx-auto"
                        />
                        <Image
                            src="/CompTIA_Network_plus.png"
                            alt="CompTIA Network+ Certification"
                            width={200}
                            height={200}
                            className="lg:w-[300px] lg:h-[300px] mx-auto"
                        />
                        <Image
                            src="/CompTIA_Cert_Badges_Specialist.png"
                            alt="CompTIA CIOS Certification"
                            width={200}
                            height={200}
                            className="lg:w-[300px] lg:h-[300px] mx-auto"
                        />
                        <Image
                            src="/ITILv4.png"
                            alt="ITILv4 Certification"
                            width={200}
                            height={200}
                            className="lg:w-[300px] lg:h-[300px] mx-auto"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
};

export default About;
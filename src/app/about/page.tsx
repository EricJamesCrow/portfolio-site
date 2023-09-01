import Image from 'next/image';
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

const About: React.FC = () => {
    return (
        <div className="pb-12 min-h-[70vh] dark text-foreground">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>About</h1>
            <div className="mt-6 text-white flex flex-col">
                <Image
                    src="/EricCrow.png"
                    alt="About"
                    width={300}
                    height={300}
                    className="rounded mx-auto"
                />
                <div className="m-4 mt-8">
                    <h2 className="font-semibold text-3xl mb-2">About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                </div>
                <div className="m-4">
                    <h2 className="font-semibold text-3xl mb-2">Education</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                </div>
                <div className="m-4">
                    <h2 className="font-semibold text-3xl mb-2">Certifications</h2>
                    <div className="mt-4 flex flex-col gap-6 items-center">
                        <Image
                            src="/CompTIA_A_plus.png"
                            alt="CompTIA A+ Certification"
                            width={200}
                            height={200}
                        />
                        <Image
                            src="/CompTIA_Network_plus.png"
                            alt="CompTIA Network+ Certification"
                            width={200}
                            height={200}
                        />
                        <Image
                            src="/CompTIA_Cert_Badges_Specialist.png"
                            alt="CompTIA CIOS Certification"
                            width={200}
                            height={200}
                        />
                        <Image
                            src="/ITILv4.png"
                            alt="ITILv4 Certification"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default About;
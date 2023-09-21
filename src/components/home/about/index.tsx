import localFont from 'next/font/local'
import Link from 'next/link'
import Image from 'next/image'

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const About: React.FC = () => {
    return (
        <div className="relative bg-[#242424]">
            <div className="px-8 py-8 text-white lg:px-20 max-w-[1800px] mx-auto">
                <div className={`${railwayThin.className} font-light flex items-center justify-between mb-6`}>
                    <h2 className="text-3xl leading-tight bg-gradient-custom lg:text-6xl">
                    About
                    </h2>
                    <Link
                    href="/about"
                    className="lg:text-2xl underline hover:text-gray-300 transition duration-75"
                    >
                    View About
                    </Link>
                </div>
                <div className="lg:mt-12 flex flex-col md:flex-row gap-6">
                    <Image
                    src="/EricCrow.webp"
                    alt="Image of Eric Crow"
                    width={200}
                    height={200}
                    className="rounded mx-auto lg:h-[300px] lg:w-[300px]"
                    />
                    <p className="font-light text-sm md:mx-8 lg:text-lg xl:mx-20 xl:mr-40">My name is Eric Crow and I&apos;m a Computer Science student at Western Governors University, set to graduate this fall. Over my academic journey, I have developed a strong interest in web development, particularly with React. As I approach graduation, I&apos;m not only looking forward to a professional web development role but also actively offering services for freelance web projects, keen to help businesses establish a robust online&nbsp;presence.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
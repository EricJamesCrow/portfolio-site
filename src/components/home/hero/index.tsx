import Link from 'next/link'
import localFont from 'next/font/local'

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const Hero: React.FC = () => {
    return (
        <div className="bg-custom-color h-[90vh] max-w-[1800px] mx-auto">
            <div className="relative z-10 mx-8 mt-6 text-white lg:mx-20 lg:mt-6">
                <h1 className={`${railwayThin.className} font-light text-[52px] leading-tight bg-gradient-custom lg:text-8xl`}>
                <span className="block lg:inline-block">Crow</span>Development
                </h1>
                <h2 className={`text-2xl mt-4 mb-8 font-thin lg:text-4xl`}>Custom-built web applications for your business</h2>
                <Link aria-label="Request a quote" href="/contact">
                    <button className="h-11 
                    w-full 
                    rounded-md 
                    border 
                    border-white 
                    bg-custom-color 
                    text-[16px] 
                    hover:bg-gray-700 
                    transition-colors 
                    duration-200 
                    cursor-pointer
                    max-w-[350px]
                    lg:text-[20px]
                    lg:h-[60px]
                    ">Request a quote</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;

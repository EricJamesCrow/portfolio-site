import localFont from 'next/font/local'

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const Hero: React.FC = () => {
    return (
        <div className="bg-custom-color h-[90vh]">
            <div className="relative z-10 mx-8 mt-6 text-white lg:mx-16 lg:mt-6">
                <h1 className={`${railwayThin.className} font-light text-[52px] bg-gradient-custom lg:text-[96px]`}>
                <span className="block lg:inline-block">Crow</span>Development
                </h1>
                <h2 className={`text-[24px] mb-8 font-thin lg:text-[36px]`}>Custom-built web applications for your business</h2>
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
            </div>
        </div>
    )
}

export default Hero;

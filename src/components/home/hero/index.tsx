import styles from './hero.module.css';
import Ripple from '@/components/ripple';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-custom-color h-[100vh]">
            <div className="absolute inset-0 z-0">
                <Ripple/>
            </div>
            <div className="relative z-10 mx-8 mt-6 text-white lg:mx-16 lg:mt-12">
                <h1 className={`${styles.textGradient} font-semibold text-[48px] bg-gradient-custom mb-4 lg:text-[96px]`}>Crow Development</h1>
                <h2 className={`text-[24px] mb-2 lg:text-[48px] max-w-[676px]`}>Innovative web solutions for your business</h2>
                <h3 className={`font-light text-[18px] mb-6 max-w-[600px] lg:text-[32px]`}>We design and build stunning, user-friendly websites that help your business grow</h3>
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
                max-w-[400px]
                lg:text-[24px]
                lg:h-[70px]
                ">Request a quote</button>
            </div>
        </div>
    )
}

export default Hero;

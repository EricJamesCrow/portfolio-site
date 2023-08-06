import styles from './hero.module.css';
import Ripple from '@/components/ripple';
import localFont from 'next/font/local'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
  })
  

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const Hero: React.FC = () => {
    return (
        <div className="relative bg-custom-color h-[100vh]">
            <div className="absolute inset-0 z-0">
                <Ripple/>
            </div>
            <div className="relative z-10 mx-8 mt-6 text-white lg:mx-16 lg:mt-6">
                <h1 className={`${styles.textGradient} ${quicksand.className} font-light text-[48px] bg-gradient-custom lg:text-[96px]`}>CrowDevelopment</h1>
                <h2 className={`text-[24px] mb-4 font-thin lg:text-[42px] max-w-[645px]`}>Custom-built web applications for your business</h2>
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

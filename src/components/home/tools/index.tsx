"use client";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { topTechnologies as technologies } from '@/lib/tech';

const autoplayOptions = {
    delay: 2000,
    direction: 'forward'
  }

const Tools: React.FC = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

    return (
    <div ref={emblaRef} className="embla relative z-20 h-[264px] bg-tools-color flex justify-center pointer-events-none">
        <div className="flex space-x-5 w-full">
            {technologies.map((tech) => (
                <div key={tech.id} className="relative flex-none w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center justify-center">
                    <Image 
                    width={125}
                    height={125}
                    src={tech.image} 
                    alt={tech.name} />
                </div>
            ))}          
        </div>
    </div>
    )
}

export default Tools;

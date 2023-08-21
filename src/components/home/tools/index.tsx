"use client";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// images
import React from '../../../../public/react.svg';
import Redux from '../../../../public/redux.svg';
import Next from '../../../../public/nextjs.svg';
import AWS from '../../../../public/aws.svg';
import Vercel from '../../../../public/vercel.svg';
import TypeScript from '../../../../public/typescript.svg';
import JavaScript from '../../../../public/javascript.svg';

const autoplayOptions = {
    delay: 2000,
    direction: 'forward'
  }

const tools = [
    {
        id: 1,
        name: 'React',
        image: React,
    },
    {
        id: 2,
        name: 'Redux',
        image: Redux,
    },
    {
        id: 3,
        name: 'NextJS',
        image: Next,
    },
    {
        id: 4,
        name: 'AWS',
        image: AWS,
    },
    {
        id: 5,
        name: 'Vercel',
        image: Vercel,
    },
    {
        id: 6,
        name: 'TypeScript',
        image: TypeScript,
    },
    {
        id: 7,
        name: 'JavaScript',
        image: JavaScript,
    },
]

const Tools: React.FC = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);


    return (
    <div ref={emblaRef} className="embla relative z-20 h-[264px] bg-tools-color flex justify-center pointer-events-none">
        <div className="flex space-x-5 w-full">
            {tools.map((tool) => (
                <div key={tool.id} className="relative flex-none w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex items-center justify-center">
                    <Image 
                    width={125}
                    height={125}
                    src={tool.image} 
                    alt={tool.name} />
                </div>
            ))}          
        </div>
    </div>
    )
}

export default Tools;

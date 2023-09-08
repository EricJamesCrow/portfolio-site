"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
    title: string;
    description: string;
    left?: boolean;
    image: string;
}

const Card: React.FC<Props> = ({ title, description, left = true, image}) => {
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.95 }
        }}
        className={`flex items-start gap-4 max-w-[750px] ${!left && 'ml-auto'}`}>
            {left && 
            <>
            <Image
                src={image}
                alt={`${title} Image`}
                width={100}
                height={100}
                className={`${title !== 'UI/UX Design' ? 'md:h-32 md:w-32' : null} lg:w-48 lg:h-48 ${title === 'Hosting' ? 'lg:w-[208px] lg:h-[120.89px]' : null}`}
                />
            <div className="text-white lg:ml-4">
                <h2 className='font-thin text-xl md:text-2xl mb-1 lg:text-3xl'>{title}</h2>
                <p className="font-light text-sm md:text-lg lg:text-xl lg:mt-4">{description}</p>
            </div>
            </>}
            {!left &&
            <>
            <div className="text-white lg:mr-4">
                <h2 className='font-thin text-xl md:text-2xl mb-1 lg:text-3xl'>{title}</h2>
                <p className="font-light text-sm md:text-lg lg:text-xl lg:mt-4">{description}</p>
                </div>
            <Image
                src={image}
                alt={`${title} Image`}
                width={100}
                height={100}
                className="md:h-32 md:w-32 lg:w-48 lg:h-48"
                />
            </>}
        </motion.div>
    )
}

export default Card;
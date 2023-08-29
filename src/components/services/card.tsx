"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
    title: string;
    description: string;
    left: boolean;
    image: string;
}

const Card: React.FC<Props> = ({ title, description, left, image}) => {
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
        className={`flex gap-4 max-w-[750px] ${!left && 'ml-auto'}`}>
            {left && 
            <>
            <Image
                src={image}
                alt={`${title} Image`}
                width={125}
                height={125}
                className="lg:w-52 lg:h-52"
                />
            <div className="text-white">
                <h2 className='font-semibold text-2xl mb-1 lg:text-4xl'>{title}</h2>
                <p className="lg:text-2xl">{description}</p>
            </div>
            </>}
            {!left &&
            <>
            <div className="text-white">
                <h2 className='font-semibold text-2xl mb-1 lg:text-4xl'>{title}</h2>
                <p className="lg:text-2xl">{description}</p>
                </div>
            <Image
                src={image}
                alt={`${title} Image`}
                width={125}
                height={125}
                className="lg:w-52 lg:h-52"
                />
            </>}
        </motion.div>
    )
}

export default Card;
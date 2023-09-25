"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactCard: React.FC = () => {
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
        className="px-8 text-white lg:px-20 flex flex-col items-center">
                <p className="text-center lg:text-2xl mt-12">Available for full-time roles and select freelance projects.</p>
                <Link href="/contact"
                className="mt-8 h-11 
                w-full 
                rounded-md 
                border 
                border-white 
                bg-custom-color 
                hover:bg-gray-700 
                transition-colors 
                duration-200 
                cursor-pointer
                text-center
                max-w-[300px]
                lg:text-[20px]
                lg:h-[60px]
                flex items-center justify-center
                "
                >Contact Me
                </Link>
            </motion.div>
    )
};

export default ContactCard;
"use client";
import { motion } from "framer-motion"

// images
import Testimonial from "./Testimonial";

const variants = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            delayChildren: 0.4,
         },
    },
}

const images = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
}

const Testimonials: React.FC = () => {
    return (
        <div className="relative bg-custom-color min-h-[264px] p-12">
            <motion.div 
            variants={variants}
            initial="hidden"
            whileInView="show"
            className="font-light flex-col flex md:flex-row justify-between gap-6 md:gap-12"
            >
                <Testimonial variants={images}/>
                <Testimonial variants={images}/>
                <Testimonial variants={images}/>
            </motion.div>
        </div>
    )
}

export default Testimonials;
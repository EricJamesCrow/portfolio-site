import { motion, Variants } from "framer-motion";
import { Avatar } from "@nextui-org/react";

interface TestimonialProps {
    variants: Variants;
}

const Testimonial: React.FC<TestimonialProps> = ({ variants }) => {
    return (
        <motion.div
        variants={variants}
        className="p-6 rounded-lg bg-[#262626] text-white justify-center"
        >
            <div className="lg:text-[24px] xl:text-[32px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.”
            </div>
            <div className="flex justify-between items-center italic mt-6 mx-3 text-[12px] lg:text-[16px] xl:text-[24px]">
                <Avatar 
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
                className="w-12 h-12 lg:w-14 lg:h-14 xl:w-18 xl:h-18 rounded-full"
                alt="Avatar"
                />
                <div>Satisfied Customer</div>
            </div>
        </motion.div>
    )
}

export default Testimonial;
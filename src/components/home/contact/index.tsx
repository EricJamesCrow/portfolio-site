import Link from 'next/link'

const Contact: React.FC = () => {
    return (
        <div className="relative bg-[#1F1F1F]">
            <div className="px-8 py-8 text-white lg:px-20 flex flex-col items-center">
                <p className="text-center lg:text-2xl mt-12">Available for full-time roles and select freelance projects.</p>
                <Link href="/contact"
                className="mt-8 lg:mt-20 h-11 
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
                mb-20
                "
                scroll={true}
                >Contact Me
                </Link>
            </div>
        </div>
    )
};

export default Contact;
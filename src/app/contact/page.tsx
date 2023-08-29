"use client";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

const Contact: React.FC = () => {
    return (
        <div className="pb-12 min-h-[70vh] dark text-foreground">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>Contact</h1>
            <form className="mx-auto m-4 px-10 flex flex-col gap-4 text-white max-w-[700px] items-center lg:mt-8">
                <Input 
                isRequired
                type="name" 
                label="Name" 
                variant="underlined"
                placeholder="Enter your name"
                />
                <Input isRequired type="email" label="Email" variant="underlined" placeholder="Enter your email" />
                <Input isRequired type="subject" label="Subject" variant="underlined" placeholder="Enter your subject" />
                <Textarea
                isRequired
                label="Description"
                variant="underlined"
                placeholder="Enter your description"
                />
                <button type="submit" className="bg-white text-black font-semibold text-sm h-9 rounded mt-2 hover:bg-gray-300 transition-all duration-200 w-full max-w-[320px]">Send Email</button>
            </form>
        </div>
    )
}

export default Contact;
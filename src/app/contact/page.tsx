"use client";
import {Input} from "@nextui-org/react";
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

const Contact: React.FC = () => {
    return (
        <div className="pb-12 min-h-[91.9vh]">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>Contact</h1>
            <div className="m-4 mx-10 flex flex-col gap-4 text-white">
                <Input type="name" variant="underlined" label="Name" placeholder="Enter your name" />
                <Input type="email" variant="underlined" label="Email" placeholder="Enter your email" />
                <Input type="subject" variant="underlined" label="Subject" placeholder="Enter your subject" />
            </div>
        </div>
    )
}

export default Contact;
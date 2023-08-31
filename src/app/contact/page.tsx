"use client";
import { useState } from "react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

// button loader
import { Loader2 } from "lucide-react"

// hooks
import { useContact } from '@/hooks/useContact';
import { useCustomToast } from "@/hooks/useCustomToast";

const Contact: React.FC = () => {
    const { contact } = useContact();
    const { showSuccessToast, showDestructiveToast } = useCustomToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const resetForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if(name === '' || email === '' || subject === '' || message === '') {
            showDestructiveToast('Please fill out all fields.');
            setLoading(false);
            return;
        }

        const res = await contact(name, email, subject, message);
        if(res !== null) {
            resetForm();
            showSuccessToast('Message sent successfully!');
        } else {
            showDestructiveToast('Error sending message.');
        }
        setLoading(false);
    }

    return (
        <div className="pb-12 min-h-[70vh] dark text-foreground">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>Contact</h1>
            <form onSubmit={handleSubmit} className="mx-auto m-4 px-10 flex flex-col gap-4 text-white max-w-[700px] items-center lg:mt-8">
                <Input 
                isRequired
                type="name" 
                label="Name" 
                variant="underlined"
                placeholder="Enter your name"
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <Input 
                isRequired 
                type="email" 
                label="Email" 
                variant="underlined" 
                placeholder="Enter your email" 
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                isRequired 
                type="subject" 
                label="Subject" 
                variant="underlined" 
                placeholder="Enter your subject" 
                disabled={loading}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                isRequired
                label="Message"
                variant="underlined"
                placeholder="Enter your message"
                disabled={loading}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button disabled={loading} type="submit" className="bg-white text-black font-semibold text-sm h-9 rounded mt-2 hover:bg-gray-300 transition-all duration-200 w-full max-w-[320px] flex justify-center items-center">
                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : 'Send Email'}
                    </button>
            </form>
        </div>
    )
}

export default Contact;
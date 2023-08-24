"use client";
import { signIn } from "next-auth/react";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

interface IProps {
    searchParams?: { [key: string]: string | string[] | undefined }
}

const LoginPage = ({searchParams}: IProps) => {  
    const router = useRouter();
    const userName = useRef("");
    const password = useRef("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(searchParams?.message)

    useEffect(() => {
        if(searchParams?.message) {
            setError(searchParams.message)
        }
    }, [searchParams])


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!userName.current || !password.current) {
            setError("Please fill in all fields")
            return;
        }
        setLoading(true);
        const result = await signIn("credentials", {
            username: userName.current,
            password: password.current,
            redirect: false
        });
        if(result?.error) {
            setError(result.error)
        } else {
            router.push('/admin');
        }
        return setLoading(false);
    };

    return (
        <div className="bg-custom-color min-h-[70vh] flex flex-col items-center">
            <form onSubmit={onSubmit} className="mt-24 text-white font-medium text-xl w-72 flex flex-col items-center">
                <div className="mt-6 flex flex-col w-full">
                    <label htmlFor="userName">Username</label>
                    <input className="mt-2 w-full px-2.5 py-1.5 text-base leading-6 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" type="text" id="userName" onChange={(e) => (userName.current = e.target.value)} />
                </div>
                <div className="mt-6 flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input className="mt-2 w-full px-2.5 py-1.5 text-base leading-6 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" type="password" id="password" onChange={(e) => (password.current = e.target.value)} />
                </div>
                <button type="submit" disabled={loading} className="mt-8 bg-gray-700 rounded font-bold text-sm text-white w-[85%] h-10 border-none transition-colors duration-150 hover:bg-gray-600 focus:ring-2 focus:ring-blue-200">{loading ? <div className="border-t-2 border-transparent w-7 h-7 border-l-blue-500 rounded-full animate-spin m-auto"></div> : "Login"}</button>
            </form>
            {error && <p className="mt-4 text-red-500 font-medium text-lg">{error}</p>}
        </div>

    );
    }

export default LoginPage;
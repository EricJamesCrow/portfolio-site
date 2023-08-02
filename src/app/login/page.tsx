"use client";
import { signIn } from "next-auth/react";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

// styles
import styles from "./login.module.css";


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
        <div className={styles.background}>
        <form onSubmit={onSubmit} className={styles.loginContainer}> 
            <div className={styles.inputContainer}>
                <label htmlFor="userName">Username</label>
                <input className={styles.inputChakra} type="text" id="userName" onChange={(e) => (userName.current = e.target.value)} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input className={styles.inputChakra} type="password" id="password" onChange={(e) => (password.current = e.target.value)} />
            </div>
            <button type="submit" disabled={loading} className={styles.styledButton}>{loading ? <div className={styles.spinner}></div> : "Login"}</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        </div>
    );
    }

export default LoginPage;
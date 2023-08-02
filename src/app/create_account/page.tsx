"use client";
import React, { useRef, useState } from "react";

// styles
import styles from "./signup.module.css";

const SignUpPage = () => {  
    const email = useRef("");
    const userName = useRef("");
    const password = useRef("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if(!email.current || !userName.current || !password.current) {
            setError("Please fill in all fields")
            return;
        }
        setLoading(true);
        const res = await fetch('/api/user', {
            method: "POST",
            body: JSON.stringify({
              email: email.current,
              username: userName.current,
              password: password.current
            }),
            headers: { "Content-Type": "application/json" }
          })

        if (res.ok) {
            setSuccess("Account created! Awaiting admin review for dashboard access.")
        } else {
            setError("Email or username already in use.");
        }
        return setLoading(false);
    };

    return (
        <div className={styles.background}>
        <h1>Create Your Account</h1>
        <form onSubmit={onSubmit} className={styles.loginContainer}> 
            <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input className={styles.inputChakra} type="text" id="email" onChange={(e) => (email.current = e.target.value)} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="userName">Username</label>
                <input className={styles.inputChakra} type="text" id="userName" onChange={(e) => (userName.current = e.target.value)} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input className={styles.inputChakra} type="password" id="password" onChange={(e) => (password.current = e.target.value)} />
            </div>
            <button type="submit" disabled={loading} className={styles.styledButton}>{loading ? <div className={styles.spinner}></div> : "Create Account"}</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        </div>
    );
    }

export default SignUpPage;
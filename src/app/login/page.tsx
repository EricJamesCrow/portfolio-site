import { type NextPage } from "next";
import { Metadata } from 'next';
import LoginPage from "@/components/login/page";

export const metadata: Metadata = {
    title: 'Login | CrowDevelopment, LLC',
    description: 'Login to CrowDevelopment, LLC to access your dashboard.',
  }
  
const Login: NextPage = () => {  
    return (
        <LoginPage/>   
    );
}

export default Login;
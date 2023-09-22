import { type NextPage } from "next";
import { Metadata } from 'next';
import ContactPage from "@/components/contact/page";


export const metadata: Metadata = {
    title: 'Contact | CrowDevelopment, LLC',
    description: 'Contact CrowDevelopment, LLC for a free consultation on your next project.',
  }

const Contact: NextPage = () => {
    return (
        <ContactPage/>
    )
}

export default Contact;
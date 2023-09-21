import { type NextPage } from "next";
import { Metadata } from 'next'
import { services } from '@/lib/services';
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

// components
import Card from '@/components/services/card';

// util
import ScrollUp from "@/utils/ScrollUp";

export const metadata: Metadata = {
    title: 'Services | CrowDevelopment, LLC',
    description: 'Offering comprehensive web solutions: UI/UX Design, Web Development, Hosting, SEO, and Accessibility. Ensuring optimized performance, security, and user engagement for every project.',
  }

const Services: NextPage = () => {
    return (
        <>
        <div className="bg-custom-color pb-12 min-h-[90vh] max-w-[1800px] mx-auto">
            <h1 className={`${railwayThin.className} mt-8 text-center font-thin text-white text-5xl lg:text-left lg:ml-20 lg:text-7xl`}>Services</h1>
            <div className="m-4 mt-12 sm:m-12 flex flex-col gap-20 lg:m-20">
                {services.map((service) => (
                    <Card
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    left={service.left}
                    image={service.image}
                    />))}
            </div>
        </div>
        <ScrollUp/>
        </>
    )
}

export default Services;
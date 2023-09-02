import Figma from '@/public/figma.svg';
import NextJS from '@/public/nextjs.svg';
import AWS from '@/public/aws.svg';
import SEO from '@/public/seo.svg';
import Accessiblity from '@/public/accessibility.svg';

export const services = [
    {
        id: 1,
        title: 'UI/UX Design',
        description: 'Design aspects prioritize user experience and interaction, facilitating easy navigation, effective communication, and optimal website performance.',
        left: true,
        image: Figma,
    },
    {
        id: 2,
        title: 'Web Development',
        description: "Dynamic, responsive websites built using the latest technologies. Each site offers excellent performance, security, and a user-centric approach to make an online presence truly stand out.",
        left: false,
        image: NextJS,
    },
    {
        id: 3,
        title: 'Hosting',
        description: "Secure hosting with consistent uptime using leading cloud platforms to ensure both availability and reliability.",
        left: true,
        image: AWS,
    },
    {
        id: 4,
        title: 'SEO',
        description: "Focused strategies to enhance website rankings on major search engines in order to drive organic traffic and boost user engagement.",
        left: false,
        image: SEO,
    },
    {
        id: 5,
        title: 'Accessibility',
        description: "Committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.",
        left: true,
        image: Accessiblity,
    }
]

import MantraSeeds from '../../public/MantraSeeds.webp'
import CrowDevelopment from '../../public/CrowDevelopment.webp'
import BookMe from '../../public/book_me.webp'
// import ProteoMutics from '../../public/ProteoMutics.webp'

export const projects = [
    {
        id: 76,
        name: 'BookMe',
        description: "BookMe is a SaaS scheduling application in development that is built with NextJS, TypeScript, TailwindCSS, and Prisma. It is currently integrated with Google Calendar, with plans to add Zoom, Teams, and Stripe for payment processing.",
        url: 'https://book-me-omega.vercel.app/signup',
        tech: ["NextJS", "TailwindCSS", "Prisma", "TypeScript"],
        image: BookMe,
        type: "Work",
        createdAt: "2024-01-11T04:52:59.997Z",
    },
    {
        id: 69,
        name: 'Mantra Seeds',
        description: 'An e-commerce web application built from scratch with the MERN stack, deployed using AWS. Features field level encryption of personally identifiable information, integration with various third-party payment APIs, as well as a content management system for user and product management. ',
        url: 'https://mantra-seeds.com/',
        tech: ["React", "Redux", "NodeJS", "Express", "AWS", "MongoDB"],
        image: MantraSeeds,
        type: "Work",
        createdAt: "2023-09-03T23:02:49.510Z",
    },
    {
        id: 74,
        name: 'CrowDevelopment',
        description: 'Portfolio website created with NextJS, TailwindCSS, Next-Auth, and Prisma. Deployed with Vercel using a Postgres database.',
        url: 'https://www.crowdevelopment.io/',
        tech: ["NextJS", "Prisma", "TailwindCSS", "TypeScript"],
        image: CrowDevelopment,
        type: "Personal",
        createdAt: "2023-09-04T19:39:22.564Z",
    },
    // {
    //     id: 68,
    //     name: 'ProteoMutics',
    //     description: 'A bioinformatics program that plots patterns between mutations and nucleosomes.',
    //     url: 'https://github.com/EricJamesCrow/ProteoMutics',
    //     tech: ["React", "Redux", "Electron"],
    //     image: ProteoMutics,
    //     type: "Work",
    //     createdAt: "2023-09-03T22:58:32.638Z",
    // }
]
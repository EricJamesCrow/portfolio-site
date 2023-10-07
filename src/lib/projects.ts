import MantraSeeds from '../../public/MantraSeeds.webp'
import CrowDevelopment from '../../public/CrowDevelopment.webp'
import ProteoMutics from '../../public/ProteoMutics.webp'

export const projects = [
    {
        id: 69,
        name: 'Mantra Seeds',
        description: 'An e-commerce web application built from scratch with the MERN stack, deployed using AWS. Features field level encryption of personally identifiable information, integration with various third-party payment APIs, as well as a content management system for user and product management. ',
        url: 'https://mantra-seeds.com/',
        tech: ["React", "Redux", "NodeJS", "Express", "AWS", "MongoDB"],
        image: MantraSeeds,
    },
    {
        id: 74,
        name: 'Crow Development',
        description: 'Portfolio website created with NextJS, TailwindCSS, Next-Auth, and Prisma. Deployed with Vercel using a Postgres database.',
        url: 'https://www.crowdevelopment.io/',
        tech: ["NextJS", "Prisma", "TailwindCSS", "TypeScript"],
        image: CrowDevelopment,
    },
    {
        id: 68,
        name: 'ProteoMutics',
        description: 'A bioinformatics program that plots patterns between mutations and nucleosomes.',
        url: 'https://github.com/EricJamesCrow/ProteoMutics',
        tech: ["React", "Redux", "Electron"],
        image: ProteoMutics,
    }
]


export const allProjects = [
    {
        id: 68,
        name: 'ProteoMutics',
        description: 'A bioinformatics program that plots patterns between mutations and nucleosomes.',
        url: 'https://github.com/EricJamesCrow/ProteoMutics',
        type: 'Work',
        tech: ["React", "Redux", "Electron"],
        image: ProteoMutics,
    },
    {
        id: 69,
        name: 'Mantra Seeds',
        description: 'An e-commerce web application built from scratch with the MERN stack, deployed using AWS. Features field level encryption of personally identifiable information, integration with various third-party payment APIs, as well as a content management system for user and product management. ',
        url: 'https://mantra-seeds.com/',
        type: 'Work',
        tech: ["React", "Redux", "NodeJS", "Express", "AWS", "MongoDB"],
        image: MantraSeeds,
    },
    {
        id: 70,
        name: 'Class Roster',
        description: 'A C++ application managing student rosters, demonstrating object-oriented programming and memory management.',
        url: 'A C++ application managing student rosters, demonstrating object-oriented programming and memory management.',
        type: 'Personal',
        tech: ["C++"],
        // image: ClassRoster,
    },

    {
        id: 74,
        name: 'Crow Development',
        description: 'Portfolio website created with NextJS, TailwindCSS, Next-Auth, and Prisma. Deployed with Vercel using a Postgres database.',
        url: 'https://www.crowdevelopment.io/',
        type: 'Personal',
        tech: ["NextJS", "Prisma", "TailwindCSS", "TypeScript"],
        image: CrowDevelopment,
    },
]
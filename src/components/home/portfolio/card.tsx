import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';
import { technologies } from '@/lib/tech';

interface Props {
    image?: string;
    name: string;
    description: string;
    tech: string[];
    url: string;
}

const Card: React.FC<Props> = ({ image, name, description, tech, url }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:gap-4">
            <a href={url} target="_blank" rel="noopener noreferrer" className="mb-2 relative lg:w-[60%] block hover:opacity-80 transition-opacity duration-300">
                <Image 
                    src={image as string} 
                    width={800}
                    height={400}
                    alt={`Image of ${name}`} 
                    className="rounded-sm ring-1 ring-slate-700" 
                />
                <div className="rounded-sm absolute top-0 left-0 w-full max-w-[800px] h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <GoLinkExternal className="text-white text-3xl" />
                </div>
            </a>
            <div className="lg:w-[60%] lg:px-8 max-w-[800px]">
                <h2 className="font-light text-2xl xl:text-3xl">{name}</h2>
                <p className="mt-2 text-sm font-light xl:text-lg">{description}</p>
                <div className="flex flex-wrap gap-4 my-4">
                    {technologies.map((t) => {
                        if (tech.map(t => t.toLowerCase()).includes(t.name.toLowerCase())) {
                            return (
                                <Image
                                key={t.id}
                                className="lg:w-8 lg:h-8"
                                width={25}
                                height={25}
                                src={t.image}
                                alt={t.name}
                                />
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="flex items-center mt-2">
                    <div className="flex-1 border-t-2 border-[#343434]"></div>
                    <a href={url} target="_blank">
                        <GoLinkExternal className="mx-2 text-xl" />
                    </a>
                    <div className="flex-1 border-t-2 border-[#343434]"></div>
                </div>
            </div>
        </div>
    )
}

export default Card;

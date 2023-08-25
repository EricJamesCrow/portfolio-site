import Image from 'next/image';
import { GoLinkExternal } from 'react-icons/go';
import { technologies } from '@/lib/tech';

interface Props {
    image?: string;
    name: string;
    description: string;
    tech: string[];
}

const Card: React.FC<Props> = ({ image, name, description, tech }) => {
    return (
        <div>
            <img src={image} alt={`Image of ${name}`} className="w-full max-h-[200px] mb-2" />
            <h2 className="font-light text-2xl">{name}</h2>
            <p className="mt-2 text-sm font-light">{description}</p>
            <div className="flex flex-wrap gap-4 my-4">
                {technologies.map((t) => {
                    if (tech.includes(t.name.toLowerCase())) {
                        return (
                            <Image
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
                <GoLinkExternal className="mx-2 text-xl" />
                <div className="flex-1 border-t-2 border-[#343434]"></div>
            </div>
        </div>
    )
}

export default Card;

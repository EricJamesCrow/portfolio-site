import localFont from 'next/font/local'
import Link from 'next/link'
import { services } from '@/lib/services';

// components
import Card from '@/components/home/services/card';

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const Services: React.FC = () => {
    return (
        <div className="relative bg-[#242424]">
            <div className="px-8 py-8 text-white lg:px-20 max-w-[1800px] mx-auto">
                <div className={`${railwayThin.className} font-light flex items-center justify-between mb-6`}>
                        <h2 className="text-3xl leading-tight bg-gradient-custom lg:text-6xl">
                        Services
                        </h2>
                        <Link
                        href="/services"
                        className="lg:text-2xl underline hover:text-gray-300 transition duration-75"
                        >
                        View All
                        </Link>
                </div>
                <div className="flex flex-col gap-16 lg:mt-12 mb-6">
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
        </div>
    )
}

export default Services;
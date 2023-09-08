import localFont from 'next/font/local'
import Link from 'next/link'

const railwayThin = localFont({ src: '../../../../public/fonts/Raleway-Thin.ttf' })

const Services: React.FC = () => {
    return (
        <div className="relative bg-[#242424]">
            <div className="px-8 py-8 text-white lg:px-20">
                <div className={`${railwayThin.className} font-light flex items-center justify-between`}>
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
            </div>
        </div>
    )
}

export default Services;
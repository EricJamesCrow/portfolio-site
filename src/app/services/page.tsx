import { services } from '@/lib/services';
import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

// components
import Card from '@/components/services/card';


const Services: React.FC = () => {
    return (
        <div className="bg-custom-color pb-12 min-h-[70vh]">
            <h1 className={`${railwayThin.className} mt-8 text-center font-thin text-white text-5xl lg:text-left lg:ml-20 lg:text-7xl`}>Services</h1>
            <div className=" m-4 sm:m-12 mt-12 flex flex-col gap-20 lg:m-20">
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
    )
}

export default Services;
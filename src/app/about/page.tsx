import localFont from 'next/font/local';
const railwayThin = localFont({ src: '../../../public/fonts/Raleway-Thin.ttf' });

const About: React.FC = () => {
    return (
        <div className="pb-12 min-h-[70vh] dark text-foreground">
            <h1 className={`${railwayThin.className} mt-4 text-center font-thin text-white text-5xl lg:text-left lg:ml-10 lg:text-7xl`}>About</h1>
        </div>
    )
};

export default About;
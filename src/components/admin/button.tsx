import { ComponentType } from 'react';

interface ButtonProps {
    text: string;
    IconComponent: ComponentType<React.SVGProps<SVGSVGElement>>; // This will allow you to pass a React component as a prop
    isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, IconComponent, isActive }) => {
    const isCenteredButton = text === 'Settings' || text === 'Logout';

    return (
        <button className={`flex items-center gap-2 transition p-1.5 mb-0.5 rounded-lg hover:bg-[#202020] w-60 ${isCenteredButton ? 'justify-center' : ''} ${isActive ? 'bg-[#202020]' : null}`}>
            <IconComponent className={`inline-block text-3xl ${isCenteredButton ? '' : 'ml-2 mr-3'}`} />
            <div>{text}</div>
        </button>
    )
}

export default Button;

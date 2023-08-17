import React, { ComponentType } from 'react';

interface CardProps {
    text: string;
    IconComponent: ComponentType<React.SVGProps<SVGSVGElement>>; // This will allow you to pass a React component as a prop
  }

const Card: React.FC<CardProps> = ({ text, IconComponent }) => {
    return (
        <div className="rounded-lg bg-white h-44 w-full flex items-start justify-between p-4 transition md:hover:scale-105 md:hover:cursor-pointer">
            <span className="text-base font-bold">{text}</span>
            <IconComponent className="text-3xl" />
        </div>
    )
}

export default Card;
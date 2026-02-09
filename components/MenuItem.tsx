import React from 'react';

interface MenuItemProps {
    name: string;
    description: string;
    price: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
    return (
        <div className="flex justify-between items-start gap-4 group hover:bg-white/50 p-4 rounded transition-colors">
            <div className="flex-1">
                <h3 className="font-serif text-xl text-diodona-green mb-2">{name}</h3>
                <p className="text-diodona-green/70 leading-relaxed">{description}</p>
            </div>
            <div className="font-serif text-xl text-diodona-green whitespace-nowrap">
                €{price}
            </div>
        </div>
    );
};

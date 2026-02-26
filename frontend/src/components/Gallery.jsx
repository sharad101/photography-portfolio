import React from 'react';
import travelImg from '../assets/images/travel.png';
import portraitImg from '../assets/images/portraits.png';
import designImg from '../assets/images/design.png';

const categories = [
    { id: 1, title: 'travel', image: travelImg },
    { id: 2, title: 'portraits', image: portraitImg },
    { id: 3, title: 'design', image: designImg },
];

const Gallery = () => {
    return (
        <div className="flex flex-col h-screen">
            {categories.map((cat) => (
                <div
                    key={cat.id}
                    className="relative flex-1 group cursor-pointer overflow-hidden border-b border-white/10"
                >
                    <img
                        src={cat.image}
                        alt={cat.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
                        <h2 className="text-2xl md:text-3xl font-light tracking-[0.4em] uppercase text-white drop-shadow-lg">
                            {cat.title}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;

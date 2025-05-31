'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-7 h-7 bg-orange-500 rounded-full mix-blend-difference transition-transform duration-50 ease-out"
            style={{
                transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
            }}
        />
    );
}

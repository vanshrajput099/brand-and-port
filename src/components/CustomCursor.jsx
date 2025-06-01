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
            className="hidden lg:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                willChange: 'transform',
            }}
        >
            <div
                className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </div>
        </div>
    );
}

'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [hoveringText, setHoveringText] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOver = (e) => {
            if (e.target.closest('.cursor-hover-target')) {
                setHovering(true);
            } else {
                setHovering(false);
            }

            if (e.target.closest('.cursor-hover-text')) {
                setHoveringText(true);
            } else {
                setHoveringText(false);
            }
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', mouseOver);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', mouseOver);
        };
    }, []);

    return (
        <div
            className="hidden lg:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference transition-transform ease-linear duration-75"
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                willChange: 'transform',
            }}
        >
            <div
                className={`rounded-full flex items-center justify-center transition-all duration-300 border 
                    ${hoveringText ? 'border-white bg-white' : hovering ? 'border-orange-500 bg-orange-500' : 'border-orange-500'}
                `}
                style={{
                    width: hovering ? 55 : 24,
                    height: hovering ? 55 : 24,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`rounded-full transition-all duration-300 
                        ${hoveringText ? 'bg-black' : 'bg-orange-500'}
                    `}
                    style={{
                        width: hovering ? 0 : 4,
                        height: hovering ? 0 : 4,
                    }}
                />
            </div>
        </div>
    );
}

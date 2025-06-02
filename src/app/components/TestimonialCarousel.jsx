"use client";
import { useRef, useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "@/data";
import quote from "@/assets/quote.png";

export default function TestimonialCarousel() {

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);

    const updateCardWidth = () => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth + 8);
        }
    };

    useEffect(() => {
        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);
        return () => window.removeEventListener("resize", updateCardWidth);
    }, []);

    return (
        <div className="mx-auto mt-10 px-5">
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        ref={containerRef}
                        className="flex gap-2 transition duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * cardWidth}px)` }}
                    >
                        {
                            TESTIMONIALS_DATA.map((testimonial, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={index}
                                        ref={index === 0 ? cardRef : null}
                                        className={`w-[300px] md:w-[400px] xl:w-[500px] transition duration-500 ease-in-out ${isActive ? "scale-100" : "scale-90"} px-6 py-10 bg-[#1a1a1a]/40 border border-white/10 text-white rounded-3xl space-y-6 flex-shrink-0`}
                                    >
                                        <img
                                            className="h-[20px] w-[30px] xl:h-[60px] xl:w-[80px]"
                                            src={quote.src}
                                            alt=""
                                        />
                                        <p className="xl:text-xl body-text line-clamp-5">{testimonial.quote}</p>
                                        <div className="body-text">
                                            <h1 className="xl:text-xl orange-text font-bold">{testimonial.author}</h1>
                                            <h1 className="text-xs xl:text-sm">{testimonial.location}</h1>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="flex gap-2 justify-center">
                    {
                        TESTIMONIALS_DATA.map((ele, idx) => <span onClick={() => { setActiveIndex(idx) }} key={idx} className={`px-2 hover:cursor-pointer ${activeIndex === idx && "orange-text"} text-7xl`}>.</span>)
                    }
                </div>
            </div>
        </div>
    );
}

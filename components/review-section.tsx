"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

const reviews = [
    {
        name: "Sulthana Shafi",
        review: (
            <>
                We support business wherever they are on their <br />
                mondernstaion journey and give them unmatched <br />
                flexibility and choice
            </>
        ),
        rating: "4.9"
    },
    {
        name: "Rejinsha Shahudeen",
        review: (
            <>
                We tailor the winning business <br />
                strategies for the entrepreneurs with <br />
                our digital marketing strategies, <br />
                business automation, product and <br />
                services provides you hazzle-free ride <br />
                all the way along.
            </>
        ),
        rating: "4.9"
    },
    {
        name: "Vaishak Karthikeyan",
        review: (
            <>
                Our idea is to infuse the concept of <br />
                Blockchain, the Metaverse, to deliver an enriched <br />
                experience.
            </>
        ),
        rating: "4.9"
    }
];

export default function ReviewSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const nextSlide = useCallback(() => {
        setTransitionEnabled(true);
        setCurrentIndex((prev) => prev + 1);
    }, []);

    const prevSlide = useCallback(() => {
        setTransitionEnabled(true);
        setCurrentIndex((prev) => prev - 1);
    }, []);

    // Handle seamless loop reset
    useEffect(() => {
        if (currentIndex === 3) {
            const timeout = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(0);
            }, 500); // Match duration-500
            return () => clearTimeout(timeout);
        }
        if (currentIndex < 0) {
            const timeout = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(2);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(timer);
    }, [nextSlide, isPaused]);

    return (
        <section className="bg-black text-white pt-16 pb-0 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
                >
                    <div className="flex flex-col gap-6 relative">
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold tracking-[0.3em] text-white/90 uppercase">
                                Our Team Feedback
                            </span>
                        </div>

                        {/* Title with Decorative Circle */}
                        <div className="relative">

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold leading-[1.1] tracking-tight">
                                Employee perspectives on <br className="hidden md:block" /> our workplace
                            </h2>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4 pb-2">
                        <button
                            onClick={prevSlide}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-95"
                        >
                            <MoveLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group active:scale-95"
                        >
                            <MoveRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Review Cards Slider Container */}
                <div
                    className="mt-16 w-full overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className={`flex gap-8 ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
                        style={{ transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px))` }}
                    >
                        {/* Render reviews twice for seamless looping */}
                        {reviews.concat(reviews).map((card, idx) => (
                            <div key={idx} className="w-full md:w-[calc(50%-16px)] flex-shrink-0">
                                <ReviewCard {...card} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ name, review, rating }: { name: string, review: React.ReactNode, rating: string }) {
    return (
        <div className="relative group">
            {/* The Custom Shape Border using SVG */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 400 250" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 249V1H220V35H399V249H1Z" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                </svg>
            </div>

            <div className="relative z-10 p-8 h-full min-h-[250px] flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">{name}</h3>

                        {/* Rating section in the notch area */}
                        <div className="flex flex-col items-end gap-1 -mt-1 pr-2">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <svg key={s} className="w-3 h-3 fill-[#c17f45]" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{rating} Reviews</span>
                        </div>
                    </div>

                    <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[85%]">
                        {review}
                    </p>
                </div>
            </div>
        </div>
    );
}

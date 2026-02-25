"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[450px] md:h-[550px] lg:h-[60vh] flex items-center justify-center overflow-hidden bg-[#1e1e1e]">
            <div
                className="absolute inset-0 w-full h-full bg-[length:100%_auto] bg-top bg-no-repeat opacity-60 bg-[url('/about-bg.jpg')]"
            />

            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

            {/* Bottom black fading overlay to smoothly blend into the section below */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent z-[1]"></div>

            {/* Container for content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col h-full">



                {/* Left aligned text content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-grow flex flex-col justify-start pt-16 md:pt-32 max-w-3xl"
                >
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-white/90 text-[17px] md:text-lg font-semibold tracking-wide mb-2">
                        <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                        <span className="text-white/80 font-bold mb-1">.</span>
                        <span className="text-white">About Us</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-tight leading-none">
                        About Us
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}

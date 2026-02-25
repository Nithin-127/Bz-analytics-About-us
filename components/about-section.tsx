"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="bg-black text-white pt-8 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[600px] mx-auto lg:mx-0"
                >

                    {/* Main Image */}
                    <div className="relative w-full h-full rounded-[4px] overflow-hidden shadow-2xl">
                        <Image
                            src="/about-main.png"
                            alt="About BzAnalytics"
                            fill
                            className="object-contain lg:object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase">About Us</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Get to know about <br className="hidden sm:block" /> BzAnalytics
                    </h2>

                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 leading-snug">
                        Digital Transformation Towards Web 4.0.
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                        We believe that a big part of our difference is the adaptability and
                        integrability of our solutions. It was a seismic moment for
                        BzAnalytics that the decision by our organisation to launch our
                        global hub at Dubai, BzAnalytics Information Technology. Our
                        primary goals and objectives - as we live in the "Experience
                        Economy" brand loyalty is increasingly becoming a thing of
                        the past. We have been evolving with complex business issues
                        is a key market differentiator.
                    </p>

                    {/* Signature & Profile Area */}
                    <div className="flex flex-wrap items-center gap-6 mt-4">
                        {/* Profile Picture Placeholder */}
                        <div className="w-16 h-16 rounded-full border-2 border-orange-500 p-0.5 overflow-hidden relative">
                            <Image
                                src="/ceo-photo.png"
                                alt="Beegum Pameela"
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>

                        {/* Signature */}
                        <div className="h-16 md:h-24 w-48 md:w-64 relative">
                            <Image
                                src="/signature.png"
                                alt="CEO Signature"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="font-bold text-lg">Beegum Pameela - CEO, BzAnalytics</p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom floating elements */}
            <div className="fixed bottom-12 left-10 z-50">
                <div className="px-5 py-2.5 border border-white/30 text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-white hover:text-black transition-all">
                    Light/Dark
                </div>
            </div>

            <div className="fixed bottom-10 right-10 z-50">
                <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center border border-white/20 cursor-pointer shadow-black shadow-2xl hover:scale-105 transition-transform group">
                    <div className="w-14 h-14 rounded-full bg-zinc-900/50 flex items-center justify-center border border-white/5">
                        {/* WhatsApp Icon */}
                        <svg className="w-7 h-7 text-[#c17f45]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-2.32 0-4.519.903-6.16 2.544-1.64 1.64-2.544 3.839-2.544 6.159 0 1.258.267 2.479.791 3.597l-.025.049-1.096 4.004 4.1-.1.05-.025a8.6 8.6 0 003.58 1.18c2.321 0 4.52-.904 6.161-2.545a8.7 8.7 0 002.544-6.16c0-2.32-.903-4.519-2.544-6.159a8.68 8.68 0 00-6.161-2.544zM12 4c2.903 0 5.619 1.134 7.643 3.161 2.028 2.028 3.161 4.743 3.161 7.643 0 2.903-1.133 5.619-3.161 7.642-2.024 2.023-4.74 3.162-7.643 3.162-1.571 0-3.085-.348-4.444-1.0 l-5.122 1.393L3.89 20.93a10.6 10.6 0 01-1.89-6.126c0-2.903 1.133-5.619 3.161-7.643 2.025-2.028 4.741-3.161 7.643-3.161z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

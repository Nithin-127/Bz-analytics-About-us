"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#0a0a0a] text-white pt-0 pb-8 overflow-hidden">
            {/* Background Diagonal Lines Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 20px)`,
                    backgroundSize: '100% 100%'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-10">

                {/* Top Section: CTA and Subscribe Box */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                    {/* Top Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="pt-0"
                    >
                        <p className="text-xl md:text-2xl text-white/90 font-medium m-0 p-0 leading-none">Let's start working together</p>
                        <h2 className="text-4xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1] m-0 pt-2">
                            hello@bzanalytics.ai
                        </h2>
                    </motion.div>

                    {/* Newsletter Subscription (Uplifted) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-[380px] lg:flex-shrink-0"
                    >
                        <div className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl relative overflow-hidden group shadow-2xl">
                            {/* The 3D-ish Megaphone Block */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-28 h-24 bg-[#ff9100] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[15px] rounded-bl-[15px] flex items-center justify-center relative shadow-[0_0_30px_rgba(255,145,0,0.2)]">
                                    <div className="absolute inset-0 bg-white/10 rounded-[inherit]"></div>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
                                        alt="Subscribe"
                                        className="w-16 h-16 drop-shadow-2xl relative z-10"
                                    />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-1 text-center lg:text-left">Subscribe now</h3>
                            <p className="text-white/40 mb-6 text-[11px] font-bold uppercase tracking-widest leading-none text-center lg:text-left">Empower Every Mind</p>

                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-white/20 transition-all text-sm font-medium"
                                    />
                                </div>
                                <button className="w-full bg-[#ff9100] hover:bg-[#ff8000] text-black font-extrabold py-3 rounded-xl transition-all shadow-lg active:scale-95 text-sm uppercase tracking-widest">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Brand and Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end"
                >

                    {/* Brand and Socials */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            {/* Logo */}
                            <div className="relative flex items-center gap-3">
                                <div className="relative w-14 h-14">
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path d="M20 20 L80 20 L80 80 L50 80 L20 50 Z" fill="#00e5ff" />
                                        <path d="M50 80 L80 80 L80 50 Z" fill="#ffae00" opacity="0.8" />
                                        <text x="32" y="62" fill="black" fontWeight="900" fontSize="40">B</text>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl font-bold tracking-tighter">Bz</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">ANALYTICS</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-11 h-11 rounded-full bg-black border border-white/10 flex items-center justify-center hover:border-white/30 hover:scale-105 transition-all">
                                    <Icon className="w-5 h-5 text-white fill-white/0" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-7 grid grid-cols-2 gap-12">
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Home</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">About Us</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Services</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Success Stories</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Blogs</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Careers</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Contact Us</a>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex items-center">
                    <button className="border border-white/20 px-4 py-2 text-[10px] font-black rounded uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Light/Dark
                    </button>
                </div>
            </div>

            {/* Fixed Floating Buttons */}
            <div className="fixed bottom-10 right-10 flex flex-col gap-5 z-50">
                {/* Back to Top */}
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full border-2 border-[#ff9100] text-[#ff9100] flex items-center justify-center hover:bg-[#ff9100] hover:text-black transition-all group shadow-xl"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>

                {/* WhatsApp */}
                <button className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full animate-pulse"></div>
                        <MessageCircle className="w-8 h-8 text-green-500 fill-green-500/10 relative z-10" />
                    </div>
                </button>
            </div>
        </footer>
    );
}

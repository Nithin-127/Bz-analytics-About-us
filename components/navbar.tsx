"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
    "Home",
    "About Us",
    "Services",
    "Success Stories",
    "Blogs",
    "Careers",
    "Contact Us",
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative z-[100] w-full flex items-center justify-between pl-6 md:pl-12 pr-4 md:pr-6 py-4 bg-black text-white h-[90px] border-b border-white/5">
            {/* Left side: Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer h-10 md:h-12">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={180}
                    height={48}
                    className="h-full w-auto object-contain"
                    priority
                />
            </Link>

            {/* Middle: Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                {NAV_LINKS.map((link) => (
                    <div key={link} className="flex items-center gap-2">
                        <Link
                            href="#"
                            className="text-[14px] font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            {link}
                        </Link>
                    </div>
                ))}

                {/* Language Selector */}
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity ml-2">
                    <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-zinc-800">
                        <img
                            src="https://flagcdn.com/w40/us.png"
                            alt="EN"
                            className="w-full h-full object-cover scale-150"
                        />
                    </div>
                    <span className="text-[14px] font-semibold">EN</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white mt-0.5"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>

            {/* Right side: CTA (Desktop & Semi-Mobile) */}
            <div className="hidden sm:flex items-center">
                <Link
                    href="#"
                    className="flex items-center justify-center px-6 md:px-10 py-3 md:py-4 bg-black border border-white/20 text-white text-[13px] md:text-[15px] font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                    Schedule a consultation
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div
                className="lg:hidden flex items-center text-white cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={28} />
            </div>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110]"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] border-l border-white/10 z-[120] p-8 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={120}
                                    height={32}
                                    className="h-8 w-auto object-contain"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.div
                                        key={link}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href="#"
                                            onClick={() => setIsOpen(false)}
                                            className="text-2xl font-bold hover:text-[#c17f45] transition-colors"
                                        >
                                            {link}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20">
                                        <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="font-bold">English (US)</span>
                                </div>
                                <button className="w-full py-4 bg-[#c17f45] text-black font-extrabold rounded-lg uppercase tracking-widest text-sm shadow-xl shadow-orange-950/20">
                                    Consultation
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

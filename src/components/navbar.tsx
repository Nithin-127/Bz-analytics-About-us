'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const NAV_LINKS = [
  'Home',
  'About Us',
  'Services',
  'Success Stories',
  'Blogs',
  'Careers',
  'Contact Us',
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] flex h-[90px] w-full items-center justify-between border-b border-white/5 bg-black py-4 pr-4 pl-6 text-white transition-colors duration-300 md:pr-6 md:pl-12">
      {/* Left side: Logo */}
      <Link
        href="/"
        className="flex h-10 flex-shrink-0 cursor-pointer items-center md:h-12"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={48}
          className="h-full w-auto object-contain invert-0 transition-all"
          priority
        />
      </Link>

      {/* Middle: Navigation Links (Desktop) */}
      <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 whitespace-nowrap lg:flex xl:gap-5">
        {NAV_LINKS.map((link) => (
          <div key={link} className="group flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/50 transition-colors group-hover:bg-white" />
            <Link
              href="#"
            className="text-[15px] md:text-[16px] font-bold text-white transition-colors group-hover:text-[#c17f45]"
            >
              {link}
            </Link>
          </div>
        ))}

        {/* Language Selector */}
        <div className="ml-2 flex cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-80">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-800">
            <Image
              src="https://flagcdn.com/w40/us.png"
              alt="EN"
              width={40}
              height={30}
              unoptimized
              className="h-full w-full scale-150 object-cover"
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
            className="mt-0.5 text-white transition-colors duration-300"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* Right Side Elements */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Language Selector (Mobile/Tablet Only) */}
        {/* Language Selector (Mobile/Tablet Only) */}
        <div className="relative flex items-center lg:hidden">
          <div
            className="flex cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-80"
            onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-800 md:h-6 md:w-6">
              <Image
                src="https://flagcdn.com/w40/us.png"
                alt="EN"
                width={40}
                height={30}
                unoptimized
                className="h-full w-full scale-150 object-cover"
              />
            </div>
            <span className="text-[14px] font-semibold md:text-[15px]">EN</span>
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
              className={`mt-0.5 h-4 w-4 text-white transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {/* Language Dropdown Menu */}
          <AnimatePresence>
            {isMobileLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-4 flex w-32 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111] shadow-2xl"
              >
                <div
                  className="flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-white/10"
                  onClick={() => setIsMobileLangOpen(false)}
                >
                  <div className="h-4 w-4 shrink-0 overflow-hidden rounded-full">
                    <Image src="https://flagcdn.com/w40/us.png" alt="EN" width={40} height={30} unoptimized className="h-full w-full scale-150 object-cover" />
                  </div>
                  <span className="text-sm font-medium">EN</span>
                </div>
                <div
                  className="flex cursor-pointer items-center gap-3 border-t border-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                  onClick={() => setIsMobileLangOpen(false)}
                >
                  <div className="h-4 w-4 shrink-0 overflow-hidden rounded-full">
                    <Image src="https://flagcdn.com/w40/in.png" alt="HI" width={40} height={30} unoptimized className="h-full w-full scale-150 object-cover" />
                  </div>
                  <span className="text-sm font-medium">HI</span>
                </div>
                <div
                  className="flex cursor-pointer items-center gap-3 border-t border-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                  onClick={() => setIsMobileLangOpen(false)}
                >
                  <div className="h-4 w-4 shrink-0 overflow-hidden rounded-full">
                    <Image src="https://flagcdn.com/w40/ae.png" alt="AR" width={40} height={30} unoptimized className="h-full w-full scale-150 object-cover" />
                  </div>
                  <span className="text-sm font-medium">AR</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA (Tablet & Desktop) */}
<div className="hidden items-center sm:flex">
  <Link
    href="#"
    className="flex items-center justify-center border-2 border-white bg-black px-2 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black md:px-12 md:py-5 md:text-[17px]"
  >
    Schedule a consultation
  </Link>
</div>

        {/* Mobile Menu Icon */}
        <div
          className="flex cursor-pointer items-center rounded-full p-1 text-white transition-colors hover:bg-white/10 lg:hidden md:p-2"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </div>
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
              className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[120] flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-[#0a0a0a] p-8"
            >
              <div className="mb-12 flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain invert-0 transition-all"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
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
                    className="group flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-white/50 transition-colors group-hover:bg-[#c17f45]" />
                    <Link
                      href="#"
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-white transition-colors group-hover:text-[#c17f45]"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 overflow-hidden rounded-full border border-white/20">
                    <Image
                      src="https://flagcdn.com/w40/us.png"
                      alt="EN"
                      width={40}
                      height={30}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-white">English (US)</span>
                </div>
                <button className="w-full rounded-lg bg-[#c17f45] py-4 text-sm font-extrabold tracking-widest text-black uppercase shadow-xl shadow-orange-950/20">
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

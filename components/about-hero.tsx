'use client';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-gray-100 transition-colors duration-300 sm:h-[350px] md:h-[550px] lg:h-[60vh] dark:bg-[#1e1e1e]">
      <div className="absolute inset-0 h-full w-full -translate-x-6 scale-110 bg-[url('/about-bg.jpg')] bg-[length:100%_auto] bg-top bg-no-repeat opacity-20 sm:-translate-x-8 md:-translate-x-12 dark:opacity-60" />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/60 bg-gradient-to-t from-white/90 via-transparent to-white/50 transition-colors duration-300 dark:bg-black/40 dark:from-black/80 dark:to-black/30"></div>

      {/* Bottom fading overlay to smoothly blend into the section below */}
      <div className="absolute bottom-0 left-0 z-[1] h-[50%] w-full bg-gradient-to-t from-white via-white/80 to-transparent transition-colors duration-300 dark:from-black dark:via-black/80"></div>

      {/* Container for content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-6 md:px-12">
        {/* Left aligned text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex max-w-3xl flex-grow flex-col justify-start pt-16 md:pt-32"
        >
          {/* Breadcrumbs */}
          <div className="mb-2 flex items-center gap-2 text-[17px] font-semibold tracking-wide text-black/70 transition-colors duration-300 md:text-lg dark:text-white/90">
            <span className="cursor-pointer transition-colors hover:text-black dark:hover:text-white">
              Home
            </span>
            <span className="mb-1 font-bold text-black/50 dark:text-white/80">
              .
            </span>
            <span className="text-black transition-colors duration-300 dark:text-white">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl leading-none font-bold tracking-tight text-black transition-colors duration-300 sm:text-6xl md:text-7xl lg:text-[90px] dark:text-white">
            About Us
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

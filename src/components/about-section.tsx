'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white px-6 pt-0 pb-20 text-black transition-colors duration-300 md:px-12 md:pt-8 lg:px-24 dark:bg-black dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left Side: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:h-[600px]"
        >
          {/* Top Right / Main Image on Mobile */}
          <div className="relative z-10 w-full overflow-hidden rounded-[4px] shadow-2xl lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[80%]">
            <Image
              src="/about-3-2.jpg"
              alt="About BzAnalytics Main"
              width={400}
              height={496}
              className="h-auto w-full object-cover lg:h-full"
              priority
            />
          </div>

          {/* Bottom Left Image (Desktop Only) */}
          <div className="hidden lg:block absolute -bottom-1 left-0 z-20 w-[50%] md:-bottom-2 lg:-bottom-3 overflow-hidden rounded-[4px] shadow-2xl">
            <Image
              src="/about-3-1.jpg"
              alt="About BzAnalytics Secondary"
              width={290}
              height={316}
              className="h-auto w-full object-cover"
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
            <span className="text-sm font-bold tracking-widest text-zinc-600 uppercase dark:text-zinc-400">
              About Us
            </span>
          </div>

          <h2 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            Get to know about <br className="hidden sm:block" /> BzAnalytics
          </h2>

          <h3 className="text-xl leading-snug font-bold text-orange-500 md:text-2xl">
            Digital Transformation Towards Web 4.0.
          </h3>

          <p className="text-base leading-relaxed text-zinc-700 md:text-lg dark:text-zinc-400">
            We believe that a big part of our difference is the adaptability and
            integrability of our solutions. It was a seismic moment for
            BzAnalytics that the decision by our organisation to launch our
            global hub at Dubai, BzAnalytics Information Technology. Our primary
            goals and objectives - as we live in the &quot;Experience
            Economy&quot; brand loyalty is increasingly becoming a thing of the
            past. We have been evolving with complex business issues is a key
            market differentiator.
          </p>

          {/* Signature & Profile Area */}
          <div className="mt-4 flex flex-wrap items-center gap-6">
            {/* Profile Picture Placeholder */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-orange-500 p-0.5">
              <Image
                src="/ceo-photo.png"
                alt="Beegum Pameela"
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Signature */}
            <div className="relative h-16 w-48 md:h-24 md:w-64">
              <Image
                src="/signature.png"
                alt="CEO Signature"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-2">
            <p className="text-lg font-bold">
              Beegum Pameela - CEO, BzAnalytics
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom floating elements */}
      <div className="fixed bottom-12 left-10 z-50">
        <div
          onClick={() =>
            mounted && setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }
          className="cursor-pointer border border-white/30 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-black dark:border-white/30 dark:hover:bg-white dark:hover:text-black"
        >
          {mounted && resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>

      <div className="fixed right-10 bottom-10 z-50 flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c17f45] bg-white text-[#c17f45] shadow-2xl shadow-black transition-colors hover:scale-105 hover:bg-[#c17f45] hover:text-white dark:bg-black dark:hover:text-black"
        >
          <ArrowUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
        </button>
        <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-black/20 bg-white shadow-2xl shadow-black transition-transform hover:scale-105 dark:border-white/20 dark:bg-black">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-black">
            <FaWhatsapp className="text-2xl text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

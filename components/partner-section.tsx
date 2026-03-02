'use client';
import { motion } from 'framer-motion';

export default function PartnerSection() {
  return (
    <section className="bg-white pt-16 pb-8 text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:px-12 lg:px-24">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left text-2xl leading-tight font-bold text-[#c17f45] sm:text-3xl md:text-4xl lg:text-[48px]"
        >
          BzAnalytics Serves As Your Digital Partner
        </motion.h2>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col items-start gap-6 border-l border-black/10 pl-4 transition-colors duration-300 md:pl-8 dark:border-white/5"
        >
          <p className="max-w-[1100px] text-left text-base leading-relaxed font-medium text-black transition-colors duration-300 sm:text-lg md:text-xl lg:text-2xl lg:leading-[1.5] dark:text-white">
            Engage a team of experienced professionals to conceptualize, create,
            develop, and support your <br className="hidden lg:block" />
            custom app or website. BzAnalytics collaborates with clients
            worldwide, assisting them in <br className="hidden lg:block" />
            advancing their businesses through technology-driven ventures.
          </p>
        </motion.div>
      </div>

      {/* HR and Marquee Section (Full Width) */}
      <div className="mt-16 w-full overflow-hidden">
        <hr className="mb-10 w-full border-black/10 transition-colors duration-300 dark:border-white/10" />
        <div className="relative flex w-full overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="mx-12 text-3xl font-bold text-black transition-colors duration-300 md:text-5xl lg:text-7xl dark:text-white"
              >
                Our fulfilled <span className="text-[#c17f45]">&</span> engaged
                workforce.
              </span>
            ))}
          </div>
          {/* Duplicate for seamless effect */}
          <div className="animate-marquee whitespace-nowrap" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={`dup-${i}`}
                className="mx-12 text-3xl font-bold text-black transition-colors duration-300 md:text-5xl lg:text-7xl dark:text-white"
              >
                Our fulfilled <span className="text-[#c17f45]">&</span> engaged
                workforce.
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

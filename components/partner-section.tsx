"use client";
import { motion } from "framer-motion";

export default function PartnerSection() {
    return (
        <section className="bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-8">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#c17f45] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight text-left"
                >
                    BzAnalytics Serves As Your Digital Partner
                </motion.h2>

                {/* Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-6 items-start relative border-l border-white/5 pl-4 md:pl-8"
                >

                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed lg:leading-[1.5] font-medium max-w-[1100px] text-left">
                        Engage a team of experienced professionals to conceptualize, create, develop, and support your <br className="hidden lg:block" />
                        custom app or website. BzAnalytics collaborates with clients worldwide, assisting them in <br className="hidden lg:block" />
                        advancing their businesses through technology-driven ventures.
                    </p>
                </motion.div>
            </div>

            {/* HR and Marquee Section (Full Width) */}
            <div className="mt-16 w-full overflow-hidden">
                <hr className="border-white/10 w-full mb-10" />
                <div className="w-full relative py-4 flex overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <span key={i} className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mx-12">
                                Our fulfilled <span className="text-[#c17f45]">&</span> engaged workforce.
                            </span>
                        ))}
                    </div>
                    {/* Duplicate for seamless effect */}
                    <div className="animate-marquee whitespace-nowrap" aria-hidden="true">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <span key={`dup-${i}`} className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mx-12">
                                Our fulfilled <span className="text-[#c17f45]">&</span> engaged workforce.
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MoveLeft, MoveRight } from 'lucide-react';

const reviews = [
  {
    name: 'Sulthana Shafi',
    review: (
      <>
        We support business wherever they are on their <br />
        mondernstaion journey and give them unmatched <br />
        flexibility and choice
      </>
    ),
    rating: '4.9',
  },
  {
    name: 'Rejinsha Shahudeen',
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
    rating: '4.9',
  },
  {
    name: 'Vaishak Karthikeyan',
    review: (
      <>
        Our idea is to infuse the concept of <br />
        Blockchain, the Metaverse, to deliver an enriched <br />
        experience.
      </>
    ),
    rating: '4.9',
  },
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
    <section className="bg-white px-6 pt-16 pb-0 text-black transition-colors duration-300 md:px-12 lg:px-24 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.3em] text-black/90 uppercase transition-colors duration-300 dark:text-white/90">
                Our Team Feedback
              </span>
            </div>

            {/* Title with Decorative Circle */}
            <div className="relative">
              <h2 className="text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[72px]">
                Employee perspectives on <br className="hidden md:block" /> our
                workplace
              </h2>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 pb-2">
            <button
              onClick={prevSlide}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-black hover:text-white active:scale-95 dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
            >
              <MoveLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-black hover:text-white active:scale-95 dark:border-white/10 dark:hover:bg-white dark:hover:text-black"
            >
              <MoveRight className="h-5 w-5" />
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
            className={`flex gap-8 ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 16}px))`,
            }}
          >
            {/* Render reviews twice for seamless looping */}
            {reviews.concat(reviews).map((card, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 md:w-[calc(50%-16px)]"
              >
                <ReviewCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  review,
  rating,
}: {
  name: string;
  review: React.ReactNode;
  rating: string;
}) {
  return (
    <div className="group relative">
      {/* The Custom Shape Border using SVG */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 250"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 249V1H220V35H399V249H1Z"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 flex h-full min-h-[250px] flex-col justify-between p-8">
        <div>
          <div className="mb-6 flex items-start justify-between">
            <h3 className="mt-4 text-2xl font-bold text-black transition-colors duration-300 md:text-3xl dark:text-white">
              {name}
            </h3>

            {/* Rating section in the notch area */}
            <div className="-mt-1 flex flex-col items-end gap-1 pr-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    className="h-3 w-3 fill-[#c17f45]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-widest text-black/60 uppercase transition-colors duration-300 dark:text-white/60">
                {rating} Reviews
              </span>
            </div>
          </div>

          <p className="max-w-[85%] text-sm leading-relaxed text-black/80 transition-colors duration-300 md:text-base dark:text-white/80">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
}

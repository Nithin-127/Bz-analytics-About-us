"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Smooth position tracking
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over a link, button, or something with a cursor pointer
            const isClickable =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;

            setIsHovering(isClickable);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-[#ff9100]/60 rounded-full pointer-events-none z-[9999] backdrop-blur-[2px] border border-[#ff9100]/20"
            style={{
                translateX: springX,
                translateY: springY,
                x: "-50%",
                y: "-50%",
            }}
            animate={{
                scale: isHovering ? 2.2 : 1,
                opacity: 1
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 250,
                mass: 0.5
            }}
        />
    );
}

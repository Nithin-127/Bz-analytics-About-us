import React from 'react';
import AboutHero from '@/components/about-hero';
import AboutSection from '@/components/about-section';

export default function About() {
    return (
        <div className="flex flex-col gap-10">
            <AboutHero />
            <AboutSection />
        </div>
    );
}

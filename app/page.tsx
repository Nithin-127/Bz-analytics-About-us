import AboutHero from '@/components/about-hero';
import AboutSection from '@/components/about-section';
import PartnerSection from '@/components/partner-section';
import ReviewSection from '@/components/review-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-300 dark:bg-black">
      <AboutHero />
      <AboutSection />
      <PartnerSection />
      <ReviewSection />
      <Footer />
      {/* Space for the rest of the landing page */}
    </main>
  );
}

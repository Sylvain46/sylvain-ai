import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesSection from "@/components/ServicesSection";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PortfolioGrid />
        <VideoSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

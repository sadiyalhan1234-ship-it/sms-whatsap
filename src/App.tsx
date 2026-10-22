import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Showcase3D from "./components/Showcase3D";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CTABand from "./components/CTABand";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <HowItWorks />
        <Showcase3D />
        <FAQ />
        <Contact />
        <CTABand />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
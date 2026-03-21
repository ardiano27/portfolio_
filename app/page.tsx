import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import VisualDesigner from "@/components/VisualDesigner";
import WhatIBring from "@/components/WhatIBring";
import Works from "@/components/Works";
import SneakPeek from "@/components/SneakPeek";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed / overlay elements */}
      <ScrollProgress />
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <VisualDesigner />
        <WhatIBring />
        <Works />
        <SneakPeek />
        <About />
      </main>

      <Footer />
    </>
  );
}
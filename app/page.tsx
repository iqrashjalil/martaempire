import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhereYouAre from "@/components/WhereYouAre";
import Mechanism from "@/components/Mechanism";
import Transformation from "@/components/Transformation";
import Pillars from "@/components/Pillars";
import OneWoman from "@/components/OneWoman";
import Stories from "@/components/Stories";
import Fit from "@/components/Fit";
import Invitation from "@/components/Invitation";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Finale from "@/components/Finale";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhereYouAre />
        <Mechanism />
        <Transformation />
        <Pillars />
        <OneWoman />
        <Stories />
        <Fit />
        <Invitation />
        <FAQ />
        <About />
        <Finale />
        <ApplicationSection />
      </main>
      <Footer />
    </>
  );
}

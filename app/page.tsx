import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WhereYouAre from "@/components/WhereYouAre";
import Mechanism from "@/components/Mechanism";
import Pillars from "@/components/Pillars";
import Stories from "@/components/Stories";
import Fit from "@/components/Fit";
import Invitation from "@/components/Invitation";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <WhereYouAre />
        <Mechanism />
        <Pillars />
        <Stories />
        <Fit />
        <Invitation />
        <About />
        <FAQ />
        <Apply />
      </main>
      <Footer />
    </>
  );
}

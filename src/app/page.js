import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesShowcase from "../components/ServicesShowcase";
import Services from "../components/Services";
import Retail from "../components/Retail";
import BeyondERP from "../components/BeyondERP";
import HowDifferent from "../components/HowDifferent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="landing-page">
        <Header />
        <Hero />
      </div>
      <main>
        <ServicesShowcase />
        <Services />
        <Retail />
        <BeyondERP />
        <HowDifferent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

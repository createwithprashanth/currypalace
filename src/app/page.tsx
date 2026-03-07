import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Menu          from "@/components/Menu";
import Gallery       from "@/components/Gallery";
import Location      from "@/components/Location";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

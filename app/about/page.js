import Navbar from '../../src/components/layout/Navbar';
import Footer from '../../src/components/section/Footer';
import HeroSlider from '../../src/components/HeroSlider';
import About from '../../src/About';
import ValuesSection from '../../src/components/ValuesSection';
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <HeroSlider/>
<About/>
<ValuesSection/>
      <Footer />
    </main>
  );
}
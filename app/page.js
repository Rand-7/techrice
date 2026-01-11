
import Navbar from '../src/components/layout/Navbar.jsx';
import Hero from '../src/components/section/Hero';
import AboutSection from '../src/components/section/AboutSection.jsx';
import Services from '../src/components/section/Services.jsx';
import Portfolio from '../src/components/section/Portfolio.jsx';
import Team from '../src/components/section/Team.jsx';
import Contact from '../src/components/section/Contact.jsx';
import Footer from '../src/components/section/Footer.jsx';
import { fetchAPI } from "./lib/api";
import { getServices } from './lib/services.js';
export default async function Home() {
  const servicesData = await getServices();
    const homeData = await fetchAPI("/home");

  return (
    <main className="min-h-screen">
      <Navbar />
<Hero/>
      <AboutSection/>
    <Services/>
      <Portfolio/>
      <Team/>
      <Contact/>
      <Footer/>
    </main>
  );
}
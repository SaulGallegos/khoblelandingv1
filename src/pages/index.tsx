import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';
import ImageHero from './ImageHero';
import GetCandidatesIsEasy from './GetCandidatesIsEasy';
import WhyKhoble from './WhyKhoble';
import Banner from './Banner';
import HowToStart from './HowToStart';
import Pricing from './Pricing';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowToStart />
      {/* <ImageHero /> */}
      <GetCandidatesIsEasy />
      <Banner />
      <WhyKhoble />
      {/* <Pricing /> */}
      <Footer />
    </>
  );
}

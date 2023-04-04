import Footer from './Footer';
import Navbar from './company/Navbar';
import Hero from './company/Hero';
import GetCandidatesIsEasy from './company/GetCandidatesIsEasy';
import WhyKhoble from './company/WhyKhoble';
import Banner from './company/Banner';
import HowToStart from './company/HowToStart';

export default function CompanyLanding() {
  return (
    <>
      <>
        <Navbar />
        <Hero />
        <HowToStart />
        <GetCandidatesIsEasy />
        <Banner />
        <WhyKhoble />
        {/* <Pricing /> */}
        <Footer />
      </>
    </>
  );
}

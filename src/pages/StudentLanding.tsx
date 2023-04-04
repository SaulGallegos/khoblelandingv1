import Footer from './Footer';
import Navbar from './student/Navbar';
import Hero from './student/Hero';
import GetCandidatesIsEasy from './student/GetCandidatesIsEasy';
import WhyKhoble from './student/WhyKhoble';
import Banner from './student/Banner';
import HowToStart from './student/HowToStart';

export default function StudentLanding() {
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

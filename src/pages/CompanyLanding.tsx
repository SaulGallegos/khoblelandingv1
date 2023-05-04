import Footer from './Footer';
import Hero from './company/Hero';
import GetCandidatesIsEasy from './company/GetCandidatesIsEasy';
import WhyKhoble from './company/WhyKhoble';
import Banner from './company/Banner';
import HowToStart from './company/HowToStart';
import Team from './Team';

export default function CompanyLanding() {
  return (
    <>
      <>
        <Hero />
        <WhyKhoble />
        <HowToStart />
        <GetCandidatesIsEasy />
        <Banner />
        <Team />
        {/* <Pricing /> */}
        <Footer />
      </>
    </>
  );
}

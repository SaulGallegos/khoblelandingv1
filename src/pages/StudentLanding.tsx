import Footer from './Footer';
import Hero from './student/Hero';
import GetCandidatesIsEasy from './student/GetCandidatesIsEasy';
import WhyKhoble from './student/WhyKhoble';
import HowToStart from './student/HowToStart';
import Team from './Team';

export default function StudentLanding() {
  return (
    <>
      <>
        <Hero />
        <WhyKhoble />
        <HowToStart />
        <GetCandidatesIsEasy />
        <Team />
        {/* <Banner /> */}
        {/* <Pricing /> */}
        <Footer />
      </>
    </>
  );
}

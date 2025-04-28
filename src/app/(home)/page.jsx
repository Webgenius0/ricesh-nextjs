import Banner from '@/components/banner';
import Footer from '@/components/footer';
import Brands from './components/brands';
import GetInTouch from './components/get-in-touch';
import OurMission from './components/our-mission';
import OurSpecialization from './components/our-specialization';
import Testimonials from './components/testimonials';
import WeWontSettle from './components/we-wont-settle';
import WhatDrivesUs from './components/what-drives-us';
import WhyChooseUs from './components/why-choose-us';
import WhyWeAreTheBest from './components/why-we-are-the-best';
import WorkingWithUs from './components/working-with-us';

export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <WhyWeAreTheBest />
      <OurMission />
      <OurSpecialization />
      <WhyChooseUs />
      <WhatDrivesUs />
      <WeWontSettle />
      <WorkingWithUs />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
}

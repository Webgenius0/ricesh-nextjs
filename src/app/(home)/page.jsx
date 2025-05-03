import Banner from '@/components/banner';
import Brands from './components/brands';
import GetInTouch from './components/get-in-touch';
import OurMission from './components/our-mission';
import WhyWeAreTheBest from './components/why-we-are-the-best';

export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <WhyWeAreTheBest />
      <OurMission />
      {/* <OurSpecialization /> */}
      {/* <WhyChooseUs /> */}
      {/* <WhatDrivesUs /> */}
      {/* <WeWontSettle /> */}
      {/* <WorkingWithUs /> */}
      {/* <Testimonials /> */}
      {/* <Components /> */}
      <GetInTouch />
    </>
  );
}

import Banner from "@/components/banner";
import Brands from "./components/brands";
import GetInTouch from "./components/get-in-touch";
import OurMission from "./components/our-mission";
import WhyWeAreTheBest from "./components/why-we-are-the-best";
import OurSpecialization from "./components/our-specialization";
import Components from "./components/components";
import WhyChooseUs from "./components/why-choose-us";
import WhatDrivesUs from "./components/what-drives-us";
import WeWontSettle from "./components/we-wont-settle";
import WorkingWithUs from "./components/working-with-us";
import Testimonials from "./components/testimonials";

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
      {/* <WorkingWithUs /> */}
      <Testimonials />
      <Components />
      <GetInTouch />
    </>
  );
}

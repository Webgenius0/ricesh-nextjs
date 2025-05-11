import Banner from "@/components/banner";
import GetInTouch from "../../components/shared/get-in-touch";
import OurMission from "./components/our-mission";
import WhyWeAreTheBest from "./components/why-we-are-the-best";
import OurSpecialization from "./components/our-specialization";
import Components from "./components/components";
import WhyChooseUs from "./components/why-choose-us";
import WhatDrivesUs from "../../components/shared/what-drives-us";
import WeWontSettle from "./components/we-wont-settle";
import WorkingWithUs from "./components/working-with-us";
import Testimonials from "./components/testimonials";
import Brands from "@/components/brands/brands";

export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <WhyWeAreTheBest />
      <OurMission />
      <OurSpecialization />
      <WhyChooseUs />
      <WhatDrivesUs
        backgroundImage="/images/banner.jpg"
        title="You are what drives us"
        description="Our mission is to improve the quality of working conditions for Speech-Language Pathologists and Audiologists. We support you at every stage and title in your career."
        buttonText="Discover more"
      />
      <WeWontSettle />
      <WorkingWithUs />
      <Testimonials />
      <GetInTouch />
      {/* <Components /> */}
    </>
  );
}

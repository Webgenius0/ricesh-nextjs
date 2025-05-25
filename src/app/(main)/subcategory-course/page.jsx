import WhatDrivesUs from "@/components/shared/what-drives-us";
import EducationBanner from "./components/education-banner";
import SpeechCeu from "@/components/shared/speech-ceu";
import LearningModules from "./components/learning-modules";
import GetInTouch from "@/components/shared/get-in-touch";

export default function Page() {
  return (
    <div>
      <EducationBanner />
      <LearningModules />
      <SpeechCeu />
      <WhatDrivesUs
        backgroundImage="/images/banner.jpg"
        title="Passion is What Drives Us"
        description="Lorem ipsum is simply dummy 1 575 66 ting and typesetting industry Lorem Ipsum has been the industry's standard dummy text."
        buttonText="Discover more"
      />
      <GetInTouch />
      {/* <Components /> */}
    </div>
  );
}

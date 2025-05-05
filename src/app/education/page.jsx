import WhatDrivesUs from "@/components/shared/what-drives-us";
import Components from "../(home)/components/components";
import GetInTouch from "../../components/shared/get-in-touch";
import EducationBanner from "./components/education-banner";
import SpeechCeu from "@/components/shared/speech-ceu";

export default function Page() {
  return (
    <div>
      <EducationBanner />
      <SpeechCeu />
      <WhatDrivesUs
        backgroundImage="/images/banner.jpg"
        title="Passion is What Drives Us"
        description="Lorem ipsum is simply dummy 1 575 66 ting and typesetting industry Lorem Ipsum has been the industry's standard dummy text."
        buttonText="Discover more"
      />
      <GetInTouch />
      <Components />
    </div>
  );
}

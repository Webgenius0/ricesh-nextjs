import Banner from "@/components/banner";
import Brands from "@/components/brands/brands";
import SpeechCeu from "@/components/shared/speech-ceu";
import LearningFocus from "./components/learning-focused";

export default function page() {
  return (
    <div>
      <Banner />
      <Brands />
      <LearningFocus />
      <SpeechCeu />
    </div>
  );
}

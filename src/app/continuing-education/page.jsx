import Banner from "@/components/banner";
import Brands from "@/components/brands/brands";
import SpeechCeu from "@/components/shared/speech-ceu";
import LearningFocus from "./components/learning-focused";
import LevelUpSection from "./components/level-up-section";

export default function page() {
  return (
    <div>
      <Banner />
      <Brands />
      <LearningFocus />
      <LevelUpSection />
      <SpeechCeu />
    </div>
  );
}

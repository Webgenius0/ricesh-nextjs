import Banner from "@/components/banner";
import Brands from "@/components/brands/brands";
import SpeechCeu from "@/components/shared/speech-ceu";
import LearningFocus from "./components/learning-focused";
import LevelUpSection from "./components/level-up-section";
import DiscoverHowLearning from "./components/discover-how-learning";

export default function page() {
  return (
    <div>
      <Banner />
      <Brands />
      <LearningFocus />
      <LevelUpSection />
      <DiscoverHowLearning />
      <SpeechCeu />
    </div>
  );
}

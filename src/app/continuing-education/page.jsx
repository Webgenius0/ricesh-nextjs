import Banner from "@/components/banner";
import Brands from "@/components/brands/brands";
import SpeechCeu from "@/components/shared/speech-ceu";
import LearningFocus from "./components/learning-focused";
import LevelUpSection from "./components/level-up-section";
import DiscoverHowLearning from "./components/discover-how-learning";
import ContinueEducationLearningModule from "./components/continue-education-learning-module";
import ContinueEducationPartner from "./components/continue-education-partners";

export default function page() {
  return (
    <div>
      <Banner />
      <Brands />
      <ContinueEducationLearningModule />
      <LearningFocus />
      <LevelUpSection />
      <DiscoverHowLearning />
      <ContinueEducationPartner />
      <SpeechCeu />
    </div>
  );
}

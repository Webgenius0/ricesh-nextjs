import AboutHeader from "./components/about-header";
import ComeSeeUs from "./components/come-see-us";
import InThePress from "./components/in-the-press";
import MagnoliaManifesto from "./components/magnolia-manifesto";

export default function page() {
  return (
    <div>
      <AboutHeader />
      <InThePress />
      <ComeSeeUs />
      <MagnoliaManifesto />
    </div>
  );
}

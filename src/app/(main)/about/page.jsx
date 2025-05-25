import AboutBanner from "./components/about-banner";
import AboutHeader from "./components/about-header";
import ComeSeeUs from "./components/come-see-us";
import InThePress from "./components/in-the-press";
import MagnoliaManifesto from "./components/magnolia-manifesto";
import StoriesForAlex from "./components/stories-for-alex";
import WhatWeDo from "./components/what-we-do";

export default function page() {
  return (
    <div>
      <AboutHeader />
      <AboutBanner />
      <WhatWeDo />
      <StoriesForAlex />
      <InThePress />
      <ComeSeeUs />
      <MagnoliaManifesto />
    </div>
  );
}

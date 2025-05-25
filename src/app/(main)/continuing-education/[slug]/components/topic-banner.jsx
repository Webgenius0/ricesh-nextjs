import { Button } from "@/components/ui/button";
import React from "react";

export default function TopicBanner() {
  return (
    <section className="lg:h-[80svh] bg-top bg-cover bg-no-repeat bg-[url(/images/topic_banner.jpg)] relative">
      <div className="absolute w-full h-full bg-[linear-gradient(90deg,_#000000_0%,_rgba(39,18,33,0.2)_100%)] z-0"></div>
      <div className="container relative flex flex-col justify-center h-full px-5 md:px-8 py-[30px] md:py-14 lg:py-0">
        <h1 className="font-outfit font-semibold text-[32px] lg:text-5xl leading-[38px] tracking-[0%] text-white w-4/5 lg:w-auto mb-6 md:mb-[12px]">
          Stress management for the SLP
        </h1>
        <p className="text-base md:text-lg text-dark-foreground font-medium">
          0.1 ASHA CEUS
        </p>
        <div className="max-w-[56px] h-[1px] bg-dark-foreground my-[10px]"></div>
        <p className="text-sm md:text-base text-dark-foreground md:w-2/5 mb-2 leading-[24px]">
          A showcase of the wonders...
        </p>
        <h4 className="text-sm md:text-base text-dark-foreground mb-3 md:mb-6">
          Introductory membership tier
        </h4>
        <h4 className="text-base md:text-xl font-semibold text-dark-foreground mb-3">
          Course 1/2 | 24/02/2025
        </h4>
        <h4 className="text-sm md:text-base text-dark-foreground mb-6">
          Stress
        </h4>
        <Button className="bg-primary w-fit">Start Course</Button>
      </div>
    </section>
  );
}

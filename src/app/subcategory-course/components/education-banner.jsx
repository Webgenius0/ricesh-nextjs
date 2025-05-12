import { Button } from "@/components/ui/button";
import React from "react";

const EducationBanner = () => {
  return (
    <section className="h-[80svh] bg-[url(/images/education-banner.jpg)] relative">
      <div className="absolute w-full h-full bg-[linear-gradient(90deg,_#000000_0%,_rgba(39,18,33,0.2)_100%)] z-0"></div>
      <div className="container relative flex flex-col justify-center h-full">
        <h1 className="font-outfit font-semibold text-4xl leading-[38px] tracking-[0%] text-white w-1/2 mb-[28px]">
          Introduction to Supervision in Speech-Language Pathology
        </h1>
        <p className="text-base text-dark-foreground font-medium">
          SUNDAYS 8/7c
        </p>
        <div className="max-w-[56px] h-[1px] bg-dark-foreground my-4"></div>
        <p className="text-base text-dark-foreground w-2/5 mb-2 leading-[24px]">
          Build a strong foundation in clinical supervision-develop leadership
          skills, enhance communication, and support the next generation of
          speech-language pathologists.
        </p>
        <h4 className="text-base text-dark-foreground mb-8">Lorem, Lorem</h4>
        <h4 className="text-base text-dark-foreground mb-3">S1 | 24/03/25</h4>
        <h4 className="text-base text-dark-foreground mb-10">Lorem ipsum</h4>
        <Button className="bg-secondary w-fit">Start Course</Button>
      </div>
    </section>
  );
};

export default EducationBanner;

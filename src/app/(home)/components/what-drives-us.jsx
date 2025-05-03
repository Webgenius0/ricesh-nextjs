import { Button } from "@/components/ui/button";

export default function WhatDrivesUs() {
  return (
    <section className="bg-[url(/images/banner.jpg)] py-[100px] bg-no-repeat bg-center bg-cover">
      <div className="container">
        <div className="w-1/2">
          <h1 className="font-outfit font-semibold text-6xl leading-[72px] tracking-[0%] text-white">
            You are what drives us
          </h1>
          <p className="text-sm sm:text-base leading-[24px] mb-4 text-[#CFCFCF] mt-10">
            Our mission is to improve the quality of working conditions for
            Speech-Language Pathologists and Audiolgoists. We support you at
            every stage and title in your career.
          </p>
          <Button className="w-fit mt-10" variant={"default"} size="sm">
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}

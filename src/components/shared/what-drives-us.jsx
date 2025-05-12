import { Button } from "@/components/ui/button";

export default function WhatDrivesUs({
  backgroundImage,
  title,
  description,
  onButtonClick,
}) {
  return (
    <section
      className="py-5 md:py-[100px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-aos="fade-up"
    >
      <div className="container  px-5 md:px-8">
        <div className="w-full md:w-1/2">
          <h1 className="font-outfit font-semibold text-base md:text-6xl leading-[1.2] text-white">
            {title}
          </h1>
          <p className="text-xs sm:text-base md:leading-[24px] mb-4 text-[#CFCFCF] mt-2.5 md:mt-10">
            {description}
          </p>
          <Button
            className="w-fit mt-4 md:mt-10"
            variant="default"
            size="sm"
            onClick={onButtonClick}
          >
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}

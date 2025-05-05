import { Button } from "@/components/ui/button";

export default function WhatDrivesUs({
  backgroundImage,
  title,
  description,
  onButtonClick,
}) {
  return (
    <section
      className="py-[100px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="w-full md:w-1/2">
          <h1 className="font-outfit font-semibold text-4xl md:text-6xl leading-[1.2] text-white">
            {title}
          </h1>
          <p className="text-sm sm:text-base leading-[24px] mb-4 text-[#CFCFCF] mt-10">
            {description}
          </p>
          <Button
            className="w-fit mt-10"
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

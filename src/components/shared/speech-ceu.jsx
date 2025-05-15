"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  useDotButton,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

const speech_ceu = [
  {
    title:
      "SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing Education",
    statistics: [
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 97,
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 56,
      },
    ],
    button: {
      text: "Read full story",
    },
    image_description: "A close-up shot of two professionals in a discussion.",
  },
  {
    title:
      "SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing Education",
    statistics: [
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 17,
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 6,
      },
    ],
    button: {
      text: "Read full story",
    },
    image_description: "A close-up shot of two professionals in a discussion.",
  },
  {
    title:
      "SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing Education",
    statistics: [
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 7,
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 50,
      },
    ],
    button: {
      text: "Read full story",
    },
    image_description: "A close-up shot of two professionals in a discussion.",
  },
  {
    title:
      "SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing Education",
    statistics: [
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 79,
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 6,
      },
    ],
    button: {
      text: "Read full story",
    },
    image_description: "A close-up shot of two professionals in a discussion.",
  },
  {
    title:
      "SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing Education",
    statistics: [
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 7,
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing...",
        percentage: 30,
      },
    ],
    button: {
      text: "Read full story",
    },
    image_description: "A close-up shot of two professionals in a discussion.",
  },
];

export default function SpeechCeu() {
  return (
    <section data-aos="fade-up">
      <div className="container py-[100px] px-5 md:px-8">
        <Carousel
          opts={{ align: "center" }}
          className="w-full relative rounded-2xl overflow-hidden"
        >
          <CarouselContent className="items-center">
            {speech_ceu?.map((data, idx) => (
              <ItemCard key={idx} data={data} />
            ))}
            {/* <CarouselItem className={cn("w-full md:basis-1/2 lg:basis-full")}>
              <div className="flex gap-20 h-ful">
                <div className="flex-1 pt-10">
                  <h3 className="text-base">SpeechCEU | Empowers | SLPs</h3>
                  <h1 className="text-4xl font-semibold leading-[44px] text-foreground mt-9 mb-12">
                    SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing
                    Education
                  </h1>
                  <div className="grid grid-cols-2 gap-10 mb-12">
                    <div>
                      <div className="flex items-end mb-3">
                        <p className="text-sm font-normal">
                          Lorem Ipsum is simply. dummy text of the printing...
                        </p>
                        <h4 className="text-2xl font-medium text-primary">
                          97%
                        </h4>
                      </div>
                      <div>
                        <Progress className="h-3" value={97} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-end mb-3">
                        <p className="text-sm font-normal">
                          Lorem Ipsum is simply. dummy text of the printing...
                        </p>
                        <h4 className="text-2xl font-medium text-primary">
                          56%
                        </h4>
                      </div>
                      <div>
                        <Progress className="h-3" value={56} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button className="w-fit" variant={"default"} size="sm">
                      Read Full Story
                    </Button>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden w-1/2 max-h-[520px]">
                  <img
                    src="/images/speech-ceu.jpg"
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </CarouselItem> */}
          </CarouselContent>
          <CarouselDots className="absolute bottom-7 left-2 lg:right-2 xl:right-auto" />
        </Carousel>
      </div>
    </section>
  );
}

function CarouselDots({ className }) {
  const { api } = useCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div
      className={cn("flex gap-1.5 justify-center items-center mt-6", className)}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotButtonClick(index)}
          className={cn(
            "size-3 bg-primary/35 rounded-full  transition-all duration-200",
            selectedIndex === index && "bg-primary w-6"
          )}
        />
      ))}
    </div>
  );
}

function ItemCard({ data }) {
  return (
    <CarouselItem className={cn("w-full lg:basis-full")}>
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 h-ful">
        <div className="flex-1 pt-10">
          <h3 className="text-base">SpeechCEU | Empowers | SLPs</h3>
          <h1 className="text-xl lg:text-3xl xl:text-4xl font-semibold lg:leading-[44px] text-foreground mt-4 lg:mt-6 xl:mt-9 mb-5 xl:mb-12">
            {data?.title}
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-10 mb-12">
            {data?.statistics?.map((progressData, idx) => (
              <div key={idx}>
                <div className="flex items-end justify-between mb-3">
                  <p className="text-sm font-normal w-1/2">
                    {progressData?.text}
                  </p>
                  <h4 className="text-2xl font-medium text-primary">
                    {progressData?.percentage}%
                  </h4>
                </div>
                <div>
                  <Progress className="h-3" value={progressData?.percentage} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <Button className="w-fit" variant={"default"} size="sm">
              {data?.button?.text}
            </Button>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden w-full lg:w-1/2 min-h-[354px] lg:min-h-full xl:max-h-[520px] bg-no-repeat bg-cover bg-center bg-[url(/images/speech-ceu.jpg)] xl:bg-none">
          <img
            src="/images/speech-ceu.jpg"
            alt=""
            className="object-contain xl:block hidden"
          />
        </div>
      </div>
    </CarouselItem>
  );
}

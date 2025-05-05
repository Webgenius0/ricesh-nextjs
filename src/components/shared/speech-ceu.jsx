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

export default function SpeechCeu() {
  return (
    <section>
      <div className="container py-[100px]">
        <Carousel opts={{ align: "center" }} className="w-full relative rounded-2xl overflow-hidden">
          <CarouselContent className="items-center">
            <CarouselItem className={cn("w-full md:basis-1/2 lg:basis-full")}>
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
            </CarouselItem>
            <CarouselItem className={cn("w-full md:basis-1/2 lg:basis-full")}>
              <div className="flex gap-20 h-ful">
                <div className="flex-1 pt-16">
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
                <div className="rounded-3xl overflow-hidden w-1/2">
                  <img src="/images/speech-ceu.jpg" alt="" />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="absolute bottom-7 left-2" />
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

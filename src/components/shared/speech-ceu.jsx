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

export default function SpeechCeu() {
  return (
    <section>
      <div className="container py-[100px]">
        <Carousel opts={{ align: "center" }} className="w-full relative">
          <CarouselContent className="items-center">
            <CarouselItem className={cn("w-full md:basis-1/2 lg:basis-full")}>
              <div className="grid grid-cols-2 h-full">
                <div className="">
                  <h3>SpeechCEU | Empowers | SLPs</h3>
                  <h1 className="">
                    SpeechCEU Empowers SLPs to Thrive with Expert-Led Continuing
                    Education
                  </h1>
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden">
                  <img src="/images/speech-ceu.jpg" alt="" />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem
              className={cn(
                "w-full md:basis-1/2 lg:basis-full bg-amber-200 h-28"
              )}
            >
              <div>Hisam</div>
            </CarouselItem>
          </CarouselContent>
          <CarouselDots className="" />
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

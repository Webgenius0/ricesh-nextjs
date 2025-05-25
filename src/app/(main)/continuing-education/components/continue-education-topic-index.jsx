"use client";
import ArrowLeft from "@/assets/SVG/ArrowLeft";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const cardInformation = [
  {
    number: 1,
    title: "Introduction to Supervision in Speech-Language Pathology",
    image: "/images/card_img_1.webp",
    link: "/continuing-education/introduction-to-supervision-in-speech-language-pathology",
  },
  {
    number: 2,
    title: "Core Principles of Effective Supervision",
    image: "/images/card_img_2.jpg",
    link: "/continuing-education/core-principles-of-effective-supervision",
  },
  {
    number: 3,
    title: "Roles and Responsibilities of a Supervisor",
    image: "/images/card_img_3.jpg",
    link: "/continuing-education/roles-and-responsibilities-of-a-supervisor",
  },
  {
    number: 4,
    title: "Building a Strong Supervisor-Supervisee Relationship",
    image: "/images/card_img_4.jpg",
    link: "/continuing-education/building-a-strong-supervisor-supervisee-relationship",
  },
  {
    number: 5,
    title: "Creating a Positive Supervision Environment",
    image: "/images/card_img_5.webp",
    link: "/continuing-education/creating-a-positive-supervision-environment",
  },
  {
    number: 6,
    title: "The Importance of Reflective Practice in Supervision",
    image: "/images/card_img_6.jpg",
    link: "/continuing-education/the-importance-of-reflective-practice-in-supervision",
  },
  {
    number: 7,
    title: "Supervision Ethics and Professional Standards",
    image: "/images/card_img_7.jpg",
    link: "/continuing-education/supervision-ethics-and-professional-standards",
  },
  {
    number: 8,
    title: "Balancing Support and Accountability in Supervision",
    image: "/images/card_img_8.jpg",
    link: "/continuing-education/balancing-support-and-accountability-in-supervision",
  },
];

const categories = [
  {
    id: 1,
    label: "Foundations",
    learner_count: "4M+ Learners",
    is_selected: true,
  },
  {
    id: 2,
    label: "Clinical",
    learner_count: "6M+ Learners",
    is_selected: false,
  },
  {
    id: 3,
    label: "Ethical",
    learner_count: "8M+ Learners",
    is_selected: false,
  },
  {
    id: 4,
    label: "New Professionals",
    learner_count: "4M+ Learners",
    is_selected: false,
  },
  {
    id: 5,
    label: "Educational",
    learner_count: "8M+ Learners",
    is_selected: false,
  },
  {
    id: 6,
    label: "Healthcare",
    learner_count: "5M+ Learners",
    is_selected: false,
  },
  {
    id: 7,
    label: "Special Populations",
    learner_count: "3M+ Learners",
    is_selected: false,
  },
  {
    id: 8,
    label: "Technology",
    learner_count: "1K",
    is_selected: false,
  },
];

export default function ContinueEducationTopicIndex() {
  return (
    <div className="mt-[52px] mb-20" data-aos="fade-up">
      <div className="mb-8">
        <CategoriesCarousel />
      </div>
      <CardCarousel />
      {/* <div className="grid grid-cols-4 gap-8 mb-12">
        {cardInformation?.map((cardInfo, idx) => (
          <Card key={idx} cardInfo={cardInfo} />
        ))}
      </div> */}
    </div>
  );
}

function CardCarousel() {
  return (
    <Carousel className="w-full pl-3 flex flex-col items-end overflow-hidden">
      <div className="container pl-0 md:pl-8">
        <CarouselContent className="gap-6 md:gap-8 ml-10 md:ml-3.5">
          {cardInformation?.map((cardInfo, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-[75%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/4 !w-full"
            >
              <Card cardInfo={cardInfo} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <CarouselControl />
      {/* <CarouselPrevious className="py-11 border-none bg-primary text-white hover:bg-primary left-0 ml-72" />
      <CarouselNext className="py-11 border-none bg-primary text-white hover:bg-primary right-[13%]" /> */}
    </Carousel>
  );
}

function CarouselControl() {
  const { canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="container px-5 md:px-8 relative">
      <CarouselPrevious
        disabled={false}
        className={cn(
          "py-11 border-none bg-primary text-white hover:bg-primary left-0 -translate-y-[250%]",
          {
            "bg-primary/20": !canScrollPrev,
          }
        )}
      >
        <ArrowLeft className={"rotate-180"} />
      </CarouselPrevious>
      <CarouselNext
        disabled={false}
        className={cn(
          "py-11 border-none bg-primary text-white hover:bg-primary right-2 -translate-y-[250%]",
          {
            "bg-primary/20": !canScrollNext,
          }
        )}
      >
        <ArrowLeft />
      </CarouselNext>
    </div>
  );
}

function CategoriesCarousel() {
  const [selectCategory, setSelectCategory] = useState();
  return (
    <Carousel className="w-full container px-5 md:px-8 overflow-hidden">
      <CarouselContent className="gap-6 ml-3.5 w-full">
        {categories?.map((categoryInfo, index) => (
          <CarouselItem
            key={index}
            className="max-w-fit p-0 rounded-full overflow-hidden"
          >
            <div
              className={cn(
                "px-6 py-3 select-none cursor-pointer text-white border-[1px] rounded-full transition-all duration-300",
                {
                  "bg-white text-foreground":
                    selectCategory === categoryInfo?.id,
                }
              )}
              onClick={() => setSelectCategory(categoryInfo?.id)}
            >
              <h1 className="text-base">{categoryInfo?.label}</h1>
              <p className="text-xs">{categoryInfo?.learner_count}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="py-6 border-none bg-[#FFFFFF0F] text-white hover:bg-[#FFFFFF0F] left-2">
        <ArrowLeft className={"rotate-180"} />
      </CarouselPrevious>
      <CarouselNext className="py-6 border-none bg-[#FFFFFF0F] text-white hover:bg-[#FFFFFF0F] right-2">
        <ArrowLeft />
      </CarouselNext>
    </Carousel>
  );
}

function Card({ cardInfo }) {
  return (
    <Link
      href={cardInfo?.link}
      style={{ backgroundImage: `url(${cardInfo?.image})` }}
      className="bg-cover bg-center min-h-[400px] md:min-h-[450px] w-full flex items-end rounded-[12px] group transition-all duration-300 hover:scale-[99%] select-none relative"
    >
      <div className="absolute bottom-0 w-full h-full bg-[linear-gradient(180deg,rgba(3,0,1,0)_0%,#030001_100%)] rounded-b-[11px]"></div>
      <div className="relative pb-[26px] px-4 flex justify-between items-end">
        <h1 className="text-[120px] text-dark font-extrabold translate-y-[43px] translate-x-[-34px] group-hover:translate-x-0 transition-all duration-700 font-outfit text-shadow-[-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]">
          {cardInfo?.number}
        </h1>
        <div>
          <h4 className="text-xl font-semibold text-white line-clamp-2 overflow-hidden translate-x-[-20px] transition-all duration-700 group-hover:translate-x-0">
            {cardInfo?.title}
          </h4>
          <div className="w-0 h-0.5 bg-white translate-x-[-20px]  transition-all duration-700 group-hover:w-full group-hover:translate-x-0 rounded-full"></div>
        </div>
      </div>
    </Link>
  );
}

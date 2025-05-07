import SearchIcon from "@/assets/SVG/SearchIcon";
import { GlobalText } from "@/components/shared/common/GlobalText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const cardInformation = [
  {
    number: 1,
    title: "Introduction to Supervision in Speech-Language Pathology",
    image: "/images/card_img_1.webp",
    link: "education/introduction-to-supervision-in-speech-language-pathology",
  },
  {
    number: 2,
    title: "Core Principles of Effective Supervision",
    image: "/images/card_img_2.jpg",
    link: "education/core-principles-of-effective-supervision",
  },
  {
    number: 3,
    title: "Roles and Responsibilities of a Supervisor",
    image: "/images/card_img_3.jpg",
    link: "education/roles-and-responsibilities-of-a-supervisor",
  },
  {
    number: 4,
    title: "Building a Strong Supervisor-Supervisee Relationship",
    image: "/images/card_img_4.jpg",
    link: "education/building-a-strong-supervisor-supervisee-relationship",
  },
];

export default function BasedOnYourCareerGoals() {
  return (
    <section data-aos="fade-up">
      <div className="container space-y-10 mt-10">
        <div className="flex flex-col gap-2">
          <GlobalText variant={"foreground"}>
            Based on your career goals.
          </GlobalText>
          <p className="text-base font-poppins font-normal">
            If no goals have been identified, courses will appear in any order.
          </p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-4 gap-8">
          {cardInformation?.map((cardData, idx) => (
            <Card key={idx} cardInfo={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <div className="border-[1px] border-muted-foreground/20 rounded-full overflow-hidden flex items-center justify-between p-[0.8px]">
      <div className="px-5">
        <SearchIcon />
      </div>
      <Input
        placeholder="Search courses, topics, and presenters..."
        type="search"
        className="outline-none focus-visible:border-none focus-visible:ring-ring/0 focus-visible:ring-[0px] h-fit shadow-none text-base text-muted-foreground p-0 placeholder:text-foreground border-none rounded-none"
      />
      <Button className="px-14 text-base font-inter font-medium">Search</Button>
    </div>
  );
}

function Card({ cardInfo }) {
  return (
    <Link
      href={cardInfo?.link}
      style={{ backgroundImage: `url(${cardInfo?.image})` }}
      className="bg-cover bg-center min-h-[450px] w-full flex items-end rounded-[12px] group transition-all duration-300 hover:scale-[99%]"
    >
      <div className="relative w-full">
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
      </div>
    </Link>
  );
}

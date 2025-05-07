import ArrowRight from "@/assets/SVG/ArrowRight";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

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
  {
    number: 5,
    title: "Creating a Positive Supervision Environment",
    image: "/images/card_img_5.webp",
    link: "education/creating-a-positive-supervision-environment",
  },
  {
    number: 6,
    title: "The Importance of Reflective Practice in Supervision",
    image: "/images/card_img_6.jpg",
    link: "education/the-importance-of-reflective-practice-in-supervision",
  },
  {
    number: 7,
    title: "Supervision Ethics and Professional Standards",
    image: "/images/card_img_7.jpg",
    link: "education/supervision-ethics-and-professional-standards",
  },
  {
    number: 8,
    title: "Balancing Support and Accountability in Supervision",
    image: "/images/card_img_8.jpg",
    link: "education/balancing-support-and-accountability-in-supervision",
  },
];

export default function TopicIndex({ topicId }) {
  return (
    <div className="mt-[52px] mb-20" data-aos="fade-up">
      <div className="grid grid-cols-4 gap-8 mb-12">
        {cardInformation?.map((cardInfo, idx) => (
          <Card key={idx} cardInfo={cardInfo} />
        ))}
      </div>
      <div className="mt-12">
        <TopicIndexPagination />
      </div>
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
      <div className="relative">
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

function TopicIndexPagination() {
  return (
    <Pagination>
      <PaginationContent className="space-x-6">
        <PaginationItem>
          <PaginationPrevious className="bg-white/10 text-white hover:text-white h-[48px] w-[48px] hover:bg-primary rotate-180">
            <ArrowRight />
          </PaginationPrevious>
        </PaginationItem>

        <div className="flex items-center gap-2">
          <PaginationItem>
            <PaginationLink
              className="rounded-full h-[48px] w-[48px] border-none bg-white/10 data-active:text-white data-active:bg-primary cursor-pointer select-none hover:bg-secondary/10"
              isActive
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-full h-[48px] w-[48px] border-none bg-white/10 text-white data-active:text-white data-active:bg-primary cursor-pointer select-none">
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis className="rounded-full h-[48px] w-[48px] border-none bg-white/10 text-white data-active:text-white data-active:bg-primary cursor-pointer select-none" />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              className="rounded-full h-[48px] w-[48px] border-none bg-white/10 data-active:text-white data-active:bg-primary cursor-pointer select-none hover:bg-secondary/10"
              isActive
            >
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-full h-[48px] w-[48px] border-none bg-white/10 text-white data-active:text-white data-active:bg-primary cursor-pointer select-none">
              6
            </PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext className="bg-white/10 text-white hover:text-white h-[48px] w-[48px] hover:bg-primary">
            <ArrowRight />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

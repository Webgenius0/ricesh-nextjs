import ArrowRight from "@/assets/SVG/ArrowRight";
import CalenderIcon from "@/assets/SVG/CalenderIcon";
import RightArrow from "@/assets/SVG/RightArrow";
import UserIcon from "@/assets/SVG/UserIcon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
    title: "How AI is Transforming Supervision in Speech Therapy",
    author: "Dr. Jane Doe",
    date: "March 22, 2025",
    category: "Supervision",
    link: "how-ai-is-transforming-supervision-in-speech-therapy",
    image: "/images/card_img_1.png",
  },
  {
    title: "Revolutionizing Speech Therapy: How AI is Changing the Game",
    author: "Dr. Emily Carter",
    date: "March 15, 2025",
    category: "AI in Education",
    link: "revolutionizing-speech-therapy-how-ai-is-changing-the-game",
    image: "/images/card_img_2.png",
  },
  {
    title:
      "5 Proven Strategies to Prevent Burnout in Speech-Language Pathology",
    author: "Sarah Thompson",
    date: "March 10, 2025",
    category: "Burnout Prevention",
    link: "5-proven-strategies-to-prevent-burnout-in-speech-language-pathology",
    image: "/images/card_img_3.png",
  },
  {
    title: "Mastering Clinical Supervision: Essential Skills for SLPs",
    author: "Dr. Mark Lewis",
    date: "March 8, 2025",
    category: "Supervision",
    link: "mastering-clinical-supervision-essential-skills-for-slps",
    image: "/images/card_img_4.png",
  },
  {
    title: "Maximizing Your ASHA CEUs: The Best Online Courses for 2025",
    author: "Jessica Reed",
    date: "March 5, 2025",
    category: "Career Growth",
    link: "maximizing-your-asha-ceus-the-best-online-courses-for-2025",
    image: "/images/card_img_5.png",
  },
  {
    title: "How AI is Personalizing Learning for Speech-Language Pathologists",
    author: "Dr. Anna Patel",
    date: "March 20, 2025",
    category: "AI in Education",
    link: "how-ai-is-personalizing-learning-for-speech-language-pathologists",
    image: "/images/card_img_5.png",
  },
  {
    title: "Navigating State Licensure: Everything You Need to Know for 2025",
    author: "Lauren Bennett",
    date: "March 10, 2025",
    category: "Licensure Requirements",
    link: "navigating-state-licensure-everything-you-need-to-know-for-2025",
    image: "/images/card_img_6.png",
  },
  {
    title: "How One SLP Transformed Their Career with Online CEUs",
    author: "Jason Clark",
    date: "March 12, 2025",
    category: "Case Study",
    link: "how-one-slp-transformed-their-career-with-online-ceus",
    image: "/images/card_img_7.png",
  },
  {
    title: "How AI is Enhancing Speech Therapy Assessments & Treatment Plans",
    author: "Dr. Sophia Martinez",
    date: "March 25, 2025",
    category: "AI in Speech Therapy",
    link: "how-ai-is-enhancing-speech-therapy-assessments-and-treatment-plans",
    image: "/images/card_img_8.png",
  },
];

export default function BlogTopicIndex() {
  return (
    <div className="mt-[52px] mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardInformation?.map((cardInfo, index) => (
          <ProductCard cardInfo={cardInfo} index={index} key={index} />
        ))}
      </div>
      <div className="mt-[60px]">
        <BlogTopicIndexPagination />
      </div>
    </div>
  );
}

const ProductCard = ({ cardInfo, index }) => {
  console.log("300 + (index * 30)", 300 + index * 30);

  return (
    <Card className="shadow-none !p-3 gap-0" data-aos="fade-up">
      <CardContent className="text-[15px] text-muted-foreground p-0">
        <div className="w-full aspect-auto bg-muted rounded-xl overflow-hidden relative">
          <img
            src={cardInfo?.image}
            alt={cardInfo?.title}
            className="object-cover h-full w-full hover:scale-95 transition-all duration-500"
          />
          <div className="absolute top-3 left-0 text-sm text-white py-2 px-3 bg-primary rounded-r-[8px] shadow">
            {cardInfo?.category}
          </div>
        </div>
        <div className="flex items-center gap-4 px-3 mt-3">
          <div className="flex items-center gap-2">
            <UserIcon />
            <p className="text-sm font-medium text-muted-foreground">
              {cardInfo?.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CalenderIcon />
            <p className="text-sm font-medium text-muted-foreground">
              {cardInfo?.date}
            </p>
          </div>
        </div>
      </CardContent>
      <CardHeader className="pt-4 pb-5 px-3 flex-row items-center gap-0 font-semibold">
        <p className="text-lg font-outfit text-foreground font-semibold">
          {cardInfo?.title}
        </p>
      </CardHeader>
      <CardFooter className="px-3 mt-auto pb-3 pt-0">
        <Link
          href={cardInfo?.link}
          className="text-primary underline w-fit flex items-center gap-1 text-lg font-light group"
        >
          Learn more
          <div className="transition-all duration-200 group-hover:pl-2">
            <RightArrow />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
};

function BlogTopicIndexPagination() {
  return (
    <Pagination>
      <PaginationContent className="md:space-x-6">
        <PaginationItem>
          <PaginationPrevious className="bg-white text-dark hover:text-white h-[48px] w-[48px] hover:bg-primary rotate-180">
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
            <PaginationLink className="rounded-full h-[48px] w-[48px] border-none bg-white text-dark data-active:text-white data-active:bg-primary cursor-pointer select-none">
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis className="rounded-full h-[48px] w-[48px] border-none bg-white text-dark data-active:text-white data-active:bg-primary cursor-pointer select-none" />
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
            <PaginationLink className="rounded-full h-[48px] w-[48px] border-none bg-white text-dark data-active:text-white data-active:bg-primary cursor-pointer select-none">
              6
            </PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext className="bg-white text-dark hover:text-white h-[48px] w-[48px] hover:bg-primary">
            <ArrowRight />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

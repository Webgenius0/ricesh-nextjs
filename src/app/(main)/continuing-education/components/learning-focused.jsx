import Clipboard from "@/assets/SVG/Clipboard";
import RightArrow from "@/assets/SVG/RightArrow";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const sideCardData = [
  {
    icon: "clipboard",
    title: "Easily track state licensure requirements",
    description: "Lorem Ipsum is simply dummy text of the printing and t...",
    linkPath: null,
  },
  {
    icon: "clipboard",
    title:
      "Build advanced skills and confidence in supervision Find your path out of career burnout Find your path out of career burnout",
    description: "Lorem Ipsum is simply dummy text of the printing and t...",
    linkPath: "/courses/supervision",
  },
  {
    icon: "clipboard",
    title:
      "Use AI to make your life easier, not harder Find your path out of career burnout Find your path out of career burnout Find your path out of career burnout Find your path out of career burnout Find your path out of career burnout",
    description: "Lorem Ipsum is simply dummy text of the printing and t...",
    linkPath: "/ai-tools",
  },
  {
    icon: "clipboard",
    title: "Find your path out of career burnout",
    description: "Lorem Ipsum is simply dummy text of the printing and t...",
    linkPath: "/career-burnout",
  },
];

export default function LearningFocus() {
  return (
    <section data-aos="fade-up" className="bg-dark-foreground/5">
      <div className="container py-[24px] md:pt-[120px] md:pb-[126px] px-5 md:px-8">
        <div>
          <h2 className="text-lg lg:text-3xl font-semibold font-outfit text-foreground">
            Learning focused on your goals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-9 gap-6">
          <div className="space-y-5 md:space-y-6">
            {sideCardData?.map((data, idx) => (
              <SideCard key={idx} data={data} />
            ))}
          </div>
          <div className="bg-no-repeat bg-center bg-cover bg-[url(/images/weWontSettleSideImage.png)] rounded-3xl min-h-[496px] md:h-auto"></div>
        </div>
      </div>
    </section>
  );
}

function SideCard({ data }) {
  return (
    <Card
      className={`gap-0 p-6 rounded-3xl ${
        !data?.linkPath && "border-primary border-b-8"
      }`}
    >
      <div className="flex items-start gap-3 lg:gap-5 overflow-x-hidden">
        <div>
          <div className="w-[60px] lg:w-[72px] h-[60px] lg:h-[72px]">
            <Clipboard />
          </div>
        </div>
        <div>
          <h5 className="text-base lg:text-2xl font-semibold font-outfit line-clamp-2">
            {data?.title}
          </h5>
          <p className="line-clamp-1 text-xs lg:text-base mt-2 mb-4">
            {data?.description}
          </p>
          {data?.linkPath && (
            <div>
              <Link
                href={data?.linkPath}
                className="text-sm md:text-base text-primary underline flex items-center gap-1 w-fit group"
              >
                Explore Courses{" "}
                <div className="group-hover:translate-x-2 duration-200 ease-in-out">
                  <RightArrow />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

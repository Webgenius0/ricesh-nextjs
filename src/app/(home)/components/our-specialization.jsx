import Clipboard from "@/assets/SVG/Clipboard";
import OpenBook from "@/assets/SVG/OpenBook";
import RightArrow from "@/assets/SVG/RightArrow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const weSpecializeIn = [
  {
    icon: <Clipboard />,
    title: "Supervision, AI and Burnout Continuing Education",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link_text: "Learn more",
    link_url: "#",
  },
  {
    icon: <OpenBook />,
    title: "Neurodivergent friendly, trauma informed",
    description:
      "All of our trainings are created with you in mind. We love clear, efficient, visually structured presntations. Our audio-visual mind maps throughout courses help increase retention and engagement. Our content is made considering the vast backgrounds of our clinicians.",
    link_text: "Learn more",
    link_url: "#",
  },
];

export default function OurSpecialization() {
  return (
    <section>
      <div className="container py-[100px]">
        <div className="flex justify-between items-end">
          <div className="w-1/2">
            <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-semibold sm:leading-[72px] font-outfit text-foreground mb-3">
              Take a Peek and See What We Specialize in!
            </h1>
          </div>
          <div>
            <Button className="w-fit" variant={"default"} size="default">
              Lorem Ipsum
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-14">
          {weSpecializeIn?.map((data, idx) => (
            <Card className="gap-0 p-6 rounded-4xl" key={idx}>
              <div className="text-primary w-16">{data?.icon}</div>
              <h1 className="text-2xl font-semibold font-outfit text-foreground mt-5 mb-6">
                {data?.title}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {data?.description}
              </p>
              <Link
                href={data?.link_url}
                className="text-primary underline w-fit flex items-center gap-1 text-lg font-light group"
              >
                {data?.link_text}
                <div className="transition-all duration-200 group-hover:pl-2">
                  <RightArrow />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

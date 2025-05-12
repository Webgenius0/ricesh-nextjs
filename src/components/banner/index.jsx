import { StarHalfIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const features = [
  "9 years of trusted continuing education",
  "ASHA CEU Approved Provider",
  "Keep track of your state's unique licensure requirements",
  "Introductory pricing as low as $1 per hour of ASHA CEU credit",
];

export default function Banner() {
  return (
    <div className="-mt-[88px] md:h-[80svh] bg-cover bg-center bg-no-repeat bg-[url(/images/banner.jpg)]">
      <div className="container flex flex-col justify-center h-full px-5 md:px-8 pt-[100px] pb-7 md:pb-0 md:pt-0">
        <h1 className="font-outfit font-semibold leading-[38px] md:leading-[72px] tracking-[0%] text-white max-w-[319px] md:max-w-[776px] mb-4 md:mb-[28px] text-[32px] md:text-6xl">
          Continuing education on AI, supervision, and burnout
        </h1>

        <ul className="list-disc pl-5 font-normal text-xs md:text-lg leading-6 tracking-[0%] text-dark-foreground space-y-2.5 md:space-y-2.5 mb-4 md:mb-[32px]">
          {features.map((feature) => (
            <li key={feature} className="">
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-[30px] items-center">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs md:text-base h-[32px] md:h-auto font-normal md:font-medium"
          >
            Join now
          </Button>
          <div className="flex gap-2 items-center">
            <Image
              height={48}
              width={48}
              src="/images/google-logo.webp"
              alt="Google Logo"
              className="h-[28px] md:h-[48] w-[28px] md:w-[48]"
            />
            <div className="mb-[2]">
              <div className="flex gap-[1] items-center">
                <StarIcon className="fill-warning stroke-warning size-3.5 md:size-[18]" />
                <StarIcon className="fill-warning stroke-warning size-3.5 md:size-[18]" />
                <StarIcon className="fill-warning stroke-warning size-3.5 md:size-[18]" />
                <StarIcon className="fill-warning stroke-warning size-3.5 md:size-[18]" />
                <div className="relative">
                  <StarHalfIcon className="fill-warning stroke-warning absolute inset-0 z-10 size-3.5 md:size-[18]" />
                  <StarIcon className="fill-white stroke-white size-3.5 md:size-[18]" />
                </div>
              </div>
              <p className="text-white font-medium text-xs md:text-base leading-6 tracking-[0%]">
                Rated 4.5 out of 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

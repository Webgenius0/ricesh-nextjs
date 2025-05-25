import CheckBox from "@/assets/SVG/CheckBox";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const comeSeeUsData = {
  title: "Come See Us at Industry Events!",
  description:
    "Stay connected with the speech-language community. speech CEU actively participates in conferences, expos, and networking events to support professional growth.",
  features: [
    "Meet Our Team – Connect with experts and educators.",
    "Attend Live Workshops – Gain hands-on experience.",
    "Get Exclusive CEU Discounts – Special offers for event attendees.",
  ],
  buttonText: "Plan your visit",
  image: "/images/ComeSeeUsSideImage.png", // Place your image in public/images/
};

export default function ComeSeeUs() {
  return (
    <section className="bg-muted py-16">
      <div className="container px-5 md:px-8 mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="font-outfit text-xl md:text-4xl lg:text-[50px] font-bold text-foreground mb-6">
            {comeSeeUsData.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            {comeSeeUsData.description}
          </p>
          <ul className="space-y-4 mb-10">
            {comeSeeUsData.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1">
                  <CheckBox />
                </span>
                <span className="text-foreground text-base">{feature}</span>
              </li>
            ))}
          </ul>
          <Button size="sm">{comeSeeUsData.buttonText}</Button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[354px] md:h-[620px]">
            <img
              src={comeSeeUsData.image}
              alt="Come See Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

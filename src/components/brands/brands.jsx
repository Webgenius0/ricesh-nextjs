"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "/images/brand-logo.png",
  "/images/brand3.png",
  "/images/brand4.png",
  "/images/brand5.png",
  "/images/brand6.png",
  "/images/brand7.png",
  "/images/brand8.png",
  "/images/brand9.png",
  "/images/brand10.png",
  "/images/brand11.png",
];

export default function Brands() {
  return (
    <section className="w-full py-10 overflow-hidden" data-aos="fade-up">
      <h2 className="font-inter font-medium text-base md:text-xl lg:text-2xl leading-[24px] md:leading-[30px] tracking-normal text-center mb-8 text-gray-700 max-w-[296px] md:max-w-full mx-auto">
        Since 2016, publications & convention presentations from our founder
      </h2>
      <div className="">
        <Marquee
          speed={40}
          gradient={false}
          direction="left"
          loop={0}
          delay={0}
          play={true}
          className="flex items-center"
          pauseOnHover={true}
        >
          {[...logos, ...logos]?.map((src, index) => (
            <div key={index} className="relative mr-6 w-fit">
              <img
                src={src}
                alt=""
                className="h-10 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* <div className="relative w-full overflow-hidden">
        <div className="flex items-center md:gap-16 animate-marquee whitespace-nowrap will-change-transform">
          {[...logos, ...logos].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-10 lg:h-20 relative"
            >
              <Image
                src={src}
                alt={`Brand logo ${index + 1}`}
                fill
                className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* <div>
        <div className="flex flex-wrap items-center justify-center gap-[18px] md:hidden">
          {logos?.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-[87px] h-5 relative">
              <Image
                src={src}
                alt={`Brand logo ${idx + 1}`}
                fill
                className="object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}

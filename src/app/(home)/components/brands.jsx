"use client";

import Image from "next/image";

const logos = [
  "/images/brand-logo.png",
  "/images/brand-logo2.jpg",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
  "/brands/brand6.png",
  "/brands/brand7.png",
  "/brands/brand8.png",
  "/brands/brand9.png",
  "/brands/brand10.png",
];

export default function Brands() {
  return (
    <section className="w-full py-10 overflow-hidden" data-aos="fade-up">
      <h2 className="font-inter font-medium text-xl lg:text-2xl leading-[30px] tracking-normal text-center mb-8 text-gray-700">
        Since 2016, publications & convention presentations from our founder
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap will-change-transform">
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={src}
                alt={`Brand logo ${index + 1}`}
                fill
                className="object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const logos = [
  "/images/brand-logo.png",
  "/brands/brand2.png",
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
    <div className="w-full py-10 overflow-hidden">
      <h2 className="font-inter font-medium text-xl lg:text-2xl leading-[30px] tracking-normal text-center mb-8">
        Since 2016, publications & convention presentations from our founder
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {logos.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Brand logo ${index + 1}`}
              width={150}
              height={80}
              className="object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
          ))}

          {logos.map((src, index) => (
            <Image
              key={index + logos.length}
              src={src}
              alt={`Brand ${index + 1}`}
              width={150}
              height={80}
              className="object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

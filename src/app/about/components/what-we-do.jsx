import RightArrow from "@/assets/SVG/RightArrow";

// JSON data for cards (easy to swap with API)
const whatWeDoData = [
  {
    id: 1,
    title: "Our courses and certifications",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/what_we_do_img_1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Our group programs",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/what_we_do_img_2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Our books",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/what_we_do_img_3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Our speaking engagements",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: "/images/what_we_do_img_4.png",
    link: "#",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-12 bg-background text-foreground font-inter">
      <div className="container px-5 md:px-8">
        <h2
          className="font-outfit text-xl md:text-4xl lg:text-[50px] font-bold text-foreground mb-6 text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          What We Do
        </h2>
        <p
          className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {whatWeDoData.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl overflow-hidden flex flex-col"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-contain rounded-xl"
              />
              <div className="pt-5 flex flex-col flex-1">
                <h3
                  className="text-2xl font-outfit font-semibold mb-4 text-foreground"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground mb-4 flex-1 pr-10 text-base"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-auto"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Learn more
                  <span className="ml-1">
                    <RightArrow />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

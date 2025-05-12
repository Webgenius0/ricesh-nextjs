"use client";

import Star from "@/assets/SVG/Star";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  useDotButton,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// ====== Testimonial Data ======
const testimonials = [
  {
    name: "Malcolm Monks",
    title: "CEO & Founder",
    image: "/images/client.jpg",
    quote:
      '"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
    rating: 4,
  },
  {
    name: "Malcolm Monks",
    title: "CEO & Founder",
    image: "/images/client.jpg",
    quote:
      '"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."',
    rating: 5,
  },
  {
    name: "Malcolm Monks",
    title: "CEO & Founder",
    image: "/images/client.jpg",
    quote:
      '"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type."',
    rating: 4,
  },
  {
    name: "Jane Doe",
    title: "Marketing Manager",
    image: "/images/client.jpg",
    quote:
      '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."',
    rating: 5,
  },
  {
    name: "Peter Smith",
    title: "Sales Director",
    image: "/images/client.jpg",
    quote:
      "\"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.\"",
    rating: 3,
  },
  {
    name: "Alice Brown",
    title: "Head of Operations",
    image: "/images/client.jpg",
    quote:
      '"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."',
    rating: 4,
  },
  {
    name: "Bob Williams",
    title: "Chief Technology Officer",
    image: "/images/client.jpg",
    quote:
      '"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."',
    rating: 5,
  },
];

// ====== Main Component ======
export default function Testimonials() {
  return (
    <section className="bg-background py-[100px]" data-aos="fade-up">
      <div className="container">
        <Header />
        <div className="mt-10">
          <Carousel opts={{ align: "center" }} className="w-full">
            <CarouselContent className="items-center min-h-[700px]">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  cardInfo={testimonial}
                />
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// ====== Header Section ======
function Header() {
  return (
    <div className="text-center mb-10">
      <h1 className="font-outfit font-semibold text-2xl md:text-[50px] lg:leading-[72px] tracking-[0%] text-foreground mb-5">
        Our Experience is Your Advantage
      </h1>
      <p className="text-sm md:text-base leading-[24px] text-muted-foreground font-light">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
  );
}

// ====== Testimonial Card ======
function TestimonialCard({ index, cardInfo }) {
  const { api } = useCarousel();
  const { selectedIndex } = useDotButton(api);

  const isActive = index === selectedIndex + 1;

  return (
    <CarouselItem
      className={cn("w-full md:basis-1/2 lg:basis-1/3", isActive && "z-40")}
    >
      <Card
        className={cn(
          "justify-center px-4 py-9 transition-all duration-300 md:min-h-[500px]",
          isActive
            ? "scale-125 bg-foreground text-white"
            : "scale-75 bg-muted opacity-70"
        )}
      >
        <CardHeader>
          <div
            className={cn(
              "rounded-full overflow-hidden mx-auto",
              isActive ? "max-w-[138px]" : "max-w-[70px]"
            )}
          >
            <img
              src={cardInfo.image}
              alt={cardInfo.name}
              className="w-full object-contain"
            />
          </div>
          <div className="flex flex-col text-center mt-4">
            <h1 className="font-outfit font-semibold text-2xl">
              {cardInfo.name}
            </h1>
            <h5 className="text-base font-extralight">{cardInfo.title}</h5>
          </div>
        </CardHeader>
        <CardContent className="flex items-center justify-center -mt-12">
          <p
            className={cn(
              "text-base leading-[24px] mb-4 mt-10 text-center italic font-light",
              isActive ? "text-background/90" : "text-foreground"
            )}
          >
            {cardInfo.quote}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex justify-center mx-auto text-yellow-500">
            {Array.from({ length: cardInfo.rating }).map((_, i) => (
              <Star key={i} />
            ))}
          </div>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}

// ====== Carousel Dots ======
function CarouselDots({ className }) {
  const { api } = useCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <div
      className={cn("flex gap-1.5 justify-center items-center mt-6", className)}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotButtonClick(index)}
          className={cn(
            "size-2.5 border border-primary/20 bg-transparent rounded-full",
            selectedIndex === index && "bg-primary"
          )}
        />
      ))}
    </div>
  );
}

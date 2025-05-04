import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="font-outfit font-semibold text-[50px] leading-[72px] tracking-[0%] text-foreground mb-5 text-center">
            Our Experience is Your Advantage
          </h1>
          <p className="text-base leading-[24px] text-muted-foreground font-light text-center">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 w-full ${index === 1 ? "scale-150" : ""}`}>
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

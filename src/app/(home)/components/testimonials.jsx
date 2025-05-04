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
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 sca">
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

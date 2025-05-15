import Clipboard from "@/assets/SVG/Clipboard";
import DoubleQuotation from "@/assets/SVG/DoubleQuotation";
import { Button } from "@/components/ui/button";

export default function WeWontSettle() {
  return (
    <section data-aos="fade-up">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-[48] lg:py-[100px] px-5 md:px-8">
        <div className="rounded-2xl overflow-hidden relative bg-no-repeat bg-cover h-[350px] lg:h-full bg-[url(/images/weWontSettleSideImage.png)]">
          {/* <img
            className="h-[350px] md:h-full object-cover"
            src="/images/weWontSettleSideImage.png"
            alt=""
          /> */}
          <div className="absolute bottom-6 right-4 md:right-6 bg-foreground/70 flex items-start gap-3 w-11/12 lg:w-2/4 rounded-lg p-3">
            <div className="bg-foreground w-fit p-2.5 md:p-4 rounded-lg">
              <DoubleQuotation className="w-5 md:w-8 text-muted" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-semibold text-muted mb-2">
                Cindy Shea
              </h4>
              <p className="text-xs md:text-sm leading-[24px] text-muted font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:py-10">
          <h1 className="font-outfit font-semibold text-base md:text-5xl lg:text-6xl md:leading-[72px] tracking-[0%] text-foreground mb-9">
            We won't Settle for anything less than excellence
          </h1>
          <p className="text-sm sm:text-base leading-[24px] text-muted-foreground mb-9">
            Lorem ipsum is simply dummy 573198 nting and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex flex-row md:flex-col items-center justify-between md:items-start">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 md:mb-9">
              <div className="flex items-center gap-2.5">
                <div className=" bg-primary/10 rounded-full w-fit p-2">
                  <div className="w-5 text-primary">
                    <Clipboard />
                  </div>
                </div>
                <p className="text-base md:text-xl font-medium leading-[24px] text-muted-foreground">
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <div className=" bg-primary/10 rounded-full w-fit p-2">
                  <div className="w-5 text-primary">
                    <Clipboard />
                  </div>
                </div>
                <p className="text-base md:text-xl font-medium leading-[24px] text-muted-foreground">
                  Lorem Ipsum simply text
                </p>
              </div>
            </div>
            <div>
              <Button className="w-fit" variant={"default"} size="sm">
                Discover more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

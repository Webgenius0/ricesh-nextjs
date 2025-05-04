import Clipboard from "@/assets/SVG/Clipboard";
import DoubleQuotation from "@/assets/SVG/DoubleQuotation";
import { Button } from "@/components/ui/button";

export default function WeWontSettle() {
  return (
    <section>
      <div className="container grid grid-cols-2 gap-10 items-center py-[100px]">
        <div className="rounded-2xl overflow-hidden relative h-full">
          <img
            className="h-full"
            src="/images/weWontSettleSideImage.png"
            alt=""
          />
          <div className="absolute bottom-6 right-6 bg-foreground/70 flex items-start gap-3 w-2/4 rounded-lg p-3">
            <div className="bg-foreground w-fit p-4 rounded-lg">
              <DoubleQuotation className="w-8 text-muted" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-muted mb-2">
                Cindy Shea
              </h4>
              <p className="text-sm leading-[24px] text-muted font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="font-outfit font-semibold text-6xl leading-[72px] tracking-[0%] text-foreground mb-9">
            We won't Settle for anything less than excellence
          </h1>
          <p className="text-sm sm:text-base leading-[24px] text-muted-foreground mb-9">
            Lorem ipsum is simply dummy 573198 nting and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center gap-6 mb-9">
            <div className="flex items-center gap-2.5">
              <div className=" bg-primary/10 rounded-full w-fit p-2">
                <div className="w-5 text-primary">
                  <Clipboard />
                </div>
              </div>
              <p className="text-xl font-medium leading-[24px] text-muted-foreground">
                Lorem Ipsum
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className=" bg-primary/10 rounded-full w-fit p-2">
                <div className="w-5 text-primary">
                  <Clipboard />
                </div>
              </div>
              <p className="text-xl font-medium leading-[24px] text-muted-foreground">
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
    </section>
  );
}

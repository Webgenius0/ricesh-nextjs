import Clipboard from "@/assets/SVG/Clipboard";
import { Card } from "@/components/ui/card";

const withUs = [
  {
    icon: <Clipboard />,
    text: "Confident, equipped supervisors and supervisees",
  },
  {
    icon: <Clipboard />,
    text: "Ethical use of AI that benefits patient, provider and caregivers.",
  },
  {
    icon: <Clipboard />,
    text: "Career satisfaction with on time licensure & certification renewals",
  },
];
const withOutUs = [
  {
    icon: <Clipboard />,
    text: "Unresolved conflict and imposter syndrome in supervision.",
  },
  {
    icon: <Clipboard />,
    text: "Chaotic, sporadic use of AI with inconsistent results",
  },
  {
    icon: <Clipboard />,
    text: "Severe burnout & disillusionment, missing certification and licensure requirements",
  },
];

export default function WhyChooseUs() {
  return (
    <section data-aos="fade-up">
      <div className="container py-[100px]">
        <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-semibold sm:leading-[72px] font-outfit text-foreground mb-3 text-center">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div>
            <div>
              <h1 className="text-[40px] font-semibold sm:leading-[72px] font-outfit text-foreground mb-6 text-center">
                With Us
              </h1>
            </div>
            <div className="space-y-6">
              {withUs?.map((info, idx) => (
                <Card
                  className="p-6 rounded-lg flex-row items-center gap-3"
                  key={idx}
                >
                  <div className=" bg-primary/10 rounded-full w-fit p-5">
                    <div className="w-10 text-primary">{info?.icon}</div>
                  </div>
                  <p className="text-xl font-bold text-muted-foreground leading-relaxed">
                    {info?.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-[40px] font-semibold sm:leading-[72px] font-outfit text-foreground mb-6 text-center">
                Without Us
              </h1>
            </div>
            <div className="space-y-6">
              {withOutUs?.map((info, idx) => (
                <Card
                  className="p-6 rounded-lg flex-row items-center gap-3"
                  key={idx}
                >
                  <div className=" bg-secondary/10 rounded-full w-fit p-5">
                    <div className="w-10 text-dark-foreground">
                      {info?.icon}
                    </div>
                  </div>
                  <p className="text-xl font-bold text-muted-foreground leading-relaxed">
                    {info?.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

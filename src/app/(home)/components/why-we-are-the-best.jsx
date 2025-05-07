import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const problems = [
  {
    id: 1,
    label:
      "Supervisors and supervisees report high levels of stressful situations",
  },
  {
    id: 2,
    label:
      "Clinicians have limited guiding principles for successfully, efficiently implementing AI",
  },
  {
    id: 3,
    label: "Career burnout is at an all time high",
  },
  {
    id: 4,
    label:
      "State & national licensure & certification renewals can be confusing",
  },
  {
    id: 5,
    label:
      "Continuing education courses not designed for neurodivergent access",
  },
];

const solutions = [
  {
    id: 1,
    label:
      "Comprehensive supervision certification gives you confidence for any situation",
  },
  {
    id: 2,
    label:
      "Ethical, integrated AI training by both a veteran SLP and business professional",
  },
  {
    id: 3,
    label:
      "Proven burnout training by someone who has successfully recovered from burnout",
  },
  {
    id: 4,
    label:
      "Custom clinician-driven platform helps you easily stay on track with renewals",
  },
  {
    id: 5,
    label:
      "All courses provided in our proprietary neurodivergent-friendly, trauma-informed format",
  },
];

const stats = [
  {
    total: 10,
    title: "Lorem ipsum dummy",
  },
  {
    total: 350,
    title: "Lorem ipsum dummy",
  },
  {
    total: 500,
    title: "Lorem ipsum dummy",
  },
  {
    total: 200,
    title: "Reviews",
  },
];

export default function WhyWeAreTheBest() {
  return (
    <section data-aos="fade-up">
      <div className="container flex flex-col gap-10">
        {/* Header */}
        <div className="w-[90%] sm:max-w-[70%] flex flex-col gap-5">
          <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-semibold sm:leading-[72px] font-outfit text-foreground">
            Why are we the best?
          </h1>
          <p className="text-sm sm:text-base leading-[24px] text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            sed voluptas delectus qui architecto iure quibusdam omnis optio
            aspernatur adipisci.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 items-center gap-6 lg:gap-6 w-full">
            {/* Problems */}
            <Card className="w-full h-full gap-0 rounded-[24px]">
              <CardHeader className={`gap-0`}>
                <CardTitle className="text-xl sm:text-2xl font-semibold font-outfit">
                  Problem
                </CardTitle>
              </CardHeader>
              <div className="w-full h-[1px] bg-[#00C2C74D] shrink-0 mt-4 mb-5"></div>
              <CardContent className="px-6 flex flex-col gap-[14px]">
                {problems.map((problem) => (
                  <div key={problem.id} className="flex gap-1">
                    <CircleCheck className="w-4 h-4 text-[#000080] shrink-0 mt-1" />
                    <p className="text-sm sm:text-base leading-[24px] text-muted-foreground">
                      {problem.label}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="w-full h-full bg-dark gap-0 rounded-[24px]">
              <CardHeader className={`gap-0`}>
                <CardTitle className="text-xl sm:text-2xl font-semibold font-outfit text-background">
                  Solution
                </CardTitle>
              </CardHeader>
              <div className="w-full h-[1px] bg-[#00C2C74D] shrink-0 mt-4 mb-5"></div>
              <CardContent className="px-6 flex flex-col gap-[14px]">
                {solutions.map((solution) => (
                  <div key={solution.id} className="flex gap-1">
                    <CircleCheck className="w-4 h-4 text-dark-foreground shrink-0 mt-1" />
                    <p className="text-dark-foreground text-sm sm:text-base leading-[24px]">
                      {solution.label}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Statitics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((detail, idx) => (
              <Card key={idx} className="px-10 py-5 bg-[#FFFF] rounded-[16px]">
                <CardContent
                  className={`flex flex-col items-center gap-2 px-0`}
                >
                  <h1 className="text-primary text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] leading-[60px] font-semibold font-outfit">
                    {detail.total}+
                  </h1>
                  <p className="text-base csm:text-lg lg:text-xl leading-[34px] text-primary text-center">
                    {detail.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

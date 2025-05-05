import { Button } from "@/components/ui/button";

const pathway = [
  {
    stepName: "Start",
    description:
      "Start building the career, or the next career move, that you see for your self and your organization.",
    contentTitle: "up to 16 hours",
    content: ["Selected ondemand courses."],
    isCompleted: 1,
  },
  {
    stepName: "Start",
    description:
      "Start building the career, or the next career move, that you see for your self and your organization.",
    contentTitle: "up to 16 hours",
    content: ["Selected ondemand courses."],
    isCompleted: 1,
  },
  {
    stepName: "Skill",
    description:
      "Develop advanced skills in Supervision, AI or career burnout to increase working conditions for yourself and others while positively influencing patient outcomes.",
    contentTitle: "Access up to 30 hours",
    content: [
      "On-demand courses",
      "Live sessions",
      "On-demand courses with live Q&A",
    ],
    isCompleted: 2,
  },
  {
    stepName: "Summit",
    description:
      "Integrate advanced skills in supervision, AI and career burnout prevention or recovery into your life and career. Access our advanced ondemand and live trainings and earn Summit Supervision Certification",
    isCompleted: 3,
  },
  {
    stepName: "Summit",
    description:
      "Integrate advanced skills in supervision, AI and career burnout prevention or recovery into your life and career. Access our advanced ondemand and live trainings and earn Summit Supervision Certification",
    isCompleted: 3,
    isLastContent: true,
  },
];

export default function WorkingWithUs() {
  return (
    <section>
      <div className="container py-[100px]">
        <div>
          <h1 className="font-outfit font-semibold text-[50px] leading-[72px] tracking-[0%] text-foreground mb-9 text-center">
            What's it Like Working with us?
          </h1>
        </div>
        <div className="pb-40 pt-10">
          <div className="flex flex-col items-center mt-10 space-y-0">
            {pathway.map((step, idx) => (
              <Step key={idx} index={idx} stepInfo={step} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-28">
          <Button className="w-fit" variant={"default"} size="sm">
            Discover more
          </Button>
        </div>
      </div>
    </section>
  );
}

function Step({ stepInfo, index }) {
  return (
    <div className={` ${index % 2 === 0 ? "flex flex-row-reverse" : "flex"}`}>
      <div className="relative flex flex-col items-center">
        {stepInfo?.isCompleted === 1 && (
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center z-10 overflow-hidden">
            <span className="text-white text-4xl">&#10003;</span>
          </div>
        )}
        {stepInfo?.isCompleted === 2 && (
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center z-10 overflow-hidden">
            <span className="bg-muted w-11/12 h-11/12 rounded-full flex p-2">
              <span className="w-full h-full rounded-full bg-primary"></span>
            </span>
          </div>
        )}
        {stepInfo?.isCompleted === 3 && (
          <div className="w-14 h-14 rounded-full bg-dark-foreground flex items-center justify-center z-10 overflow-hidden">
            <span className="bg-muted w-11/12 h-11/12 rounded-full flex p-2"></span>
          </div>
        )}
        <div
          className={`${
            stepInfo?.isLastContent
              ? "h-0"
              : "w-[2px] h-40 bg-dark-foreground/55"
          }`}
        ></div>
      </div>
      <div
        className={`absolute max-w-[530px] bg-white shadow-[0px_10px_24px_0px_#9D9D9D40] p-6 rounded-3xl ${
          index % 2 === 0 ? "mr-24" : "ml-24"
        }`}
      >
        <div
          class={`w-0 h-0 absolute ${
            index % 2 === 0
              ? "right-[-15px] -rotate-90 "
              : "left-[-15px] rotate-90 "
          }
            border-l-[10px] border-l-transparent 
            border-r-[10px] border-r-transparent 
            border-t-[20px] border-t-white`}
        ></div>
        <div>
          <h3 className="text-xl font-medium font-outfit mb-3">
            {stepInfo?.stepName}
          </h3>
          <p className="text-base leading-6 mb-5">{stepInfo?.description}</p>
          <div>
            <h5 className="text-base font-semibold mb-2">
              {stepInfo?.contentTitle}
            </h5>
            <ul className="list-disc list-inside space-y-2 text-base">
              {Array.isArray(stepInfo?.content) &&
                stepInfo.content.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

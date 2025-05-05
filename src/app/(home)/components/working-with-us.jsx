const pathway = [
  {
    step: "Start",
    description:
      "Start building the career, or the next career move, that you see for your self and your organization.",
    duration: "up to 16 hours",
    content: "- Selected ondemand courses.",
    isCompleted: true,
  },
  {
    step: "Skill",
    description:
      "Develop advanced skills in Supervision, AI or career burnout to increase working conditions for yourself and others while positively influencing patient outcomes.",
    access: "Access up to 30 hours",
    content: [
      "- On-demand courses",
      "- Live sessions",
      "- On-demand courses with live Q&A",
    ],
    isCompleted: true,
  },
  {
    step: "Summit",
    description:
      "Integrate advanced skills in supervision, AI and career burnout prevention or recovery into your life and career. Access our advanced ondemand and live trainings and earn Summit Supervision Certification",
    isCompleted: true,
  },
];

export default function WorkingWithUs() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="font-outfit font-semibold text-[50px] leading-[72px] tracking-[0%] text-foreground mb-9 text-center">
            What's it Like Working with us?
          </h1>
        </div>
        <div>
          <div className="flex flex-col items-center mt-10 space-y-0 mb-40">
            <Step isCompleted={true} />
            <Step isCompleted={false} />
            <Step isCompleted={true} />
            <Step isCompleted={false} />
            <Step isCompleted={true} />
            <Step isCompleted={false} />
            <Step isCompleted={true} step={"last"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ isCompleted, step }) {
  return (
    <div className={` ${isCompleted ? "flex flex-row-reverse" : "flex"}`}>
      <div className="relative flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-dark-foreground flex items-center justify-center z-10 overflow-hidden">
          {isCompleted ? (
            <span className="text-white text-4xl">&#10003;</span>
          ) : (
            <span className="bg-muted w-11/12 h-11/12 rounded-full flex p-2">
              {/* <span className="w-full h-full rounded-full bg-primary"></span> */}
            </span>
          )}
        </div>
        {/* <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center z-10 overflow-hidden">
          {isCompleted ? (
            <span className="text-white text-4xl">&#10003;</span>
          ) : (
            <span className="bg-muted w-11/12 h-11/12 rounded-full flex p-2" >
              <span className="w-full h-full rounded-full bg-primary"></span>
            </span>
          )}
        </div> */}
        <div
          className={`${
            step === "last" ? "h-0" : "w-[2px] h-36 bg-dark-foreground/55"
          }`}
        ></div>
        {/* <div
          className={`${step === "last" ? "h-0" : "w-[2px] h-36 bg-primary"}`}
        ></div> */}
      </div>
      <div
        className={`absolute max-w-[530px] bg-white shadow-accent p-6 border-2 ${
          isCompleted ? "mr-16" : "ml-16"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas
        deleniti quo, itaque molestiae voluptatibus ad quisquam quis atque
        voluptate nobis quidem doloremque vitae dignissimos, placeat ullam est
        mollitia ipsa, cumque ex iure! Animi, commodi? Quae rerum libero ad
        mollitia ipsa, cumque ex iure! Animi, commodi? Quae rerum libero ad
        mollitia ipsa, cumque ex iure! Animi, commodi? Quae rerum libero ad
      </div>
    </div>
  );
}

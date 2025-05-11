import GroupPeople from "@/assets/SVG/GroupPeople";
import GroupPeople2 from "@/assets/SVG/GroupPeople2";
import Person from "@/assets/SVG/Person";
import SelectedCheck from "@/assets/SVG/SelectedCheck";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const levelUpCourseData = [
  {
    name: "Start",
    description: "up to 15 ondemand hours",
    for: "Individual",
    for_icon: <Person />,
    starting_at: {
      price: 1.33,
      period: "per month",
    },
    button_text: "Join now",
    features: [
      "Access up to 16 hours of ondemand courses",
      "Select from Start courses available in each category",
      "ASHA CE reporting included at no extra charge",
    ],
    color: "#000080",
  },
  {
    name: "Skill",
    description: "for you",
    for: "Individual",
    for_icon: <GroupPeople />,
    starting_at: {
      price: 4.75,
      period: "monthly",
    },
    button_text: "join now",
    features: [
      "Access to Skill and Start course library",
      "Ondemand courses",
      "Live and ondemand with live Q&A courses",
      "ASHA CEU reporting included",
    ],
    color: "#FF4D4D",
  },
  {
    name: "Summit",
    description: "Supervision Certification",
    for: "Individual",
    for_icon: <GroupPeople />,
    starting_at: {
      price: 29,
      period: "per month",
    },
    button_text: "Request a demo",
    features: [
      "Access to full Start, Skill and Summit Supervision library",
      "Ondemand courses",
      "Live and ondemand courses with live Q&A",
      "ASHA CEU reporting included",
      "Summit Supervision Certification",
    ],
    color: "#00C2C7",
  },
  {
    name: "Group Trek",
    description: "For your organization",
    for: "Groups of 25 or more",
    for_icon: <GroupPeople2 />,
    starting_at: {
      text: "Contact sales for pricing",
    },
    button_text: "Contact sales",
    features: [
      "Export-led leadership training",
      "Research-based content curation",
      "Applied learning, tool kits, and group coaching",
      "Asynchronous learning with collaborative discussions",
      "Live virtual events",
      "AI-powered analytics and insights",
    ],
    color: "#FC624A",
  },
];

export default function LevelUpSection() {
  return (
    <section>
      <div className="container py-[100px]">
        <div>
          <h1 className="text-3xl font-outfit font-semibold text-foreground">
            Level Up - Transform Your Career & Organization
          </h1>
          <p className="text-base mt-3">
            Empower your career and team with innovative learning solutioris
            tailored to your goals.
          </p>
        </div>
        <div className="grid grid-cols-4 mt-9 gap-6">
          {levelUpCourseData?.map((data, idx) => (
            <LevelUpCard key={idx} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LevelUpCard({ data }) {
  return (
    <div className="border-[1px] border-[#E7E7E9] shadow-[0px_2px_2px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col">
      <div
        className={cn(
          "border-t-8 border-primary rounded-t-2xl bg-dark-foreground/10 px-5 pb-5 pt-8",
          data?.color === "#000080" && "border-[#000080]",
          data?.color === "#FF4D4D" && "border-[#FF4D4D]",
          data?.color === "#00C2C7" && "border-[#00C2C7]",
          data?.color === "#FC624A" && "border-[#FC624A]"
        )}
      >
        <div>
          <h4
            className={cn(
              "text-base font-medium",
              data?.color === "#000080" && "text-[#000080]",
              data?.color === "#FF4D4D" && "text-[#FF4D4D]",
              data?.color === "#00C2C7" && "text-[#00C2C7]",
              data?.color === "#FC624A" && "text-[#FC624A]"
            )}
          >
            {data?.name}
          </h4>
          <p
            className={cn(
              "text-xs font-poppins",
              data?.color === "#000080" && "text-[#000080]",
              data?.color === "#FF4D4D" && "text-[#FF4D4D]",
              data?.color === "#00C2C7" && "text-[#00C2C7]",
              data?.color === "#FC624A" && "text-[#FC624A]"
            )}
          >
            {data?.description}
          </p>
        </div>
        <div className="flex items-center text-sm font-poppins text-foreground/80 gap-1.5 mt-3">
          <p>{data?.for_icon}</p>
          <p>{data?.for}</p>
        </div>
      </div>
      <div className="px-5 pt-5 pb-4 min-h-[104px]">
        {data?.starting_at?.period && (
          <p className="font-poppins text-xs mb-[10px]">Starting at</p>
        )}
        <div className="flex items-end gap-1.5">
          <p className="text-2xl font-semibold font-outfit text-foreground/80">
            {data?.starting_at?.price && `$${data?.starting_at?.price}`}
          </p>
          <p className="font-poppins text-xs">{data?.starting_at?.period}</p>
        </div>
        <p className="font-poppins text-xs">{data?.starting_at?.text}</p>
      </div>
      <div className="px-5">
        <Button
          size={"sm"}
          className={cn(
            "w-full border-[1.5px] hover:bg-transparent",
            data?.color === "#000080" && "hover:text-[#000080] hover:border-[#000080] bg-[#000080]",
            data?.color === "#FF4D4D" && "hover:text-[#FF4D4D] hover:border-[#FF4D4D] bg-[#FF4D4D]",
            data?.color === "#00C2C7" && "hover:text-[#00C2C7] hover:border-[#00C2C7] bg-[#00C2C7]",
            data?.color === "#FC624A" && "hover:text-[#FC624A] hover:border-[#FC624A] bg-[#FC624A]"
          )}
        >
          {data?.button_text}
        </Button>
      </div>
      <div className="space-y-3.5 px-5 mt-5 mb-6">
        {data?.features?.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="text-primary">
              <SelectedCheck />
            </div>
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import TabsUnderlined from "@/components/tabs-02";
import VerticalBorderedTabs from "@/components/tabs-17";
import ContinueEducationTopicIndex from "./continue-education-topic-index";

const bigTabs = [
  {
    name: "Supervision",
    value: "supervision",
    component: <ContinueEducationTopicIndex topicId="supervision" />,
  },
  {
    name: "AI",
    value: "ai",
    component: <ContinueEducationTopicIndex topicId="ai" />,
  },
  {
    name: "Burnout",
    value: "burnout",
    component: <ContinueEducationTopicIndex topicId="burnout" />,
  },
  {
    name: "Patient stories",
    value: "patient-stories",
    component: <ContinueEducationTopicIndex topicId="patient-stories" />,
  },
  {
    name: "State License Requirements",
    value: "state-license-requirements",
    component: (
      <ContinueEducationTopicIndex topicId="state-license-requirements" />
    ),
  },
  {
    name: "Career skills",
    value: "career-skills",
    component: <ContinueEducationTopicIndex topicId="career-skills" />,
  },
  {
    name: "Students",
    value: "students",
    component: <ContinueEducationTopicIndex topicId="students" />,
  },
];

const tabs = [
  {
    value: "start",
    text: "Start",
  },
  {
    value: "skill",
    text: "Skill",
  },
  {
    value: "summit",
    text: "Summit",
  },
];
export default function ContinueEducationLearningModule() {
  return (
    <section>
      <div className="container mt-[52px]" data-aos="fade-up">
        <Header />
        <VerticalBorderedTabs tabs={tabs} />
      </div>
      <div data-aos="fade-up">
        <div className="mt-9">
          <TabsUnderlined tabContentClassName="" tabs={bigTabs} />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mb-9 space-y-3">
      <h1 className="font-outfit font-semibold text-xl md:text-3xl tracking-[0%] text-foreground">
        All the Supervision, Al and Burnout continuing education you need in one
        place
      </h1>
      <p className="text-sm md:text-base leading-[24px] text-muted-foreground font-light">
        From introductory to advanced levets, Speechceu.com supports your career
        growth.
      </p>
    </div>
  );
}

import VerticalBorderedTabs from "@/components/tabs-17";
import React from "react";
import TopicIndex from "./topic-index";
import TabsUnderlined from "@/components/tabs-02";

const bigTabs = [
  {
    name: "Supervision",
    value: "supervision",
    component: <TopicIndex topicId="supervision" />,
  },
  {
    name: "AI",
    value: "ai",
    component: <TopicIndex topicId="ai" />,
  },
  {
    name: "Burnout",
    value: "burnout",
    component: <TopicIndex topicId="burnout" />,
  },
  {
    name: "Patient stories",
    value: "patient-stories",
    component: <TopicIndex topicId="patient-stories" />,
  },
  {
    name: "State License Requirements",
    value: "state-license-requirements",
    component: <TopicIndex topicId="state-license-requirements" />,
  },
  {
    name: "Career skills",
    value: "career-skills",
    component: <TopicIndex topicId="career-skills" />,
  },
  {
    name: "Students",
    value: "students",
    component: <TopicIndex topicId="students" />,
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
export default function LearningModules() {
  return (
    <section>
      <div className="container mt-[52px]">
        <Header />
        <VerticalBorderedTabs tabs={tabs} />
      </div>
      <div>
        <div className="mt-9">
          <TabsUnderlined tabs={bigTabs} />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mb-9 space-y-3">
      <h1 className="font-outfit font-semibold text-3xl tracking-[0%] text-foreground">
        All the Supervision, Al and Burnout continuing education you need in one
        place
      </h1>
      <p className="text-base leading-[24px] text-muted-foreground font-light">
        From introductory to advanced levets, Speechceu.com supports your career
        growth.
      </p>
    </div>
  );
}

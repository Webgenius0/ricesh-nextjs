import TabsUnderlined from "@/components/tabs-02";
import TopicIndex from "../../components/topic-index";

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
];
export default function TopicContent() {
  return (
    <section>
      <div className="container">
        <TabsUnderlined tabs={bigTabs} />
      </div>
    </section>
  );
}

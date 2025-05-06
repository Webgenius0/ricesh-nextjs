import TabsUnderlined from "@/components/tabs-02";
import WhoShouldAttendThisCourse from "./who-should-attend-this-course";

const bigTabs = [
  {
    name: "Who should attend this course",
    value: "who-should-attend-this-course",
    component: <WhoShouldAttendThisCourse />,
  },
  {
    name: "Learning Outcomes",
    value: "learning_outcomes",
    component: <h1 className="text-white text-3xl py-7">Learning Outcomes</h1>,
  },
  {
    name: "Agenda",
    value: "agenda",
    component:  <h1 className="text-white text-3xl py-7">Agenda</h1>,
  },
  {
    name: "Exam",
    value: "exam",
    component:  <h1 className="text-white text-3xl py-7">Exam</h1>,
  },
];
export default function TopicContent() {
  return (
    <section>
      <div className="">
        <TabsUnderlined
          tabs={bigTabs}
          containerClassName="bg-foreground pt-14"
          tabsTriggerClassName="text-white"
        />
      </div>
    </section>
  );
}

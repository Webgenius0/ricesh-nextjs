import TabsUnderlined from "@/components/tabs-02";
import BlogTopicIndex from "./blog-topic-index";

const bigTabs = [
  {
    name: "All",
    value: "all",
    component: <BlogTopicIndex topicId="all" />,
  },
  {
    name: "Supervision",
    value: "supervision",
    component: <BlogTopicIndex topicId="supervision" />,
  },
  {
    name: "AI",
    value: "ai",
    component: <BlogTopicIndex topicId="ai" />,
  },
  {
    name: "Burnout",
    value: "burnout",
    component: <BlogTopicIndex topicId="burnout" />,
  },
  {
    name: "Case studies",
    value: "case-studies",
    component: <BlogTopicIndex topicId="case-studies" />,
  },
  {
    name: "State License Requirements",
    value: "state-license-requirements",
    component: <BlogTopicIndex topicId="state-license-requirements" />,
  },
];

export default function PopularArticles() {
  return (
    <section className="bg-white">
      <div className="container px-5 md:px-8" data-aos="fade-up">
        <Header />
      </div>
      <div data-aos="fade-up">
        <div className="mt-9">
          <TabsUnderlined
            tabContentClassName="container mt-[52px] px-5 md:px-8"
            contentClassName="!bg-muted"
            tabs={bigTabs}
          />
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

import TabsUnderlinedDemo from "@/components/tabs-02";
import VerticalBorderedTabs from "@/components/tabs-17";
import React from "react";

// Step 1: Tab-specific Components
const Overview = () => <div>Overview content here.</div>;
const Settings = () => <div>Settings content here.</div>;
const Profile = () => <div>Profile content here.</div>;

// Step 2: Tab Data Array
const tabs = [
  { name: "Overview", value: "overview", component: <Overview /> },
  { name: "Settings", value: "settings", component: <Settings /> },
  { name: "Profile", value: "profile", component: <Profile /> },
];

export default function Supervision() {
  return (
    <section>
      <div className="container py-[100px]">
        <Header />
        <VerticalBorderedTabs />
      </div>
      <div>
        <div className="mt-10">
          <TabsUnderlinedDemo tabs={tabs} />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="mb-10">
      <h1 className="font-outfit font-semibold text-3xl leading-[72px] tracking-[0%] text-foreground">
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

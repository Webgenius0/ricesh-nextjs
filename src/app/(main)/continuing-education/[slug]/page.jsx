import React from "react";
import TopicBanner from "./components/topic-banner";
import TopicContent from "./components/topic-content";
import GetInTouch from "@/components/shared/get-in-touch";

export default function Page() {
  return (
    <div>
      <TopicBanner />
      <TopicContent />
      <GetInTouch theme={"dark"} />
      {/* <Components /> */}
    </div>
  );
}

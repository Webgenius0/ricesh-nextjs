import React from "react";
import TopicBanner from "./components/topic-banner";
import GetInTouch from "@/components/shared/get-in-touch";
import Components from "@/app/(home)/components/components";
import TopicContent from "./components/topic-content";

export default function Page() {
  return (
    <div>
      <TopicBanner />
      <TopicContent />
      <GetInTouch theme={"dark"} />
      <Components />
    </div>
  );
}

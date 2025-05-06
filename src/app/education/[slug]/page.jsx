import React from "react";
import TopicBanner from "./components/topic-banner";
import GetInTouch from "@/components/shared/get-in-touch";
import Components from "@/app/(home)/components/components";

export default function Page() {
  return (
    <div>
      <TopicBanner />
      <GetInTouch theme={"dark"} />
      <Components />
    </div>
  );
}

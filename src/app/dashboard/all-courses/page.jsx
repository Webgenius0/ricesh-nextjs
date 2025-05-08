import Components from "@/app/(home)/components/components";
import React from "react";
import BasedOnYourCareerGoals from "./components/based-on-your-career-goals";
import CourseProgress from "./components/course-progress";
import CareerGoalsSelector from "./components/career-goals-selector";
import CurrentStreak from "./components/current-streak";
import TrackYourHours from "./components/track-your-hours";

export default function page() {
  return (
    <div>
      <CurrentStreak />
      <TrackYourHours />
      <CareerGoalsSelector />
      <CourseProgress />
      <BasedOnYourCareerGoals />
      <Components />
    </div>
  );
}

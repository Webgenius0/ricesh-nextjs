import Components from "@/app/(home)/components/components";
import React from "react";
import BasedOnYourCareerGoals from "./components/based-on-your-career-goals";
import CourseProgress from "./components/course-progress";
import CareerGoalsSelector from "./components/career-goals-selector";

export default function page() {
  return (
    <div>
      <CareerGoalsSelector />
      <CourseProgress />
      <BasedOnYourCareerGoals />
      <Components />
    </div>
  );
}

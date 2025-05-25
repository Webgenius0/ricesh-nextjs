import CountUpComponent from "@/components/shared/framer-motion/count-up-component";
import React from "react";

export default function CourseProgress() {
  return (
    <section data-aos="fade-up">
      <div className="container">
        <div className="grid grid-cols-4 gap-6 py-10">
          <CountUpComponent
            value={500}
            label="Projects Completed"
            duration={3}
          />
          <CountUpComponent
            value={350}
            label="Courses resitered"
            duration={3}
          />
          <CountUpComponent
            value={50}
            label="Courses in progress"
            duration={3}
          />
          <CountUpComponent
            value={2}
            label="Speechceu.com certification cecourses completed"
            totalCertification={4}
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { animate, useMotionValue, motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function CountUpComponent({
  value,
  label,
  duration = 0.5,
  totalCertification,
}) {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: duration,
      onUpdate: (latest) => {
        setDisplayCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [value, duration]);

  return (
    <Card className="flex items-center py-6 px-[22px] gap-2">
      <motion.h2 className="text-4xl font-bold text-primary">
        <motion.span className="block text-[50px]">
          {totalCertification
            ? `${displayCount}/${totalCertification}`
            : `${displayCount}+`}
        </motion.span>
      </motion.h2>
      <p className="text-base text-primary text-center">{label}</p>
    </Card>
  );
}

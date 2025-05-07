import { cn } from "@/lib/utils";
import React from "react";

const GlobalText = ({ children = "This is Heading" }) => {
  return (
    <span className={cn("text-[32px] font-semibold font-outfit text-white")}>
      {children}
    </span>
  );
};

export default GlobalText;

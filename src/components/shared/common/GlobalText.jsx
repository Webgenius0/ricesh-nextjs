import { cn } from "@/lib/utils";
import React from "react";

const GlobalText = ({ children = "This is Heading", className }) => {
  return (
    <span
      className={cn(
        "text-[32px] font-semibold font-outfit text-white",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GlobalText;

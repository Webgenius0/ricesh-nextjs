import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";

const VerticalBorderedTabs = ({ className, tabs }) => {
  return (
    <Tabs
      defaultValue={tabs[0].value}
      className={cn("w-full flex items-start justify-center gap-2", className)}
    >
      <TabsList className="flex h-auto p-0 divide-y border-4 border-dark-foreground/15 shrink-0">
        {tabs.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className={cn(
              "rounded-none first:rounded-l-md last:rounded-r-md bg-transparent h-10 px-6",
              "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            )}
          >
            <p className="text-base font-normal">{item?.text}</p>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default VerticalBorderedTabs;

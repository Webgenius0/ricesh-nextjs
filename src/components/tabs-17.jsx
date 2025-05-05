import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Bot, Settings, User } from "lucide-react";
import React from "react";

const tabs = [
  {
    value: "start",
    text: "Start",
  },
  {
    value: "skill",
    text: "Skill",
  },
  {
    value: "summit",
    text: "Summit",
  },
];

const VerticalBorderedTabs = () => {
  return (
    <Tabs
      defaultValue={tabs[0].value}
      // orientation="vertical"
      className="w-full flex items-start justify-center gap-2"
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

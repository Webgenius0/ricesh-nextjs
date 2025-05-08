"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const selectOption = [
  { label: "Option A", value: "valueA" },
  { label: "Option B", value: "valueB" },
  { label: "Option C", value: "valueC" },
];

import React from "react";
export default function CareerGoalsSelector() {
  return (
    <section data-aos="fade-up">
      <div className="container mt-8 w-full">
        <div>
          <h4 className="font-outfit text-base font-medium text-foreground">
            Identify 3 career goals
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-3">
          <SelectCareerGoals
            selectOption={selectOption}
            placeholder="Lorem Ipsum"
          />
          <SelectCareerGoals
            selectOption={selectOption}
            placeholder="Lorem Ipsum"
          />
          <SelectCareerGoals />
        </div>
      </div>
    </section>
  );
}

function SelectCareerGoals({ selectOption, placeholder = "Lorem Ipsum" }) {
  const handleValueChange = (value) => {
    console.log("Selected Value:", value);
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-full border-[1px] border-muted-foreground/20 shadow-none !rounded-[8px] !text-base !text-muted-foreground !py-4 !px-3.5 focus-visible:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          {selectOption?.map((option) => (
            <SelectItem
              className="!text-base !text-muted-foreground !py-2 !px-3.5 "
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
          {!selectOption && (
            <SelectLabel className="!text-base !text-muted-foreground/50 !py-2 !px-3.5">
              NO Data
            </SelectLabel>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

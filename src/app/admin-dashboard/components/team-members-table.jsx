"use client";
import ArrowRight from "@/assets/SVG/ArrowRight";
import SearchIcon from "@/assets/SVG/SearchIcon";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const selectOption = [
  { label: "Option A", value: "valueA" },
  { label: "Option B", value: "valueB" },
  { label: "Option C", value: "valueC" },
];

const tableData = [
  {
    name: "Sarah Johnson",
    course: "AI in Speech Therapy",
    progress: "95%",
    timeSpent: "12h 30m",
    dueDate: "2023-10-15",
    modules: [
      {
        title: "Module 1: Introduction to AI",
        status: "Completed",
      },
      {
        title: "Module 2: AI Applications in Therapy",
        status: "Completed",
      },
      {
        title: "Module 3: Case Studies",
        status: "In Progress - 80%",
      },
      {
        title: "Module 4: Ethical Considerations",
        status: "Not Started",
      },
    ],
  },
  {
    name: "Michael Lee",
    course: "Burnout Prevention",
    progress: "80%",
    timeSpent: "10h 45m",
    dueDate: "2023-10-20",
    modules: [
      {
        title: "Module 1: Introduction to AI",
        status: "Completed",
      },
      {
        title: "Module 2: AI Applications in Therapy",
        status: "Completed",
      },
      {
        title: "Module 3: Case Studies",
        status: "In Progress - 80%",
      },
      {
        title: "Module 4: Ethical Considerations",
        status: "Not Started",
      },
    ],
  },
  {
    name: "Emily Davis",
    course: "State Licensure Requirements",
    progress: "60%",
    timeSpent: "8h 15m",
    dueDate: "2023-10-25",
    modules: [
      {
        title: "Module 1: Introduction to AI",
        status: "Completed",
      },
      {
        title: "Module 2: AI Applications in Therapy",
        status: "Completed",
      },
      {
        title: "Module 3: Case Studies",
        status: "In Progress - 80%",
      },
      {
        title: "Module 4: Ethical Considerations",
        status: "Not Started",
      },
    ],
  },
  {
    name: "Emily Davis",
    course: "State Licensure Requirements",
    progress: "100%",
    timeSpent: "15h 00m",
    dueDate: "2023-10-10",
    modules: [
      {
        title: "Module 1: Introduction to AI",
        status: "Completed",
      },
      {
        title: "Module 2: AI Applications in Therapy",
        status: "Completed",
      },
      {
        title: "Module 3: Case Studies",
        status: "In Progress - 80%",
      },
      {
        title: "Module 4: Ethical Considerations",
        status: "Not Started",
      },
    ],
  },
  {
    name: "Emily Davis",
    course: "State Licensure Requirements",
    progress: "45%",
    timeSpent: "6h 30m",
    dueDate: "2023-10-30",
    modules: [
      {
        title: "Module 1: Introduction to AI",
        status: "Completed",
      },
      {
        title: "Module 2: AI Applications in Therapy",
        status: "Completed",
      },
      {
        title: "Module 3: Case Studies",
        status: "In Progress - 80%",
      },
      {
        title: "Module 4: Ethical Considerations",
        status: "Not Started",
      },
    ],
  },
];

export default function TeamMembersTable() {
  return (
    <section>
      <div className="container mb-6">
        <Card className="gap-0 p-6">
          <div className="flex items-center gap-3">
            <div className="w-1/3">
              <TableSearchField />
            </div>
            <div className="flex-1 flex items-center gap-3">
              <TableDropDown
                selectOption={selectOption}
                placeholder="Progress Type"
              />
              <TableDropDown
                selectOption={selectOption}
                placeholder="Progress Type"
              />
              <TableDropDown
                selectOption={selectOption}
                placeholder="Progress Type"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold font-outfit mt-5">
              Team Members
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-6 gap-3 mt-6 bg-[#F0F0F0] text-base font-medium font-outfit px-6 py-2 rounded-t-xl">
              <div>Name</div>
              <div className="col-span-2">Course Assigned</div>
              <div>Progress</div>
              <div>Time Spent</div>
              <div>Completion Date</div>
            </div>
            {tableData.map((data, idx) => (
              <TableRowData key={idx} data={data} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function TableSearchField() {
  return (
    <div className="border-[1px] border-muted-foreground/20 rounded-full overflow-hidden flex items-center justify-between gap-2 p-3">
      <div>
        <SearchIcon />
      </div>
      <Input
        placeholder="Search by Name"
        type="search"
        className="outline-none focus-visible:border-none focus-visible:ring-ring/0 focus-visible:ring-[0px] h-fit shadow-none text-base text-muted-foreground p-0 placeholder:text-foreground border-none rounded-none"
      />
    </div>
  );
}

function TableDropDown({ selectOption, placeholder = "Lorem Ipsum" }) {
  const handleValueChange = (value) => {
    console.log("Selected Value:", value);
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-full border-[1px] border-muted-foreground/20 shadow-none !text-base !text-muted-foreground !p-3 focus-visible:ring-0 rounded-full">
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

import { motion, AnimatePresence } from "framer-motion";

function TableRowData({ data }) {
  const [showModule, setShowModule] = useState(false);

  return (
    <div className="bg-muted">
      <div className="grid grid-cols-6 gap-3 mt-1.5 px-6 py-[18px] items-center">
        <div className="text-foreground text-base font-medium">
          {data?.name}
        </div>
        <div className="col-span-2 text-muted-foreground text-base">
          {data?.course}
        </div>
        <div className="text-muted-foreground text-base">{data?.progress}</div>
        <div className="text-muted-foreground text-base">{data?.timeSpent}</div>
        <div className="text-muted-foreground text-base flex items-center justify-between">
          <div>{data?.dueDate}</div>
          <div
            className={`bg-white rounded-full w-fit p-2 select-none transition-transform duration-300 ${
              showModule && "rotate-180"
            }`}
            onClick={() => setShowModule(!showModule)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
              />
            </svg>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModule && (
          <motion.div
            className="border-t-[1px] border-[#E7E7E9] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-5 space-y-3">
              {data?.modules.map((module, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <div>{module?.title}</div>
                  <div>{module?.status}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

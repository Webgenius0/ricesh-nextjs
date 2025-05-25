"use client";
import SearchIcon from "@/assets/SVG/SearchIcon";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import React, { useState } from "react";

const selectOption = [
  { label: "Option A", value: "valueA" },
  { label: "Option B", value: "valueB" },
  { label: "Option C", value: "valueC" },
];

const tableData = [
  {
    id: 1,
    CourseName: "AI in Speech Therapy",
    Duration: "2h 30m",
    CEUCredits: "0.2 CEU",
    Registrations: "2023-09-15",
    Completions: "2023-09-15",
  },
  {
    id: 2,
    CourseName: "Burnout Prevention",
    Duration: "1h 45m",
    CEUCredits: "0.1 CEU",
    Registrations: "2023-08-20",
    Completions: "2023-08-20",
  },
  {
    id: 3,
    CourseName: "State Licensure Basics",
    Duration: "3h 00m",
    CEUCredits: "0.3 CEU",
    Registrations: "2023-07-10",
    Completions: "2023-07-10",
  },
  {
    id: 4,
    CourseName: "Supervision Techniques",
    Duration: "2h 15m",
    CEUCredits: "0.2 CEU",
    Registrations: "2023-06-25",
    Completions: "2023-06-25",
  },
  {
    id: 5,
    CourseName: "Patient-Centered Care",
    Duration: "1h 30m",
    CEUCredits: "0.1 CEU",
    Registrations: "2023-05-30",
    Completions: "2023-05-30",
  },
];

export default function AssignCourses() {
  const [checkData, setCheckData] = useState([]);
  const handleCheckboxChange = () => {
    setCheckData((prev) =>
      prev.length === tableData.length ? [] : tableData.map((data) => data.id)
    );
  };
  return (
    <section data-aos="fade-up">
      <div className="container mb-[120px] px-5 md:px-8">
        <Card className="gap-0 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <TableSearchField />
            <TableDropDown
              selectOption={selectOption}
              placeholder="Category Type"
            />
            <TableDropDown
              selectOption={selectOption}
              placeholder="Difficulty Level"
            />
            <TableDropDown selectOption={selectOption} placeholder="Duration" />
            <TableDropDown
              selectOption={selectOption}
              placeholder="ASHA CEU Credits"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold font-outfit mt-5">
              Assign Courses
            </h2>
          </div>
          <div className="overflow-x-scroll">
            <div className="w-max lg:w-auto">
              <div className="grid grid-cols-7 gap-3 mt-6 bg-[#F0F0F0] text-base font-medium font-outfit px-6 py-2 rounded-t-xl">
                <div>
                  <CheckBoxField
                    isChecked={checkData.length === tableData.length}
                    handleCheckboxChange={handleCheckboxChange}
                  >
                    Select
                  </CheckBoxField>
                </div>
                <div className="col-span-2">Course Name</div>
                <div>Duration</div>
                <div>CEU Credits</div>
                <div>Registration</div>
                <div>Completions (0/0)</div>
              </div>
              {tableData.map((data, idx) => (
                <TableRowData
                  key={idx}
                  data={data}
                  setCheckData={setCheckData}
                  checkData={checkData}
                />
              ))}
            </div>
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
        placeholder="Search by Course"
        type="search"
        className="outline-none focus-visible:border-none focus-visible:ring-ring/0 focus-visible:ring-[0px] h-fit shadow-none !text-sm md:!text-base text-muted-foreground p-0 placeholder:text-foreground placeholder:text-base border-none rounded-none"
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
      <SelectTrigger className="w-full border-[1px] border-muted-foreground/20 shadow-none !text-sm md:!text-base  !text-muted-foreground !p-3 focus-visible:ring-0 rounded-full">
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

function TableRowData({ data, setCheckData, checkData }) {
  const handleCheckboxChange = () => {
    setCheckData((prev) =>
      prev.includes(data.id)
        ? prev.filter((id) => id !== data.id)
        : [...prev, data.id]
    );
  };
  return (
    <div className="bg-muted">
      <div className="grid grid-cols-7 gap-3 mt-1.5 px-6 py-[18px] items-center">
        <div className="text-foreground text-base font-medium">
          <CheckBoxField
            isChecked={checkData.includes(data.id)}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className="text-muted-foreground text-base col-span-2">
          {data?.CourseName}
        </div>
        <div className="text-muted-foreground text-base">{data?.Duration}</div>
        <div className="text-muted-foreground text-base">
          {data?.CEUCredits}
        </div>
        <div className="text-muted-foreground text-base flex items-center justify-between">
          {data?.Registrations}
        </div>
        <div className="text-muted-foreground text-base flex items-center justify-between">
          {data?.Completions}
        </div>
      </div>
    </div>
  );
}

function CheckBoxField({ children, handleCheckboxChange, isChecked }) {
  return (
    <div className="flex gap-3 items-center">
      <Checkbox
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        className="border-success border-[1.5px] rounded-sm w-5 h-5  data-[state=checked]:border-success data-[state=checked]:bg-success"
      />
      <p className="text-base font-medium font-outfit text-foreground">
        {children}
      </p>
    </div>
  );
}

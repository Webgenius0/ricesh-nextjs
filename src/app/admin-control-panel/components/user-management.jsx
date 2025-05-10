"use client";
import SearchIcon from "@/assets/SVG/SearchIcon";
import SelectedCheck from "@/assets/SVG/SelectedCheck";
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
    CourseName: "Introduction to Audiology",
    Course: "AUD101",
    Registrations: 150,
    Completions: 120,
    CourseEndDate: "12/12/2025",
    ASHAReportComplete: true,
  },
  {
    CourseName: "Advanced Speech Therapy",
    Course: "SLP202",
    Registrations: 90,
    Completions: 80,
    CourseEndDate: "08/12/2025",
    ASHAReportComplete: false,
  },
  {
    CourseName: "Hearing Science",
    Course: "HS303",
    Registrations: 200,
    Completions: 180,
    CourseEndDate: "18/12/2025",
    ASHAReportComplete: false,
  },
  {
    CourseName: "Pediatric Audiology",
    Course: "PA404",
    Registrations: 75,
    Completions: 65,
    CourseEndDate: "08/12/2025",
    ASHAReportComplete: false,
  },
  {
    CourseName: "Voice Disorders",
    Course: "VD505",
    Registrations: 110,
    Completions: 95,
    CourseEndDate: "09/12/2025",
    ASHAReportComplete: false,
  },
];

export default function UserManagement() {
  return (
    <section data-aos="fade-up">
      <div className="container mb-[120px]">
        <Card className="gap-0 p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="text-2xl font-semibold font-outfit mt-5">
                User Management
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <TableSearchField />
              <TableDropDown
                selectOption={selectOption}
                placeholder="Pending"
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-7 gap-3 mt-6 bg-[#F0F0F0] text-base font-medium font-outfit px-6 py-2 rounded-t-xl">
              <div className="col-span-2">Course Name</div>
              <div>Course #</div>
              <div>Registrations</div>
              <div>Completions</div>
              <div>Course end date</div>
              <div>ASHA Report Complete</div>
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
        placeholder="Search by Course"
        type="search"
        className="outline-none focus-visible:border-none focus-visible:ring-ring/0 focus-visible:ring-[0px] h-fit shadow-none text-base text-muted-foreground p-0 placeholder:text-foreground placeholder:text-base border-none rounded-none"
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

function TableRowData({ data }) {
  return (
    <div className="bg-muted">
      <div className="grid grid-cols-7 gap-3 mt-1.5 px-6 py-[18px] items-center">
        <div className="text-muted-foreground text-base col-span-2">
          {data?.CourseName}
        </div>
        <div className="text-muted-foreground text-base">{data?.Course}</div>
        <div className="text-muted-foreground text-base">
          {data?.Registrations}
        </div>
        <div className="text-muted-foreground text-base">
          {data?.Completions}
        </div>
        <div className="text-muted-foreground text-base flex items-center justify-between">
          {data?.CourseEndDate}
        </div>
        <div className="text-muted-foreground text-base flex items-center justify-between">
          <div className={`${data?.ASHAReportComplete && "text-success"}`}>
            <SelectedCheck />
          </div>
        </div>
      </div>
    </div>
  );
}

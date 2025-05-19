"use client";
import DownloadIcon1 from "@/assets/SVG/DownloadIcon1";
import SearchIcon from "@/assets/SVG/SearchIcon";
import SelectedCheck from "@/assets/SVG/SelectedCheck";
import { Button } from "@/components/ui/button";
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
      <div className="container mb-[120px] px-5 md:px-8">
        <Card className="gap-0 p-4 md:p-6">
          <div className="flex lg:items-center justify-between flex-col lg:flex-row w-full">
            <div>
              <h2 className=" text-xl md:text-2xl font-semibold font-outfit mt-5">
                User Management
              </h2>
            </div>
            <div className="flex items-center flex-row justify-between gap-3 mt-3 lg:mt-0 flex-wrap">
              <TableSearchField />
              <div className="flex items-center gap-3 flex-wrap flex-1">
                <div className="flex items-center gap-3 flex-1">
                  <p className="text-base">Filter:</p>
                  <TableDropDown
                    selectOption={selectOption}
                    placeholder="Pending"
                  />
                </div>
                <Button variant={"outline"} className="rounded-[8px] !h-fit">
                  <DownloadIcon1 /> Download
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <div className="w-max lg:w-auto">
              <div className="grid grid-cols-6 md:grid-cols-7 gap-3 mt-6 bg-[#F0F0F0] text-base font-medium font-outfit px-3.5 md:px-6 py-2 rounded-t-xl">
                <div className="md:col-span-2">Course Name</div>
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
          </div>
        </Card>
      </div>
    </section>
  );
}

function TableSearchField() {
  return (
    <div className="border-[1px] border-muted-foreground/20 rounded-[8px] overflow-hidden flex items-center justify-between gap-2 p-1 md:p-2 lg:p-3 lg:max-w-[200px] bg-muted-foreground/5">
      <div>
        <SearchIcon />
      </div>
      <Input
        placeholder="Search"
        type="search"
        className="outline-none focus-visible:border-none focus-visible:ring-ring/0 focus-visible:ring-[0px] h-fit shadow-none text-base text-muted-foreground p-0 placeholder:text-foreground placeholder:text-base border-none rounded-none hidden md:block "
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
      <SelectTrigger className="w-full md:min-w-[200px] border-[1px] border-muted-foreground/20 shadow-none text-sm md:!text-base !text-muted-foreground p-2 lg:!p-3 focus-visible:ring-0 rounded-[8px] bg-muted-foreground/5">
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
      <div className="grid grid-cols-6 md:grid-cols-7 gap-3 mt-1.5 px-3.5 md:px-6 py-[18px] items-center">
        <div className="text-muted-foreground text-base md:col-span-2">
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
        <div className="text-muted-foreground text-base flex items-center justify-center md:justify-between">
          <div className={`${data?.ASHAReportComplete && "text-success"}`}>
            <SelectedCheck />
          </div>
        </div>
      </div>
    </div>
  );
}

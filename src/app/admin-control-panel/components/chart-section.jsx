"use client";
import React from "react";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "CA", users: 130, recruiters: 1430 },
  { month: "TX", users: 955, recruiters: 780 },
  { month: "FL", users: 439, recruiters: 1340 },
  { month: "NY", users: 334, recruiters: 430 },
  { month: "IL", users: 840, recruiters: 330 },
  { month: "IL", users: 430, recruiters: 430 },
  { month: "IL", users: 230, recruiters: 330 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "#4C4CFF",
  },
  recruiters: {
    label: "Recruiters",
    color: "#4CA64C",
  },
};

export default function ChartSection() {
  return (
    <section>
      <div className="container my-6">
        <div className="flex items-center gap-6">
          <div className="flex-1"  data-aos="fade-up">
            <CourseAndSurveyManagementChart />
          </div>
          <div className="w-1/3"  data-aos="fade-up">
            <CourseAndSurveyManagementChart />
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseAndSurveyManagementChart() {
  return (
    <Card className="w- p-6 gap-0">
      <CardHeader className="p-0">
        <div>
          <CardTitle className="text-2xl font-semibold font-outfit">
            Course & Survey Management
          </CardTitle>
        </div>
        <div className="flex items-center justify-end gap-4 mb-2">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#4C4CFF" }}
            ></div>
            <span className="text-sm font-medium">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#4CA64C" }}
            ></div>
            <span className="text-sm font-medium">Recruiters</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 -ml-6">
        <ChartContainer
          config={chartConfig}
          className="w-full [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[#E4E4E4]"
          style={{ height: "300px", maxHeight: "300px" }}
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            barCategoryGap={70}
            width={800}
            height={300}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              domain={[0, "auto"]}
              tickCount={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="users" fill="#4C4CFF" radius={0} barSize={32} />
            <Bar dataKey="recruiters" fill="#4CA64C" radius={0} barSize={32} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

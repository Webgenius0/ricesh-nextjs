"use client";
import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "CA", users: 1430, recruiters: 1430 },
  { month: "TX", users: 955, recruiters: 780 },
  { month: "FL", users: 439, recruiters: 1340 },
  { month: "NY", users: 334, recruiters: 430 },
  { month: "IL", users: 840, recruiters: 330 },
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
      <div className="container my-6 px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 w-full h-full" data-aos="fade-up">
            <CourseAndSurveyManagementChart />
          </div>
          <div className="w-full lg:w-1/3 h-full" data-aos="fade-up">
            <DonutChart />
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseAndSurveyManagementChart() {
  return (
    <Card className="p-6 gap-0 !h-full">
      <CardHeader className="p-0">
        <div>
          <CardTitle className="text-xl md:text-2xl font-semibold font-outfit">
            Course & Survey Management
          </CardTitle>
        </div>
        <div className="flex items-center justify-end gap-4 mb-2">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#4C4CFF" }}
            ></div>
            <span className="text-xs md:text-sm font-medium">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#4CA64C" }}
            ></div>
            <span className="text-xs md:text-sm font-medium">Recruiters</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 -ml-6">
        <ChartContainer
          config={chartConfig}
          className="w-full [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[#E4E4E4]"
          style={{ maxHeight: "300px" }}
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

const DonutChartData = [
  { browser: "Completed", visitors: 275, fill: "#3041FF" },
  { browser: "In Progress", visitors: 200, fill: "#FFA628" },
  { browser: "Pending", visitors: 287, fill: "#2ABB66" },
];

const DonutChartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function DonutChart() {
  const totalVisitors = React.useMemo(() => {
    return DonutChartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col !h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl md:text-2xl">Pie Chart - Donut with Text</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={DonutChartConfig}
          className="mx-auto aspect-square"
          style={{ maxHeight: "300px" }}
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={DonutChartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl md:text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}K
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Count
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {DonutChartData?.map((data, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3"
                    style={{ background: data.fill }}
                  ></div>
                  <span className="text-sm font-poppins">{data.browser}</span>
                </div>
              </div>
            ))}
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

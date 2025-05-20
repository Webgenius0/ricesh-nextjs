"use client"; // Add this at the top

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { month: "Applied", users: 1430, color: "#00C2C7" },
  { month: "Shortlisted", users: 955, color: "#00A814" },
  { month: "Interviewed", users: 439, color: "#5283FF" },
  { month: "Hired", users: 334, color: "#FFA136" },
  { month: "Rejected", users: 840, color: "#5283FF" },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "#4C4CFF",
  },
};

export default function Candidate() {
  return (
    <section>
      <div className="container px-5 md:px-8 my-5">
        <Card className="p-4 md:px-6 md:py-5 gap-0">
          <h5 className="font-semibold text-xl font-outfit text-foreground mb-6">
            Candidate
          </h5>
          <VerticalChart />
        </Card>
      </div>
    </section>
  );
}

function VerticalChart() {
  return (
    <CardContent className="px-0">
      <ChartContainer
        config={chartConfig}
        className="w-full [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[#E4E4E4]"
        style={{ maxHeight: "300px" }}
      >
        <BarChart
          layout="vertical"
          data={chartData}
          barCategoryGap={20}
          width={800}
          height={300}
          margin={{ left: 30 }}
        >
          <CartesianGrid vertical={false} horizontal={false} />

          <XAxis
            type="number"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            domain={["auto", "auto"]}
          />

          <YAxis
            type="category"
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />

          <Bar dataKey="users" fill="#4C4CFF" radius={0} barSize={20}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="users"
              position="right"
              style={{ fill: "#333", fontSize: 12, fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </CardContent>
  );
}

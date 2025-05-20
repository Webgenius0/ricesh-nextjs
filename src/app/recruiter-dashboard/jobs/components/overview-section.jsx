import CalendarCheckIcon from "@/assets/SVG/CalendarCheckIcon";
import ClipboardTickIcon from "@/assets/SVG/ClipboardTickIcon";
import SecurityBag from "@/assets/SVG/SecurityBag";
import TaskSquareIcon from "@/assets/SVG/TaskSquareIcon";
import { Card } from "@/components/ui/card";

const CardInfo = [
  {
    name: "totalJobs",
    value: 24,
    color: "primary",
    icon: <SecurityBag />,
    description: "Total Jobs",
  },
  {
    name: "activeJobs",
    value: 8,
    color: "success",
    icon: <ClipboardTickIcon />,
    description: "Active Jobs",
  },
  {
    name: "totalApplicants",
    value: 1250,
    color: "info",
    icon: <TaskSquareIcon />,
    description: "Total Applicants",
  },
  {
    name: "interviewsScheduled",
    value: 14,
    color: "warning",
    icon: <CalendarCheckIcon />,
    description: "Interviews Scheduled",
  },
];

export default function OverviewSection() {
  return (
    <section>
      <div className="container px-5 md:px-8 mt-8 mb-6">
        <Card className="p-4 md:px-6 md:py-5 gap-0">
          <h5 className="font-semibold text-xl font-outfit">Overview</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
            {CardInfo?.map((data, idx) => (
              <CourseCard key={idx} data={data} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function CourseCard({ data }) {
  const bgColorClasses = {
    primary: "bg-primary",
    info: "bg-info",
    success: "bg-success",
    warning: "bg-warning",
  };
  const textColorClasses = {
    primary: "text-primary",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
  };
  return (
    <div
      className={`${
        bgColorClasses[data?.color]
      } py-5 px-4 md:p-6 rounded-2xl flex items-center gap-3`}
    >
      <div
        className={`${
          textColorClasses[data?.color]
        } bg-white w-fit p-3.5 rounded-full`}
      >
        {data?.icon}
      </div>
      <div>
        <h4 className="text-xl md:text-2xl font-semibold font-outfit text-white">
          {data?.value &&
            (Number(data.value) < 100
              ? String(data.value).padStart(2, "0")
              : Number(data.value).toLocaleString("en-US"))}
        </h4>
        <p className="text-sm md:text-base text-white">{data?.description}</p>
      </div>
    </div>
  );
}

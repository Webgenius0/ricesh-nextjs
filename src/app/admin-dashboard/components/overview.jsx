import TeamIcon from "@/assets/SVG/TeamIcon";
import ListIcon from "@/assets/SVG/ListIcon";
import ListCheckIcon from "@/assets/SVG/ListCheckIcon";
import AnalogWatchIcon from "@/assets/SVG/AnalogWatchIcon";
import { Card } from "@/components/ui/card";

const CardInfo = [
  {
    name: "totalTeamMembers",
    value: 45,
    color: "primary",
    icon: <TeamIcon />,
    description: "Total Team Members",
  },
  {
    name: "coursesAssigned",
    value: 120,
    color: "info",
    icon: <ListIcon />,
    description: "Courses Assigned",
  },
  {
    name: "coursesCompleted",
    value: 85,
    color: "success",
    icon: <ListCheckIcon />,
    description: "Courses Completed",
  },
  {
    name: "coursesInProgress",
    value: 35,
    color: "warning",
    icon: <AnalogWatchIcon />,
    description: "Courses In Progress",
  },
];

export default function Overview() {
  return (
    <section>
      <div className="container mb-6">
        <Card className="px-6 py-5 gap-0">
          <h5 className="font-semibold text-xl font-outfit">Overview</h5>
          <div className="grid grid-cols-4 gap-4 mt-5">
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
    primary: "bg-primary/10",
    info: "bg-info/10",
    success: "bg-success/10",
    warning: "bg-warning/10",
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
      } p-6 rounded-2xl flex items-center gap-3`}
    >
      <div
        className={`${
          textColorClasses[data?.color]
        } bg-white w-fit p-3.5 rounded-full`}
      >
        {data?.icon}
      </div>
      <div>
        <h4 className="text-2xl font-semibold font-outfit text-foreground">
          {data?.value}
        </h4>
        <p className="text-base text-muted-foreground">{data?.description}</p>
      </div>
    </div>
  );
}

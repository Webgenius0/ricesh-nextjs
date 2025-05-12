import TeamIcon from "@/assets/SVG/TeamIcon";
import ListIcon from "@/assets/SVG/ListIcon";
import ListCheckIcon from "@/assets/SVG/ListCheckIcon";
import AnalogWatchIcon from "@/assets/SVG/AnalogWatchIcon";
import { Card } from "@/components/ui/card";

const CardInfo = [
  {
    name: "totalTeamMembers",
    value: 584,
    color: "primary",
    icon: <TeamIcon />,
    description: "Total User",
  },
  {
    name: "coursesAssigned",
    value: 25,
    color: "info",
    icon: <ListIcon />,
    description: "Active Certifications",
  },
  {
    name: "coursesInProgress",
    value: 652,
    color: "warning",
    icon: <AnalogWatchIcon />,
    description: "Pending Renewals",
  },
  {
    name: "coursesCompleted",
    value: 32,
    color: "success",
    icon: <ListCheckIcon />,
    description: "Completed Courses",
  },
];

export default function AdminControlPanelTopSection() {
  return (
    <section data-aos="fade-up">
      <div className="container mb-6">
        <Card className="p-5 gap-0">
          <div className="grid grid-cols-4 gap-4">
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

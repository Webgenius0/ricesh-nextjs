import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tableData = [
  {
    id: 1,
    jobs: "Speech Pathologist",
    deptCompany: "Bakers ISD",
    status: true,
    totalApplicants: 125,
    shortlisted: 12,
    action: "View",
  },
  {
    id: 2,
    jobs: "Speech Pathologist",
    deptCompany: "Ocean Therapy",
    status: false,
    totalApplicants: 85,
    shortlisted: 8,
    action: "View",
  },
  {
    id: 3,
    jobs: "Speech Pathologist",
    deptCompany: "Therapy Inc.",
    status: true,
    totalApplicants: 98,
    shortlisted: 10,
    action: "View",
  },
];

export default function JobsSummary() {
  return (
    <section>
      <div className="container px-5 md:px-8 my-5">
        <Card className="p-4 md:px-6 md:py-5 gap-0">
          <h5 className="font-semibold text-xl font-outfit text-foreground">
            Jobs Summary
          </h5>
          <div className="overflow-x-scroll md:overflow-auto">
            <div className="w-max lg:w-auto">
              <div className="grid grid-cols-6 gap-3 mt-6 bg-[#F0F0F0] text-base font-medium font-outfit px-6 py-2 rounded-t-xl">
                <div className="">Jobs</div>
                <div>Dept/Company</div>
                <div>Status</div>
                <div>Total Applicants</div>
                <div>Shortlisted</div>
                <div className="text-center">Action</div>
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

function TableRowData({ data }) {
  return (
    <div className="bg-muted">
      <div className="grid grid-cols-6 gap-3 mt-1.5 px-6 py-[18px] items-center">
        <div className="text-foreground text-base font-medium">
          {data?.jobs}
        </div>
        <div className="text-muted-foreground text-base ">
          {data?.deptCompany}
        </div>
        <div
          className={`text-muted-foreground text-base ${
            data?.status ? "text-success" : "text-red-400"
          }`}
        >
          {data?.status ? "Active" : "Closed"}
        </div>
        <div className="text-muted-foreground text-base">
          {data?.totalApplicants}
        </div>
        <div className="text-muted-foreground text-base flex items-center justify-between">
          {data?.shortlisted}
        </div>
        <div className="text-muted-foreground text-base text-center">
          <Button size="sm" variant={"light"} className="py-2 px-3 !h-auto">
            {data?.action}
          </Button>
        </div>
      </div>
    </div>
  );
}

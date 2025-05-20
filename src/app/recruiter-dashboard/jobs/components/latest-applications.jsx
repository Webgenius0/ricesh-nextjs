import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tableData = [
  {
    id: 1,
    Candidate: "Speech Pathologist",
    Position: "SLP",
    Status: "Shortlisted",
    Action: "Schedule Interview",
  },
  {
    id: 2,
    Candidate: "Speech Pathologist",
    Position: "SLP",
    Status: "Applied",
    Action: "Review",
  },
  {
    id: 3,
    Candidate: "Speech Pathologist",
    Position: "SLP",
    Status: "Interviewed",
    Action: "Feedback",
  },
];

export default function LatestApplications() {
  return (
    <section>
      <div className="container px-5 md:px-8 my-5">
        <Card className="p-4 md:px-6 md:py-5 gap-0">
          <h5 className="font-semibold text-xl font-outfit text-foreground">
            Latest Applications
          </h5>
          <div className="overflow-x-scroll md:overflow-auto">
            <div className="w-max lg:w-auto">
              <div className="grid grid-cols-4 gap-3 mt-6 bg-[#F0F0F0] text-base font-medium font-outfit px-6 py-2 rounded-t-xl">
                <div className="">Candidate</div>
                <div>Position</div>
                <div>Status</div>
                <div>Action</div>
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
  const positionColor = {
    Shortlisted: "text-success",
    Applied: "text-primary",
    Interviewed: "text-warning",
  };
  const actionColor = {
    "Schedule Interview": "text-success bg-success/10",
    Review: "text-primary bg-primary/10",
    Feedback: "text-warning bg-warning/10",
  };
  return (
    <div className="bg-muted">
      <div className="grid grid-cols-4 gap-3 mt-1.5 px-6 py-[18px] items-center">
        <div className="text-foreground text-base font-medium">
          {data?.Candidate}
        </div>
        <div className="text-muted-foreground text-base ">{data?.Position}</div>
        <div
          className={`text-muted-foreground text-base ${
            positionColor[data?.Status]
          }`}
        >
          {data?.Status}
        </div>
        <div>
          <Button
            size="sm"
            variant={"light"}
            className={`text-muted-foreground text-base py-2 px-3 !h-auto ${
              actionColor[data?.Action]
            }`}
          >
            {data?.Action}
          </Button>
        </div>
      </div>
    </div>
  );
}

import Overview from "@/app/admin-dashboard/components/overview";
import OverviewSection from "./components/overview-section";
import JobsSummary from "./components/jobs-summary";

export default function page() {
  return (
    <div>
      <OverviewSection />
      <JobsSummary />
    </div>
  );
}

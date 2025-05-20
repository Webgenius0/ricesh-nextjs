import Overview from "@/app/admin-dashboard/components/overview";
import OverviewSection from "./components/overview-section";
import JobsSummary from "./components/jobs-summary";
import LatestApplications from "./components/latest-applications";

export default function page() {
  return (
    <div>
      <OverviewSection />
      <JobsSummary />
      <LatestApplications />
    </div>
  );
}

import OverviewSection from "./components/overview-section";
import JobsSummary from "./components/jobs-summary";
import LatestApplications from "./components/latest-applications";
import Candidate from "./components/candidate";

export default function page() {
  return (
    <div>
      <OverviewSection />
      <JobsSummary />
      <Candidate />
      <LatestApplications />
    </div>
  );
}

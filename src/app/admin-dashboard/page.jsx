import Overview from "./components/overview";
import TeamMembersTable from "./components/team-members-table";
import TopButtonSection from "./components/top-button-section";

export default function page() {
  return (
    <div>
      <TopButtonSection />
      <Overview />
      <TeamMembersTable />
    </div>
  );
}

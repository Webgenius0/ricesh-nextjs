import DashboardNavbar from "@/app/recruiter-dashboard/components/dashboard-navbar";

export default function MyDashboardLayout({ children }) {
  return (
    <>
      <DashboardNavbar/>
      {children}
    </>
  );
}

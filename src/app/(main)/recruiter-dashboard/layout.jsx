import DashboardNavbar from "./components/dashboard-navbar";

export default function MyDashboardLayout({ children }) {
  return (
    <>
      <DashboardNavbar/>
      {children}
    </>
  );
}

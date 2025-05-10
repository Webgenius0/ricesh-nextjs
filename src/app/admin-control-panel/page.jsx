import AdminControlPanelHeader from "./components/admin-control-panel-header";
import AdminControlPanelTopSection from "./components/admin-control-panel-top-section";
import ChartSection from "./components/chart-section";
import UserManagement from "./components/user-management";

export default function page() {
  return (
    <div>
      <AdminControlPanelHeader />
      <AdminControlPanelTopSection />
      <ChartSection />
      <UserManagement />
    </div>
  );
}

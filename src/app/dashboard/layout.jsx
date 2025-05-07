import Navbar from "./components/navbar";

export default function MyDashboardLayout({ children }) {
  return (
      <>
        <Navbar />
        {children}
      </>
  );
}

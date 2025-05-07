import Navbar from "./components/navbar";

export default function MyDashboardLayout({ children }) {
  return (
    <section>
      <div>
        <Navbar />
        {children}
      </div>
    </section>
  );
}

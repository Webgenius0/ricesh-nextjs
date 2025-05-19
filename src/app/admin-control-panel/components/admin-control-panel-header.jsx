export default function AdminControlPanelHeader() {
  return (
    <section className="bg-dark">
      <div className="container py-6 mb-8 px-5 md:px-8">
        <h2 className="text-xl md:text-2xl lg:text-[32px] font-semibold font-outfit text-white">
          Admin Control Panel
        </h2>
        <p className="text-xs md:text-sm lg:text-base md:font-medium mt-2.5 text-dark-foreground">
          Manage user certifications, track progress, and oversee compliance.
        </p>
      </div>
    </section>
  );
}

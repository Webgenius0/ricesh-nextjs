import DownLoadIcon from "@/assets/SVG/DownLoadIcon";
import Eye from "@/assets/SVG/Eye";
import PlusIcon from "@/assets/SVG/PlusIcon";
import TeamIcon from "@/assets/SVG/TeamIcon";
import { Button } from "@/components/ui/button";

export default function TopButtonSection() {
  return (
    <section data-aos="fade-up">
      <div className="container mt-[26px] mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-semibold font-outfit text-foreground">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button className="flex items-center gap-2 !px-6 bg-transparent border-[1px] border-primary hover:bg-primary text-primary hover:text-white">
              <PlusIcon />
              Assign New Course
            </Button>
            <Button className="flex items-center gap-2 !px-6 bg-transparent border-[1px] border-primary hover:bg-primary text-primary hover:text-white">
              <Eye /> View Reports
            </Button>
            <Button className="flex items-center gap-2 !px-6 bg-transparent border-[1px] border-primary hover:bg-primary text-primary hover:text-white">
              <TeamIcon /> Manage Team
            </Button>
            <Button className="flex items-center gap-2 !px-6 bg-transparent border-[1px] border-primary hover:bg-primary text-primary hover:text-white">
              <DownLoadIcon /> Import New User
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

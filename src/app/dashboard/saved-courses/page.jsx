import Components from "@/app/(home)/components/components";
import GlobalText from "@/components/shared/common/GlobalText";

export default function page() {
  return (
    <div>
      <GlobalText className={"text-foreground"}>
        This Section Is A Saved Courses
      </GlobalText>
      <Components />
    </div>
  );
}

import Components from "@/app/(home)/components/components";
import { GlobalText } from "@/components/shared/common/GlobalText";

export default function page() {
  return (
    <div>
      <GlobalText className={"text-foreground"}>This Section Is My Resume</GlobalText>
      <Components />
    </div>
  );
}

import { GlobalText } from "@/components/shared/common/GlobalText";
import Components from "../../(home)/components/components";

export default function page() {
  return (
    <div>
      <GlobalText className={"text-foreground"}>This Section Is My Resume</GlobalText>
      <Components />
    </div>
  );
}

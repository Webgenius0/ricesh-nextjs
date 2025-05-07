import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("font-outfit transition-all", {
  variants: {
    variant: {
      default: "text-white font-semibold",
      primary: "text-primary font-bold",
      secondary: "text-secondary font-medium",
      muted: "text-muted font-normal",
      foreground: "text-foreground font-semibold",
      mutedForeground: "text-muted-foreground font-thin",
    },
    size: {
      default: "text-[32px]",
      sm: "text-[16px]",
      lg: "text-[48px]",
      xl: "text-[64px]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "semibold",
  },
});

function GlobalText({
  className,
  variant,
  size,
  weight,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(textVariants({ variant, size, weight, className }))}
      {...props}
    />
  );
}

export { GlobalText, textVariants };

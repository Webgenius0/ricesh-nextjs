"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/education",
    label: "Continuing Education",
  },
  {
    path: "/career",
    label: "Career Center",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

const transparentRoutes = ["/", "/continuing-education"];

export default function Navbar() {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState("transparent");
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    if (!transparentRoutes.includes(pathname)) {
      setBgColor("white");
    } else {
      setBgColor("transparent");
    }

    const changeBackground = () => {
      if (!transparentRoutes.includes(pathname)) {
        setBgColor("white");
      } else if (window.scrollY >= window.innerHeight * 0.8 - 88) {
        setBgColor("white");
      } else if (window.scrollY >= 100) {
        setBgColor("semi-transparent");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={cn(
        "transition-top duration-300 sticky mt-10 md:mt-[60px] top-0 z-20 bg-transparent h-[60px] md:h-[88px] flex items-center",
        {
          "top-10 md:top-[60px]": visible,
          "top-0": !visible && !pathname.includes("/dashboard"),
          "-top-[148px]": !visible && pathname.includes("/dashboard"),
          "bg-background": bgColor === "white",
          "backdrop-blur-sm": bgColor === "semi-transparent",
        }
      )}
    >
      <div className="container px-5 md:px-8 flex justify-between items-center">
        <div className="flex gap-3 md:gap-[72px] items-center">
          <div className="space-y-1 group w-6 h-6 flex flex-col items-center justify-center overflow-hidden cursor-pointer md:hidden">
            <div
              className={cn(
                "h-0.5 rounded-full w-[20px] bg-white transition-all duration-500 group-hover:rotate-45 group-hover:translate-y-[6px]",
                {
                  "bg-foreground": bgColor === "white",
                }
              )}
            ></div>
            <div
              className={cn(
                "h-0.5 rounded-full w-[20px] bg-white transition-all duration-300 group-hover:w-0 group-hover:opacity-0",
                {
                  "bg-foreground": bgColor === "white",
                }
              )}
            ></div>
            <div
              className={cn(
                "h-0.5 rounded-full w-[20px] bg-white transition-all duration-500 group-hover:-rotate-45 group-hover:-translate-y-[6px]",
                {
                  "bg-foreground": bgColor === "white",
                }
              )}
            ></div>
          </div>
          {/* Logo */}
          <Link href="/">
            <h2
              className={cn(
                "font-semibold text-xs md:text-[26px] leading-[100%] tracking-[0%] text-foreground",
                {
                  "text-background":
                    bgColor === "semi-transparent" || bgColor === "transparent",
                }
              )}
            >
              Speechceu.com
            </h2>
          </Link>
          {/* Links For Desktop & Large Screens & Tablets */}
          <div className="hidden md:flex gap-5 items-center">
            {links.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={cn("font-normal text-base leading-6 tracking-[0%]", {
                  "text-dark-foreground":
                    bgColor === "transparent" || bgColor === "semi-transparent",
                  "text-primary underline underline-offset-4":
                    pathname === item.path,
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Button
          variant={bgColor === "white" ? "default" : "secondary"}
          size="sm"
          className="text-xs md:text-base h-8 md:h-auto font-normal md:font-medium"
        >
          Join now
        </Button>
      </div>
    </nav>
  );
}

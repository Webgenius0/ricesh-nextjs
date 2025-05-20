"use client";
import { GlobalText } from "@/components/shared/common/GlobalText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const dashboardNavLinks = [
  {
    text: "Jobs",
    link: "/recruiter-dashboard/jobs",
  },
  {
    text: "Candidates",
    link: "/recruiter-dashboard/candidates",
  },
  {
    text: "Interviews",
    link: "/recruiter-dashboard/interviews",
  },
  {
    text: "Analytics",
    link: "/recruiter-dashboard/analytics",
  },
  {
    text: "Settings",
    link: "/recruiter-dashboard/settings",
  },
];

export default function DashboardNavbar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(0 >= currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`w-full`}
      style={{ height: `${148 - prevScrollPos * 0.2}px` }}
    >
      <div
        className={cn("bg-dark fixed w-full z-30 transition-top duration-300", {
          "top-[148px]": visible,
          "top-[0px]": !visible,
        })}
      >
        <div className="container flex items-center justify-between pt-6">
          <div className="flex flex-col justify-between gap-4">
            <GlobalText>Dashboard</GlobalText>
            <div className="flex gap-8 mt-5">
              {dashboardNavLinks?.map((info, idx) => (
                <Link
                  key={idx}
                  className={cn(
                    "text-dark-foreground text-base font-medium pb-2.5",
                    pathname === info?.link && "border-b-4"
                  )}
                  href={info?.link}
                >
                  {info?.text}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Button>Post Job</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

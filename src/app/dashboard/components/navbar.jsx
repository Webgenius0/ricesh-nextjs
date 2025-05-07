"use client";
import GlobalText from "@/components/shared/common/GlobalText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const dashboardNavLinks = [
  {
    text: "All courses",
    link: "/dashboard/all-courses",
  },
  {
    text: "Saved Courses",
    link: "/dashboard/saved-courses",
  },
  {
    text: "My jobs",
    link: "/dashboard/my-jobs",
  },
  {
    text: "My resume",
    link: "/dashboard/my-resume",
  },
  {
    text: "Account settings",
    link: "/dashboard/account-settings",
  },
  {
    text: "Member perks",
    link: "/dashboard/member-perks",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log("currentScrollPos", currentScrollPos);

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
            <GlobalText>My Dashboard</GlobalText>
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
            <Button variant="secondary">Recruiter Dashboard</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

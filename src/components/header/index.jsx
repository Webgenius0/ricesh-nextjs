"use client";

import { cn } from "@/lib/utils";
import { MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/faq",
    label: "FAQ",
  },
  {
    path: "/contact-us",
    label: "Contact Us",
  },
];

const info = [
  {
    icon: MailIcon,
    text: "needhelp@gmail.com",
  },
  {
    icon: MapPinIcon,
    text: "6365 Elgin St. Celina, 10245",
  },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Hide navbar on scroll down and show on scroll up
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
    <header
      className={cn(
        "transition-top duration-300 fixed top-0 z-30 h-[60px] w-full bg-dark text-dark-foreground flex items-center font-poppins",
        {
          "top-0": visible,
          "top-[-64px]": !visible,
        }
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex gap-[22px]">
          {links.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="font-normal text-sm leading-[100%] tracking-[0%]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {info.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="size-5" />
              <span className="font-normal text-sm leading-[100%] tracking-[0%]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

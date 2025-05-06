import Facebook from "@/assets/SVG/Facebook";
import Instagram from "@/assets/SVG/Instagram";
import LikedIn from "@/assets/SVG/LikedIn";
import WhatsApp from "@/assets/SVG/WhatsApp";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/",
  },
  {
    name: "WhatsApp",
    icon: <WhatsApp />,
    link: "https://www.whatsapp.com/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: <LikedIn />,
    link: "https://www.linkedin.com/",
  },
];
export default function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="container flex gap-x-20 py-16">
        <div className="flex-1">
          <h5 className="font-outfit font-semibold text-[26px] leading-[72px] tracking-[0%] text-white">
            Speechceu.com
          </h5>
          <p className="text-base leading-[24px] text-white/65">
            Affordable, expert-led continuing education for Speech-Language
            professionals. Earn ASHA CEUs and advance your career today, Quick
            Links For Employers Legal Continuing
          </p>
        </div>
        <div className="flex justify-between w-3/5">
          <QuickLinks
            title="Quick Links"
            links={[
              { label: "Continuing Education", href: "#" },
              { label: "Career Center", href: "#" },
              { label: "Why SpeechCEU?", href: "#" },
              { label: "Blog", href: "#" },
              { label: "FAQ", href: "#" },
              { label: "Contact Us", href: "#" },
            ]}
          />
          <QuickLinks
            title="For Employers"
            links={[
              { label: "Post a Job", href: "#" },
              { label: "Employer Dashboard", href: "#" },
            ]}
          />
          <QuickLinks
            title="Legal"
            links={[
              { label: "Terms & Conditions", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Legal Notices", href: "#" },
              { label: "Cookie Preferences", href: "#" },
            ]}
          />
        </div>
      </div>
      <div className="w-full bg-dark-foreground/35 h-[1px]"></div>
      <div className="container flex gap-x-20 justify-between items-center py-10">
        <div className="w-1/2">
          <p className="text-base leading-[24px] text-white">
            Copyright © {new Date().getFullYear()} SpeechCEU All rights
            reserved.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-end gap-x-4">
          {socialMediaLinks?.map((info, idx) => (
            <a
              key={idx}
              href={info?.link}
              className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center"
            >
              <div className="!w-6 !text-white">{info?.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function QuickLinks({ title = "Quick Links", links = [] }) {
  return (
    <div>
      <h5 className="font-outfit font-semibold text-xl leading-[72px] tracking-[0%] text-white">
        {title}
      </h5>
      <ul className="space-y-4 mt-6">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="text-lg leading-[24px] text-white/65 hover:underline"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

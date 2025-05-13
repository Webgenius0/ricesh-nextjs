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
    <footer className="bg-foreground" data-aos="fade-up">
      <div className="container lg:flex justify-between gap-y-7 lg:gap-x-20 py-16 grid grid-cols-3 px-5 md:px-8">
        <div className="lg:w-1/3 col-span-2 lg:col-span-1 w-4/5">
          <h5 className="font-outfit font-semibold text-lg md:text-xl lg:text-[26px] lg:leading-[72px] tracking-[0%] text-white mb-3">
            Speechceu.com
          </h5>
          <p className="text-xs md:text-sm lg:text-base lg:leading-[24px] text-white/65">
            Affordable, expert-led continuing education for Speech-Language
            professionals. Earn ASHA CEUS and advance your career today.
          </p>
        </div>
        <QuickLinks
          title="Quick Links"
          className={"hidden lg:block"}
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
          title="Quick Links"
          className={"lg:hidden block col-span-2"}
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
          title="Legal"
          links={[
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Legal Notices", href: "#" },
            { label: "Cookie Preferences", href: "#" },
          ]}
        />
        {/* <div className="flex justify-between w-3/5"></div> */}
      </div>
      <div className="w-full bg-dark-foreground/35 h-[1px]"></div>
      <div className="container flex md:gap-x-20 justify-between items-center py-10 px-5 md:px-8">
        <div className="md:w-4/5 lg:w-1/2">
          <p className="text-[10px] md:text-sm lg:text-base leading-[24px] text-white">
            Copyright © {new Date().getFullYear()} SpeechCEU All rights
            reserved.
          </p>
        </div>
        <div className="md:fle-1 lg:w-1/2 flex items-center justify-end gap-2.5 md:gap-x-4">
          {socialMediaLinks?.map((info, idx) => (
            <a
              key={idx}
              href={info?.link}
              className="md:bg-white/10 w-[10px] md:w-8 lg:w-10 h-[10px] md:h-8 lg:h-10 rounded-full flex items-center justify-center"
            >
              <div className="!w-[10px] md:!w-4 lg:!w-6 !text-white">{info?.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function QuickLinks({ title = "Quick Links", links = [], className }) {
  return (
    <div className={className}>
      <h5 className="font-outfit font-semibold text-sm md:text-base lg:text-xl lg:leading-[72px] tracking-[0%] text-white">
        {title}
      </h5>
      <ul className="space-y-3 lg:space-y-4 mt-3 md:mt-6">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="text-xs md:text-sm lg:text-lg lg:leading-[24px] text-white/65 hover:underline"
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

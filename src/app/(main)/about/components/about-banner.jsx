import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Banner content as JSON for easy API integration
const bannerData = {
  title: "Why SpeechCEU.com?",
  description:
    "SpeechCEU.com offers advanced, comprehensive training on Supervision, AI-assisted patient care, and Burnout Prevention and Recovery. The courses are designed with neurodivergence, trauma-informed care, and inclusivity in mind, facilitating accessible, supportive learning environments for all clinicians. Additionally, it follows the American Speech-Language-Hearing Association’s (ASHA) Evidence-Based Practice Model, while allowing clinicians to easily track state and national licensure and certification requirements.",
  points: [
    {
      title: "Advanced, Comprehensive Training",
      text: "Focused on supervision, AI integration, and burnout prevention, tailored to address the unique challenges clinicians face.",
    },
    {
      title: "Inclusive & Trauma-Informed",
      text: "Designed with neurodivergence and trauma-informed care principles to create accessible and supportive learning environments for all clinicians.",
    },
    {
      title: "Evidence-Based",
      text: "Follows the ASHA Evidence-Based Practice Model, integrating the current best evidence, clinical expertise, and patient/client preferences and values to provide quality, practical strategies and takeaways in every course.",
    },
    {
      title: "Easy Licensure Tracking",
      text: "Streamlines tracking of state and national licensure and certification requirements, saving clinicians time and effort.",
    },
  ],
  button: {
    label: "Meet our founder",
    href: "/about/bio",
  },
};

export default function AboutBanner() {
  return (
    <section className="bg-[#e8fafd] flex items-center">
      <div className="container px-5 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="h-[200px] md:h-[350px] lg:h-[650px] overflow-hidden">
            <BannerImage />
          </div>
          <div className="lg:w-8/12 px-0 md:px-8 pb-6">
            <BannerDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

function BannerImage() {
  return (
    <img
      src="/images/founder.png"
      alt=""
      className="rotate-y-180 md:h-[750px]"
      style={{ filter: "drop-shadow(2px 4px 18px hsla(0deg, 0%, 0%, 0.3))" }}
    />
  );
}

function BannerDetails() {
  return (
    <div className="bg-transparent rounded-2xl p-0 md:p-0">
      <h2 className="text-lg md:text-2xl font-semibold mb-2 text-foreground">
        {bannerData.title}
      </h2>
      <p className="text-sm md:text-base text-muted-foreground mb-5">
        {bannerData.description}
      </p>
      <ul className="space-y-4 mb-6">
        {bannerData.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="min-h-3 min-w-3 bg-primary rounded-full mt-1.5"></div>
            <span>
              <span className="font-semibold text-foreground">
                {point.title}:
              </span>{" "}
              <span className="text-muted-foreground">{point.text}</span>
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant="default"
        size="default"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-semibold shadow-none hover:bg-primary/90 transition"
        asChild
      >
        <Link href={bannerData.button.href}>{bannerData.button.label}</Link>
      </Button>
    </div>
  );
}

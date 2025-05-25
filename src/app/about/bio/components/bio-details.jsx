import { useMemo } from "react";

export default function BioDetails() {
  // JSON data for the bio
  const bioData = useMemo(
    () => ({
      title: "Sharon's bio",
      sections: [
        {
          type: "paragraph",
          content: [
            {
              type: "strong",
              text: "Founder | Educator | Advocate for Clinicians",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: " Sharon Rice, MS, CCC-SLP, is the Founder of SpeechCEU.com, an ",
            },
            {
              type: "strong",
              text: "ASHA-approved continuing education provider",
            },
            {
              type: "text",
              text: " designed to bridge the gap between the leadership training offered in the ",
            },
            {
              type: "strong",
              text: "business world",
            },
            {
              type: "text",
              text: " and what’s typically available to healthcare professionals. With over 20 years of combined experience in clinical practice and corporate operations, she brings a unique blend of insight and empathy to the challenges facing today’s clinicians and students.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "A subject matter expert in ",
            },
            {
              type: "strong",
              text: "supervision, power dynamics, ethical AI-assisted patient care, operational systems, and feedback strategies",
            },
            {
              type: "text",
              text: ", Sharon created the Summit Series after researching how leadership is taught in ",
            },
            {
              type: "strong",
              text: "business versus healthcare",
            },
            {
              type: "text",
              text: ". Her work translates those lessons into practical tools that clinicians can use immediately. She believes supervision shapes the trajectory of a clinician's career and plays a critical role in retention and satisfaction. Her broader focus includes ",
            },
            {
              type: "strong",
              text: "burnout prevention and recovery, clinician neurodivergence, inclusive workplace development, and closing the SLP workforce shortage",
            },
            {
              type: "text",
              text: " through real-world strategies that improve communication and conditions—",
            },
            {
              type: "strong",
              text: "especially between clinicians and non-licensed administrators.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Sharon has presented at state, national, and international peer-reviewed conventions, including the ",
            },
            {
              type: "strong",
              text: "American Speech-Language-Hearing Association (ASHA)",
            },
            {
              type: "text",
              text: ", state associations for ",
            },
            {
              type: "strong",
              text: "Hawaii, Louisiana, North Carolina, Ohio, Pennsylvania, Texas",
            },
            {
              type: "text",
              text: ", and will speak at the upcoming ",
            },
            {
              type: "strong",
              text: "2025 World Congress of the International Association of Language Professionals (IALP)",
            },
            {
              type: "text",
              text: ". Her work is published in ASHA Leader, ASHA Leader Live, and in guidebooks on supervision and artificial intelligence. She is a recipient of the ",
            },
            {
              type: "strong",
              text: "ASHA Research in Higher Education Grant.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Sharon is dedicated to partnering with clinicians across every stage of their careers and advocating for technology and systems that simplify—not complicate—their professional lives. She believes a clinician’s time is their most valuable resource, and every educational or operational tool should honor that. Her training includes executive education in ",
            },
            {
              type: "strong",
              text: "Leadership & Influence",
            },
            {
              type: "text",
              text: " from the University of Pennsylvania, Mind-Body Stress Reduction for Healthcare Providers from the University of Massachusetts, and a ",
            },
            {
              type: "strong",
              text: "Master of Science in Communication Sciences & Disorders",
            },
            {
              type: "text",
              text: " from Baylor University. Her advanced clinical background includes ",
            },
            {
              type: "strong",
              text: "Prompt Bridging",
            },
            {
              type: "text",
              text: " and an ",
            },
            {
              type: "strong",
              text: "80-hour mentored practicum in Auditory-Verbal Therapy through the AG Bell Association’s Listen Spoken Language Symposium",
            },
            {
              type: "text",
              text: ". She is an active member of ASHA and the Texas Speech-Language-Hearing Association (TSHA), where she volunteers with the TSHA Foundation.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "strong",
              text: "Sharon believes the future of the field depends on empowering clinicians with tools that respect both their expertise and their humanity—and welcomes opportunities to collaborate with those ready to rethink how we support the people who care for others.",
            },
          ],
        },
      ],
    }),
    []
  );

  return (
    <section className="py-10 md:py-36 bg-[#CCF1F9]">
      <div className="container px-5 md:px-8">
        <h2
          className="font-outfit font-bold text-2xl md:text-3xl mb-6 text-[#121826]"
          style={{ letterSpacing: "-0.01em" }}
        >
          {bioData.title}
        </h2>
        <div className="space-y-6 text-base md:text-lg text-muted-foreground">
          {bioData.sections.map((section, idx) => (
            <p key={idx} className="leading-relaxed">
              {section.content.map((part, i) =>
                part.type === "strong" ? (
                  <strong
                    key={i}
                    className="font-semibold text-muted-foreground"
                  >
                    {part.text}
                  </strong>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper: If you want to export the JSON for API use
export const bioDetailsData = {
  title: "Sharon's bio",
  sections: [
    // ...same as above...
  ],
};

import SelectedCheck from "@/assets/SVG/SelectedCheck";
import Link from "next/link";

export default function WhoShouldAttendThisCourse() {
  return (
    <section className="pb-[120px]">
      <div className="space-y-12 mt-12">
        <div className="">
          <Title text={"Course description"} />
          <Paragraph
            className="mt-4 mb-5"
            content="Course Description: This intensive 1-hour course explores stress management in speech therapy. Students will learn about the causes and types of stress, strategies to mitigate stress and have an opportunity to practice mind body stress reduction techniques."
          />
          <div>
            <Paragraph className="font-medium mb-3" content="WEBINAR" />
            <div className="flex items-center gap-1.5">
              <Paragraph className="font-medium" content="Course ID:" />
              <Paragraph content="5100" />
            </div>
            <div className="flex items-center gap-1.5 my-2">
              <Paragraph className="font-medium" content="When:" />
              <Paragraph content=" March 19, 2025, 2:15 pm CST-3:15 pm CST" />
            </div>
            <div className="flex items-center gap-1.5">
              <Paragraph className="font-medium" content="Where: " />
              <Paragraph content="Zoom session, must attend live to receive credit" />
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 ">
          <Title text="Who should attend this course?" />
          <ul className="pl-5 mt-4 space-y-3 mb-5">
            <ListItem text="Any ASHA member, CCC holder, or other professional that is licensed or credentialed to practice speech-language pathology (SLP) or preparing to earn ASHA CEUS." />
            <ListItem text="Any SLP who is seeking to learn more about stress management. Secondary audience: audiology and other allied health" />
          </ul>
          <Title
            text="Who this course isn't good for:"
            className="text-lg !font-medium"
          />
          <ul className="pl-5 mt-3">
            <ListItem text="Any professional who is not interested in stress management, meditation or breathwork." />
          </ul>
        </div>
        <div className="">
          <Title text={"Presenter:"} />
          <Paragraph
            className="mt-6"
            content="Sharon Rice, MS, CCC-SLP, is a thought leader with over 20 years of experience in both clinical and business settings. Throughout her career, Sharon has advanced the field by developing data-driven continuing education that empowers clinicians with practical strategies to enhance their professional and interpersonal effectiveness."
          />
          <Paragraph
            className="my-3"
            content="As a respected expert, Sharon has been a speaker at several prestigious organizations, including the American Speech-Language-Hearing Association (ASHA) and various state associations in Hawaii, Pennsylvania, and Texas. Her commitment to ongoing professional development is evident in her advanced training, which includes PROMPT Bridging and an intensive 80-hour Auditory Verbal Symposium Mentored Practicum."
          />
          <Paragraph content="Sharon's expertise and leadership have been recognized nationally. She has received the ASHA Research in Higher Education Award and NSSLHA National Honors for Outstanding Leadership and Achievement. Additionally, ASHA selected her as a reviewer for the Minority Student Leadership Program leadership presentations." />
          <Paragraph
            className="mt-3"
            content="As a published author, Sharon has contributed to the ASHA Leader and ASHA Leader Live, sharing her insights with the wider speech-language pathology and audiology community. Her blend of clinical experience, business acumen, and dedication to education continues to make a lasting impact on the field."
          />
        </div>
        <div className="">
          <Title text={"How to earn a course completion certificate"} />
          <Paragraph
            className="mt-4"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </div>
        <div className="lg:w-3/5 ">
          <Title text="Accommodations" className="mb-5" />
          <div>
            <Title
              text="Accessibility & Special Accommodations"
              className="text-lg !font-medium mb-3"
            />
            <Paragraph content="We are committed to ensuring an inclusive and accessible experience for all users. If you require accommodations due to a disability or special need, please contact us in advance." />
          </div>
          <div className="mt-5">
            <Title
              text="Available Accommodations:"
              className="text-lg !font-medium"
            />
            <ul className="pl-5 mt-3 space-y-3">
              <ListItem text="Closed captioning for video content" />
              <ListItem text="Screen reader compatibility" />
              <ListItem text="Extended time for assessments" />
              <ListItem text="Alternative formats (e.g., large print, audio)" />
            </ul>
          </div>
        </div>
        <div className="md:w-3/4 rounded-2xl overflow-hidden">
          <img className="w-full" src="/images/card_image.png" alt="" />
        </div>
        <div className="lg:w-3/5">
          <Title
            text="Professional Conduct & Nondiscrimination Policy"
            className="mb-5"
          />
          <div>
            <Title
              text="Ethical Standards & Conduct"
              className="text-lg !font-medium mb-3"
            />
            <Paragraph content="We uphold the highest standards of professionalism and expect all users to:" />
            <ul className="mt-3 space-y-3">
              <ListItemWithIcon>
                Respect instructors, peers, and administrative staff.
              </ListItemWithIcon>
              <ListItemWithIcon>
                Maintain academic integrity and honesty.
              </ListItemWithIcon>
              <ListItemWithIcon>
                Adhere to ethical guidelines in communication and behavior.
              </ListItemWithIcon>
            </ul>
          </div>
          <div className="mt-5">
            <Title
              text="Nondiscrimination Policy"
              className="text-lg !font-medium"
            />
            <Paragraph
              className="my-3"
              content="We are dedicated to providing an inclusive learning environment, free from discrimination based on:"
            />
            <ul className="pl-5 mt-3 space-y-3">
              <ListItem text="Race, ethnicity, or nationality" />
              <ListItem text="Gender identity or expression" />
              <ListItem text="Religion or beliefs" />
              <ListItem text="Disability status" />
              <ListItem text="Age or socioeconomic background" />
            </ul>
          </div>
        </div>
        <div>
          <Title text="Refund Policy" className="mb-5" />
          <Paragraph
            className="!font-medium text-lg"
            content="Because this is a free course, refunds are not applicable"
          />
        </div>
        <div className="lg:w-3/5">
          <Title text="Complaint & Resolution Policy" className="mb-5" />
          <div>
            <Title
              text="Filing a Complaint"
              className="text-lg !font-medium mb-3"
            />
            <Paragraph content="We take all concerns seriously and aim to resolve them promptly. If you have a complaint regarding course content, instructor conduct, or technical issues, follow these steps:" />
            <ul className="mt-3 space-y-3">
              <ListItemWithIcon>
                Submit a Complaint: Fill out the
                <div>
                  <Link href={"#"} className="underline">
                    Complaint Form
                  </Link>
                </div>
                with relevant details.
              </ListItemWithIcon>
              <ListItemWithIcon>
                Review Process: Our team will assess and respond within 5
                business days.
              </ListItemWithIcon>
              <ListItemWithIcon>
                Resolution: If further action is required, we will provide a
                detailed resolution plan.
              </ListItemWithIcon>
            </ul>
          </div>
          <div className="mt-5">
            <Title
              text="Confidentiality & Non-Retaliation:"
              className="text-lg !font-medium"
            />
            <Paragraph
              className="my-3"
              content="All complaints are handled with strict confidentiality. No user will face retaliation for reporting concerns."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Title({ text = "This Title", className }) {
  return (
    <h1
      className={`text-xl md:text-3xl font-semibold font-outfit text-white ${className}`}
    >
      {text}
    </h1>
  );
}

function Paragraph({ content = "This is a paragraph", className }) {
  return (
    <p className={`text-sm md:text-base text-dark-foreground ${className}`}>
      {content}
    </p>
  );
}
function ListItem({ text = "This List", className }) {
  return (
    <li
      className={`text-sm md:text-base font-inter text-dark-foreground list-disc list-outside ${className}`}
    >
      {text}
    </li>
  );
}
function ListItemWithIcon({ className, children = "This List" }) {
  return (
    <li
      className={`text-sm md:text-base font-inter text-dark-foreground flex items-center flex-wrap gap-2 ${className}`}
    >
      <span className="text-primary">
        <SelectedCheck />
      </span>
      {children}
    </li>
  );
}

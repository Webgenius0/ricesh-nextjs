const cardInformation = [
  {
    number: 1,
    title: "Introduction to Supervision in Speech-Language Pathology ",
    image: "/images/card_img_1.webp",
  },
  {
    number: 2,
    title: "Core Principles of Effective Supervision ",
    image: "/images/card_img_2.jpg",
  },
  {
    number: 3,
    title: "Roles and Responsibilities of a Supervisor ",
    image: "/images/card_img_3.jpg",
  },
  {
    number: 4,
    title: "Building a Strong Supervisor-Supervisee Relationship ",
    image: "/images/card_img_4.jpg",
  },
  {
    number: 5,
    title: "Creating a Positive Supervision Environment ",
    image: "/images/card_img_5.webp",
  },
  {
    number: 6,
    title: "The Importance of Reflective Practice in Supervision ",
    image: "/images/card_img_6.jpg",
  },
  {
    number: 7,
    title: "Supervision Ethics and Professional Standards ",
    image: "/images/card_img_7.jpg",
  },
  {
    number: 8,
    title: " Balancing Support and Accountability in Supervision",
    image: "/images/card_img_8.jpg",
  },
];

export default function TopicIndex({ topicId }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {cardInformation?.map((cardInfo, idx) => (
          <Card key={idx} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
}

function Card({ cardInfo }) {
  return (
    <div
      style={{ backgroundImage: `url(${cardInfo?.image})` }}
      className="bg-cover bg-center min-h-[450px] w-full flex items-end rounded-[12px]"
    >
      <div className="relative">
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,rgba(3,0,1,0)_0%,#030001_100%)] rounded-b-[12px]"></div>
        <div className="relative pb-[26px] px-4 flex justify-between items-end">
          <h1 className="text-[120px] text-dark font-extrabold translate-y-[43px] translate-x-[-34px] font-outfit text-shadow-[-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]">
            {cardInfo?.number}
          </h1>
          <h4 className="text-xl font-semibold text-white line-clamp-2 overflow-hidden translate-x-[-20px]">
            {cardInfo?.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

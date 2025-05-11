import Star from "@/assets/SVG/Star";

const discoverCardInfo = [
  {
    stars: 5,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    name: "Marko Polo",
    title: "CEO, AVO Design Agency",
    image: "/images/client.jpg",
  },
  {
    stars: 5,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    name: "Tatiana Jalba",
    title: "UI Designer",
    image: "/images/client.jpg",
  },
  {
    stars: 4,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    name: "Alex Smith",
    title: "Developer",
    image: "/images/client.jpg",
  },
];

export default function DiscoverHowLearning() {
  return (
    <section className="bg-dark-foreground/5">
      <div className="container py-[120px]">
        <div>
          <h2 className="text-3xl font-semibold font-outfit text-foreground">
            Discover How Learning Transforms Lives
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-9">
          {discoverCardInfo?.map((data, idx) => (
            <DiscoverCard key={idx} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscoverCard({ data }) {
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="text-[#FFA136] flex items-center gap-1">
          {[...Array(data?.stars)].map((_, idx) => (
            <Star key={idx} />
          ))}
        </div>
        <div>
          <img src="/content.svg" alt="" />
        </div>
      </div>
      <div>
        <p className="text-lg">"{data?.quote}"</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <div className={"rounded-full overflow-hidden w-[52px] h-[52px]"}>
          <img
            src={data.image}
            alt={data.name}
            className="w-full object-contain"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium text-foreground mb-1">
            {data?.name}
          </h4>
          <p className="font-medium text-sm">{data?.title}</p>
        </div>
      </div>
    </div>
  );
}

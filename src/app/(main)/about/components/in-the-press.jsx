const pressData = [
  {
    source: "VARIETY",
    headline:
      "'Fixer Upper' Turns 10: Chip and Joanna Gaines Celebrate With New \"The Lakehouse Season at HGTV, Magnolia Network\"",
  },
  {
    source: "SOUTHERN LIVING",
    headline:
      "Chip and Joanna are Back With Fixer Upper: The Lake House And We Have The Trailer",
  },
  {
    source: "HOUSE BEAUTIFUL",
    headline: "Joanna Gaines Just Gave an Epic Tour of Magnolia's Headquarters",
  },
  {
    source: "HOME AND GARDEN",
    headline:
      "Joanna Gaines' Kitchen-Living Room Defies Modern Trends With an Unfitted Design. Joanna Gaines' Kitchen-Living Room.",
  },
  {
    source: "ARCHITECTURAL DIGEST",
    headline:
      "Joanna Gaines Teams Up With Loloi for a Collection of Rugs and Throw Pillows",
  },
  {
    source: "HOUSE BEAUTIFUL",
    headline: "Joanna Gaines's Cooking Show Returns for Season & Next Month",
  },
];

function PressCard({ source, headline }) {
  return (
    <div className="bg-[#F7F7F8] rounded-xl p-6">
      <h3 className="font-bold text-base mb-3 text-foreground font-poppins">
        {source}
      </h3>
      <p className="text-muted-foreground text-base font-poppins">{headline}</p>
    </div>
  );
}

export default function InThePress() {
  return (
    <section className="bg-white">
      <div className="container px-5 md:px-8 py-8 md:py-12 lg:py-20">
        <h2 className="text-xl md:text-4xl lg:text-[50px] font-outfit font-semibold text-foreground mb-6 text-center md:text-left">
          In the Press
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressData.map((item, idx) => (
            <PressCard
              key={idx}
              source={item.source}
              headline={item.headline}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

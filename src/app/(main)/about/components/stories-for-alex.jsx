import Image from "next/image";

// JSON data for easy API integration/customization
const storiesData = {
  title: "Stories from Alex Thompson",
  description:
    "Chip and Joanna have made storytelling the heart of the Magnolia brand. Pick up one of their books or catch an episode of one of their shows on Max or Discovery+.",
  books: [
    {
      id: 1,
      image: "/images/alexbook.png", // Place your image in public/images/alexbook.png
      alt: "Capital Gaines by Chip Gaines",
    },
    {
      id: 2,
      image: "/images/alexbook.png",
      alt: "Capital Gaines by Chip Gaines",
    },
    {
      id: 3,
      image: "/images/alexbook.png",
      alt: "Capital Gaines by Chip Gaines",
    },
    {
      id: 4,
      image: "/images/alexbook.png",
      alt: "Capital Gaines by Chip Gaines",
    },
  ],
};

export default function StoriesForAlex() {
  return (
    <section>
      <div className="container px-5 md:px-8 py-8 md:py-12 lg:py-20">
        <h2 className="text-xl md:text-4xl lg:text-[50px] font-bold font-outfit text-foreground text-center mb-4">
          {storiesData.title}
        </h2>
        <p className="text-muted-foreground text-center max-w-4xl mx-auto mb-10 font-inter text-sm md:text-base">
          {storiesData.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {storiesData.books.map((book) => (
            <div
              key={book.id}
              className="bg-muted rounded-2xl shadow-sm px-6 py-3 md:py-0 flex flex-col items-center w-full"
            >
              <Image
                src={book.image}
                alt={book.alt}
                width={210}
                height={320}
                className="object-cover w-full h-auto rounded-2xl md:rounded-none"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

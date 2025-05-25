import { Button } from "@/components/ui/button";

const books = [
  {
    id: 1,
    image: "/images/book_1.png",
    title: "JO'S NEW CHILDREN'S BOOK",
    heading: "THE WORLD NEEDS THE WONDER YOU SEE",
    button: {
      text: "ORDER YOUR COPY",
      href: "#",
    },
  },
  {
    id: 2,
    image: "/images/book_2.png",
    title: "JO'S NEW CHILDREN'S BOOK",
    heading: "THE WORLD NEEDS THE WONDER YOU SEE",
    button: {
      text: "ORDER YOUR COPY",
      href: "#",
    },
  },
];

export default function BookItems() {
  return (
    <section className="py-12 bg-muted font-inter">
      <div className="container px-5 md:px-8 flex flex-col gap-14">
        {books.map((book) => (
          <div key={book.id} className="flex items-center gap-4 md:gap-12 ">
            <div
              className={`bg-no-repeat bg-cover bg-center rounded-xl w-[260px] md:w-[573px] h-[136px] md:h-[450px]`}
              style={{ backgroundImage: `url(${book.image})` }}
            >
              {/* <img
                src={book.image}
                alt="Book Cover"
                className="object-cover md:object-contain rounded-xl  shadow-lg"
                style={{ background: "#fff" }}
              /> */}
            </div>
            <div className="flex flex-col items-start md:items-start md:gap-6">
              <div className="text-muted-foreground text-base md:text-xl font-poppins font-medium tracking-wide uppercase">
                {book.title}
              </div>
              <div className="text-xl md:text-4xl lg:text-5xl font-bold font-outfit text-foreground leading-tight">
                {book.heading}
              </div>
              <Button
                asChild
                className="mt-2 px-3.5 md:px-8 py-2 md:py-3 rounded-full bg-primary text-white text-sm md:text-base font-medium font-inter"
                size="sm"
              >
                <a href={book.button.href}>{book.button.text}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

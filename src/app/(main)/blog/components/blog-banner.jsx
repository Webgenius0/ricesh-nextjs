import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BlogBanner() {
  return (
    <section data-aos="fade-up">
      <div className="container p-0 lg:px-8 overflow-x-hidden mt-6 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-6">
          <div className="lg:w-2/5 px-5 md:px-8">
            <BannerCard />
          </div>
          <div className="pl-14 md:pl-0">
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function BannerCard() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h1 className="text-3xl font-outfit font-semibold text-foreground">
        Insights & Innovation: Elevate Your Learning & Career
      </h1>
      <p className="text-base text-muted-foreground mt-4 mb-5">
        TrustedExplore expert insights on supervision, AI in education, burnout
        prevention, career growth, and more.
      </p>
      <Button>Browse Articles</Button>
    </div>
  );
}

function BannerImage() {
  return (
    <div className="relative bg-no-repeat bg-cover bg-left bg-[url(/images/blog_banner_image_background_shape.png)]">
      <div className="max-w-[445px] max-h-[372px]">
        <img
          src="/images/blog_banner_image.png"
          alt="Smile Man"
          className="relative z-10 -translate-x-5 object-contain"
        />
      </div>
    </div>
  );
}

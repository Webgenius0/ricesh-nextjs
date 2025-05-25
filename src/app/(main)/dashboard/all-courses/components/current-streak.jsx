import FaqVideo from "@/components/shared/faq-video";
import Image from "next/image";

export default function CurrentStreak() {
  return (
    <section data-aos="fade-up">
      <div className="container">
        <div className="bg-white rounded-2xl p-6 flex gap-20 mt-10 mb-8">
          <div className="flex-1 flex flex-col justify-between">
            <h3 className="text-3xl font-semibold font-outfit text-foreground leading-[44px]">
              Start your licensure and certification journey
            </h3>
            <p className="text-base text-muted-foreground mt-4">
              Let's chip away at your career goals.
            </p>
          </div>
          <div className="grid grid-cols-2 w-4/6 gap-5">
            <div className="flex items-center gap-4 bg-destructive/10 rounded-2xl px-5 py-6">
              <div className="bg-white w-[120px] h-[120px] flex justify-center items-center rounded-full">
                <Image
                  src={"/images/streak.png"}
                  width={100}
                  height={100}
                  alt={"streak"}
                />
              </div>
              <div>
                <h3 className="text-[26px] font-semibold font-outfit text-foreground mb-1.5">
                  5 Weeks
                </h3>
                <p className="text-base text-muted-foreground">
                  Current streak
                </p>
              </div>
            </div>
            <div>
              <FaqVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

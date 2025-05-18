"use client";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { useState, useRef, use, useEffect } from "react";

const videosSectionInfo = [
  {
    id: 0,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, incidunt.",
    videoLink: "/video_1.mp4",
    thumbnail:
      "https://motionarray.imgix.net/preview-205861-0xeSexA4Ei-high_0013.jpg?w=660&q=60&fit=max&auto=format",
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, incidunt.",
    videoLink: "/video_2.mp4",
    thumbnail:
      "https://degrees.snu.edu/hubfs/Teaching%20a%20good%20career-1.jpeg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, incidunt.",
    videoLink: "/video_1.mp4",
    thumbnail:
      "https://cdn.eduadvisor.my/articles/2022/04/how-to-be-teacher-malaysia-feature.png",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, incidunt.",
    videoLink: "/video_2.mp4",
    thumbnail:
      "https://www.waldenu.edu/media/5049/seo-1608-bs-portrait-of-african-american-f-429002315-1200x675",
  },
];

export default function OurMission() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const videoRef = useRef(null);

  const handlePlay = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section data-aos="fade-up">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20 py-[48px] md:py-[100px] px-5 md:px-8">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-[24px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-semibold leading-normal lg:leading-[72px] font-outfit text-foreground mb-3">
              Our mission is to improve working conditions for SLPs and AUDs
            </h1>
            <p className="text-sm sm:text-base leading-[24px] text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda ut quidem, laboriosam recusandae excepturi doloribus?
              Optio suscipit dolor beatae sequi laborum exercitationem ducimus
              adipisci minima. Ipsum optio vitae suscipit veritatis reiciendis
              excepturi, incidunt.
            </p>
            <p className="text-sm sm:text-base leading-[24px] text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda ut quidem, laboriosam recusandae excepturi doloribus?
              Optio suscipit dolor beatae sequi laborum exercitationem ducimus
              adipisci minima.
            </p>
          </div>
          <Button
            className="w-fit font-normal md:font-medium"
            variant={"default"}
            size="sm"
          >
            Register now
          </Button>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
            {!isPlaying && (
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-10 rounded-2x" onClick={() => setIsPlaying(play => !play)}>
              
              
                <img
                src={
                  videosSectionInfo?.find(
                    (video) => video?.id === currentVideoIndex
                  )?.thumbnail
                }
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
                  <button
                    onClick={handlePlay}
                    className="z-20 rounded-full shadow-lg text-foreground p-2 md:p-3 bg-[#ffffff56] cursor-pointer mb-20 md:mb-0"
                  >
                    <div className="bg-primary rounded-full shadow-lg text-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="80"
                        // height="80"
                        viewBox="0 0 24 24"
                        className="w-9 md:w-[80px] h-9 md:h-[80px]"
                      >
                        <path
                          fill="currentColor"
                          d="M9 15.714V8.287q0-.368.244-.588q.243-.22.568-.22q.102 0 .213.028q.11.027.211.083l5.843 3.733q.186.13.28.298q.093.167.093.379t-.093.379t-.28.298l-5.843 3.733q-.101.055-.213.083t-.213.028q-.326 0-.568-.22T9 15.714"
                        />
                      </svg>
                    </div>
                  </button>
                
              <div className="absolute bottom-6 md:bottom-1.5 w-full px-[30px] md:px-10 space-y-1.5">
                {videosSectionInfo?.map((videosSectionInfo, idx) => (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentVideoIndex(videosSectionInfo?.id)
                      setIsPlaying(true);
                      videoRef.current.play();
                    }}
                    key={idx}
                    className="flex items-center bg-[#1A1E2E99] rounded-full p-1.5 md:p-2 gap-2 cursor-pointer select-none"
                  >
                    <div className="bg-primary rounded-full shadow-lg text-foreground w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9 15.714V8.287q0-.368.244-.588q.243-.22.568-.22q.102 0 .213.028q.11.027.211.083l5.843 3.733q.186.13.28.298q.093.167.093.379t-.093.379t-.28.298l-5.843 3.733q-.101.055-.213.083t-.213.028q-.326 0-.568-.22T9 15.714"
                        />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-base leading-[24px] text-dark-foreground line-clamp-1">
                      {videosSectionInfo?.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            )}

           {isPlaying &&  <div className="absolute top-3 right-3 hover:bg-background/30 cursor-pointer z-20 p-2 rounded-full text-background" onClick={() => setIsPlaying(false)}>
              <XIcon  />
            </div>}

            <video
              ref={videoRef}
              className="w-full h-full rounded-2xl object-contain bg-black"
              src={
                videosSectionInfo?.find(
                  (video) => video?.id === currentVideoIndex
                )?.videoLink
              }
              controls
              style={{ display: isPlaying ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

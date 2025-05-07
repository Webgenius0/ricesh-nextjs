"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

export default function OurMission() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  return (
    <section data-aos="fade-up">
      <div className="container grid grid-cols-2 gap-20 py-[100px]">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] xl:text-[50px] font-semibold sm:leading-[72px] font-outfit text-foreground mb-3">
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
          <Button className="w-fit" variant={"default"} size="sm">
            Register now
          </Button>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-full h-[500px]">
            {!isPlaying && (
              <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-10 rounded-2xl">
                <img
                  src="https://motionarray.imgix.net/preview-205861-0xeSexA4Ei-high_0013.jpg?w=660&q=60&fit=max&auto=format"
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
                <button
                  onClick={handlePlay}
                  className="z-20 rounded-full shadow-lg text-foreground p-3 bg-[#ffffff56] cursor-pointer"
                >
                  <div className="bg-primary rounded-full shadow-lg text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9 15.714V8.287q0-.368.244-.588q.243-.22.568-.22q.102 0 .213.028q.11.027.211.083l5.843 3.733q.186.13.28.298q.093.167.093.379t-.093.379t-.28.298l-5.843 3.733q-.101.055-.213.083t-.213.028q-.326 0-.568-.22T9 15.714"
                      />
                    </svg>
                  </div>
                </button>
                <div className="absolute bottom-1.5 w-full px-10 space-y-1.5">
                  <div className="flex items-center bg-[#1A1E2E99] rounded-full p-2 gap-2 cursor-pointer">
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
                    <p className="text-sm sm:text-base leading-[24px] text-dark-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae, incidunt.
                    </p>
                  </div>
                  <div className="flex items-center bg-[#1A1E2E99] rounded-full p-2 gap-2 cursor-pointer">
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
                    <p className="text-sm sm:text-base leading-[24px] text-dark-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae, incidunt.
                    </p>
                  </div>
                  <div className="flex items-center bg-[#1A1E2E99] rounded-full p-2 gap-2 cursor-pointer">
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
                    <p className="text-sm sm:text-base leading-[24px] text-dark-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae, incidunt.
                    </p>
                  </div>
                  <div className="flex items-center bg-[#1A1E2E99] rounded-full p-2 gap-2 cursor-pointer">
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
                    <p className="text-sm sm:text-base leading-[24px] text-dark-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Beatae, incidunt.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className="w-full h-full rounded-2xl"
              src="https://youtu.be/H7W8LSqVtCo"
              controls
              style={{ display: isPlaying ? "block" : "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef, useState } from "react";

export default function FaqVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  return (
    <div className="flex-1 flex justify-end max-h-[170px]">
      <div className="relative w-full">
        {!isPlaying && (
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center z-10 rounded-2xl">
            <img
              src="https://motionarray.imgix.net/preview-205861-0xeSexA4Ei-high_0013.jpg?w=660&q=60&fit=max&auto=format"
              alt="Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <button
              onClick={handlePlay}
              className="z-20 rounded-full shadow-lg text-foreground p-1 bg-[#ffffff56] cursor-pointer"
            >
              <div className="bg-primary rounded-full shadow-lg text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 15.714V8.287q0-.368.244-.588q.243-.22.568-.22q.102 0 .213.028q.11.027.211.083l5.843 3.733q.186.13.28.298q.093.167.093.379t-.093.379t-.28.298l-5.843 3.733q-.101.055-.213.083t-.213.028q-.326 0-.568-.22T9 15.714"
                  />
                </svg>
              </div>
            </button>
            <div className="absolute bottom-6 w-full px-10 space-y-1.5">
              <div className="text-center">
                <p className="text-xl leading-[24px] font-semibold font-outfit text-white">
                  FAQ
                </p>
              </div>
            </div>
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full h-full rounded-2xl"
          src="/video_1.mp4"
          controls
        />
      </div>
    </div>
  );
}

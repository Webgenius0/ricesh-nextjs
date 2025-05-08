"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import React, { useState } from "react";

export default function MazimizeYourSpeechceu() {
  const [openDropdown, setDropdown] = useState(true);
  return (
    <section data-aos="fade-up">
      <div className="container mt-6">
        <div className="p-6 bg-white rounded-2xl">
          <h4 className="text-xl font-outfit font-medium text-foreground mb-3">
            Mazimize your speechceu.com membership
          </h4>
          <div className="flex items-center gap-6 w-full">
            <CustomSlider />
            <div
              className={`text-destructive p-2 cursor-pointer select-none transition-transform duration-300 ${
                openDropdown ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setDropdown(!openDropdown)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.84 9.59l5.66 5.66l5.66-5.66l-.71-.7l-4.95 4.95l-4.95-4.95z"
                />
              </svg>
            </div>
          </div>
          <div
            className={`transition-all duration-500 transform mt-6 ${
              openDropdown ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="grid grid-cols-3 gap-6">
              <ChooseOption>
                Select your national certification and or state licensure
                entities
              </ChooseOption>
              <ChooseOption>
                Identify 3 career goals to receive customized support for
                achieving them
              </ChooseOption>
              <ChooseOption>Upload your Resume</ChooseOption>
              <ChooseOption>Take one course monthly</ChooseOption>
              <div className="col-span-2">
                <ChooseOption>
                  Unlock a complimentary special referral credit only course by
                  referring at least one friend who joins{" "}
                  <Link
                    href={"https://speechceu.com"}
                    className="text-primary hover:underline"
                  >
                    Speechceu.com
                  </Link>
                </ChooseOption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomSlider() {
  return (
    <div className="bg-[#E5F9F9] rounded-full w-full">
      <div className="bg-gradient-to-r from-[#FF4D4D] via-[#FFB957] to-[#147D64] rounded-full p-0.5 w-[50%] flex justify-end">
        <div className="h-4 w-4 rounded-full bg-white"></div>
      </div>
    </div>
  );
}

function ChooseOption({ children }) {
  return (
    <div className="flex gap-3 items-start p-3 bg-muted-foreground/5 rounded-[8px]">
      <Checkbox className="border-muted-foreground border-2 w-6 h-6" />
      <p className="text-base font-medium font-outfit text-foreground">
        {children}
      </p>
    </div>
  );
}

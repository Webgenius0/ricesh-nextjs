"use client";

import Star from "@/assets/SVG/Star";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const reviewData = [
  {
    id: 1,
    name: "Jane R.",
    date: "April 2025 Survey",
    comment:
      '"The real-world examples were spot on. It helped tie everything together."',
    rating: 5,
    image: "/images/user_1.png",
  },
  {
    id: 2,
    name: "Michael T.",
    date: "April 2025 Survey",
    comment:
      '"I liked the pacing and the structure. The modules built on each other really well."',
    rating: 5,
    image: "/images/user_2.png",
  },
  {
    id: 3,
    name: "Anonymous",
    date: "March 2025 Survey",
    comment:
      '"Could use a few more interactive elements, but overall very informative."',
    rating: 4,
    image: "/images/user_3.png",
  },
];

export default function ReviewsSection() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section>
      <div>
        <div className="flex items-center gap-4 mb-6">
          <Title text="Reviews" />
          <Switch
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <div>
          <div
            className={`transition-all duration-500 overflow-y-auto scrollbar-hide ${
              !isChecked ? "h-0" : "h-[400px]"
            }`}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Star className="text-primary" />
              <Paragraph content="Student Feedback Highlights" />
            </div>
            <div>
              {reviewData.map((review) => (
                <div key={review.id} className="mb-8 flex gap-3">
                  <div>
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-white">
                      <span className="text-gray-400 text-lg">—</span>
                      {review.name}
                    </span>
                    <span className="text-sm text-gray-300">
                      , {review.date}
                    </span>
                    <div className="mb-2">
                      <span className="italic text-gray-100">
                        {review.comment}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-400 w-8 h-8"
                              : "text-gray-600 w-8 h-8"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <RadioGroupComponents />
        </div>
      </div>
    </section>
  );
}

function Title({ text = "This Title", className }) {
  return (
    <h1
      className={`text-xl md:text-3xl font-semibold font-outfit text-white ${className}`}
    >
      {text}
    </h1>
  );
}

function Paragraph({ content = "This is a paragraph", className }) {
  return (
    <p className={`text-sm md:text-base text-dark-foreground ${className}`}>
      {content}
    </p>
  );
}

function RadioGroupComponents() {
  return (
    <div>
      <Title
        text="Admin Panel Option: Select Source"
        className="mt-8 mb-4 text-lg md:text-xl"
      />
      <div></div>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem className="" value="default" id="r1" />
          <Label htmlFor="r1">
            {" "}
            <Paragraph content="Auto-pull from Post-Course Survey" />
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">
            <Paragraph content="Manually Populate Reviews" />
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

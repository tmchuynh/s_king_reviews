"use client";

import React from "react";
import { Star, StarHalf } from "lucide-react";
import { StarRatingProps } from "@/lib/interfaces";

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;

        if (rating >= starValue) {
          return (
            <Star
              key={index}
              className="w-6 h-6 text-yellow-500 fill-yellow-500 stroke-yellow-500"
            />
          );
        } else if (rating >= starValue - 0.5) {
          return (
            <div key={index} className="relative w-6 h-6">
              <Star className="absolute w-6 h-6 text-muted stroke-muted" />
              <StarHalf className="absolute w-6 h-6 text-yellow-500" />
            </div>
          );
        } else {
          return (
            <Star key={index} className="w-6 h-6 text-muted stroke-muted" />
          );
        }
      })}
    </div>
  );
};

export default StarRating;

import React, { memo } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating = memo<StarRatingProps>(({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center space-x-1">
      {stars.map((star) => (
        <FaStar
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "text-yellow-400 dark:text-yellow-300"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-muted-foreground dark:text-muted-foreground">
        ({rating})
      </span>
    </div>
  );
});

StarRating.displayName = "StarRating";

export default StarRating;

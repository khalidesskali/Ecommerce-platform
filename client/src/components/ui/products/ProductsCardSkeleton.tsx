import React, { memo } from "react";
import { motion } from "framer-motion";

interface ProductCardSkeletonProps {
  index: number;
}

const ProductCardSkeleton = memo(({ index }: ProductCardSkeletonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card dark:bg-card border border-border dark:border-border 
      rounded-xl overflow-hidden shadow-lg"
    >
      {/* Image Skeleton */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <div
          className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/30 
        dark:from-muted/50 dark:to-muted/30 animate-pulse"
        />

        {/* Tag Badge Skeleton */}
        <div className="absolute top-3 left-3 w-12 h-6 bg-muted/60 dark:bg-muted/60 rounded-full animate-pulse" />

        {/* Category Badge Skeleton */}
        <div className="absolute top-3 right-3 w-16 h-6 bg-muted/60 dark:bg-muted/60 rounded-full animate-pulse" />
      </div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="h-6 bg-muted/60 dark:bg-muted/60 rounded animate-pulse" />

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-muted/60 dark:bg-muted/60 rounded animate-pulse" />
          <div className="h-4 bg-muted/60 dark:bg-muted/60 rounded w-3/4 animate-pulse" />
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-muted/60 dark:bg-muted/60 rounded animate-pulse"
            />
          ))}
          <div className="ml-2 w-8 h-4 bg-muted/60 dark:bg-muted/60 rounded animate-pulse" />
        </div>

        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between pt-2">
          <div className="w-20 h-8 bg-muted/60 dark:bg-muted/60 rounded animate-pulse" />
          <div className="w-24 h-10 bg-muted/60 dark:bg-muted/60 rounded-lg animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
});

ProductCardSkeleton.displayName = "ProductCardSkeleton";

export default ProductCardSkeleton;

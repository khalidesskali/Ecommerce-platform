import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SEASON_IMAGE =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"; // Eye-catching, high-fashion seasonal image

const SeasonalBanner: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 my-8">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${SEASON_IMAGE})` }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-3xl px-6 py-16 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 drop-shadow-lg">
            Fall/Winter 2025 Collection
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary mx-auto md:mx-0 rounded-full mb-6" />
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-medium drop-shadow">
            Discover the essence of the season—luxurious textures, timeless
            silhouettes, and bold new arrivals. Elevate your wardrobe with our
            exclusive collection.
          </p>
          <Link
            to="/shop/new-arrivals"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg md:text-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalBanner;

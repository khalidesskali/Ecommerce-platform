import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"; // Designer working on clothing, fits craftsmanship and brand story

const OurStory: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/20 my-8 relative overflow-hidden">
      {/* Soft background pattern for depth */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-secondary/10 to-transparent" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Visual Side */}
        <motion.div
          className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden shadow-xl relative group"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/60 via-secondary/40 to-transparent blur-md opacity-70 animate-pulse-slow z-0" />
          <img
            src={STORY_IMAGE}
            alt="Our Story - Fashion Craftsmanship"
            className="w-full h-full object-cover object-center rounded-2xl relative z-10 border-2 border-white/30 dark:border-black/20"
            loading="lazy"
          />
          {/* Overlay for a muted, premium look */}
          <div className="absolute inset-0 bg-black/10 transition-colors duration-500 rounded-2xl z-10" />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-text dark:text-white mb-4 leading-tight drop-shadow-lg">
            Crafted with Passion
          </h2>
          {/* Dynamic accent bar */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary dark:from-primary dark:via-secondary dark:to-primary mb-7 rounded-full mx-auto md:mx-0 animate-pulse-slow" />
          <p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground mb-8 max-w-xl font-medium leading-relaxed">
            At StyleNest, we believe in timeless design, sustainable materials,
            and meticulous attention to detail. Every piece is crafted to
            inspire confidence and celebrate individuality—season after season.
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/60"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;

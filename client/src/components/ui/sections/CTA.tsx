import React from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-label="Call to Action"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-pink-900/15 to-orange-900/10"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Elevate
              </span>
              <br />
              <span className="text-white">Your Style?</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-16 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full mb-6"
            />

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Explore our latest collection and find your next favorite outfit
              today.
              <span className="text-white font-medium block mt-2">
                Transform your wardrobe with premium fashion.
              </span>
            </motion.p>
          </motion.div>

          {/* Button Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium text-base rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 overflow-hidden"
                aria-label="Shop Now - Explore our collection"
              >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now
                  <motion.div
                    className="w-3.5 h-3.5 text-purple-300"
                    animate={{ x: [0, 2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.div>
                </span>

                {/* Subtle Border Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;

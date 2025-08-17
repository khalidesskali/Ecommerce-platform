import React from "react";
import { motion } from "framer-motion";

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-primary-foreground font-bold text-2xl">
              S
            </span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent">
            StyleNest
          </h1>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center space-y-6">
          {/* Spinning Ring */}
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 border-4 border-muted rounded-full">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full absolute inset-0"></div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-lg font-medium text-text">
              Loading amazing content...
            </p>
            <p className="text-sm text-muted-foreground">
              Please wait while we prepare your experience
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Floating Elements */}
          <div className="relative w-24 h-24">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-secondary rounded-full"
                style={{
                  left: `${25 + i * 25}%`,
                  top: `${25 + i * 25}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PageLoader;

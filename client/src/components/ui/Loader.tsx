import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  variant?: "spinner" | "dots" | "pulse" | "wave" | "ripple";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white";
  text?: string;
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  variant = "spinner",
  size = "md",
  color = "primary",
  text = "Loading...",
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
  };

  const renderLoader = () => {
    switch (variant) {
      case "spinner":
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );

      case "dots":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses.sm} ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        );

      case "pulse":
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );

      case "wave":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses.sm} ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        );

      case "ripple":
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current rounded-full`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current rounded-full absolute inset-0`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderLoader()}
      {text && (
        <motion.p
          className={`text-sm font-medium ${colorClasses[color]} text-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-card rounded-2xl shadow-xl p-8 border border-muted"
        >
          {content}
        </motion.div>
      </div>
    );
  }

  return <div className="flex items-center justify-center p-8">{content}</div>;
};

export default Loader;

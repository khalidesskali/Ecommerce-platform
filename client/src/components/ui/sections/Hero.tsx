import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <motion.section
      className="relative  flex items-center justify-center overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            className="text-left lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="text-primary mr-1 lg:mr-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Elevate
              </motion.span>
              <br className="hidden lg:block" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Your Style
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Discover the perfect blend of luxury and comfort. Our curated
              collection transforms everyday moments into extraordinary
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div>
                <Link
                  to="/shop"
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg w-full lg:w-fit
                    rounded-lg hover:bg-primary/90 cursor-pointer transition-all duration-300 shadow-lg 
                    hover:shadow-xl inline-block text-center border-2 border-primary"
                >
                  Shop Now
                </Link>
              </div>
              <div>
                <Link
                  to="/categories"
                  className="px-8 py-4 border-2 border-primary text-primary font-bold text-lg w-full
                    rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300
                    cursor-pointer inline-block text-center"
                >
                  Explore Collection
                </Link>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex lg:flex-wrap gap-5 lg:gap-12 text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-secondary group-hover:text-secondary/80 
                transition-colors duration-300"
                >
                  50K+
                </motion.div>
                <div className="text-sm font-medium">Happy Customers</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-secondary group-hover:text-secondary/80 
                transition-colors duration-300"
                >
                  100%
                </motion.div>
                <div className="text-sm font-medium">Quality Guaranteed</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-3xl font-bold text-secondary group-hover:text-secondary/80 
                transition-colors duration-300"
                >
                  24/7
                </motion.div>
                <div className="text-sm font-medium">Customer Support</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              {/* Main image */}
              <div className="relative md:w-[700px] lg:w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Young woman with shopping bags"
                  className="w-full h-full object-cover"
                />

                {/* Text overlay */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-text font-bold text-lg">
                    INSPIRED BY NEW LIFESTYLE
                  </p>
                  <div className="mt-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Circular image overlay */}
                <div className="absolute bottom-8 right-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-text rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Smiling man in sweater"
                          className="h-full object-cover w-[700px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shopping bags illustration */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <div className="flex flex-col space-y-2">
                    <div className="w-8 h-10 bg-secondary rounded-sm shadow-md"></div>
                    <div className="w-8 h-10 bg-primary rounded-sm shadow-md"></div>
                    <div className="w-8 h-10 bg-muted rounded-sm shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-xl blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

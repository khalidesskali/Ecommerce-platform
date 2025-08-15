import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsLetter: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (EMAIL_REGEX.test(email)) {
      setSuccess(true);
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary"
      aria-label="Newsletter Signup"
    >
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary-foreground mb-4 leading-tight drop-shadow-lg">
          Stay in Style
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl font-medium leading-relaxed">
          Join our newsletter and get{" "}
          <span className="font-semibold text-secondary-foreground">
            10% off
          </span>{" "}
          your first order, plus exclusive style tips and early access to new
          collections.
        </p>
        {success ? (
          <div className="w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-success/90 text-success-foreground rounded-lg px-6 py-4 mb-4 w-full flex flex-col items-center shadow-md"
              role="status"
              aria-live="polite"
            >
              <span className="text-lg font-semibold mb-2">
                Thank you for subscribing!
              </span>
              <span className="text-base">
                Check your inbox for your 10% off code.
              </span>
            </motion.div>
          </div>
        ) : (
          <form
            className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center"
            aria-label="Sign up for our newsletter"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              required
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-5 py-3 rounded-lg border border-white/30 bg-white/80 text-text placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200 text-base font-medium shadow-sm"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg shadow-md hover:scale-[1.04] hover:bg-secondary/90 transition-all duration-200 text-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/60"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default NewsLetter;

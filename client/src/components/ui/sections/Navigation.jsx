import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CartIcon } from "../icons";

const Navigation = memo(({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = useMemo(
    () => [
      { name: "Shop", href: "/shop" },
      { name: "Categories", href: "/categories" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              color: "hsl(var(--primary))",
            }}
          >
            <Link
              to={link.href}
              className="text-text hover:text-primary font-medium transition-colors
               duration-200 relative group"
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary
               transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={
          isMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden fixed top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="block px-3 py-2 text-text hover:text-primary hover:bg-primary/10 rounded-md
                font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <div className="pt-4 space-y-2">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 
              transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <CartIcon className="w-5 h-5" />
              <span>Cart (3)</span>
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg 
                font-medium hover:bg-primary/90 transition-colors duration-200 block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;

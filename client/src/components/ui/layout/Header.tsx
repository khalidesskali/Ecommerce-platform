import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-highlight/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Home Link */}
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
            >
              STYLENESS
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="md:hidden text-primary hover:text-accent transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                custom={index}
              >
                <Link
                  to={item.href}
                  className="text-primary hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div variants={itemVariants}>
              <Link
                to="/cart"
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag className="w-6 h-6" />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                to="/signup"
                className="bg-cta text-cta-foreground px-4 py-2 rounded-lg hover:bg-cta/90 transition-colors duration-300"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md"
            >
              <nav className="flex flex-col space-y-4 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="text-primary hover:text-accent transition-colors duration-300 block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center space-x-4 pt-4 border-t border-highlight/20"
                >
                  <Link
                    to="/cart"
                    className="text-primary hover:text-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingBag className="w-6 h-6" />
                    </motion.div>
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-cta text-cta-foreground px-4 py-2 rounded-lg hover:bg-cta/90 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Up
                    </motion.span>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

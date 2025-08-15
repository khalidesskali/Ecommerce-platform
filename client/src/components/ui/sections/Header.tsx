import { useState, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.tsx";
import { CartIcon, MenuIcon, CloseIcon } from "../icons";

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b
     border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg
               flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <span className="text-xl font-bold text-text">StyleNest</span>
            </Link>
          </motion.div>

          {/* Navigation Component */}
          <div className="relative flex-1 flex justify-center">
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-text hover:text-primary transition-colors duration-200"
            >
              <CartIcon />
              <span
                className="absolute -top-1 -right-1 bg-danger text-danger-foreground 
              text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                3
              </span>
            </motion.button>

            <Link
              to="/login"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium
               hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-text hover:text-primary p-2"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;

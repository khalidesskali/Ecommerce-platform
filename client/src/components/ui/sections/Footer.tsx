import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Heart, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
  ];

  const customerServiceLinks = [
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      name: "Pinterest",
      icon: Heart,
      href: "https://pinterest.com",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-500/20",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/20",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6  py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-orange-300 transition-all duration-300">
                StyleNest
              </h3>
            </Link>
            <p className="text-slate-300 mb-6 max-w-xs leading-relaxed text-base">
              Elevating your style with premium fashion that speaks to your
              individuality. Discover the perfect blend of luxury and comfort.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>24/7 Customer Support</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Shop
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 text-base relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Customer Service
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-all duration-300 text-base relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Connect With Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-slate-700/50 backdrop-blur-sm rounded-xl text-slate-300 transition-all duration-300 border border-slate-600/30 ${social.color} ${social.bgColor} hover:border-slate-500/50 hover:shadow-lg hover:shadow-slate-900/50`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                hello@stylenest.com
              </p>
              <p className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} StyleNest. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                Privacy
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                Terms
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                to="/cookies"
                className="text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                Cookies
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

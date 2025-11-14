import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/BWJ Logos.png";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    { name: "Other Campuses", path: "/Campuses" },
  ];

  const phoneNumber = "918056179108"; // ✅ Use full number with country code
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-premium sticky top-0 z-50 border-b border-neutral-100">
      <div className="container mx-auto px-3">

        {/* 🔸 Top mini bar with enhanced animations */}
        <div className="hidden md:flex justify-between py-1.5 text-xs border-b border-neutral-100">
          <div className="flex items-center gap-4 text-neutral-500">
            <motion.div
              className="flex items-center gap-1 cursor-pointer"
              whileHover={{ scale: 1.05, color: "hsl(var(--premium-orange))" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                <Phone className="w-3.5 h-3.5" />
              </motion.div>
              <span className="font-medium">+91 8056179108</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-1 cursor-pointer"
              whileHover={{ scale: 1.05, color: "hsl(var(--premium-teal))" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div whileHover={{ y: [0, -2, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
                <MapPin className="w-3.5 h-3.5" />
              </motion.div>
              <span className="font-medium">Chennai, Tamil Nadu</span>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-colored"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨ Admissions Open 2025-26 ✨
          </motion.div>
        </div>

        {/* 🔸 Main navbar */}
        <div className="flex items-center justify-between py-2.5">

          {/* Logo with enhanced animation */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Basil Woods Juniors Logo"
              className="w-16 h-16"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop nav with enhanced animations */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 block
                      ${isActive
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:text-orange-600"
                      }`}
                  >
                    {item.name}

                    {/* Animated underline on hover */}
                    {!isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Active indicator with pulse */}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.span
                          className="absolute inset-0 bg-orange-400 rounded-full"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* ✅ Desktop WhatsApp Button with enhanced animation */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="hidden md:flex items-center gap-2 btn-primary hover-glow px-4 py-2.5 shadow-sm font-medium text-sm"
                onClick={handleWhatsAppRedirect}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaWhatsapp className="w-6 h-6" />
                </motion.div>
                <span>Contact Us</span>
              </Button>
            </motion.div>

            {/* Mobile menu toggle with animation */}
            <motion.button
              className="lg:hidden p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* 🔸 Mobile nav with animations */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden pb-3 border-t border-gray-100 bg-white/90 backdrop-blur-sm rounded-b-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col gap-0.5 mt-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`relative py-2.5 px-3 text-sm font-medium rounded-lg transition-all duration-300 block
                        ${isActive
                          ? "text-orange-600 bg-orange-50"
                          : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}

                      {/* Active indicator */}
                      {isActive && (
                        <motion.span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-primary rounded-r-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* ✅ Mobile WhatsApp Button with animation */}
              <motion.div
                className="mt-2 px-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg py-2.5 font-medium text-sm shadow-md flex items-center justify-center gap-2"
                    onClick={handleWhatsAppRedirect}
                  >
                    <FaWhatsapp className="w-6 h-6" />
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X, Calendar, MessageCircle, Palette } from "lucide-react";
import { DoodleBird, DoodleSun, DoodleSparkle } from "@/components/ui/doodles";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/BWJ Logos.png";
import Cambridge from "../assets/Images/Cambridge.jpeg"
import logo3 from "../assets/Images/Logo3.png"
import HKM from "../assets/Images/HKM.png"
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    // { name: "Parent Corner", path: "/partners" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
    { name: "Other Campuses", path: "/campuses" },
  ];

  const phoneNumber = "918056179108";
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Chalkboard Style */}
      <div className="bg-[hsl(var(--brand-dark-green))] text-white py-2 hidden md:block relative z-50 border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-bold tracking-wide font-handwriting">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors cursor-pointer">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>+91 8056179108</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors cursor-pointer">
              <Palette className="w-4 h-4 text-green-400" />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
              Admissions Open 2026-2027 
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-1 border-b-2 border-neutral-100"
          : "bg-white py-1 border-b-2 border-transparent"
          }`}
      >
        <div className="w-full px-2 md:px-6">
          <div className="flex items-center justify-between relative">
            {/* Decorative Doodles */}
            {/* <div className="absolute -top-6 -left-8 hidden xl:block pointer-events-none opacity-80">
              <DoodleSun className="w-20 h-20 text-yellow-400 rotate-12" />
            </div> */}
            {/* <div className="absolute -bottom-8 left-1/3 hidden lg:block pointer-events-none opacity-60">
              <DoodleBird className="w-12 h-8 text-[hsl(var(--premium-teal))]" />
            </div> */}
            <div className="absolute top-0 right-[25%] hidden xl:block pointer-events-none opacity-0">
              <DoodleSparkle className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>

            {/* Logo Section */}
            <div className="flex items-center gap-1 md:gap-4 relative z-50">

              {/* 1. Basil Woods Logo */}
              <Link to="/" className="block">
                <motion.img
                  src={logo}
                  alt="Basil Woods Juniors"
                  className={`transition-all duration-300 object-contain ${scrolled ? "w-20 md:w-32" : "w-24 md:w-44 lg:w-60 xl:w-72"}`}
                  whileHover={{ scale: 1.05 }}
                />
              </Link>

              {/* Separator 1 */}
              <div className="h-8 md:h-12 w-[1.5px] bg-neutral-300 rounded-full mx-0.5 md:mx-1"></div>
              {/* 3. Stacked: Cambridge & ISKCON */}
              <div className="flex flex-col gap-1 md:gap-2 justify-center">
                <Link to="/" className="block">
                  <img
                    src={Cambridge}
                    alt="Cambridge"
                    className={`transition-all duration-300 object-contain ${scrolled ? "w-16 md:w-28" : "w-20 md:w-32 lg:w-40 xl:w-64"}`}
                  />
                </Link>
                <Link to="https://hkm-landing-test-2.vercel.app/" className="block">
                  <img
                    src={HKM}
                    alt="Culture Connect"
                    className={`transition-all duration-300 object-contain ${scrolled ? "w-16 md:w-28" : "w-20 md:w-32 lg:w-40 xl:w-64"}`}
                  />
                </Link>

              </div>
              {/* Separator 2 */}
              <div className="h-8 md:h-12 w-[1.5px] bg-neutral-300 rounded-full mx-0.5 md:mx-1"></div>

              {/* 2. Culture Connect Logo */}
              <Link to="/" className="block">
                <img
                  src={logo3}
                  alt="ISKCON"
                  className={`transition-all duration-300 object-contain ${scrolled ? "w-14 md:w-24" : "w-16 md:w-28 lg:w-36 xl:w-44"}`}
                />
              </Link>
            </div>

            {/* Desktop Navigation - Tab Style */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative"
                  >
                    <motion.div
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${isActive
                        ? "bg-yellow-100 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        : "border-transparent text-neutral-600 hover:bg-neutral-50 hover:border-neutral-200"
                        }`}
                      whileHover={!isActive ? { y: -2 } : {}}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={handleWhatsAppRedirect}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex bg-[#25D366] text-white rounded-full p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-[#20bd5a] transition-colors"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="hidden md:flex bg-white text-[hsl(var(--premium-orange))] font-bold rounded-xl px-5 py-2.5 border-2 border-[hsl(var(--premium-orange))] shadow-[4px_4px_0px_0px_hsl(var(--premium-orange))] hover:shadow-[6px_6px_0px_0px_hsl(var(--premium-orange))] transition-all items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <a href="/contact"><span>Book a Visit</span></a>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg bg-yellow-100 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Notebook Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#fffdf5] pt-48 px-6 lg:hidden overflow-y-auto"
            style={{
              backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px)`,
              backgroundSize: '100% 40px'
            }}
          >
            {/* Red Margin Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-300/50" />

            <div className="flex flex-col gap-6 pl-8 translate-y-1  relative z-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-2xl font-handwriting font-bold transition-colors ${location.pathname === item.path
                      ? "text-[hsl(var(--premium-orange))]"
                      : "text-neutral-700 hover:text-black"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-500 text-white font-bold py-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-lg"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  Chat on WhatsApp
                </Button>

                <Button
                  className="w-full bg-white text-[hsl(var(--premium-orange))] font-bold py-6 rounded-xl border-2 border-[hsl(var(--premium-orange))] shadow-[4px_4px_0px_0px_hsl(var(--premium-orange))] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-lg"
                >
                  <Calendar className="w-6 h-6 mr-2" />
                  Book a Visit
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
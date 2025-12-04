import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Star, Heart, Sun } from "lucide-react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5 seconds or when page loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fffdf5]"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

          <div className="relative flex flex-col items-center">

            {/* Drawing Animation Container */}
            <div className="relative w-64 h-40 flex items-center justify-center">

              {/* SVG Path for "Drawing" Effect */}
              <svg width="200" height="100" viewBox="0 0 200 100" className="absolute overflow-visible">
                <motion.path
                  d="M 20 80 Q 50 20 80 80 T 140 80 T 180 50"
                  fill="none"
                  stroke="hsl(var(--premium-orange))"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="0 1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                />
              </svg>

              {/* Moving Pencil */}
              <motion.div
                className="absolute"
                animate={{
                  x: [0, 60, 120, 160, 120, 60, 0],
                  y: [30, -30, 30, 0, 30, -30, 30],
                  rotate: [-10, 10, -10, 0, -10, 10, -10]
                }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="relative">
                  <Pencil className="w-12 h-12 text-[hsl(var(--brand-dark-green))] fill-[hsl(var(--premium-yellow))]" />
                  {/* Pencil Tip Glow */}
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-[hsl(var(--premium-orange))] rounded-full blur-sm opacity-50" />
                </div>
              </motion.div>

              {/* Popping Doodles */}
              <motion.div
                className="absolute -top-4 left-10 text-[hsl(var(--premium-pink))]"
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                <Heart className="w-8 h-8 fill-current" />
              </motion.div>

              <motion.div
                className="absolute top-0 right-20 text-[hsl(var(--premium-yellow))]"
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              >
                <Star className="w-8 h-8 fill-current" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-10 text-[hsl(var(--premium-teal))]"
                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
              >
                <Sun className="w-8 h-8 fill-current" />
              </motion.div>

            </div>

            {/* Handwritten Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h2 className="text-3xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting mb-2">
                Getting Ready...
              </h2>
              <div className="flex gap-2 justify-center">
                <motion.div
                  className="w-3 h-3 rounded-full bg-[hsl(var(--premium-orange))]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-[hsl(var(--premium-pink))]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-[hsl(var(--premium-teal))]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

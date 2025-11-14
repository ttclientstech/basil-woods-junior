import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-[hsl(var(--light-orange))] to-[hsl(var(--light-teal))]"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated Logo/Icon */}
            <div className="relative">
              {/* Bouncing Ball Animation */}
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-primary shadow-2xl"
                animate={{
                  y: [0, -40, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Decorative circles */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[hsl(var(--premium-purple))] opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-[hsl(var(--premium-teal))] opacity-60"
                animate={{
                  scale: [1, 1.4, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </div>

            {/* Loading Text */}
            <div className="flex flex-col items-center gap-2">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-[hsl(var(--brand-dark-green))]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Basil Woods Juniors
              </motion.h2>

              {/* Animated Dots */}
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--premium-orange))]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Fun Spinning Crayon */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Rainbow circle segments */}
              {[
                { color: "--premium-orange", rotate: 0 },
                { color: "--premium-yellow", rotate: 60 },
                { color: "--premium-green", rotate: 120 },
                { color: "--premium-teal", rotate: 180 },
                { color: "--premium-purple", rotate: 240 },
                { color: "--premium-pink", rotate: 300 },
              ].map((segment, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-10 rounded-full opacity-30"
                  style={{
                    backgroundColor: `hsl(var(${segment.color}))`,
                    top: "50%",
                    left: "50%",
                    transformOrigin: "center center",
                    transform: `translate(-50%, -50%) rotate(${segment.rotate}deg) translateY(-50px)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

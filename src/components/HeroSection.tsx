import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Star, Heart, ArrowRight, Calendar, Music, Palette, Puzzle } from "lucide-react";
import WaveDivider from "@/components/ui/wave-divider";
import { DoodleSun, DoodleCloud, DoodleBird, DoodlePencil, DoodleBook, DoodleRocket, DoodleBulb } from "@/components/ui/doodles";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, animate, useInView } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';
import VideoModal from "@/components/ui/video-modal";

/* Import images */
import picture1 from "../assets/Images/Hero1.png";
import picture2 from "../assets/Images/Hero2.png";
import picture3 from "../assets/Images/Hero3.png";
import happyBoyImg from "../assets/Images/demo.png";

const phoneNumber = "918056179108";
const handleWhatsAppRedirect = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

import { AnimatedCounter } from "@/components/ui/animated-counter";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroContent = [
    {
      titlePrefix: "Where Little",
      highlight: "Minds Bloom",
      description: "A magical place where learning meets play. We nurture curiosity, creativity, and confidence in every child.",
      image: picture3,
      color: "bg-[hsl(var(--premium-pink))]"
    },
    {
      titlePrefix: "Preschool in",
      highlight: "Thiruvanmiyur",
      description: "Award-winning independent preschool offering Montessori & play-based learning. We nurture curiosity, creativity, and confidence in every child.",
      image: picture1,
      color: "bg-[hsl(var(--premium-pink))]"
    },
    {
      titlePrefix: "Nurturing",
      highlight: "Future Leader",
      description: "Building strong foundations through a blend of modern education and traditional Indian values.",
      image: picture2,
      color: "bg-[hsl(var(--premium-orange))]"
    },
    {
      titlePrefix: "Learning Through",
      highlight: "Pure Joy",
      description: "A magical environment where every day is a new adventure in creativity, exploration, and fun.",
      image: picture3,
      color: "bg-[hsl(var(--premium-teal))]"
    }
  ];

  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % heroContent.length);
    }, 4000);
    return () => clearInterval(id);
  }, [heroContent.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center  bg-green-50 overflow-hidden pt-12 pb-16 md:pt-0 md:pb-16">

      {/* Marquee Banner */}
      <div className="absolute top-0 w-full bg-[hsl(var(--premium-yellow))] overflow-hidden py-2 border-b-2 border-black z-30">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {Array(2).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-black font-bold text-sm md:text-base font-handwriting tracking-wide">
              <span>Basil Woods Juniors International preschool & Day care @ Thiruvanmiyur, Chennai</span>
              {/* <span className="text-[hsl(var(--premium-orange))] font-extrabold">•</span> */}
              <span className="uppercase text-[hsl(var(--brand-dark-green))]">Admissions Open 2026-2027</span>
              {/* <span className="text-[hsl(var(--premium-orange))] font-extrabold">•</span> */}
            </div>
          ))}
        </motion.div>
      </div>


      {/* Animated Background Elements - Emerging Vectors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {/* Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[hsl(var(--premium-pink)/0.4)] rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[hsl(var(--premium-teal)/0.4)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Background Pattern - Subtle Geometry */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-60 mix-blend-multiply"></div>
        </div>
        {/* Branch Name Header */}
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-3xl md:hidden font-black text-[hsl(var(--brand-dark-green))] font-handwriting transform -rotate-1">
            Basil Woods Juniors <br />
            <span className="relative inline-block mt-2 px-2">
              <span className="relative z-10 text-white">@Thiruvanmiyur</span>
              <span className="absolute inset-0 bg-[hsl(var(--premium-orange))] transform -rotate-2 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0"></span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-8 relative">


            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-block mt-8"
            >
              <div className="bg-white text-[hsl(var(--premium-orange))] px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black mb-4 md:mb-6 inline-flex items-center gap-2 transform -rotate-2">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                ADMISSIONS OPEN 2026 - 2027
              </div>
            </motion.div>

            <div className="min-h-[160px] md:min-h-[200px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-[hsl(var(--brand-dark-green))] leading-[1] tracking-tight mb-4 md:mb-6 font-handwriting">
                    {heroContent[active].titlePrefix} <br className="hidden lg:block" />
                    <span className="relative inline-block mt-1 md:mt-2">
                      <span className="relative z-10 text-white px-2" style={{ textShadow: '2px 2px 0px black, 4px 4px 0px black' }}>
                        {heroContent[active].highlight}
                      </span>
                      <span className={`absolute inset-0 ${heroContent[active].color} transform -rotate-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0`} />
                    </span>
                  </h1>

                  <p className="text-lg md:text-2xl text-neutral-700 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 font-handwriting">
                    {heroContent[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
              {/* Invisible spacer to maintain layout height */}
              <div className="opacity-0 pointer-events-none relative z-[-1]">
                <h1 className="text-3xl md:text-7xl lg:text-8xl font-black leading-[1] tracking-tight mb-4 md:mb-6 font-handwriting">
                  Preschool in <br className="hidden lg:block" />
                  <span className="relative inline-block mt-1 md:mt-2">
                    <span className="relative z-10 px-2">Thiruvanmiyur</span>
                  </span>
                  <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-xl">
                    Award-winning independent preschool offering Montessori & play-based learning. We nurture curiosity, creativity, and confidence in every child.
                  </p>
                </h1>
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 pt-6 lg:pt-24 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="w-full sm:w-auto bg-[hsl(var(--premium-orange))] text-white text-lg md:text-xl font-black px-6 py-3 md:px-8 md:py-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 md:gap-3 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                Book a Visit
              </motion.button>

              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                className="w-full sm:w-auto bg-white text-[hsl(var(--brand-dark-green))] text-lg md:text-xl font-black px-6 py-3 md:px-8 md:py-4 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 md:gap-3 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                Watch Video
              </motion.button>


            </motion.div>



            {/* Trust Indicators - Redesigned */}
            <motion.div
              className="pt-6 md:pt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Stat Card 1 */}
              <div className="flex items-center bg-gradient-to-br from-green-100 to-green-200 gap-4 bg-white p-3 pr-6 rounded-2xl border-2 border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-200 text-yellow-600">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-black text-neutral-800 font-handwriting leading-none flex items-center">
                    <AnimatedCounter to={15} delay={0.5} />+
                  </div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Years of Joy</div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-neutral-200" />

              {/* Stat Card 2 */}
              <div className="flex items-center bg-gradient-to-br from-blue-100 to-blue-200 gap-4 bg-white p-3 pr-6 rounded-2xl border-2 border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200 text-pink-600">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-black text-neutral-800 font-handwriting leading-none flex items-center">
                    <AnimatedCounter to={500} delay={0.5} />+
                  </div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Happy Families</div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Visuals - Cloud Frame */}
          <div className="flex-1 relative w-full max-w-sm md:max-w-lg lg:max-w-none pt-8 md:pt-0 mb-4 md:mb-0">
            <motion.div
              initial={{ scale: 0.8, rotate: 5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square "
            >
              {/* Cloud Frame Background */}
              <div className="absolute inset-0 bg-white rounded-[2rem] md:rounded-[3rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-2 z-0" />

              {/* Image Container */}
              <div className="absolute inset-2 md:inset-4 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-2 border-black z-10 bg-neutral-100">
                {heroContent.map((content, idx) => (
                  <motion.img
                    key={idx}
                    src={content.image}
                    alt={`Basil Woods slide ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: active === idx ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                ))}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-8 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 md:gap-3 w-[160px] md:w-auto md:max-w-[220px] z-20 transform -rotate-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-[hsl(var(--light-pink))] p-2 md:p-3 rounded-full border-2 border-black">
                  <Star className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-neutral-500 font-black uppercase tracking-wider">Rated #1</div>
                  <div className="text-sm md:text-lg font-black text-neutral-900 leading-tight">Best Preschool</div>
                </div>
              </motion.div>

              {/* Decorative Star */}
              <motion.div
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 text-yellow-400 z-20"
                animate={{ rotate: [0, 180, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Star className="w-20 h-20 fill-yellow-400 stroke-black stroke-2" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=w4WyoDOi460"
        title="Experience Basil Woods Juniors"
      />

      {/* Universal Happy Boy Vector - Fixed Position Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: -50,
          y: [0, -15, 0]
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute left-0 bottom-4 md:bottom-0 w-28 md:w-56 lg:w-64 z-20 pointer-events-none"
      >
        <img src={happyBoyImg} alt="Happy School Boy" className="w-full h-auto drop-shadow-xl transform scale-x-[-1]" />
      </motion.div>
       <WaveDivider position="bottom" fill="#b3cee3ff" variant={4}  />

    </section>
  );
};

export default HeroSection;
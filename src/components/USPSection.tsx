
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Building2, Building, MapPin, BookOpen, Trophy, GraduationCap, Sprout, Star, Heart } from "lucide-react";
import WaveDivider from "@/components/ui/wave-divider";

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

import { StarDoodle, DoodleCloud, DoodleSun, DoodlePencil, DoodleSparkle, DoodleRocket } from "@/components/ui/doodles";


const USPSection = () => {
  const stats = [
    { value: 1500, suffix: "+", label: "Happy Students", icon: GraduationCap, color: "bg-orange-400", shadow: "shadow-orange-600" },
    { value: 15, suffix: "+", label: "Years Experience", icon: BookOpen, color: "bg-teal-400", shadow: "shadow-teal-600" },
    { value: 11, suffix: "", label: "Preschools", icon: Building2, color: "bg-pink-400", shadow: "shadow-pink-600" },
  ];

  const advantages = [
    {
      title: "Well-Researched Curriculum",
      description: "Scientifically designed by experts, our curriculum seamlessly blends ancient Vedic wisdom with modern Montessori methods to foster innovation, critical thinking, and strong foundational values.",
      icon: BookOpen,
      color: "bg-yellow-100",
      borderColor: "border-yellow-400",
      shadowColor: "shadow-yellow-400",
      iconColor: "text-yellow-600"
    },
    {
      title: "Award-Winning Program",
      description: "Consistently recognized among India's top preschools by Education Today, achieving excellence in early childhood education through our unwavering commitment to quality, safety, and holistic growth.",
      icon: Trophy,
      color: "bg-yellow-100",
      borderColor: "border-yellow-400",
      shadowColor: "shadow-yellow-400",
      iconColor: "text-yellow-600"
    },
    {
      title: "Expert Academicians",
      description: "Our team consists of passionate facilitators and subject matter experts with decades of combined experience, dedicated to nurturing young minds with patience, love, and professional expertise.",
      icon: GraduationCap,
      color: "bg-yellow-100",
      borderColor: "border-yellow-400",
      shadowColor: "shadow-yellow-400",
      iconColor: "text-yellow-600"
    },
    {
      title: "Holistic Development",
      description: "We focus on the complete child—nurturing Physical (PQ), Intellectual (IQ), Emotional (EQ), and Spiritual (SQ) quotients—to build well-rounded individuals ready for the future.",
      icon: Sprout,
      color: "bg-purple-100",
      borderColor: "border-purple-400",
      shadowColor: "shadow-purple-400",
      iconColor: "text-purple-600"
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[hsl(var(--section-3))] relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={2} />

      {/* Background Doodles - Enhanced & Visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-[5%] text-orange-400 opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <DoodleSun className="w-24 h-24" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-[10%] text-blue-400 opacity-60"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleCloud className="w-32 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-[10%] text-yellow-500 opacity-70"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <StarDoodle className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-[50%] text-pink-400 opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <DoodleSparkle className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[5%] text-[hsl(var(--premium-orange))] opacity-50"
          animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleRocket className="w-20 h-20 transform -rotate-45" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-neutral-800 leading-tight mb-4 md:mb-6">
            Where Vision Meets <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-white px-2">Experience</span>
              <span className="absolute inset-0 bg-[hsl(var(--premium-orange))] transform -rotate-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-0"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-700 font-medium px-4">
            Spreading our wings across India to enable a smarter generation.
          </p>
        </div>

        {/* Floating Stats Badges */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-16 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-black flex flex-col items-center justify-center text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 mx-auto`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.5 } }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl text-[#F97316] font-black leading-none mb-1 flex items-baseline justify-center">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <span className="text-xs md:text-sm font-bold text-[#F97316] uppercase tracking-wide px-2 leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid - Handcrafted Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: 4, x: 4, transition: { duration: 0.1 } }}
              className="group"
            >
              <div
                className={`relative h-full bg-white border-4 ${adv.borderColor} rounded-3xl p-6 md:p-8 transition-all duration-100`}
              >
                {/* Colored Shadow via pseudo-element */}
                <div className={`absolute inset-0 rounded-3xl border-4 ${adv.borderColor} translate-x-2 translate-y-2 -z-10 ${adv.color}`} />

                {/* Floating Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 ${adv.color} border-2 ${adv.borderColor} rounded-2xl flex items-center justify-center mb-4 md:mb-6 transform -rotate-3 group-hover:rotate-3 transition-transform`}>
                  <adv.icon className={`w-7 h-7 md:w-8 md:h-8 ${adv.iconColor}`} strokeWidth={2.5} />
                </div>

                <h3 className="text-lg md:text-xl font-black text-neutral-800 mb-2 md:mb-3">
                  {adv.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 font-medium leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <WaveDivider position="bottom" fill="#eee7fa" variant={3} />
    </section>
  );
};

export default USPSection;


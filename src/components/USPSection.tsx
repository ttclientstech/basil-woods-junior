
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Building2, Building, MapPin, BookOpen, Trophy, GraduationCap, Sprout, Star, Heart } from "lucide-react";
import WaveDivider from "@/components/ui/wave-divider";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import playingChildrenImg from "../assets/Images/boyplay.png";
import { StarDoodle, DoodleCloud, DoodleSun, DoodlePencil, DoodleSparkle, DoodleRocket } from "@/components/ui/doodles";


const USPSection = () => {
  const stats = [
    { value: 11, suffix: "", label: "Preschools" },
    { value: 6, suffix: "", label: "Cities" },
    { value: 4, suffix: "", label: "States" },
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
              className={`relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-white border-4 border-black flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105 mx-auto`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.5 } }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-7xl text-[#EA580C] font-black leading-none mb-2 md:mb-3 flex items-baseline justify-center font-handwriting">
                <AnimatedCounter to={stat.value} duration={2} delay={0.2 * i} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <span className="text-sm md:text-lg font-black text-[#F97316] uppercase tracking-wide px-2 leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Animated Connector Line - Visible on Desktop */}
        <div className="hidden md:block absolute top-[30%] left-0 right-0 h-[80%] pointer-events-none z-0 max-w-5xl mx-auto">
          <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path
              d="M 250 150 C 500 150, 500 150, 750 150 C 900 150, 900 300, 750 300 L 250 300 C 100 300, 100 450, 250 450 L 750 450"
              fill="none"
              stroke="#fb923c"
              strokeWidth="4"
              strokeDasharray="12 12"
              className="opacity-30"
            />
            <motion.path
              d="M 250 150 C 500 150, 500 150, 750 150 C 900 150, 900 300, 750 300 L 250 300 C 100 300, 100 450, 250 450 L 750 450"
              fill="none"
              stroke="#fb923c"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Decorative Vector Image - Playing Children */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10, y: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -15, 0]
          }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            scale: { duration: 0.8, delay: 0.5, type: "spring" },
            rotate: { duration: 0.8, delay: 0.5 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute -right-8 w-32 md:w-64 lg:w-80 z-20 block lg:block pointer-events-none transform translate-x-4 md:translate-x-12 top-0 md:top-auto"
        >
          <img src={playingChildrenImg} alt="Kids Playing" className="w-full h-auto drop-shadow-xl" />
        </motion.div>

        {/* Advantages Grid - Handcrafted Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16 max-w-5xl mx-auto relative z-10">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.4, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[2rem] transform rotate-1 group-hover:rotate-2 transition-transform duration-300 pointer-events-none" />

              <div className="relative h-full bg-white/80 backdrop-blur-md border border-white/60 rounded-[2rem] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)]">

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-xl text-neutral-300 shadow-inner group-hover:text-[hsl(var(--premium-orange))] group-hover:scale-110 transition-all duration-300 z-10">
                  {i + 1}
                </div>

                {/* Colorful Accent Line */}
                <div className={`absolute top-10 left-0 w-1.5 h-full ${adv.color.replace('bg-', 'bg-gradient-to-b from-')} to-transparent`} />

                {/* Decorative Top Right Corner */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 ${adv.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 ease-out`} />

                {/* Animated Icon Bubble */}
                <div className="relative w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`absolute inset-0 ${adv.color} opacity-30 rounded-2xl blur-md group-hover:blur-xl transition-all duration-300`} />
                  <div className={`relative z-10 w-full h-full bg-white border border-${adv.borderColor.split('-')[1]}-${adv.borderColor.split('-')[2]} rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-3 transition-transform duration-300`}>
                    <adv.icon className={`w-10 h-10 ${adv.iconColor}`} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-2xl font-black font-handwriting text-neutral-800 mb-3 group-hover:text-[hsl(var(--premium-orange))] transition-colors">
                  {adv.title}
                </h3>

                <p className="text-neutral-600 font-medium leading-relaxed relative z-10">
                  {adv.description}
                </p>

                {/* Bottom Corner Watermark Icon */}
                <div className={`absolute -bottom-6 -right-6 opacity-[0.03] transform pointer-events-none group-hover:rotate-12 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500`}>
                  <adv.icon className="w-32 h-32 text-black" strokeWidth={1} />
                </div>
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


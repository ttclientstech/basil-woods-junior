import React from "react";
import { motion } from "framer-motion";
import { Building2, Building, MapPin, BookOpen, Trophy, GraduationCap, Sprout, Star, Heart } from "lucide-react";
import WaveDivider from "@/components/ui/wave-divider";

const USPSection = () => {
  const stats = [
    { number: "1500+", label: "Happy Students", icon: GraduationCap, color: "bg-orange-400", shadow: "shadow-orange-600" },
    { number: "15+", label: "Years Experience", icon: BookOpen, color: "bg-teal-400", shadow: "shadow-teal-600" },
    { number: "11", label: "Preschools", icon: Building2, color: "bg-pink-400", shadow: "shadow-pink-600" },
  ];

  const advantages = [
    {
      title: "Well-Researched Curriculum",
      description: "Scientifically designed by experts, blending innovation with foundational values.",
      icon: BookOpen,
      color: "bg-yellow-100",
      borderColor: "border-yellow-400",
      shadowColor: "shadow-yellow-400",
      iconColor: "text-yellow-600"
    },
    {
      title: "Award-Winning Program",
      description: "Recognized among India's top preschools by Education Today for excellence.",
      icon: Trophy,
      color: "bg-blue-100",
      borderColor: "border-yellow-400",
      shadowColor: "shadow-yellow-400",
      iconColor: "text-blue-600"
    },
    {
      title: "Expert Academicians",
      description: "Facilitators with decades of experience in early childhood education.",
      icon: GraduationCap,
      color: "bg-green-100",
      borderColor: "border-yellow-400",
      shadowColor: "shadow-yellow-400",
      iconColor: "text-green-600"
    },
    {
      title: "Holistic Development",
      description: "Nurturing physical, emotional, and intellectual growth through our 4Q model.",
      icon: Sprout,
      color: "bg-purple-100",
      borderColor: "border-purple-400",
      shadowColor: "shadow-purple-400",
      iconColor: "text-purple-600"
    },
  ];

  return (
    <section className="py-20 bg-[hsl(var(--section-3))] relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={2} />

      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-orange-400 rounded-full" />
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-teal-400 rotate-12 rounded-xl" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-500 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">


          <h2 className="text-4xl md:text-6xl font-black text-neutral-800 leading-tight mb-6">
            Where Vision Meets <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-white px-2">Experience</span>
              <span className="absolute inset-0 bg-[hsl(var(--premium-orange))] transform -rotate-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-0"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-700 font-medium">
            Spreading our wings across India to enable a smarter generation.
          </p>
        </div>

        {/* Floating Stats Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white border-4 border-black flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-105`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.5 } }}
              viewport={{ once: true }}
            >
              <span className="text-4xl md:text-5xl text-[#F97316] font-black leading-none mb-1">{stat.number}</span>
              <span className="text-xs md:text-sm font-bold text-[#F97316] uppercase tracking-wide px-2 leading-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid - Handcrafted Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                className={`relative h-full bg-white border-4 ${adv.borderColor} rounded-3xl p-8 transition-all duration-100`}
              >
                {/* Colored Shadow via pseudo-element */}
                <div className={`absolute inset-0 rounded-3xl border-4 ${adv.borderColor} translate-x-2 translate-y-2 -z-10 ${adv.color}`} />

                {/* Floating Icon */}
                <div className={`w-16 h-16 ${adv.color} border-2 ${adv.borderColor} rounded-2xl flex items-center justify-center mb-6 transform -rotate-3 group-hover:rotate-3 transition-transform`}>
                  <adv.icon className={`w-8 h-8 ${adv.iconColor}`} strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-black text-neutral-800 mb-3">
                  {adv.title}
                </h3>
                <p className="text-neutral-600 font-medium leading-relaxed">
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

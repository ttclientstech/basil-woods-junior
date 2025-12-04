import React from "react";
import { motion } from "framer-motion";
import { Building2, Building, MapPin, BookOpen, Trophy, GraduationCap, Sprout, Star, Heart } from "lucide-react";
import WaveDivider from "@/components/ui/wave-divider";

const USPSection = () => {
  const stats = [
    { number: "11", label: "Preschools", icon: Building2, color: "bg-orange-400", shadow: "shadow-orange-600" },
    { number: "6", label: "Cities", icon: Building, color: "bg-teal-400", shadow: "shadow-teal-600" },
    { number: "4", label: "States", icon: MapPin, color: "bg-pink-400", shadow: "shadow-pink-600" },
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
      borderColor: "border-blue-400",
      shadowColor: "shadow-blue-400",
      iconColor: "text-blue-600"
    },
    {
      title: "Expert Academicians",
      description: "Facilitators with decades of experience in early childhood education.",
      icon: GraduationCap,
      color: "bg-green-100",
      borderColor: "border-green-400",
      shadowColor: "shadow-green-400",
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
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white border-2 border-neutral-800 px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2"
          >
            <span className="font-bold text-neutral-800 flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-neutral-800" />
              Why Parents Trust Us
            </span>
          </motion.div>

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
              className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full ${stat.color} border-4 border-neutral-800 flex flex-col items-center justify-center text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              animate={{ y: [0, -10, 0] }}
              // @ts-ignore
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
            >
              <stat.icon className="w-8 h-8 mb-1" strokeWidth={2.5} />
              <span className="text-3xl md:text-4xl text-[hsl(var(--premium-orange))] font-black">{stat.number}</span>
              <span className="text-xs md:text-sm font-bold text-[hsl(var(--premium-orange))] uppercase tracking-wide">{stat.label}</span>

              {/* Shine effect */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-white/30 rounded-full" />
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

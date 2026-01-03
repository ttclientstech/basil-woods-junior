import React from "react";
import { motion } from "framer-motion";
import { Palette, Leaf, BookOpen, Sparkles, Star, Heart, Award, Pin } from "lucide-react";
import { DoodleReadingBoy } from "@/components/ui/doodles";
import mainImage from "../assets/Images/About.png";

const AboutSection = () => {
  const features = [
    { name: "Culture Connect", icon: Palette, color: "bg-orange-100 text-orange-600", border: "border-orange-400", rotate: "rotate-2", description: "Immersing children in India's rich heritage through stories and festivals." },
    { name: "Nature Learning", icon: Leaf, color: "bg-yellow-100 text-yellow-600", border: "border-orange-400", rotate: "-rotate-1", description: "Outdoor activities that foster love and respect for the environment." },
    { name: "Values-Based Learning", icon: Heart, color: "bg-yellow-100 text-yellow-600", border: "border-orange-400", rotate: "rotate-1", description: "Instilling core values like empathy, gratitude, and honesty early on." },
    { name: "Creative Adventures", icon: Sparkles, color: "bg-pink-100 text-pink-600", border: "border-orange-400", rotate: "-rotate-2", description: "Encouraging self-expression through art, music, and imaginative play." },
  ];

  return (
    <section className="py-12 md:py-24 bg-[hsl(var(--section-3))] relative overflow-hidden">
      {/* Background Texture - Paper */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Big Boy Doodle */}
      <motion.div
        className="absolute bottom-10 left-10 pointer-events-none hidden lg:block z-30"
        animate={{ y: [0, -15, 0], rotate: [6, 3, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoodleReadingBoy className="w-48 h-48 filter drop-shadow-md" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


          {/* Left Visuals - Taped Photo */}
          <motion.div
            className="relative order-first lg:order-first"
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              {/* Tape Effect */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 backdrop-blur-sm border border-white/50 shadow-sm transform -rotate-2 z-20" />

              <div className="bg-white p-3 pb-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] border-4 border-white transform transition-transform hover:scale-105 duration-500">
                <img
                  src={mainImage}
                  alt="Teacher and child interacting"
                  className="w-full rounded-sm border border-neutral-200"
                />
                <div className="absolute bottom-4 left-0 right-0 text-left pl-4 md:text-center md:pl-0">
                  <span className="font-handwriting text-xl md:text-2xl text-neutral-800 font-bold bg-white/50 px-2 rounded-sm">
                    Nurturing Curiosity
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4  -right-2 md:-bottom-6 md:-right-6 z-30 bg-white p-2 md:p-4 rounded-xl md:rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 md:gap-3 transform rotate-3 scale-90 md:scale-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 fill-current" />
                <div className="leading-tight">
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-wider">Award Winning</div>
                  <div className="text-xs md:text-sm font-black text-neutral-900">Preschool</div>
                </div>
              </motion.div>


              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-10 -left-5 z-10 text-pink-400"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-16 h-16 fill-current stroke-black stroke-2" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full border-2 border-orange-400 font-bold text-sm mb-6 shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] transform -rotate-1">
                <Star className="w-4 h-4 inline-block mr-2 fill-current" />
                About Basil Woods Juniors
              </div>

              <h2 className="text-3xl md:text-6xl font-black text-[hsl(var(--brand-dark-green))] leading-[1.1] mb-6 font-handwriting">
                India’s Top Preschool <br />
                <span className="relative inline-block px-2 mt-2">
                  <span className="relative z-10">in the Heart of Chennai</span>
                  <span className="absolute inset-0 bg-yellow-200/60 -skew-x-6 transform -rotate-1 z-0 rounded-sm" />
                </span>
              </h2>

              <p className="text-xl text-neutral-700 leading-relaxed font-medium font-handwriting">
                A perfect parenting partner offering a transformative early learning experience — blending world-class infrastructure, expert facilitators, and innovative curriculum with foundational Indian values.
              </p>
            </div>

            {/* Feature Stickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <motion.div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white border-2 ${f.border} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] cursor-default transform ${f.rotate}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  >
                    <div className={`p-3 rounded-xl ${f.color} border-2 border-current shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-black text-neutral-800 text-lg block leading-tight mb-1">{f.name}</span>
                      <p className="text-sm text-neutral-600 font-medium leading-snug">{f.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note Card Quote */}
            <div className="relative mt-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-red-500">
                <Pin className="w-6 h-6 fill-red-500 text-red-700" />
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <p className="text-neutral-800 font-bold text-lg text-center font-handwriting leading-relaxed">
                  "Our unique Culture Connect program brings India’s rich cultural heritage to life in a fun and engaging way."
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

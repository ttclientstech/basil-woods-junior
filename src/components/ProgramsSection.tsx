import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/wave-divider";
import { Sunrise, MessageCircle, BookOpen, Drama, Bus, Footprints, Palette, Leaf, Star, Heart } from "lucide-react";

const ProgramsSection = () => {
  const activities = [
    { title: "Activity Period", description: "Transitioning from home to school with excitement!", icon: Sunrise, color: "bg-yellow-100", border: "border-yellow-400", text: "text-yellow-700" },
    { title: "Circle Time", description: "Building confidence through fun morning discussions.", icon: MessageCircle, color: "bg-blue-100", border: "border-blue-400", text: "text-blue-700" },
    { title: "Phonics Fun", description: "Learning reading and writing the 'Jolly Phonics' way.", icon: BookOpen, color: "bg-pink-100", border: "border-pink-400", text: "text-pink-700" },
    { title: "Story Time", description: "Entering the world of imagination with friendly puppets.", icon: Drama, color: "bg-purple-100", border: "border-purple-400", text: "text-purple-700" },
    { title: "Field Trips", description: "Experiential learning through carefully planned visits.", icon: Bus, color: "bg-green-100", border: "border-green-400", text: "text-green-700" },
    { title: "Outdoor Play", description: "Developing physical skills and social bonds in the sun.", icon: Footprints, color: "bg-orange-100", border: "border-orange-400", text: "text-orange-700" },
    { title: "Theme Time", description: "Exploring new concepts through interactive themes.", icon: Palette, color: "bg-teal-100", border: "border-teal-400", text: "text-teal-700" },
    { title: "Art & Craft", description: "Unleashing creativity with hands-on masterpieces.", icon: Leaf, color: "bg-red-100", border: "border-red-400", text: "text-red-700" },
  ];

  return (
    <section className="py-24 bg-[#fff8f0] relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={1} />

      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 transform -rotate-12 text-orange-200 opacity-60">
          <Star className="w-24 h-24 fill-current" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-40 right-10 transform rotate-12 text-teal-200 opacity-60">
          <Heart className="w-32 h-32 fill-current" strokeWidth={1.5} />
        </div>
        <div className="absolute top-1/3 right-1/4 transform rotate-45 text-pink-200 opacity-40">
          <Star className="w-16 h-16 fill-current" />
        </div>
        <div className="absolute bottom-20 left-1/4 transform -rotate-12 text-yellow-200 opacity-50">
          <div className="w-20 h-20 rounded-full bg-current" />
        </div>

        {/* Dashed Path Background (Abstract) */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="#F4A261" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white border-2 border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 transform -rotate-2"
          >
            <span className="font-bold text-neutral-800 text-sm uppercase tracking-widest">A Day in the Life</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting leading-tight">
            Every Day is a <span className="text-[hsl(var(--premium-orange))]">New Adventure!</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
              className="group relative"
            >
              {/* Connector Line (Desktop) */}
              {index < activities.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 -right-8 w-16 h-1 border-t-4 border-dashed border-orange-300 z-0 ${(index + 1) % 4 === 0 ? 'hidden' : '' // Hide on last item of row
                  }`} />
              )}

              {/* Card */}
              <div className={`relative ${item.color} border-2 border-black rounded-3xl p-6 h-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] z-10 flex flex-col items-center text-center`}>

                {/* Icon Sticker */}
                <div className={`w-16 h-16 bg-white border-2 border-black rounded-2xl flex items-center justify-center mb-4 transform -rotate-3 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                  <item.icon className={`w-8 h-8 ${item.text}`} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-black text-neutral-800 mb-2 font-handwriting">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/50 border border-black/10 transform rotate-2 backdrop-blur-sm" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <WaveDivider position="bottom" fill="#f6eee7" variant={3} />
    </section>
  );
};

export default ProgramsSection;

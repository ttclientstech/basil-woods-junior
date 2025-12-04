import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/wave-divider";
import { Sunrise, MessageCircle, BookOpen, Drama, Bus, Footprints, Palette, Leaf } from "lucide-react";

const ProgramsSection = () => {
  const activities = [
    { title: "Activity Period", description: "Our little ones transition smoothly from the home environment to school, with teachers setting the mood for all the learning and excitement that lies ahead!", icon: Sunrise },
    { title: "Circle Time", description: "Our kids grow in confidence, speaking, listening, thinking and social skills through fun-filled discussions at circle time every morning", icon: MessageCircle },
    { title: "Phonics/Language", description: "Our children learn letter sounds, reading and writing the fun way- the 'Jolly Phonics' way!", icon: BookOpen },
    { title: "Puppets/Story Time", description: "Our tiny tots enter the fascinating world of stories with friendly puppets while building vocabulary and imagination", icon: Drama },
    { title: "Field Trips", description: "Learning happens best when it's experiential and hands-on. Our children enjoy learning and make lots of memories with carefully planned trips and visits.", icon: Bus },
    { title: "Outdoor Play", description: "Our kids grow in confidence, speaking, listening, thinking and social skills through fun-filled discussions at circle time every morning", icon: Footprints },
    { title: "Theme Time", description: "Our children learn letter sounds, reading and writing the fun way- the 'Jolly Phonics' way!", icon: Palette },
    { title: "Art & Craft", description: "Our little ones explore the creative genius within with theme-based art and craft activities.", icon: Leaf },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={1} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h3 className="text-orange-500 font-medium mb-2">A sneak peek into a day at Basil Woods</h3>
          <h2 className="text-3xl md:text-5xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting">
            It's a good day at Basil Woods Juniors everyday!
          </h2>
        </div>

        {/* Desktop Zigzag Layout */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* SVG Connector Line */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path
              d="M150,100 C300,100 300,250 500,250 C700,250 700,100 850,100
                 M850,100 C950,100 950,400 850,400
                 M850,400 C700,400 700,550 500,550 C300,550 300,400 150,400"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="opacity-50"
            />
          </svg>

          <div className="grid grid-cols-4 gap-y-24 gap-x-8 relative z-10">
            {activities.map((item, index) => {
              // Determine position based on zigzag pattern
              // Row 1: 0, 1, 2, 3 (Top aligned)
              // Row 2: 7, 6, 5, 4 (Bottom aligned, reversed visual order)

              // Actually, looking at the image, it's more like:
              // 1 (Top) - 2 (Middle) - 3 (Top) - 4 (Middle) ... snake like.

              // Let's use a simpler alternating offset for the "Wave" look
              const isEven = index % 2 === 0;
              const isSecondRow = index >= 4;

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center text-center ${isSecondRow ? 'mt-12' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Organic Blob Icon */}
                  <div
                    className="w-24 h-24 bg-[#F4A261] flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                      boxShadow: "inset -5px -5px 20px rgba(0,0,0,0.1)"
                    }}
                  >
                    <item.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-[hsl(var(--brand-dark-green))] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-[220px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200 border-l-2 border-dashed border-orange-300" />

          <div className="space-y-12">
            {activities.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connector Dot */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 bg-[#F4A261] flex items-center justify-center z-10"
                  style={{ borderRadius: "50% 50% 50% 0" }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-100">
                  <h3 className="text-lg font-bold text-[hsl(var(--brand-dark-green))] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <WaveDivider position="bottom" fill="#f6eee7" variant={2} />
    </section>
  );
};

export default ProgramsSection;

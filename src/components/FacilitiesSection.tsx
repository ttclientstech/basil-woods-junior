import React from "react";
import { motion } from "framer-motion";
import { School, Trees, Drama, BookOpen, Palette, ShieldCheck, Star } from "lucide-react";
import picture1 from "@/assets/Images/Picture5.webp";
import picture2 from "@/assets/Images/Picture3.webp";
import busImg from "@/assets/Images/bus.png";

import { DoodleRocket, DoodleSun, DoodleCloud, DoodlePencil, DoodleBook, DoodleSparkle, DoodleBird } from "@/components/ui/doodles";
import astronomyKidsImg from "@/assets/Images/astro.png";
import WaveDivider from "@/components/ui/wave-divider";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: School,
      title: "Inspiring Spaces",
      desc: "Spacious, airy classrooms with child-friendly furniture.",
      features: ["Natural lighting", "Child-safe furniture", "Learning corners"],
      color: "bg-yellow-50",
      borderColor: "border-yellow-400",
      shadow: "shadow-yellow-400",
      rotation: "rotate-1"
    },
    {
      icon: Trees,
      title: "Outdoor Zones",
      desc: "Green play areas with safe equipment and sensory corners.",
      features: ["Climbing structures", "Garden spots", "Sensory paths"],
      color: "bg-green-50",
      borderColor: "border-green-400",
      shadow: "shadow-green-400",
      rotation: "-rotate-1"
    },
    {
      icon: Drama,
      title: "Performance Stage",
      desc: "A stage for music, dance, role-play, and storytelling.",
      features: ["Mini stage", "Audio setup", "Costume props"],
      color: "bg-pink-50",
      borderColor: "border-pink-400",
      shadow: "shadow-pink-400",
      rotation: "rotate-2"
    },
    {
      icon: BookOpen,
      title: "Reading Corners",
      desc: "Cozy library spaces with picture books for quiet discovery.",
      features: ["Storybooks", "Interactive kits", "Comfortable nooks"],
      color: "bg-blue-50",
      borderColor: "border-blue-400",
      shadow: "shadow-blue-400",
      rotation: "-rotate-2"
    },
    {
      icon: Palette,
      title: "Creative Studio",
      desc: "A tidy art space to explore colors, textures, and expression.",
      features: ["Child-safe supplies", "Display walls", "Easy-clean stations"],
      color: "bg-orange-50",
      borderColor: "border-orange-400",
      shadow: "shadow-orange-400",
      rotation: "rotate-1"
    },
    {
      icon: ShieldCheck,
      title: "Safe Campus",
      desc: "Comprehensive safety measures for peace of mind.",
      features: ["24/7 CCTV", "Secure entry", "Medical kit"],
      color: "bg-teal-50",
      borderColor: "border-teal-400",
      shadow: "shadow-teal-400",
      rotation: "-rotate-1"
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={3} />

      {/* Background Animated Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sun */}
        <motion.div
          className="absolute top-[5%] right-[5%] text-yellow-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <DoodleSun className="w-24 h-24" />
        </motion.div>

        {/* Cloud */}
        <motion.div
          className="absolute top-[90%] right-[90%] text-blue-500"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleCloud className="w-32 h-20 opacity-60" />
        </motion.div>

        {/* Pencil */}
        <motion.div
          className="absolute top-[40%] left-[2%] text-[hsl(var(--premium-orange))]"
          animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodlePencil className="w-32 h-32 transform -rotate-12" />
        </motion.div>

        {/* Bird */}
        <motion.div
          className="absolute top-[15%] left-[40%] text-teal-600"
          animate={{ x: [-20, 20, -20], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleBird className="w-16 h-12" />
        </motion.div>

        {/* Book */}
        <motion.div
          className="absolute bottom-[20%] right-[5%] text-[hsl(var(--brand-dark-green))]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <DoodleBook className="w-24 h-24" />
        </motion.div>

        {/* Sparkles */}
        <motion.div
          className="absolute top-[30%] right-[25%] text-yellow-500"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <DoodleSparkle className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white border-2 border-black px-6 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 transform rotate-2"
          >
            <span className="font-bold text-neutral-800 flex items-center gap-2">
              <DoodleRocket className="w-6 h-6 text-orange-500" />
              Our Chennai Campus
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-neutral-900 leading-tight mb-4 font-handwriting">
            Our Happy Spaces
          </h2>
          <p className="text-lg text-neutral-700 font-medium max-w-2xl mx-auto">
            Thoughtfully designed environments where curiosity meets safety.
          </p>
        </div>

        {/* Photo Scrapbook */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
          {[
            { img: picture1, title: "Creative Exploration", rotate: "-rotate-2", tape: "top-right" },
            { img: picture2, title: "Collaborative Learning", rotate: "rotate-2", tape: "top-left" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative group ${item.rotate}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.2 } }}
            >
              {/* Tape Effect */}
              <div className={`absolute -top-4 ${item.tape === 'top-left' ? '-left-4' : '-right-4'} w-32 h-8 bg-yellow-100/80 backdrop-blur-sm border border-white/50 shadow-sm transform ${item.tape === 'top-left' ? '-rotate-12' : 'rotate-12'} z-20 pointer-events-none`} />

              <div className="bg-white p-3 pb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] border-4 border-white transform transition-transform">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-cover border border-neutral-100"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="font-handwriting text-2xl text-neutral-800 font-bold bg-white/80 px-4 py-1 rounded-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Grid - Notebook Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              className={`relative group ${f.rotation}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, rotate: 0, transition: { duration: 0.2 } }}
            >
              <div
                className={`h-full bg-white border-2 border-black p-6 relative overflow-hidden`}
                style={{
                  boxShadow: `6px 6px 0px 0px rgba(0,0,0,1)`
                }}
              >
                {/* Notebook Lines Background */}
                <div className="absolute inset-0 pointer-events-none opacity-50"
                  style={{
                    backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px)`,
                    backgroundSize: '100% 24px',
                    marginTop: '24px'
                  }}
                />

                {/* Header Strip */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${f.color.replace('50', '400')}`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-full border-2 border-black ${f.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <f.icon className="w-7 h-7 text-neutral-800" strokeWidth={2} />
                  </div>

                  <h3 className="font-black text-xl text-neutral-800 mb-2 uppercase tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-neutral-700 font-medium mb-4 leading-relaxed font-handwriting text-lg">
                    {f.desc}
                  </p>

                  <ul className="space-y-2">
                    {f.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-black" />
                        <span className="text-sm font-bold text-neutral-600">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Vectors */}
      {/* <motion.div
        className="absolute bottom-32 left-0 z-20 pointer-events-none hidden xl:block"
        animate={{ x: [-200, 1500] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <img src={busImg} alt="School Bus" className="w-64 drop-shadow-lg" />
      </motion.div> */}

      <motion.div
        className="absolute -top-5 -left-5 md:top-10 md:-left-5 z-20 pointer-events-none block xl:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={astronomyKidsImg} alt="Astronomy Kids" className="w-[150px] md:w-[400px] drop-shadow-md mix-blend-multiply" />
      </motion.div>

      <WaveDivider position="bottom" fill="#e3e9fb" variant={4} />
    </section>
  );
};

export default FacilitiesSection;

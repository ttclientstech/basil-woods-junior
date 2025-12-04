import React from "react";
import { motion } from "framer-motion";
import { School, Trees, Drama, BookOpen, Palette, ShieldCheck, Star } from "lucide-react";
import picture1 from "@/assets/Images/Picture5.webp";
import picture2 from "@/assets/Images/Picture3.webp";
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
    <section className="py-20 md:py-24 bg-[hsl(var(--section-3))] relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={3} />

      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

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
              <School className="w-5 h-5 text-orange-500" />
              Our Chennai Campus
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight mb-4 font-handwriting">
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

      <WaveDivider position="bottom" fill="#e3e9fb" variant={4} />
    </section>
  );
};

export default FacilitiesSection;

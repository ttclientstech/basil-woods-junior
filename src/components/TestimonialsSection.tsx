import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Star, Quote, Pin, Cloud, Heart, Sun, Bird, Music, Pencil, BookOpen, Palette, Puzzle } from "lucide-react";


import Testimonial1 from "@/assets/Images/test 2.jpg";
import Testimonial2 from "@/assets/Images/test3.webp";
import Testimonial3 from "@/assets/Images/test4.webp";
import Testimonial4 from "@/assets/Images/test1.webp";

const playgroundTestimonials = [
  {
    text: "Our daughter absolutely loves coming to Basil Woods! The caring teachers and engaging activities have made her more confident.",
    name: "Priya Sharma",
    role: "Parent",
    rating: 5,
    color: "bg-yellow-50",
    shadow: "shadow-yellow-400",
    rotation: "rotate-1",
    image: Testimonial1
  },
  {
    text: "The focus on values along with academics is what sets this school apart. We are so happy with our decision.",
    name: "Rahul Verma",
    role: "Parent",
    rating: 5,
    color: "bg-blue-50",
    shadow: "shadow-blue-400",
    rotation: "-rotate-2",
    image: Testimonial2
  },
  {
    text: "A wonderful environment for kids to grow. The infrastructure is top-notch and the staff is incredibly supportive.",
    name: "Anita Desai",
    role: "Parent",
    rating: 5,
    color: "bg-green-50",
    shadow: "shadow-green-400",
    rotation: "rotate-2",
    image: Testimonial3
  },
  {
    text: "My son has learned so much in just a few months. The 'Culture Connect' program is truly unique and amazing.",
    name: "Vikram Singh",
    role: "Parent",
    rating: 5,
    color: "bg-pink-50",
    shadow: "shadow-pink-400",
    rotation: "-rotate-1",
    image: Testimonial4
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 md:py-24 bg-blue-50 relative overflow-hidden">


      {/* Animated Background Elements - Just like HeroSection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-20 hidden md:block left-10 text-[hsl(var(--premium-yellow))]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sun className="w-20 h-20 fill-current stroke-2" />
        </motion.div>

        {/* Floating Icons Array */}
        {[
          { Icon: Bird, color: "text-blue-400", x: "20%", delay: 0, scale: 1 },
          { Icon: Cloud, color: "text-[hsl(var(--premium-pink))]", x: "80%", delay: 2, scale: 1.5 },
          { Icon: Star, color: "text-yellow-400", x: "50%", delay: 1, scale: 0.8 },
          { Icon: Heart, color: "text-red-400", x: "10%", delay: 3, scale: 1.2 },
          { Icon: Music, color: "text-purple-400", x: "90%", delay: 1.5, scale: 1.1 },
          { Icon: Pencil, color: "text-orange-400", x: "30%", delay: 2.5, scale: 0.9 },
          { Icon: BookOpen, color: "text-green-400", x: "70%", delay: 0.5, scale: 1.3 },
          { Icon: Palette, color: "text-indigo-400", x: "40%", delay: 3.5, scale: 1 },
          { Icon: Puzzle, color: "text-teal-400", x: "60%", delay: 1.8, scale: 1.2 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute -bottom-20 ${item.color} opacity-40 pointer-events-none`}
            style={{ left: item.x }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: [-100, -800], // Float up
              x: [0, Math.sin(index) * 50, 0], // Gentle sway
              rotate: [0, 360],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear",
            }}
          >
            <item.Icon className="w-16 h-16 md:w-24 md:h-24 stroke-[1.5px] fill-current/20" />
          </motion.div>
        ))}

        {/* Blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[hsl(var(--premium-pink)/0.1)] rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[hsl(var(--premium-teal)/0.1)] rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[hsl(var(--premium-orange))] text-white px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 font-bold transform -rotate-2">
            Parents Feedback
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-neutral-900 uppercase tracking-tight">
            What Do Parents <br /> Say About Us?
          </h2>
        </motion.div>

        {/* Testimonials Grid/Scroll */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 px-4 snap-x snap-mandatory hide-scrollbar md:overflow-visible"
        >
          {playgroundTestimonials.map((t, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-[85vw] md:w-auto snap-center relative group ${t.rotation}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.2 } }}
            >
              {/* Pin Icon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-red-500 drop-shadow-md">
                <Pin className="w-8 h-8 fill-red-500 text-red-700" />
              </div>

              <div
                className={`h-full rounded-none p-8 flex flex-col justify-between border-2 border-black bg-white relative transition-all duration-200`}
                style={{
                  boxShadow: `8px 8px 0px 0px rgba(0,0,0,1)`
                }}
              >
                {/* Colored Top Strip */}
                <div className={`absolute top-0 left-0 right-0 h-4 border-b-2 border-black ${t.color.replace('50', '200')}`} />

                <div className="mt-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-neutral-300 mb-2 rotate-180" />

                  <p className="text-lg text-neutral-800 font-medium leading-relaxed font-handwriting mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-neutral-200">
                  <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold overflow-hidden ${t.color.replace('50', '200')}`}>
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      t.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <div className="font-black text-sm uppercase tracking-wide text-neutral-900">
                      {t.name}
                    </div>
                    <div className="text-xs font-bold text-neutral-500 uppercase">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

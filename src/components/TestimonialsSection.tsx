import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Star, Quote, Pin } from "lucide-react";

const playgroundTestimonials = [
  {
    text: "Our daughter absolutely loves coming to Basil Woods! The caring teachers and engaging activities have made her more confident.",
    name: "Priya Sharma",
    role: "Parent",
    rating: 5,
    color: "bg-yellow-50",
    shadow: "shadow-yellow-400",
    rotation: "rotate-1"
  },
  {
    text: "The focus on values along with academics is what sets this school apart. We are so happy with our decision.",
    name: "Rahul Verma",
    role: "Parent",
    rating: 5,
    color: "bg-blue-50",
    shadow: "shadow-blue-400",
    rotation: "-rotate-2"
  },
  {
    text: "A wonderful environment for kids to grow. The infrastructure is top-notch and the staff is incredibly supportive.",
    name: "Anita Desai",
    role: "Parent",
    rating: 5,
    color: "bg-green-50",
    shadow: "shadow-green-400",
    rotation: "rotate-2"
  },
  {
    text: "My son has learned so much in just a few months. The 'Culture Connect' program is truly unique and amazing.",
    name: "Vikram Singh",
    role: "Parent",
    rating: 5,
    color: "bg-pink-50",
    shadow: "shadow-pink-400",
    rotation: "-rotate-1"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern: Dot Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

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
          <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tight">
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
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-black stroke-[1.5px]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-neutral-300 mb-2 rotate-180" />

                  <p className="text-lg text-neutral-800 font-medium leading-relaxed font-handwriting mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-neutral-200">
                  <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold ${t.color.replace('50', '200')}`}>
                    {t.name.charAt(0)}
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

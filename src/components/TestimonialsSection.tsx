import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import WaveDivider from "@/components/ui/wave-divider";

const playgroundTestimonials = [
  {
    text: "Our daughter absolutely loves coming to Basil Woods! The caring teachers, engaging activities, and the focus on values have made her more confident and curious about the world.",
    name: "Priya Sharma",
    role: "Software Engineer, Chennai",
    child: "Ananya (4 years)",
    favorite: "🎨 Theme-Based Art & Craft",
    rating: 5
  },
  {
    text: "From a shy little boy to a confident communicator – that’s the transformation we’ve seen! He comes home excited about circle time and the new things he learns every day.",
    name: "Rajesh Kumar",
    role: "Doctor, Adyar",
    child: "Arjun (3.5 years)",
    favorite: "🌱 Gardening & Nature Learning",
    rating: 5
  },
  {
    text: "The individual attention my twins receive is heartwarming. The field trips, cultural celebrations, and fun learning methods have made them eager to come to school every morning.",
    name: "Lakshmi Raman",
    role: "Classical Dancer, Mylapore",
    child: "Meera & Karthik (twins, 4.5 years)",
    favorite: "🎭 Puppets & Story Time",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
      <WaveDivider position="top" fill="#eee7fa" variant={2} />

      {/* subtle shapes with animations */}
      <motion.div
        className="absolute top-20 right-8 w-10 h-10 rounded-2xl opacity-25"
        style={{ backgroundColor: "hsl(var(--premium-yellow) / 0.2)" }}
        animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-12 w-8 h-8 rounded-full opacity-25"
        style={{ backgroundColor: "hsl(var(--premium-teal) / 0.2)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-6 h-6 rounded-2xl opacity-20"
        style={{ backgroundColor: "hsl(var(--premium-pink) / 0.2)" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="px-4 py-2 rounded-full inline-block mb-4 text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}
          >
            💬 What Parents Say
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-3">
            Families Love
            <span className="block" style={{ color: "hsl(var(--premium-pink))" }}>The Basil Woods Experience</span>
          </h2>

          <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
            Real voices from our community sharing how learning here is rich, real, and relevant.
          </p>
        </motion.div>

        {/* Testimonials with staggered animation */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {playgroundTestimonials.map((t, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 bg-white shadow-sm border border-[hsl(var(--neutral-100))] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}
              >
                <Quote className="w-5 h-5" />
              </div>

              <div className="mb-3">
                <h4 className="font-bold text-neutral-800">{t.name}</h4>
                <p className="text-sm text-neutral-600">{t.role}</p>
                <p className="text-xs" style={{ color: "hsl(var(--premium-teal))" }}>Child: {t.child}</p>
              </div>

              <div className="flex gap-1 mb-3" style={{ color: "hsl(var(--premium-yellow))" }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" stroke="currentColor" fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <blockquote
                className="leading-relaxed mb-4 italic rounded-xl p-4 border-l-4"
                style={{ borderColor: "hsl(var(--premium-purple))", backgroundColor: "hsl(var(--neutral-50))" }}
              >
                “{t.text}”
              </blockquote>

              <div
                className="p-3 rounded-xl border-l-4"
                style={{ borderColor: "hsl(var(--premium-teal))", backgroundColor: "hsl(var(--light-teal))" }}
              >
                <div className="text-sm font-bold" style={{ color: "hsl(var(--premium-teal))" }}>
                  Child's Favorite:
                </div>
                <div className="font-semibold text-neutral-800">{t.favorite}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip with animation */}
        <motion.div
          className="rounded-2xl p-8 text-center max-w-4xl mx-auto"
          style={{ backgroundColor: "transparent", color: "hsl(var(--neutral-900))" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-5">🎪 Our Happy Basil Woods Family</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Happy Families" },
              { value: "98%", label: "Parent Satisfaction" },
              { value: "6", label: "Cities Served" },
              { value: "15+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <WaveDivider position="bottom" fill="#e9eefc" variant={3} />
    </section>
  );
}

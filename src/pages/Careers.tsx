import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Phone, Users, Send, Heart, Star, Award, Target, Lightbulb, BookOpen, Sprout, Leaf, Flower2, Sun
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";

const CareersPage = () => {
  useSEO({
    title: "Careers - Join Our Passionate Teaching Team",
    description: "Explore career opportunities at Basil Woods Juniors Chennai. We're hiring early childhood educators, assistant teachers, and support staff who are passionate about nurturing young minds. Join our values-driven team!",
    keywords: "preschool teacher jobs Chennai, early childhood educator careers, preschool jobs Tamil Nadu, teaching jobs Chennai, childcare jobs, kindergarten teacher vacancy",
    canonical: "https://www.basilwoodschennai.in/careers"
  });

  const openPositions = [
    {
      title: "Early Childhood Educator",
      department: "Teaching",
      location: "Chennai",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our passionate team of educators to nurture young minds and create magical learning experiences.",
      requirements: ["Bachelor's degree in ECE", "2+ years experience", "Strong communication", "Creative approach"],
      color: "bg-green-50",
      borderColor: "border-green-200",
      pinColor: "bg-red-500"
    },
    {
      title: "Assistant Teacher",
      department: "Teaching",
      location: "Chennai",
      type: "Full-time",
      experience: "1-2 years",
      description: "Support our lead teachers in creating engaging learning environments for children aged 18m to 6y.",
      requirements: ["Diploma in ECE preferred", "1+ years experience", "Enthusiasm", "Team player"],
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
      pinColor: "bg-blue-500"
    },
    {
      title: "Child Development Specialist",
      department: "Support",
      location: "Chennai",
      type: "Full-time",
      experience: "3-5 years",
      description: "Work with our team to assess and support children's developmental needs and create individualized plans.",
      requirements: ["Master's in Psychology", "3+ years experience", "Milestone knowledge", "Observation skills"],
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      pinColor: "bg-green-500"
    },
  ];

  const benefits = [
    { title: "Competitive Salary", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Professional Growth", icon: Sprout, color: "text-green-600", bg: "bg-green-100" },
    { title: "Health & Wellness", icon: Heart, color: "text-red-600", bg: "bg-red-100" },
    { title: "Work-Life Balance", icon: Sun, color: "text-orange-600", bg: "bg-orange-100" },
    { title: "Creative Freedom", icon: Lightbulb, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Supportive Team", icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
  ];

  const values = [
    { title: "Passion", desc: "Genuine love for children" },
    { title: "Excellence", desc: "High-quality education" },
    { title: "Inclusion", desc: "Embracing diversity" },
    { title: "Growth", desc: "Continuous learning" },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <Header />

      {/* HERO - "Growing Together" */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-green-50">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]" />

        {/* Floating Leaves */}
        <motion.div className="absolute top-20 left-10 text-green-400 opacity-60" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Leaf className="w-16 h-16 fill-current" />
        </motion.div>
        <motion.div className="absolute bottom-20 right-10 text-teal-400 opacity-60" animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <Sprout className="w-16 h-16 fill-current" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white text-green-700 border-2 border-green-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <Flower2 className="w-4 h-4 mr-2 inline" />
            Join Our Team
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Grow With <span className="text-[hsl(var(--premium-orange))]">Us</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Be part of a passionate community dedicated to nurturing the next generation.
          </p>
        </div>
      </section>

      {/* BENEFITS - "Nurturing Growth" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-2">Why Join Basil Woods?</h2>
            <p className="text-neutral-600">A workplace that nurtures your career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-[#fcfbf9] p-6 rounded-[2rem] border-2 border-neutral-100 shadow-sm hover:shadow-md transition-all text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${b.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${b.color}`} />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-2">{b.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POSITIONS - "Job Board" */}
      <section className="py-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-amber-50 border-y-8 border-amber-200/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white px-6 py-2 shadow-md transform -rotate-1 border border-neutral-200">
              <h2 className="text-3xl font-black text-neutral-800 font-handwriting">Current Openings</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {openPositions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative bg-white p-6 shadow-lg transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Pin */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${job.pinColor} shadow-sm border border-black/10 z-20`} />

                <Badge className="mb-4 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border-0">{job.department}</Badge>
                <h3 className="font-bold text-xl text-neutral-800 mb-2 leading-tight">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <MapPin className="w-4 h-4" /> {job.location}
                </div>
                <p className="text-neutral-600 text-sm mb-6 leading-relaxed">{job.description}</p>

                <div className="border-t border-dashed border-neutral-200 pt-4">
                  <h4 className="font-bold text-xs uppercase text-neutral-400 mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="text-xs text-neutral-600 flex items-start gap-1.5">
                        <span className="mt-1 w-1 h-1 rounded-full bg-neutral-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES - "Roots of Success" */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting mb-2">Our Roots</h2>
            <p className="text-neutral-600">The values that ground us</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line (Roots) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-green-100 -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-6 rounded-full border-4 border-green-100 text-center aspect-square flex flex-col items-center justify-center shadow-sm hover:border-green-300 transition-colors">
                  <h3 className="font-bold text-lg text-green-800 mb-1">{v.title}</h3>
                  <p className="text-xs text-neutral-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - "Stepping Stones" */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-2">How to Apply</h2>
            <p className="text-neutral-600">Your path to joining us</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
              {/* Path Line */}
              <div className="absolute top-1/2 left-0 w-full h-2 border-t-4 border-dotted border-green-300 -translate-y-1/2 hidden md:block z-0" />

              {[
                { step: "1", text: "Apply" },
                { step: "2", text: "Screening" },
                { step: "3", text: "Interview" },
                { step: "4", text: "Welcome" }
              ].map((s, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center bg-[#f0fdf4] p-4">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-green-400 flex items-center justify-center text-2xl font-black text-green-600 shadow-md mb-3">
                    {s.step}
                  </div>
                  <span className="font-bold text-neutral-700">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - "Join Family" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-orange-50 rounded-[3rem] p-12 border-4 border-white shadow-xl outline outline-4 outline-orange-100">
            <Heart className="w-12 h-12 text-orange-500 fill-current mx-auto mb-6" />
            <h2 className="text-4xl font-black text-neutral-900 mb-4 font-handwriting">Ready to Join the Family?</h2>
            <p className="text-lg text-neutral-600 mb-8 font-medium">
              Send your resume to <span className="text-orange-600 font-bold">careers@basilwoods.in</span> or contact us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open("mailto:careers@basilwoods.in")}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-md"
              >
                <Send className="w-5 h-5 mr-2" />
                Email Resume
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-6 px-8 rounded-xl text-lg"
                onClick={() => (window.location.href = "tel:+918056179108")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call HR
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;

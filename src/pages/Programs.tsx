import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock, Users, Star, Calendar, Download, PlayCircle, Play,
  BookOpen, Palette, Music, Globe, Compass, Map, Binoculars, MapPin, CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';
import VideoModal from "@/components/ui/video-modal";
import SchemaMarkup from "@/components/SchemaMarkup";

/* Import Images */
import program1 from "../assets/Images/Program1.png";
import program2 from "../assets/Images/Program2.png";
import program3 from "../assets/Images/Program3.png";
import program4 from "../assets/Images/Program4.png";

const ProgramsPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { hash } = useLocation();

  // Handle scroll to hash on load/change
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useSEO({
    title: "Programs - Age-Perfect Learning for 2-6 Years",
    description: "Explore our age-appropriate preschool programs: Toddlers (2-3 yrs), Mont1 (3-4 yrs), Mont2 (4-5 yrs), Mont3 (5-6 yrs). Play-based curriculum with cultural activities, art, music, outdoor play, and Montessori methods in Chennai.",
    keywords: "preschool programs Chennai, toddler program, playgroup Chennai, nursery Chennai, kindergarten programs, Montessori Chennai, age-appropriate learning, early childhood curriculum",
    canonical: "https://www.basilwoodschennai.in/programs"
  });

  const programs = [
    {
      name: "Toddlers",
      age: "2 - 3 years",
      capacity: "8-10 children",
      description: "Gentle introduction to learning through sensory play, basic social skills, and nurturing care.",
      features: ["Circle Time", "Sensory Play", "Basic Language", "Motor Skills"],
      color: "bg-green-100",
      borderColor: "border-green-400",
      textColor: "text-green-700",
      rotate: "rotate-1",
      icon: "🌱",
      image: program1,
    },
    {
      name: "Mont1",
      age: "3 - 4 years",
      capacity: "12-15 children",
      description: "Building independence with structured play, early learning concepts, and creative exploration.",
      features: ["Montessori", "Numeracy", "Storytelling", "Art & Craft"],
      color: "bg-blue-100",
      borderColor: "border-blue-400",
      textColor: "text-blue-700",
      rotate: "-rotate-1",
      icon: "🌿",
      image: program2,
    },
    {
      name: "Mont2",
      age: "4 - 5 years",
      capacity: "15-18 children",
      description: "Pre-academic skills development with structured learning, cultural activities, and social skill building.",
      features: ["Language", "Cultural Connect", "Music", "Outdoor Play"],
      color: "bg-pink-100",
      borderColor: "border-pink-400",
      textColor: "text-pink-700",
      rotate: "rotate-2",
      icon: "🌸",
      image: program3,
    },
    {
      name: "Mont3",
      age: "5 - 6 years",
      capacity: "18-20 children",
      description: "School readiness program with advanced learning concepts, leadership development, and preparation.",
      features: ["Advanced Math", "Reading", "Leadership", "Science"],
      color: "bg-orange-100",
      borderColor: "border-orange-400",
      textColor: "text-orange-700",
      rotate: "-rotate-2",
      icon: "🌳",
      image: program4,
    },
  ];

  const specialPrograms = [
    { name: "Cultural Heritage", icon: Globe, color: "bg-yellow-50", border: "border-yellow-300", text: "text-yellow-700" },
    { name: "Creative Arts", icon: Palette, color: "bg-yellow-50", border: "border-yellow-300", text: "text-yellow-700" },
    { name: "Music & Movement", icon: Music, color: "bg-yellow-50", border: "border-yellow-300", text: "text-yellow-700" },
    { name: "Reading Club", icon: BookOpen, color: "bg-yellow-50", border: "border-yellow-300", text: "text-yellow-700" },
  ];

  const dailySchedule = [
    { time: "8:30 AM", activity: "Welcome Circle", icon: "☀️" },
    { time: "9:00 AM", activity: "Montessori Work", icon: "🧩" },
    { time: "10:00 AM", activity: "Snack Break", icon: "🍎" },
    { time: "10:30 AM", activity: "Creative Arts", icon: "🎨" },
    { time: "11:30 AM", activity: "Outdoor Play", icon: "🏃" },
    { time: "12:30 PM", activity: "Lunch Time", icon: "🍱" },
    { time: "1:30 PM", activity: "Story & Nap", icon: "📖" },
    { time: "3:00 PM", activity: "Departure", icon: "👋" },
  ];

  const programsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Preschool Programs",
    "itemListElement": programs.map((program, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": program.name,
        "description": program.description,
        "provider": {
          "@type": "Organization",
          "name": "Basil Woods Juniors Chennai",
          "url": "https://www.basilwoodschennai.in"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <SchemaMarkup schema={programsSchema} />
      <Header />

      {/* HERO - "Explorer's Guide" */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

        {/* Floating Adventure Icons */}
        <motion.div className="absolute top-20 left-10 text-orange-400 opacity-60" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Compass className="w-16 h-16" />
        </motion.div>
        <motion.div className="absolute top-40 right-20 text-green-400 opacity-60" animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <Binoculars className="w-14 h-14" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-yellow-100 text-yellow-800 border-2 border-yellow-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <Map className="w-4 h-4 mr-2 inline" />
            Curriculum Map
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Learning <span className="text-[hsl(var(--premium-orange))]">Adventures</span> <br />
            for Little Explorers
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Embark on a journey of discovery with our age-appropriate programs designed to spark curiosity and joy.
          </p>
        </div>
      </section>

      {/* MAIN PROGRAMS - "Postcard Path" */}
      <section className="py-20 relative">
        {/* Dashed Path Background */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path d="M 200 100 Q 400 300 600 100 T 1000 300" stroke="#e5e5e5" strokeWidth="4" strokeDasharray="12 12" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                id={program.name.toLowerCase().replace(/\s+/g, '')}
              >
                {/* Postcard Image */}
                <div className="w-full md:w-1/2 relative group">
                  <div className={`absolute inset-0 ${program.color} rounded-xl transform ${program.rotate} group-hover:rotate-0 transition-transform duration-300 shadow-lg border-2 ${program.borderColor}`} />
                  <div className="relative bg-white p-3 rounded-xl border-2 border-white shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-64 object-cover rounded-lg border border-neutral-100"
                      width={800}
                      height={600}
                      loading="lazy"
                    />
                    {/* Stamp */}
                    <div className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-md border-2 border-neutral-200 transform rotate-12">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center text-2xl">
                        {program.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Handwritten Content */}
                <div className="w-full md:w-1/2 md:px-8 text-center md:text-left">
                  <h2 className={`text-4xl font-black ${program.textColor} font-handwriting mb-2`}>{program.name}</h2>
                  <div className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm font-bold text-neutral-600 mb-4 border border-neutral-200">
                    {program.age} • {program.capacity}
                  </div>
                  <p className="text-lg text-neutral-700 mb-6 font-medium leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm font-bold text-neutral-600">
                        <CheckCircle2 className={`w-4 h-4 ${program.textColor}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL PROGRAMS - "Merit Badges" */}
      <section className="py-20 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')] border-y-8 border-orange-200">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white text-orange-600 border-2 border-orange-400 px-4 py-1 text-sm font-bold rounded-full mb-8 shadow-sm">
            Enrichment Activities
          </Badge>
          <h2 className="text-4xl font-black text-[hsl(var(--brand-dark-green))] mb-12 font-handwriting drop-shadow-md">Earn Your Badges!</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specialPrograms.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-32 h-32 rounded-full ${p.color} border-4 border-dashed ${p.border} flex items-center justify-center shadow-[0px_8px_0px_0px_rgba(0,0,0,0.1)] mb-4`}>
                    <Icon className={`w-12 h-12 ${p.text}`} />
                  </div>
                  <h3 className="text-xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting drop-shadow-sm">{p.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE - "Clipboard" */}
      <section className="py-20 bg-[#f4f7ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            {/* Clipboard Clip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-neutral-800 rounded-t-xl z-20 flex items-center justify-center">
              <div className="w-20 h-4 bg-neutral-600 rounded-full" />
            </div>

            <div className="bg-white p-4 md:p-8 pt-16 rounded-3xl shadow-xl border-2 border-neutral-200 relative overflow-hidden">
              <h2 className="text-3xl font-black text-center text-neutral-800 mb-8 font-handwriting underline decoration-wavy decoration-teal-400">
                A Day in the Life
              </h2>

              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all" onClick={() => setIsVideoOpen(true)}>
                <img
                  src={program4}
                  alt="A Day in Basil Woods Juniors"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1280}
                  height={720}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="font-bold text-lg">Watch Video</p>
                  <p className="text-sm opacity-90">Experience our daily routine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=w4WyoDOi460"
        title="A Day in the Life at Basil Woods Juniors"
      />

      {/* CTA - "Boarding Pass" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-[hsl(var(--premium-orange))] rounded-3xl transform -rotate-1 opacity-20" />
            <div className="relative bg-white border-4 border-dashed border-[hsl(var(--premium-orange))] rounded-3xl p-10 text-center shadow-[12px_12px_0px_0px_hsl(var(--premium-orange))]">
              <div className="flex justify-between items-center mb-8 border-b-2 border-neutral-100 pb-4">
                <div className="text-left">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Destination</div>
                  <div className="text-xl font-black text-[hsl(var(--brand-dark-green))]">Basil Woods Juniors</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Passenger</div>
                  <div className="text-xl font-black text-[hsl(var(--brand-dark-green))]">Your Little One</div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 font-handwriting">Ready for Takeoff?</h2>
              <p className="text-lg text-neutral-600 mb-8 font-medium">Book a visit today and start your child's learning adventure.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open(`https://wa.me/918056179108`, "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[hsl(var(--premium-orange))] text-[hsl(var(--premium-orange))] hover:bg-orange-50 font-bold py-6 px-8 rounded-xl text-lg"
                  onClick={() => (window.location.href = "tel:+918056179108")}
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;

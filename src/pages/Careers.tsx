import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Phone, Users, Send, Heart, Star, Award, Target, Lightbulb, BookOpen, Sprout, Leaf, Flower2, Sun,
  FileText, ScanSearch, MessagesSquare, PartyPopper, Sparkles, Mail
} from "lucide-react";
import { DoodleLeaf, DoodleFlower, DoodleSun, DoodleCloud, DoodleNamasteBoy, DoodleMandala, DoodleSparkle } from "@/components/ui/doodles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import elephantImg from "@/assets/Images/elephant.png";
import monkeyImg from "@/assets/Images/monkey.png";
import montessoriBlocksImg from "@/assets/Images/montessori-blocks-final-careers.png";
import namasteBoy3d from "@/assets/Images/namaste-boy-3d.png";

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
    { title: "Professional Growth", icon: Sprout, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Health & Wellness", icon: Heart, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Work-Life Balance", icon: Sun, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Creative Freedom", icon: Lightbulb, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Supportive Team", icon: Users, color: "text-yellow-600", bg: "bg-yellow-100" },
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
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-green-50">
        <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/leaves.png')]" />

        {/* Floating Leaves */}
        <motion.div className="hidden md:block absolute top-20 left-10 text-[hsl(var(--brand-dark-green))]" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <DoodleLeaf className="w-20 h-20" />
        </motion.div>
        <motion.div className="hidden md:block absolute bottom-20 right-10 text-teal-600" animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <DoodleFlower className="w-24 h-24" />
        </motion.div>
        <motion.div className="hidden md:block absolute top-10 right-20 text-yellow-600" animate={{ rotate: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }}>
          <DoodleSun className="w-24 h-24" />
        </motion.div>

        {/* Montessori Blocks Vector (Top Right) */}
        <motion.div 
            className="hidden lg:block absolute top-32 right-48 z-10 opacity-90"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <img src={montessoriBlocksImg} alt="Building Blocks" className="w-72 h-auto drop-shadow-lg mix-blend-multiply" />
        </motion.div>
        <motion.div className="hidden md:block absolute bottom-32 left-32 text-green-700" animate={{ x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }}>
          <DoodleCloud className="w-40 h-24 opacity-60" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white text-green-700 border-2 border-green-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <Flower2 className="w-4 h-4 mr-2 inline" />
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Grow With <span className="text-[hsl(var(--premium-orange))]">Us</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Be part of a passionate community dedicated to nurturing the next generation.
          </p>
        </div>
      </section>

      {/* BENEFITS - "Nurturing Growth" */}
      <section className="py-12 md:py-20 bg-white">
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
        {/* Animated Elephant */}
        <motion.div
          className="absolute -bottom-4 -left-4 hidden xl:block pointer-events-none z-10"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={elephantImg} alt="Elephant" className="w-32 drop-shadow-md opacity-90" />
        </motion.div>

      </section >

      {/* POSITIONS - "Job Board" */}
      <section className="py-12 md:py-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-amber-50 border-y-8 border-amber-200/50 relative">
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white px-6 py-2 shadow-md transform -rotate-1 border border-neutral-200">
              <h2 className="text-3xl font-black text-neutral-800 font-handwriting">Current Openings</h2>
            </div>
          </div>

          {/* Animated Monkey */}
          <motion.div
            className="absolute top-0 right-10 hidden xl:block pointer-events-none z-10"
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={monkeyImg} alt="Monkey" className="w-24 drop-shadow-md opacity-90" />
          </motion.div>

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
      </section >

      {/* VALUES - "Roots of Success" */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-xs tracking-widest uppercase mb-4 border border-orange-200">
              Core Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting mb-4">Our Roots</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">The fundamental values that ground every decision we make.</p>
          </div>

          <div className="relative max-w-6xl mx-auto h-[500px] md:h-[400px] flex items-center justify-center">
            {/* Animated Root System (SVG) */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 -translate-y-1/2 hidden md:block z-0 opacity-40">
              <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
                {/* Center Root */}
                <motion.path d="M 400,300 L 400,150" stroke="#dcfce7" strokeWidth="8" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                {/* Branch Left 1 */}
                <motion.path d="M 400,150 Q 300,100 200,150" stroke="#dcfce7" strokeWidth="6" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                {/* Branch Right 1 */}
                <motion.path d="M 400,150 Q 500,100 600,150" stroke="#dcfce7" strokeWidth="6" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
                {/* Branch Left 2 */}
                <motion.path d="M 200,150 Q 150,180 100,150" stroke="#dcfce7" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }} />
                {/* Branch Right 2 */}
                <motion.path d="M 600,150 Q 650,180 700,150" stroke="#dcfce7" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }} />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 w-full relative z-10">
              {[
                { title: "Passion", desc: "Genuine love for children", icon: Heart, color: "bg-red-50 text-red-500 border-red-200", delay: 0.2 },
                { title: "Excellence", desc: "High-quality education", icon: Sparkles, color: "bg-yellow-50 text-yellow-500 border-yellow-200", delay: 0.4 },
                { title: "Inclusion", desc: "Embracing diversity", icon: Users, color: "bg-blue-50 text-blue-500 border-blue-200", delay: 0.6 },
                { title: "Growth", desc: "Continuous learning", icon: Sprout, color: "bg-green-50 text-green-500 border-green-200", delay: 0.8 },
              ].map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: v.delay, type: "spring", bounce: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }}
                      className={`w-40 h-40 rounded-full ${v.color} border-8 border-white shadow-2xl flex flex-col items-center justify-center p-4 text-center group cursor-pointer hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-10 h-10 mb-2 transform group-hover:rotate-12 transition-transform" />
                      <h3 className="font-bold text-lg leading-none mb-1">{v.title}</h3>
                      <p className="text-[10px] font-bold opacity-70 uppercase tracking-wide">{v.desc}</p>
                    </motion.div>
                    {/* Stem for Mobile */}
                    <div className="h-8 w-1 bg-green-200 md:hidden" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - "Stepping Stones" */}
      <section className="py-24 bg-[#f0fdf4] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute top-10 left-10 text-green-200" animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <DoodleLeaf className="w-24 h-24 opacity-40" />
          </motion.div>
          <motion.div className="absolute bottom-10 right-10 text-green-200" animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
            <DoodleCloud className="w-32 h-20 opacity-40" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-xs tracking-widest uppercase mb-4 border border-green-200">
              Join The Family
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-800 font-handwriting mb-4">Your Journey Starts Here</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Follow these simple steps to become part of the Basil Woods Juniors family.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-[60px] left-0 w-full h-24 overflow-visible pointer-events-none z-0">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <motion.path
                    d="M 100,20 Q 300,80 500,20 T 900,20"
                    fill="none"
                    stroke="#86efac"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </div>


              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "1", text: "Apply", desc: "Send us your CV", icon: FileText, color: "bg-blue-100 text-blue-600 border-blue-300" },
                  { step: "2", text: "Screening", desc: "We review your profile", icon: ScanSearch, color: "bg-purple-100 text-purple-600 border-purple-300" },
                  { step: "3", text: "Interview", desc: "Let's get to know you", icon: MessagesSquare, color: "bg-orange-100 text-orange-600 border-orange-300" },
                  { step: "4", text: "Welcome", desc: "Start your journey", icon: PartyPopper, color: "bg-green-100 text-green-600 border-green-300" }
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, type: "spring", bounce: 0.5 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className={`w-28 h-28 rounded-full ${s.color} border-4 border-white shadow-xl flex items-center justify-center mb-6 relative`}
                      >
                        <Icon className="w-12 h-12" strokeWidth={1.5} />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-100 font-bold text-neutral-400 text-sm">
                          {s.step}
                        </div>
                      </motion.div>

                      <h3 className="text-xl font-black text-neutral-800 font-handwriting mb-2">{s.text}</h3>
                      <p className="text-sm text-neutral-500 font-medium">{s.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="bg-[hsl(var(--brand-dark-green))] rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative min-h-[550px] flex items-center">
              
              {/* Background Shapes */}
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                 <DoodleMandala className="absolute -right-20 -top-20 w-[600px] h-[600px] text-white/30 animate-spin-slow origin-center" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                {/* Left: Text & Buttons */}
                <div className="text-white space-y-8 text-center md:text-left relative z-20">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2 mb-4">
                       <DoodleSparkle className="w-10 h-10 text-yellow-300 animate-pulse" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-handwriting mb-6 leading-tight">Ready to Join the Family?</h2>
                    <p className="text-xl text-white/90 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
                      Start your journey with us. Send your resume to <span className="font-bold text-yellow-300">careers@basilwoods.in</span> or call us today!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-2">
                     <button 
                       onClick={() => window.open("mailto:careers@basilwoods.in", "_blank")}
                       className="bg-white hover:bg-neutral-100 text-[hsl(var(--brand-dark-green))] font-black py-4 px-10 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[4px] hover:translate-y-[4px] flex items-center justify-center gap-3 transition-all text-lg border-2 border-transparent"
                     >
                        <Send className="w-6 h-6" />
                        Email Resume
                     </button>
                     
                     <button 
                       onClick={() => window.location.href = "tel:+918056179108"}
                       className="bg-transparent text-white hover:bg-white/10 border-2 border-white font-black py-4 px-10 rounded-2xl shadow-none hover:shadow-lg flex items-center justify-center gap-3 transition-all text-lg"
                     >
                        <Phone className="w-6 h-6" />
                        Call HR
                     </button>
                  </div>
                </div>

                {/* Right: Boy Vector & Animation */}
                <div className="relative flex justify-center items-end h-[500px] md:h-full">
                   {/* Rotating Mandala Background */}
                   <div className="absolute inset-x-0 bottom-0 top-20 flex items-center justify-center pointer-events-none">
                      <motion.div 
                        className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] text-white/5 opacity-40 absolute"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      >
                         <DoodleMandala className="w-full h-full" />
                      </motion.div>
                      <motion.div 
                        className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] text-white/10 opacity-30 absolute"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      >
                         <DoodleMandala className="w-full h-full" />
                      </motion.div>
                   </div>

                   {/* Boy Character - UPSIZED */}
                   <motion.div
                     initial={{ scale: 0.9, opacity: 0, y: 50 }}
                     whileInView={{ scale: 1, opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                     className="relative z-10 w-full flex justify-center"
                   >
                     <img 
                       src={namasteBoy3d} 
                       alt="Namaste Boy" 
                       className="w-[300px] md:w-[450px] lg:w-[500px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-y-8 md:translate-y-12" 
                     />
                   </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default CareersPage;

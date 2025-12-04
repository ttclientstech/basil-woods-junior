import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download, Users, Calendar, BookOpen, Heart, Star, Award, Target, Lightbulb, Shield,
  FileText, MessageCircle, Mail, Phone, MapPin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';
import { useSEO } from "@/hooks/useSEO";

const PartnersCornerPage = () => {
  useSEO({
    title: "Partners Corner - Resources for Parents",
    description: "A dedicated space for our parent community. Access handbooks, parenting tips, event calendars, and support resources to partner in your child's learning journey.",
    keywords: "parent resources, preschool handbook, parenting tips, school events Chennai, parent support, Basil Woods parents",
    canonical: "https://www.basilwoodschennai.in/partners"
  });

  const parentResources = [
    {
      title: "Parent Handbook",
      description: "Complete guide to our programs, policies, and procedures",
      icon: BookOpen,
      color: "bg-blue-100",
      tabColor: "bg-blue-200",
      textColor: "text-blue-800",
      downloadUrl: "#",
    },
    {
      title: "Milestones Guide",
      description: "Age-appropriate milestones and what to expect",
      icon: Target,
      color: "bg-green-100",
      tabColor: "bg-green-200",
      textColor: "text-green-800",
      downloadUrl: "#",
    },
    {
      title: "Home Activities",
      description: "Fun activities to continue learning at home",
      icon: Lightbulb,
      color: "bg-yellow-100",
      tabColor: "bg-yellow-200",
      textColor: "text-yellow-800",
      downloadUrl: "#",
    },
    {
      title: "Safety Protocols",
      description: "Our comprehensive safety guidelines",
      icon: Shield,
      color: "bg-red-100",
      tabColor: "bg-red-200",
      textColor: "text-red-800",
      downloadUrl: "#",
    },
  ];

  const parentTips = [
    {
      title: "First Day Ready",
      tips: ["Visit together first", "Practice goodbyes", "Morning routine", "Comfort item"],
      color: "bg-yellow-100",
      rotate: "rotate-1"
    },
    {
      title: "Learning at Home",
      tips: ["Read daily", "Creative play", "Limit screens", "Count everything"],
      color: "bg-pink-100",
      rotate: "-rotate-2"
    },
    {
      title: "Independence",
      tips: ["Self-help skills", "Offer choices", "Be patient", "Celebrate wins"],
      color: "bg-blue-100",
      rotate: "rotate-2"
    },
  ];

  const events = [
    {
      title: "Parent Meet",
      date: "Mar 15",
      time: "2:00 PM",
      desc: "Discussing progress",
      color: "border-orange-500"
    },
    {
      title: "Family Fun Day",
      date: "Mar 22",
      time: "10:00 AM",
      desc: "Games & lunch",
      color: "border-green-500"
    },
    {
      title: "Culture Fest",
      date: "Apr 05",
      time: "11:00 AM",
      desc: "Performances",
      color: "border-purple-500"
    },
    {
      title: "Graduation",
      date: "May 20",
      time: "10:00 AM",
      desc: "Ceremony",
      color: "border-blue-500"
    },
  ];

  const testimonials = [
    {
      text: "The parent resources and communication from Basil Woods has been exceptional. We always feel informed.",
      parent: "Priya Sharma",
      child: "Ananya (4y)",
      color: "bg-white"
    },
    {
      text: "The family events create such a wonderful community feeling. Our daughter loves showing us her classroom.",
      parent: "Rajesh Kumar",
      child: "Arjun (3.5y)",
      color: "bg-white"
    },
    {
      text: "The development updates and home learning suggestions have helped us support our twins' growth.",
      parent: "Lakshmi Raman",
      child: "Meera & Karthik",
      color: "bg-white"
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <Header />

      {/* HERO - "The Family Room" */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-orange-50">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

        {/* Floating Doodles */}
        <motion.div className="absolute top-20 left-10 text-pink-400 opacity-60" animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Heart className="w-16 h-16 fill-current" />
        </motion.div>
        <motion.div className="absolute bottom-20 right-10 text-blue-400 opacity-60" animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <Users className="w-16 h-16 fill-current" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white text-orange-600 border-2 border-orange-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <Heart className="w-4 h-4 mr-2 inline fill-current" />
            Partners Corner
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Partners in <span className="text-[hsl(var(--premium-orange))]">Parenting</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Resources, events, and support to help us partner together in your child's joyful learning journey.
          </p>
        </div>
      </section>

      {/* RESOURCES - "The Bookshelf" */}
      <section className="py-20 bg-[#fdfbf7] border-b-8 border-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-2">Resource Library</h2>
            <p className="text-neutral-600">Helpful guides for your parenting journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {parentResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="relative group cursor-pointer"
                >
                  {/* Folder Tab */}
                  <div className={`absolute -top-3 left-0 w-1/2 h-8 ${resource.tabColor} rounded-t-lg border-x-2 border-t-2 border-black/5 z-0`} />

                  {/* Folder Body */}
                  <div className={`relative ${resource.color} p-6 pt-8 rounded-b-xl rounded-tr-xl shadow-lg border-2 border-black/5 z-10 h-full flex flex-col`}>
                    <div className="mb-4 bg-white/50 w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${resource.textColor}`} />
                    </div>
                    <h3 className={`font-bold text-lg ${resource.textColor} mb-2 leading-tight`}>{resource.title}</h3>
                    <p className="text-sm text-neutral-700 mb-4 flex-grow">{resource.description}</p>
                    <Button className={`w-full bg-white hover:bg-white/80 ${resource.textColor} font-bold border border-black/5 shadow-sm`}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIPS - "The Notice Board" */}
      <section className="py-20 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] border-y-8 border-yellow-800/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white px-6 py-2 shadow-md transform rotate-1 border border-neutral-200">
              <h2 className="text-3xl font-black text-neutral-800 font-handwriting">Parenting Tips</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTips.map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${tip.color} p-6 shadow-[4px_4px_8px_rgba(0,0,0,0.15)] transform ${tip.rotate} hover:scale-105 transition-transform duration-300`}
              >
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-sm border border-red-600 z-20" />

                <h3 className="font-handwriting text-2xl font-bold text-neutral-800 mb-4 border-b-2 border-black/10 pb-2">
                  {tip.title}
                </h3>
                <ul className="space-y-2">
                  {tip.tips.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 font-handwriting text-lg text-neutral-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS - "The Calendar" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting mb-2">Upcoming Events</h2>
            <p className="text-neutral-600">Mark your calendars!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden group"
              >
                {/* Spiral Binding */}
                <div className="absolute top-0 left-0 w-full h-4 flex justify-evenly z-20">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-2 h-4 bg-neutral-300 rounded-full border border-neutral-400" />
                  ))}
                </div>

                {/* Date Header */}
                <div className={`pt-6 pb-3 px-4 bg-neutral-50 border-b-2 ${event.color} text-center`}>
                  <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">Date</div>
                  <div className="text-xl font-black text-neutral-800">{event.date}</div>
                </div>

                {/* Body */}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-neutral-800 mb-1 group-hover:text-[hsl(var(--premium-orange))] transition-colors">
                    {event.title}
                  </h3>
                  <div className="text-sm font-medium text-neutral-500 mb-2">{event.time}</div>
                  <p className="text-sm text-neutral-600 italic">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - "Community Voices" */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-2">Community Voices</h2>
            <p className="text-neutral-600">Hear from our Basil Woods family</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Bubble */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-blue-100 relative mb-6 flex-grow">
                  <p className="text-neutral-700 italic leading-relaxed">"{t.text}"</p>
                  {/* Tail */}
                  <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white border-b-2 border-r-2 border-blue-100 transform rotate-45" />
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 px-4">
                  <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-lg">
                    {t.parent.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-800">{t.parent}</div>
                    <div className="text-xs font-bold text-blue-500 uppercase">{t.child}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - "The Envelope" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            {/* Envelope Flap Effect (Visual only) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-orange-100/50 z-0" />

            <div className="relative bg-white border-2 border-orange-100 rounded-xl p-10 text-center shadow-xl">
              {/* Stamp */}
              <div className="absolute top-4 right-4 w-16 h-20 bg-orange-50 border-2 border-dashed border-orange-300 flex items-center justify-center transform rotate-6">
                <Heart className="w-8 h-8 text-orange-400 fill-current" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 font-handwriting">Get in Touch</h2>
              <p className="text-lg text-neutral-600 mb-8 font-medium">
                Have questions or need support? We're just a message away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open(`https://wa.me/918056179108`, "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-md"
                >
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  Parent Support
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[hsl(var(--premium-orange))] text-[hsl(var(--premium-orange))] hover:bg-orange-50 font-bold py-6 px-8 rounded-xl text-lg"
                  onClick={() => (window.location.href = "tel:+918056179108")}
                >
                  <Phone className="w-6 h-6 mr-2" />
                  Call School
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

export default PartnersCornerPage;

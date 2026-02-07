import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Navigation, Heart, Star, PhoneCall,
  Cloud, Sun, Sparkles, Plane, Download
} from "lucide-react";
import { DoodleBird, DoodleCloud, DoodleSparkle, DoodlePencil } from "@/components/ui/doodles";
import tulsiMascot from "@/assets/Images/contact_uscartoon.png";


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

/* -------- Google Forms -> Google Sheets -------- */
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeX0qEU5GusE3dA1hLL2D6ESzldibOLqzkQxcc1E4GEl7sUtg/formResponse";

const FIELDS = {
  parentName: "entry.30303845",
  phone: "entry.1553866235",
  email: "entry.10415235",
  childName: "entry.976590721",
  childAge: "entry.1030209812",
  program: "entry.1175709318",
  message: "entry.349457783",
};

const ContactUsPage: React.FC = () => {
  useSEO({
    title: "Contact Us - Schedule a Visit to Our Preschool",
    description: "Get in touch with Basil Woods Juniors Chennai. Call +91-8056179108, visit us in Chennai, Tamil Nadu, or schedule a campus tour. We're here to answer your questions about admissions, programs, and facilities.",
    keywords: "contact preschool Chennai, preschool admission enquiry, school visit Chennai, Basil Woods contact, preschool phone number Chennai, schedule school tour",
    canonical: "https://www.basilwoodschennai.in/contact"
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<null | "success" | "error">(null);

  // Scroll Animations - Removed as we are using standard hero
  // const { scrollY } = useScroll();
  // ... parallax logic removed

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    const formEl = e.currentTarget as HTMLFormElement;
    const fd = new FormData(formEl);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });
      setSubmitStatus("success");
      if (formEl && typeof formEl.reset === "function") {
        formEl.reset();
      }
      window.alert("Submitted Successfully");
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      window.alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const contactInfo = [
    {
      title: "Visit Our Campus",
      desc: "No. 10, Vinod Illam, 2nd St, RBI Colony, Thiruvanmiyur, Chennai",
      icon: MapPin,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      action: "Get Directions",
      link: "https://goo.gl/maps/..." // Placeholder
    },
    {
      title: "Give Us a Call",
      desc: "+91 8056179108",
      icon: PhoneCall,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      action: "Call Now",
      link: "tel:+918056179108"
    },
    {
      title: "Drop an Email",
      desc: "Info.chennai@basilwoods.in",
      icon: Mail,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      action: "Send Email",
      link: "mailto:Info.chennai@basilwoods.in"
    },
    {
      title: "Working Hours",
      desc: "Mon - Fri: 8:30 AM - 3:30 PM",
      icon: Clock,
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      action: null,
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <Header />

      {/* HERO SECTION - Standardized */}
      <section className="relative pt-24 pb-48 md:pt-32 md:pb-56 overflow-hidden bg-green-50">
        <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

        {/* Floating Icons */}
        <motion.div className="hidden md:block absolute top-20 left-10 text-[hsl(var(--premium-orange))]" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <DoodleBird className="w-20 h-16 opacity-80" />
        </motion.div>
        <motion.div className="hidden md:block absolute bottom-20 right-10 text-teal-700" animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <DoodleCloud className="w-32 h-20 opacity-60" />
        </motion.div>
        <motion.div className="hidden md:block absolute top-32 right-32 text-yellow-600" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}>
          <DoodleSparkle className="w-12 h-12 opacity-80" />
        </motion.div>
        <motion.div className="hidden md:block absolute bottom-40 left-32 text-[hsl(var(--brand-dark-green))]" animate={{ rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <DoodlePencil className="w-24 h-24 transform -rotate-45 opacity-60" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white text-orange-600 border-2 border-orange-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <MessageCircle className="w-4 h-4 mr-2 inline" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Let's Start a <span className="text-[hsl(var(--premium-orange))]">Conversation</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Have questions about admissions or want to see our campus? <br className="hidden md:inline" />
            Reach out to us — we'd love to welcome you to the Basil Woods family.
          </p>
        </div>
      </section>

      <section className="relative bg-yellow-50 -mt-16 md:-mt-24 pb-20 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden">
            <div className="grid lg:grid-cols-2">

              {/* LEFT: Contact Form */}
              <div className="p-6 md:p-12 lg:p-16 relative overflow-hidden">
                {/* Background Pattern for Form */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

                {/* Animated Plant Mascot - Mobile: Above form, Desktop: Side */}
                <motion.div
                  className="block md:hidden mb-6 relative z-10 text-center"
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={tulsiMascot} alt="Plant Mascot" className="w-32 mx-auto drop-shadow-lg" />
                </motion.div>

                {/* Desktop Plant Mascot - Hidden on mobile */}
                <motion.div
                  className="hidden md:block absolute bottom-2 -right-10 pointer-events-none z-0 opacity-30 lg:opacity-100 lg:right-5 lg:bottom-8"
                  animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={tulsiMascot} alt="Plant Mascot" className="w-40 lg:w-48 drop-shadow-lg" />
                </motion.div>

                <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-3 relative z-10">Send us a Message</h2>
                <p className="text-neutral-600 mb-10 text-lg relative z-10">Fill out the form below and we'll get back to you shortly.</p>

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Parent's Name</label>
                      <Input name={FIELDS.parentName} required className="h-14 bg-neutral-50 border-neutral-200 rounded-xl focus:border-[hsl(var(--premium-orange))] focus:ring-[hsl(var(--premium-orange))] text-lg transition-all" placeholder="Enter full name" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Phone Number</label>
                      <Input name={FIELDS.phone} required className="h-14 bg-neutral-50 border-neutral-200 rounded-xl focus:border-[hsl(var(--premium-orange))] focus:ring-[hsl(var(--premium-orange))] text-lg transition-all" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Email Address</label>
                    <Input type="email" name={FIELDS.email} required className="h-14 bg-neutral-50 border-neutral-200 rounded-xl focus:border-[hsl(var(--premium-orange))] focus:ring-[hsl(var(--premium-orange))] text-lg transition-all" placeholder="you@example.com" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Child's Name</label>
                      <Input name={FIELDS.childName} className="h-14 bg-neutral-50 border-neutral-200 rounded-xl focus:border-[hsl(var(--premium-orange))] focus:ring-[hsl(var(--premium-orange))] text-lg transition-all" placeholder="Junior's name" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Child's Age</label>
                      <Input name={FIELDS.childAge} className="h-14 bg-neutral-50 border-neutral-200 rounded-xl focus:border-[hsl(var(--premium-orange))] focus:ring-[hsl(var(--premium-orange))] text-lg transition-all" placeholder="e.g. 3 Years" />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Interested Program</label>
                    <select name={FIELDS.program} className="w-full h-14 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--premium-orange))] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all">
                      <option value="" disabled selected>Select a program</option>
                      <option>Toddlers (2 - 3 years)</option>
                      <option>Mont 1 (3 - 4 years)</option>
                      <option>Mont 2 (4 - 5 years)</option>
                      <option>Mont 3 (5 - 6 years)</option>
                    </select>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-sm font-bold text-neutral-500 uppercase tracking-wider group-focus-within:text-[hsl(var(--premium-orange))] transition-colors">Your Message</label>
                    <Textarea name={FIELDS.message} className="min-h-[140px] bg-neutral-50 border-neutral-200 rounded-xl focus:border-[hsl(var(--premium-orange))] focus:ring-[hsl(var(--premium-orange))] text-lg transition-all resize-none p-4" placeholder="Tell us more about what you're looking for..." />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-[hsl(var(--premium-orange))] hover:bg-orange-600 text-white font-black h-16 text-xl rounded-2xl shadow-[0_8px_30px_rgb(255,100,0,0.3)] transition-all" type="submit" disabled={submitting}>
                      {submitting ? "Sending..." : "Send Message"}
                      <Send className="w-6 h-6 ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </div>

              {/* RIGHT: Info & Map */}
              <div className="relative bg-[#FFFAF0] p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden">
                {/* Interactive background shapes */}
                <motion.div
                  className="absolute top-0 right-0 w-80 h-80 bg-[hsl(var(--premium-yellow))] rounded-full opacity-20 z-0"
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative z-10 space-y-10">
                  <div>
                    <h3 className="text-3xl font-black text-neutral-800 font-handwriting mb-8 flex items-center gap-3">
                      Contact Information
                      <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>👋</motion.span>
                    </h3>
                    <div className="space-y-6">
                      {contactInfo.map((info, idx) => {
                        const Icon = info.icon;
                        return (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.8)" }}
                            className="flex items-start gap-5 p-4 rounded-2xl transition-all cursor-default"
                          >
                            <div className={`w-14 h-14 shrink-0 rounded-2xl ${info.color} flex items-center justify-center shadow-sm`}>
                              <Icon className={`w-7 h-7 ${info.textColor}`} />
                            </div>
                            <div>
                              <p className="font-black text-neutral-800 text-xl mb-1">{info.title}</p>
                              <p className="text-neutral-600 leading-relaxed max-w-xs font-medium">{info.desc}</p>
                              {info.action && (
                                <a href={info.link} className={`text-sm font-bold ${info.textColor} hover:underline mt-2 inline-flex items-center gap-1`}>
                                  {info.action} <Navigation className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Embedded Map */}
                  <div className="rounded-3xl overflow-hidden border-4 border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] h-72 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <iframe
                      title="Basil Woods Juniors Location"
                      src="https://www.google.com/maps?q=Basil%20Woods%20Juniors%20Thiruvanmiyur%20Chennai&output=embed"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                    />
                  </div>
                </div>

                {/* Social / Quick Links */}
                <div className="relative z-10 mt-10 pt-8 border-t-2 border-orange-200/50">
                  <p className="font-bold text-neutral-800 mb-6 uppercase tracking-wider text-sm opacity-60">Quick Connections</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => window.open(`https://wa.me/918056179108`, "_blank")} className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full h-12 px-6 shadow-lg shadow-green-200">
                        <FaWhatsapp className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" onClick={() => window.open("tel:+918056179108")} className="border-2 border-neutral-300 hover:border-neutral-800 text-neutral-700 rounded-full h-12 px-6">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Us
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="pb-20 mt-12 relative z-30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Schedule Tour - Blue */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
              <Button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full h-full min-h-[100px] bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 py-6"
              >
                <Calendar className="w-8 h-8 mb-1" />
                <span className="text-lg font-bold">Schedule Tour</span>
              </Button>
            </motion.div>

            {/* Download Brochure - Green */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
              <Button 
                onClick={() => window.open("/brochure.pdf", "_blank")}
                className="w-full h-full min-h-[100px] bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 py-6">
                <Send className="w-8 h-8 mb-1 -rotate-45" />
                <span className="text-lg font-bold">Brochure</span>
              </Button>
            </motion.div>

            {/* WhatsApp Us - Green */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
              <Button
                onClick={() => window.open(`https://wa.me/918056179108`, "_blank")}
                className="w-full h-full min-h-[100px] bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 py-6"
              >
                <FaWhatsapp className="w-8 h-8 mb-1" />
                <span className="text-lg font-bold">WhatsApp</span>
              </Button>
            </motion.div>

            {/* Get Directions - Blue */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
              <Button
                onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=No.+10,+Vinod+Illam,+2nd+St,+RBI+Colony,+Thiruvanmiyur,+Chennai,+Tamil+Nadu+600041", "_blank")}
                className="w-full h-full min-h-[100px] bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 py-6"
              >
                <MapPin className="w-8 h-8 mb-1" />
                <span className="text-lg font-bold">Directions</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Kiosk Section */}
      <section className="pb-20 relative bg-white z-30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-3">Info Kiosk</h2>
            <p className="text-neutral-500 text-sm tracking-wide">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What curriculum?", a: "We follow the Cambridge Early Years." },
              { q: "Safety measures?", a: "CCTV, secure entry, and trained staff." },
              { q: "Outdoor play?", a: "Daily outdoor activities and motor skills." },
              { q: "Parent updates?", a: "Regular meetings and digital updates." },
              { q: "Meals provided?", a: "Mid-morning snacks provided." },
              { q: "Age groups?", a: "2 years to 6 years." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-[#fffcf6] border-l-[6px] border-[#fdba74] p-8 rounded-r-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-black text-neutral-800 flex items-center gap-3">
                    <span className="text-[#fb923c] text-2xl">Q.</span> {item.q}
                  </h3>
                  <p className="text-neutral-500 font-medium text-sm ml-9 leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Footer Clouds */}
      <div className="relative h-20 w-full overflow-hidden -mt-10 mb-10 pointer-events-none">
        <motion.div className="absolute top-0 w-[200%] flex" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
          {/* Cloud shapes simulated with CSS or SVGs could go here, omitting for brevity */}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUsPage;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Navigation, Heart, Star, PhoneCall,
  Cloud, Sun, Sparkles, Plane
} from "lucide-react";
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

  // Scroll Animations
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  function handleMouseMove(event: React.MouseEvent) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 30);
    mouseY.set((clientY / innerHeight - 0.5) * 30);
  }

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
      color: "bg-blue-100",
      textColor: "text-blue-600",
      action: "Get Directions",
      link: "https://goo.gl/maps/..." // Placeholder
    },
    {
      title: "Give Us a Call",
      desc: "+91 8056179108",
      icon: PhoneCall,
      color: "bg-green-100",
      textColor: "text-green-600",
      action: "Call Now",
      link: "tel:+918056179108"
    },
    {
      title: "Drop an Email",
      desc: "Info.chennai@basilwoods.in",
      icon: Mail,
      color: "bg-purple-100",
      textColor: "text-purple-600",
      action: "Send Email",
      link: "mailto:Info.chennai@basilwoods.in"
    },
    {
      title: "Working Hours",
      desc: "Mon - Fri: 8:30 AM - 3:30 PM",
      icon: Clock,
      color: "bg-orange-100",
      textColor: "text-orange-600",
      action: null,
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans overflow-hidden" onMouseMove={handleMouseMove}>
      <Header />

      {/* HERO SECTION - Immersive & Interactive */}
      <section className="relative pt-40 pb-40 overflow-hidden bg-[hsl(var(--brand-dark-green))] text-white">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Floating Icons (Parallax) */}
          <motion.div
            className="absolute top-20 left-[15%] text-white/20"
            style={{ x: useTransform(springX, (val) => val * -1.5), y: y2 }}
          >
            <MessageCircle className="w-24 h-24 rotate-12" />
          </motion.div>

          <motion.div
            className="absolute bottom-32 right-[10%] text-[hsl(var(--premium-orange))]/30"
            style={{ x: useTransform(springX, (val) => val * 2), y: y1 }}
          >
            <Mail className="w-32 h-32 -rotate-12" />
          </motion.div>

          <motion.div
            className="absolute top-40 right-[25%] text-[hsl(var(--premium-teal))]/30"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Phone className="w-16 h-16" />
          </motion.div>

          {/* Flying Paper Plane */}
          <motion.div
            className="absolute top-1/3 left-0 text-white/40"
            animate={{
              x: ["-10vw", "110vw"],
              y: [0, -30, 0, 40, -10],
              rotate: [10, 0, 10, 20]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Send className="w-20 h-20" />
            <div className="absolute top-1/2 right-full w-32 h-1 border-t-4 border-dotted border-white/20" />
          </motion.div>

          {/* Clouds */}
          <motion.div className="absolute top-10 left-[5%] opacity-10" style={{ x: useTransform(springX, (V) => V * 0.5) }}>
            <Cloud className="w-40 h-40 fill-white" />
          </motion.div>
          <motion.div className="absolute bottom-10 right-[20%] opacity-10" style={{ x: useTransform(springX, (V) => V * 0.8) }}>
            <Cloud className="w-64 h-64 fill-white" />
          </motion.div>

          {/* Decorative Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(var(--premium-orange))] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[hsl(var(--premium-teal))] rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-1.5 text-sm font-bold rounded-full mb-8 backdrop-blur-sm cursor-default">
                <Sparkles className="w-4 h-4 mr-2 inline text-yellow-300" />
                We're Here for You
              </Badge>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 font-handwriting leading-tight tracking-tight">
              Let's Start a <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-[hsl(var(--premium-orange))] drop-shadow-sm">Conversation</span>
                {/* Wiggle Underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-white opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed font-handwriting">
              Have questions about admissions or want to see our campus? <br />
              Reach out to us — we'd love to welcome you to the Basil Woods family.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-24 pb-20 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden">
            <div className="grid lg:grid-cols-2">

              {/* LEFT: Contact Form */}
              <div className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
                {/* Background Pattern for Form */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />

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
                  <div className="flex gap-4">
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

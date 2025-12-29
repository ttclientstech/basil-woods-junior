import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Calendar, Phone, Target, Lightbulb, Shield, Award, Pin, MapPin, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

/* Import award logos */
import awardISM from "@/assets/Awards/indias_school_merit.png";
import awardISA from "@/assets/Awards/international_school.png";
import awardECA from "@/assets/Awards/early_childhood_association.png";
import suvyaktaImg from "@/assets/Mentors/suvyakta-narasimha-dasa.jpeg";
import schoolimg from "@/assets/Images/Exterior1.webp";

const phoneNumber = "918056179108";
const handleWhatsAppRedirect = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const AboutUsPage = () => {
  useSEO({
    title: "About Us - 15+ Years of Excellence in Early Education",
    description: "Learn about Basil Woods Juniors Chennai - Award-winning preschool with 15+ years of excellence, 500+ happy families. Values-based education combining modern teaching with Tamil cultural heritage for holistic child development.",
    keywords: "about Basil Woods, preschool history Chennai, value-based education, cultural preschool Chennai, award-winning preschool, NIVE preschool, holistic child development",
    canonical: "https://www.basilwoodschennai.in/about"
  });

  const milestones = [
    { year: "2009", title: "Foundation", description: "Started with a vision to blend culture with education", icon: "🌱" },
    { year: "2015", title: "Recognition", description: "Awarded Best Cultural Integration Program", icon: "🏆" },
    { year: "2020", title: "Expansion", description: "Reached 500+ happy families milestone", icon: "👨‍👩‍👧‍👦" },
    { year: "2024", title: "Excellence", description: "15 years of nurturing young minds", icon: "⭐" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Love & Care",
      description: "Every child receives individual attention in a nurturing environment",
      color: "text-pink-600",
      bg: "bg-pink-100",
      border: "border-pink-400",
      shadow: "shadow-pink-200"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Maintaining highest standards in early childhood education",
      color: "text-orange-600",
      bg: "bg-orange-100",
      border: "border-orange-400",
      shadow: "shadow-orange-200"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Creative teaching methods that make learning joyful",
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      border: "border-yellow-400",
      shadow: "shadow-yellow-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety",
      description: "Secure environment where children can explore freely",
      color: "text-black-600",
      bg: "bg-yellow-100",
      border: "border-yellow-400",
      shadow: "shadow-green-200"
    }
  ];

  const team = [
    {
      name: "Shri Madhu Pandit Dasa",
      role: "Chairman",
      experience: "Decades of Service",
      specialty: "Leadership & Educational Initiatives",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCpbEYWR5Y5VOXZqsgtk8PPb8L8tSiCu_BA&s"
    },
    {
      name: "Shri Chanchalapati Dasa",
      role: "Vice-Chairman",
      experience: "20+ years",
      specialty: "Value-based Education",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_Ue7BQvI1Ib-uLeW8_ZKFRJutXFMQsV-gQ&s"
    },
    {
      name: "Justice N Santosh Hegde",
      role: "Advisory Board Member",
      experience: "Former Supreme Court Judge",
      specialty: "Ethics & Integrity in Education",
      image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-39607,resizemode-75,msid-17398099/news/politics-and-nation/pm-judiciary-be-brought-under-lokpal-justice-n-santosh-hegde.jpg"
    },
    {
      name: "His Grace Suvyakta Narasimha Dasa",
      role: "Governing Body Member",
      experience: "President - Hare Krishna Movement Chennai",
      specialty: "Leadership & Spiritual Guidance",
      image: suvyaktaImg
    }
  ];

  const awards = [
    {
      img: awardISM,
      title: "India's School Merit Awards",
      desc: "Top preschool-cum-daycare centre in India by Education Today.",
      color: "bg-orange-50",
      pinColor: "text-red-500"
    },
    {
      img: awardISA,
      title: "International School Awards",
      desc: "Nominated at International School Awards, Dubai.",
      color: "bg-blue-50",
      pinColor: "text-blue-500"
    },
    {
      img: awardECA,
      title: "Early Childhood Association",
      desc: "Certified member for quality delivery.",
      color: "bg-green-50",
      pinColor: "text-green-500"
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <Header />

      {/* HERO SECTION - "The Story Begins" */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-50" />

          {/* Floating Icons */}
          <motion.div
            className="absolute top-1/4 left-10 text-orange-400"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="w-12 h-12 fill-current" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-10 text-teal-400"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 fill-current" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block relative"
          >
            <div className="absolute -inset-4 bg-white/50 blur-xl rounded-full" />
            <h1 className="relative text-5xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
              Nurturing Young Minds <br />
              <span className="text-[hsl(var(--premium-orange))]">with Love & Excellence</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            For over 15 years, we've been creating magical learning experiences where children grow academically, emotionally, and culturally.
          </motion.p>
        </div>
      </section>

      {/* AWARDS SECTION - "The Corkboard" */}
      <section className="py-20 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] relative border-y-8 border-yellow-700/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white px-6 py-2 rounded-lg shadow-md border border-neutral-200 transform -rotate-2">
              <h2 className="text-3xl font-black text-neutral-800 font-handwriting">Our Wall of Fame</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative ${a.color} p-6 rounded-sm shadow-[4px_4px_8px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform duration-300`}
                style={{ rotate: i % 2 === 0 ? '2deg' : '-2deg' }}
              >
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Pin className={`w-8 h-8 ${a.pinColor} fill-current drop-shadow-md`} />
                </div>

                <div className="mt-4 bg-white p-4 border border-neutral-200 shadow-inner">
                  <img src={a.img} alt={a.title} className="h-24 mx-auto object-contain mb-4" />
                  <h3 className="font-bold text-center text-neutral-800 mb-2">{a.title}</h3>
                  <p className="text-sm text-center text-neutral-600 leading-snug font-handwriting">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY - "The Scrapbook" */}
      <section className="py-20 bg-[#f4f1ea] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Taped Photo */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 backdrop-blur-sm border border-white/50 shadow-sm transform rotate-1 z-20" />
              <div className="bg-white p-4 pb-16 shadow-xl border-4 border-white">
                <img src={schoolimg} alt="School Exterior" className="w-full rounded-sm" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="font-handwriting text-2xl text-neutral-600">Where it all began...</span>
                </div>
              </div>
            </motion.div>

            {/* Handwritten Text */}
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 border-2 border-orange-400 px-4 py-1 text-sm font-bold rounded-full">
                Our Journey
              </Badge>
              <h2 className="text-4xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting">
                Early Learning with <br /> Values & Excellence
              </h2>
              <div className="prose prose-lg text-neutral-700 font-medium leading-relaxed">
                <p>
                  ‘Basil Woods’ is an early learning initiative of the National Institute of Value Education (NIVE) to inculcate universal values and ethics along with imparting physical and cognitive learning.
                </p>
                <p>
                  We currently run preschools and daycare centers across Bangalore and Hyderabad, providing children with a nurturing environment that blends modern educational practices with timeless values.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="bg-white px-6 py-3 rounded-xl border-2 border-teal-400 shadow-[4px_4px_0px_0px_hsl(var(--premium-teal))]">
                  <span className="block text-3xl font-black text-teal-600">15+</span>
                  <span className="text-sm font-bold text-neutral-500">Years Excellence</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-xl border-2 border-orange-400 shadow-[4px_4px_0px_0px_hsl(var(--premium-orange))]">
                  <span className="block text-3xl font-black text-orange-600">500+</span>
                  <span className="text-sm font-bold text-neutral-500">Happy Families</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES - "The Winding Path" */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-[hsl(var(--brand-dark-green))] mb-16 font-handwriting">Our Key Milestones</h2>

          <div className="relative">
            {/* Dashed Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 border-t-4 border-dashed border-neutral-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-white p-6 rounded-2xl border-2 border-neutral-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center relative z-10">
                    <div className="text-4xl mb-4">{m.icon}</div>
                    <div className="text-2xl font-black text-[hsl(var(--premium-orange))] mb-2">{m.year}</div>
                    <h3 className="font-bold text-neutral-800 mb-2">{m.title}</h3>
                    <p className="text-sm text-neutral-600">{m.description}</p>
                  </div>
                  {/* Connector Dot */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-[hsl(var(--brand-dark-green))] rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-sm z-20" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - "Building Blocks" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-pink-100 text-pink-700 border-2 border-pink-400 px-4 py-1 text-sm font-bold rounded-full mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`bg-white p-6 rounded-2xl border-2 ${v.border} shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]`}
              >
                <div className={`w-16 h-16 ${v.bg} rounded-xl flex items-center justify-center mb-4 border-2 ${v.border} text-neutral-800`}>
                  {v.icon}
                </div>
                <h3 className={`text-xl font-black ${v.color} mb-3`}>{v.title}</h3>
                <p className="text-neutral-600 font-medium leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORS - "Portrait Wall" */}
      <section className="py-20 bg-[#fff7ed] border-t-4 border-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-neutral-800 font-handwriting mb-4">Our Mentors</h2>
            <p className="text-neutral-600 font-medium">Leaders who guide our values-first learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md border-4 border-neutral-200"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm border border-neutral-100 mb-4 bg-neutral-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-neutral-900 leading-tight mb-1">{member.name}</h3>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">{member.role}</p>
                  <p className="text-xs text-neutral-500 italic">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - "Ticket Style" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-[hsl(var(--premium-orange))] rounded-3xl transform rotate-1 opacity-20" />
            <div className="relative bg-white border-4 border-dashed border-[hsl(var(--premium-orange))] rounded-3xl p-10 text-center shadow-[12px_12px_0px_0px_hsl(var(--premium-orange))]">
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 font-handwriting">Ready to Visit Our Campus?</h2>
              <p className="text-lg text-neutral-600 mb-8 font-medium">Schedule a personalized tour and see why families choose Basil Woods Juniors.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppRedirect}
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
                  <Phone className="w-6 h-6 mr-2" />
                  Call Now
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

export default AboutUsPage;

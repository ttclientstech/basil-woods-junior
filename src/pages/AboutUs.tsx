import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Calendar, Phone, Target, Lightbulb, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

/* Import award logos from your assets folder (update filenames if different) */
import awardISM from "@/assets/Awards/indias_school_merit.png";
import awardISA from "@/assets/Awards/international_school.png";
import awardECA from "@/assets/Awards/early_childhood_association.png";
import suvyaktaImg from "@/assets/Mentors/suvyakta-narasimha-dasa.jpeg";
import schoolimg from "@/assets/Images/Exterior1.webp";


import { FaWhatsapp } from 'react-icons/fa';


const phoneNumber = "918056179108"; // ✅ Use full number with country code
const handleWhatsAppRedirect = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const WaveTop = ({ fill = "#fffdf5", className = "" }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${className}`}>
    <svg
      className="relative block w-full h-[60px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#fffdf5", className = "" }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}>
    <svg
      className="relative block w-full h-[60px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

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
      icon: <Heart className="w-7 h-7" />,
      title: "Love & Care",
      description: "Every child receives individual attention in a nurturing environment",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Excellence",
      description: "Maintaining highest standards in early childhood education",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Innovation",
      description: "Creative teaching methods that make learning joyful",
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Safety",
      description: "Secure environment where children can explore freely",
      color: "text-green-500",
      bg: "bg-green-50"
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
      role: "Governing Body Member of Worldwide Hare Krishna Movement Group",
      experience: "President - Hare Krishna Movement Chennai",
      specialty: "Leadership & Spiritual Guidance",
      image: suvyaktaImg
    }
  ];

  /* Awards data for new section */
  const awards = [
    {
      img: awardISM,
      title: "India's School Merit Awards",
      desc:
        "Selected as one among the top preschool-cum-daycare centres in India by Education Today for the second consecutive year.",
      border: "hsl(var(--premium-orange))",
    },
    {
      img: awardISA,
      title: "International School Awards",
      desc:
        "Two nominations at the International School Awards, Dubai for 2018–19.",
      border: "hsl(var(--premium-purple))",
    },
    {
      img: awardECA,
      title: "Early Childhood Association",
      desc:
        "Member of the Early Childhood Association, India. Audited and certified for quality delivery.",
      border: "hsl(var(--premium-teal))",
    },
  ];

  return (
    <div className="min-h-screen bg-section-1">
      <Header />

      {/* HERO (bg-section-1) */}
      <section
        className="
          relative overflow-hidden bg-section-1
          min-h-[calc(100vh-var(--header-h))]
          flex items-center
          py-10 md:py-12
        ">
        {/* Subtle shapes */}
        <div className="absolute top-10 left-6 w-10 h-10 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl opacity-40" />
        <div className="absolute bottom-16 right-8 w-8 h-8 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-40" />
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl opacity-40" />

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-warm text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4 inline-block">
              🌟 About Basil Woods Juniors
            </Badge>

            <h1 className="text-[28px] md:text-[40px] font-bold text-neutral-600 leading-[1.15] font-heading mb-4">
              Nurturing Young Minds with
              <span className="block text-gradient">Love & Excellence</span>
            </h1>

            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-6 max-w-3xl mx-auto">
              For over 15 years, we've been creating magical learning experiences where children grow academically, emotionally, and culturally in a safe, nurturing environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                onClick={handleWhatsAppRedirect}
              >
                <FaWhatsapp className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom wave into next section (bg-section-2 peach) */}
        <WaveBottom fill="#feeee7" />
      </section>

      {/* AWARDS — NEW SECTION placed ABOVE "Our Journey" (bg-section-5 for contrast) */}
      <section className="relative overflow-hidden bg-section-4 py-12 md:py-14">
        <WaveTop fill="#feeee7" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-gradient-secondary text-white px-3.5 py-1.5 rounded-full font-medium text-xs mb-3 inline-block">
              Our Awards
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-600 font-heading mb-2">
              Recognition & Memberships
            </h2>
            <p className="text-neutral-600 text-base max-w-2xl mx-auto">
              Celebrating our commitment to quality, care, and values-first early education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <Card
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[hsl(var(--neutral-100))] hover:shadow-md hover:-translate-y-[2px] transition-all"
              >
                <div
                  className="rounded-xl p-4 mb-5 border"
                  style={{ borderColor: a.border, backgroundColor: "hsl(var(--neutral-50))" }}
                >
                  <img src={a.img} alt={a.title} className="mx-auto h-28 object-contain" />
                </div>
                <h3 className="text-center font-bold text-neutral-800 mb-2">{a.title}</h3>
                <p className="text-sm text-neutral-700 text-center leading-relaxed">{a.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <WaveBottom fill="#feeee7" />
      </section>

      {/* OUR STORY (bg-section-2) */}
      <section className="relative overflow-hidden bg-section-2 py-12 md:py-14">
        {/* Top wave from prev section already rendered */}
        <WaveTop fill="#feeee7" />

        {/* Shapes */}
        <div className="absolute top-16 right-8 w-10 h-10 bg-orange-100 rounded-xl opacity-50" />
        <div className="absolute bottom-16 left-12 w-7 h-7 bg-teal-100 rounded-full opacity-50" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl rotate-2 scale-105 shadow-md opacity-15" />
              <img
                src={schoolimg}
                alt="Children learning at Basil Woods"
                className="relative w-full h-[300px] sm:h-[340px] md:h-[360px] lg:h-[380px] object-cover rounded-3xl shadow-md border-3 border-white z-10"
              />
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-md z-20">
                <Heart className="w-7 h-7 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <Badge className="bg-gradient-secondary text-white px-3.5 py-1.5 rounded-full font-medium text-xs inline-block">
                Our Journey
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-600 font-heading">
                Early Learning with Values & Excellence
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base">
                ‘Basil Woods’ is an early learning initiative of the National Institute of Value Education (NIVE)
                to inculcate universal values and ethics along with imparting physical and cognitive learning in
                the formative years of early childhood development.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Basil Woods currently runs preschools and daycare centers across Bangalore and Hyderabad,
                providing children with a nurturing environment that blends modern educational practices with
                timeless values.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-2xl border border-orange-200 hover:-translate-y-[1px] hover:shadow-sm transition-all">
                  <div className="text-2xl font-bold text-orange-600 mb-0.5">500+</div>
                  <div className="text-xs text-neutral-500">Happy Families</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-2xl border border-teal-200 hover:-translate-y-[1px] hover:shadow-sm transition-all">
                  <div className="text-2xl font-bold text-teal-600 mb-0.5">15+</div>
                  <div className="text-xs text-neutral-500">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave into next (bg-section-3 mint/teal) */}
        <WaveBottom fill="#feeee7" />
      </section>

      {/* MILESTONES (bg-section-3) */}
      <section className="relative overflow-hidden bg-section-3 py-12 md:py-14">
        <WaveTop fill="#feeee7" />

        <div className="absolute top-16 right-8 w-10 h-10 bg-teal-100 rounded-full" />
        <div className="absolute bottom-16 left-12 w-7 h-7 bg-orange-100 rounded-full" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-gradient-accent text-white px-3.5 py-1.5 rounded-full font-medium text-xs mb-3 inline-block">
              Our Journey
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-600 font-heading mb-2">
              Key Milestones
            </h2>
            <p className="text-neutral-600 text-base max-w-2xl mx-auto">
              Important moments that shaped our educational journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-md p-5 text-center rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all"
              >
                <div className="text-3xl mb-3">{milestone.icon}</div>
                <div className="text-2xl font-bold text-gradient mb-1 font-heading">
                  {milestone.year}
                </div>
                <h3 className="font-bold text-neutral-700 mb-1 font-heading">
                  {milestone.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <WaveBottom fill="#f9f5ff" />
      </section>

      {/* VALUES (bg-section-4) */}
      <section className="relative overflow-hidden bg-section-4 py-12 md:py-14">
        <WaveTop fill="#f9f5ff" />

        <div className="absolute top-1/2 left-8 w-5 h-5 bg-premium-pink/20 rounded-full" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="bg-gradient-primary text-white px-3.5 py-1.5 rounded-full font-medium text-xs mb-3 inline-block">
              Our Values
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-600 font-heading mb-2">
              What Drives Us
            </h2>
            <p className="text-neutral-600 text-base max-w-2xl mx-auto">
              The core principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur-md p-5 text-center rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all"
              >
                <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="font-bold text-neutral-700 mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <WaveBottom fill="#f4f7ff" />
      </section>

      {/* TEAM (bg-section-amber) */}
      <section className="relative overflow-hidden py-10 md:py-14"
        style={{ background: "linear-gradient(180deg, #FFF7ED 0%, #FFF1E6 100%)" }}  // warm cream -> peach
      >
        <WaveTop fill="#f4f7ff" />

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Portrait with dual-brand frame, soft shadow, and caption */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <div className="relative">
              {/* glow ring */}
              <div
                className="absolute -inset-2 rounded-3xl"
                style={{
                  background:
                    "conic-gradient(from 180deg, rgba(254,215,170,.35), rgba(255,237,213,.2), rgba(209,250,229,.2))",
                  filter: "blur(16px)",
                }}
              />
              {/* framed image */}
              <div
                className="relative rounded-2xl overflow-hidden border-[6px] shadow-sm"
                style={{ borderColor: "hsl(var(--premium-teal))", boxShadow: "inset 0 0 0 6px hsl(var(--premium-orange))" }}
              >
                <img
                  src="https://www.forthepleasureoflordkrishna.com/wp-content/uploads/2019/07/Srila-Prabhupada-Vyasadeva-1024x768.jpg"
                  alt="Srila Prabhupada"
                  className="w-full h-[280px] md:h-[320px] object-cover"
                />
              </div>
              <p className="mt-3 text-center text-neutral-700 text-sm">
                Founder-Acharya of ISKCON
              </p>
            </div>
          </div>

          {/* Bio Text with accent bar and readable measure */}
          <div className="w-full lg:w-2/3 text-neutral-700 text-sm md:text-base space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-6 w-1.5 rounded-full"
                style={{ backgroundColor: "hsl(var(--premium-orange))" }}
              />
              <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-800">
                His Divine Grace A.C.
              </h3>
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: "hsl(var(--premium-orange))" }}
            >
              Bhaktivedanta Swami Prabhupada
            </h3>

            <div className="bg-white/70 backdrop-blur-sm border rounded-xl p-4 md:p-5 shadow-sm"
              style={{ borderColor: "hsl(var(--neutral-100))" }}>
              <p className="leading-relaxed">
                Srila Prabhupada (born Abhay Charan De in Calcutta in 1896) was a devoted scholar and spiritual teacher
                who founded the International Society for Krishna Consciousness (ISKCON) in 1966. At age 69, he journeyed
                to the West with his translations of sacred Vedic texts and a vision to share Krishna consciousness—ultimately
                establishing 100+ centers worldwide, translating 70+ volumes of Vedic literature, and inspiring a global
                devotional movement.
              </p>
            </div>

            {/* Subtle badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "hsl(var(--light-teal))", color: "hsl(var(--premium-teal))" }}>
                Scholar
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}>
                Visionary Leader
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "hsl(var(--light-pink))", color: "hsl(var(--premium-pink))" }}>
                Global Mentor
              </span>
            </div>
          </div>
        </div>

        <WaveBottom fill="#f2ffe1ff" />
      </section>

      {/* Section 2 – Mentors (cool-teal contrast) */}
      <section className="relative overflow-hidden py-10 md:py-14"
        style={{ background: "linear-gradient(180deg, #ECFDF5 0%, #E6FAF3 100%)" }}  // mint -> light teal
      >
        <WaveTop fill="#f2ffe1ff" />

        <div className="container mx-auto px-4 text-center mb-8">
          <Badge
            className="px-3.5 py-1.5 rounded-full font-medium text-xs mb-2"
            style={{
              backgroundColor: "hsl(var(--light-teal))",
              color: "hsl(var(--premium-teal))",
              border: "1px solid hsl(var(--premium-teal))",
            }}
          >
            The Basil Woods Advantage
          </Badge>
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800">
            Our Mentors
          </h2>
          <p className="mt-1 text-neutral-600 text-sm md:text-base">
            Leaders who guide our values-first learning
          </p>
        </div>

        {/* Single row mentors with balanced widths and elegant cards */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="w-[260px] sm:w-[240px] md:w-[260px] lg:w-[240px]
                     rounded-2xl overflow-hidden shadow-sm hover:shadow-md
                     transition-transform hover:-translate-y-1 flex flex-col"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid hsl(var(--neutral-100))",
                }}
              >
                {/* Header stripe with avatar panel */}
                <div className="relative">
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: "hsl(var(--premium-orange))" }}
                  />
                  <div className="px-4 pt-4 pb-0"
                    style={{ backgroundColor: "#183A8A" /* deeper blue for contrast */ }}>
                    <div className="rounded-lg overflow-hidden w-full ring-1 ring-white/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[150px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col grow">
                  <h4 className="text-center font-bold text-neutral-900 leading-snug">
                    {member.name}
                  </h4>
                  <div className="text-center text-sm font-medium"
                    style={{ color: "hsl(var(--premium-purple))" }}>
                    {member.role}
                  </div>
                  <div className="mt-2 text-center text-xs text-neutral-700 min-h-[36px]">
                    {member.experience || member.specialty}
                  </div>

                  {/* Tag pills */}
                  <div className="mt-2 flex flex-wrap gap-1 justify-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                      style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}>
                      Mentor
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                      style={{ backgroundColor: "hsl(var(--light-teal))", color: "hsl(var(--premium-teal))" }}>
                      Guidance
                    </span>
                  </div>
                </div>

                {/* Scalloped footer echoing reference style */}
                <div
                  className="h-3 w-full"
                  style={{
                    background:
                      "radial-gradient(circle at 10px -8px, transparent 10px, rgba(246,181,101,0.15) 11px) repeat-x",
                    backgroundSize: "20px 12px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <WaveBottom fill="#f8ebe3ff" />
      </section>

      {/* CTA — standard card with brand buttons */}
      <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
        <WaveTop fill="#f8ebe3ff" />
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-8 md:p-10 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white">
            <div className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full" style={{ backgroundColor: "hsl(var(--light-teal))" }} />
            <div className="pointer-events-none absolute -bottom-10 -left-8 w-28 h-28 rounded-full" style={{ backgroundColor: "hsl(var(--light-pink))" }} />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neutral-900">Ready to Visit Our Campus?</h2>
              <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
                Schedule a personalized tour and see why families choose Basil Woods Juniors.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                  style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                  onClick={handleWhatsAppRedirect}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                  style={{
                    borderColor: "hsl(var(--premium-orange))",
                    color: "hsl(var(--premium-orange))",
                  }}
                  onClick={() => (window.location.href = "tel:+918056179108")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <p className="mt-4 text-xs text-neutral-600">We’ll Contact you by phone/email.</p>
            </div>
          </div>
        </div>
        <WaveBottom fill="#f4f7ff" />
      </section>

      {/* Footer with wave top */}
      <footer className="relative bg-[#f4f7ff]">
        <WaveTop fill="#f4f7ff" />
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUsPage;

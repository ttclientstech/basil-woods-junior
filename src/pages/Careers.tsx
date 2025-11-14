import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Phone, Users, Send, Heart, Star, Award, Target, Lightbulb, BookOpen,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";


/* Waves with separator tones */
const WaveTop = ({ fill = "#f2ede6" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#efe8df" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

/* Theme tone mapper using your CSS variables */
const toneFor = (key) => {
  switch (key) {
    case "orange":
      return { bg: "hsl(var(--light-orange))", fg: "hsl(var(--premium-orange))" };
    case "green":
      return { bg: "hsl(var(--light-teal))", fg: "hsl(var(--premium-teal))" };
    case "pink":
      return { bg: "hsl(var(--light-pink))", fg: "hsl(var(--premium-pink))" };
    case "purple":
      return { bg: "hsl(var(--neutral-50))", fg: "hsl(var(--premium-purple))" };
    case "blue":
      return { bg: "hsl(var(--neutral-50))", fg: "hsl(var(--premium-purple))" };
    default:
      return { bg: "hsl(var(--light-orange))", fg: "hsl(var(--premium-orange))" };
  }
};

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
      description:
        "Join our passionate team of educators to nurture young minds and create magical learning experiences.",
      requirements: [
        "Bachelor's degree in Early Childhood Education or related field",
        "2+ years experience with preschool children",
        "Strong communication and interpersonal skills",
        "Creative and patient approach to teaching",
      ],
      color: "blue",
    },
    {
      title: "Assistant Teacher",
      department: "Teaching",
      location: "Chennai",
      type: "Full-time",
      experience: "1-2 years",
      description:
        "Support our lead teachers in creating engaging learning environments for children aged 18 months to 6 years.",
      requirements: [
        "Diploma in Early Childhood Education preferred",
        "1+ years experience with young children",
        "Enthusiasm for child development",
        "Team player with positive attitude",
      ],
      color: "green",
    },
    {
      title: "Child Development Specialist",
      department: "Support Services",
      location: "Chennai",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Work with our team to assess and support children's developmental needs and create individualized learning plans.",
      requirements: [
        "Master's degree in Child Psychology or Development",
        "3+ years experience in child assessment",
        "Knowledge of developmental milestones",
        "Excellent observation and documentation skills",
      ],
      color: "purple",
    },
    {
      title: "Administrative Coordinator",
      department: "Administration",
      location: "Chennai",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Support our school operations and maintain excellent communication with parents and staff.",
      requirements: [
        "Bachelor's degree in any field",
        "2+ years administrative experience",
        "Strong organizational skills",
        "Proficiency in MS Office and school management systems",
      ],
      color: "orange",
    },
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance incentives",
      icon: Award,
      tone: "green",
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and skill enhancement programs",
      icon: BookOpen,
      tone: "blue",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: Heart,
      tone: "pink",
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and supportive work environment",
      icon: Target,
      tone: "purple",
    },
    {
      title: "Creative Freedom",
      description: "Opportunity to innovate and implement creative teaching methods",
      icon: Lightbulb,
      tone: "orange",
    },
    {
      title: "Team Culture",
      description: "Collaborative and supportive team environment",
      icon: Users,
      tone: "green",
    },
  ];

  const values = [
    {
      title: "Passion for Children",
      description:
        "Genuine love for working with young children and supporting their growth",
    },
    {
      title: "Educational Excellence",
      description:
        "Commitment to providing high-quality early childhood education",
    },
    {
      title: "Cultural Sensitivity",
      description: "Appreciation for diverse cultures and inclusive practices",
    },
    {
      title: "Continuous Learning",
      description:
        "Dedication to professional growth and staying current with best practices",
    },
  ];

  return (
    <div className="min-h-screen bg-section-1">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-section-1 min-h-[calc(60vh-var(--header-h))] flex items-center py-12 md:py-16">
        <div className="absolute top-16 right-8 w-12 h-12 bg-gradient-primary rounded-2xl opacity-25" />
        <div className="absolute bottom-16 left-12 w-10 h-10 bg-gradient-secondary rounded-full opacity-25" />
        <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-gradient-accent rounded-xl opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-primary text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4 inline-block">
              💼 Careers
            </Badge>
            <h1 className="text-[28px] md:text-[40px] font-bold text-neutral-700 leading-[1.15] mb-3">
              Join Our Mission to
              <span className="block text-gradient">Shape Young Minds</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Be part of a passionate team dedicated to exceptional early childhood education.
            </p>
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#f6eee7" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-secondary text-white px-4 py-2 rounded-full font-medium mb-3">
              Why Choose Us
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
              Why Work at Basil Woods Juniors?
            </h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              A workplace that values growth, creativity, and impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const tone = toneFor(b.tone);
              const Icon = b.icon;
              return (
                <Card
                  key={i}
                  className="rounded-2xl p-6 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: tone.bg, color: tone.fg }}
                  >
                    <Icon className="w-8 h-8" stroke="currentColor" fill="none" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-neutral-800 mb-1.5">{b.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{b.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
        <WaveBottom fill="#eee7fa" />
      </section>

      {/* OPEN POSITIONS */}
      {/* <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
        <WaveTop fill="#e9f2ef" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-accent text-white px-4 py-2 rounded-full font-medium mb-3">
              Open Positions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
              Current Opportunities
            </h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Explore roles with our growing team
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {openPositions.map((p, i) => {
              const tone = toneFor(p.color);
              return (
                <Card
                  key={i}
                  className="rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
                >
                  <div className="lg:flex items-start gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-bold text-neutral-800 text-lg">{p.title}</h3>
                        <Badge
                          className="px-3 py-1 rounded-full font-medium border-0"
                          style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))", color: "white" }}
                        >
                          {p.department}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-2" style={{ color: tone.fg }}>
                          <MapPin className="w-4 h-4" />
                          <span className="text-neutral-700">{p.location}</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: tone.fg }}>
                          <Clock className="w-4 h-4" />
                          <span className="text-neutral-700">{p.type}</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: tone.fg }}>
                          <Star className="w-4 h-4" />
                          <span className="text-neutral-700">{p.experience}</span>
                        </div>
                      </div>

                      <p className="text-neutral-700 mb-5 leading-relaxed">{p.description}</p>

                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {p.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: tone.fg }} />
                              <span className="text-neutral-700 text-sm leading-relaxed">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:w-auto mt-5 lg:mt-0">
                      <Button
                        className="rounded-xl px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-all w-full lg:w-auto"
                        style={{ backgroundColor: tone.fg, color: "white" }}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <WaveBottom fill="#eee7fa" />
      </section> */}

      {/* OUR VALUES */}
      <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
        <WaveTop fill="#eee7fa" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-primary text-white px-4 py-2 rounded-full font-medium mb-3">
              Our Values
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">What We Look For</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              The qualities that make our team exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <Card
                key={i}
                className="rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}
                  >
                    <Heart className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">{v.title}</h3>
                    <p className="text-neutral-700 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* APPLICATION PROCESS */}
      <section className="py-14 md:py-16 bg-section-1 relative overflow-hidden">
        <WaveTop fill="#f6eee7" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-secondary text-white px-4 py-2 rounded-full font-medium mb-3">
              Application Process
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">How to Apply</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Simple steps to join our amazing team
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Submit Application", description: "Send your resume and cover letter" },
              { step: "2", title: "Initial Screening", description: "Phone or video interview" },
              { step: "3", title: "In-Person Interview", description: "Meet the team and tour the facility" },
              { step: "4", title: "Welcome Aboard", description: "Orientation and onboarding" },
            ].map((s, i) => (
              <Card
                key={i}
                className="rounded-2xl p-6 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg"
                  style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-neutral-800 mb-1.5">{s.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">{s.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#e3e9fb" />
      </section>

      {/* CTA — standard light card with brand buttons */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#e3e9fb" />
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-8 md:p-10 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white">
            <div className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full" style={{ backgroundColor: "hsl(var(--light-teal))" }} />
            <div className="pointer-events-none absolute -bottom-10 -left-8 w-28 h-28 rounded-full" style={{ backgroundColor: "hsl(var(--light-pink))" }} />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neutral-900">Ready to Make a Difference?</h2>
              <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
                Join our team of passionate educators and help shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                  style={{
                    backgroundColor: "hsl(var(--premium-orange))",
                    color: "white",
                  }}
                  onClick={() => {
                    window.open(
                      "https://wa.me/918056179108?text=Hello%20Basil%20Woods%20Juniors%20Chennai!%20I%E2%80%99d%20like%20to%20schedule%20a%20campus%20visit.",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Apply Now
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
              <p className="mt-4 text-xs text-neutral-600">We respond within 1–2 business days.</p>
            </div>
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      <footer className="relative bg-[#f4f7ff]">
        <WaveTop fill="#f6eee7" />
        <Footer />
      </footer>
    </div>
  );
};

export default CareersPage;

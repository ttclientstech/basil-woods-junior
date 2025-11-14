import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download, Users, Calendar, BookOpen, Heart, Star, Award, Target, Lightbulb, Shield,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Separator waves with separator tones */
const WaveTop = ({ fill = "#f2ede6", className = "" }) => (
  <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 ${className}`}>
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#efe8df", className = "" }) => (
  <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-none ${className}`}>
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

/* Theme tone mapper (uses your CSS variables) */
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
    case "yellow":
      return { bg: "hsl(var(--light-orange))", fg: "hsl(var(--premium-yellow))" };
    case "red":
      return { bg: "hsl(var(--neutral-50))", fg: "hsl(var(--destructive))" };
    default:
      return { bg: "hsl(var(--light-orange))", fg: "hsl(var(--premium-orange))" };
  }
};

const PartnersCornerPage = () => {
  const parentResources = [
    {
      title: "Parent Handbook",
      description: "Complete guide to our programs, policies, and procedures",
      icon: BookOpen,
      color: "blue",
      downloadUrl: "#",
    },
    {
      title: "Development Milestones",
      description: "Age-appropriate milestones and what to expect",
      icon: Target,
      color: "green",
      downloadUrl: "#",
    },
    {
      title: "Home Learning Activities",
      description: "Fun activities to continue learning at home",
      icon: Lightbulb,
      color: "yellow",
      downloadUrl: "#",
    },
    {
      title: "Safety Guidelines",
      description: "Our comprehensive safety protocols and procedures",
      icon: Shield,
      color: "red",
      downloadUrl: "#",
    },
  ];

  const parentTips = [
    {
      title: "Preparing for First Day",
      tips: [
        "Visit the school together before the first day",
        "Practice separation gradually at home",
        "Create a positive morning routine",
        "Pack comfort items if needed",
      ],
    },
    {
      title: "Supporting Learning at Home",
      tips: [
        "Read together daily",
        "Encourage creative play",
        "Limit screen time",
        "Create learning opportunities in daily activities",
      ],
    },
    {
      title: "Building Independence",
      tips: [
        "Encourage self-help skills",
        "Allow age-appropriate choices",
        "Practice patience with mistakes",
        "Celebrate small achievements",
      ],
    },
  ];

  const events = [
    {
      title: "Parent-Teacher Conference",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      description: "Individual meetings to discuss your child's progress",
    },
    {
      title: "Family Fun Day",
      date: "March 22, 2024",
      time: "10:00 AM - 2:00 PM",
      description: "Games, activities, and lunch for the whole family",
    },
    {
      title: "Cultural Celebration",
      date: "April 5, 2024",
      time: "11:00 AM - 1:00 PM",
      description: "Celebrating diverse cultures with performances and food",
    },
    {
      title: "Graduation Ceremony",
      date: "May 20, 2024",
      time: "10:00 AM - 12:00 PM",
      description: "Celebrating our graduating students' achievements",
    },
  ];

  const testimonials = [
    {
      text:
        "The parent resources and communication from Basil Woods has been exceptional. We always feel informed and supported.",
      parent: "Priya Sharma",
      child: "Ananya (4 years)",
    },
    {
      text:
        "The family events create such a wonderful community feeling. Our daughter loves showing us her classroom and friends.",
      parent: "Rajesh Kumar",
      child: "Arjun (3.5 years)",
    },
    {
      text:
        "The development updates and home learning suggestions have helped us support our twins' growth effectively.",
      parent: "Lakshmi Raman",
      child: "Meera & Karthik (twins, 4.5 years)",
    },
  ];

  return (
    <div className="min-h-screen bg-section-1">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-section-1 min-h-[calc(60vh-var(--header-h))] flex items-center py-12 md:py-16">
        <WaveTop fill="#f2ede6" />
        {/* subtle shapes */}
        <div className="absolute top-16 right-8 w-12 h-12 bg-gradient-primary rounded-2xl opacity-30" />
        <div className="absolute bottom-16 left-12 w-10 h-10 bg-gradient-secondary rounded-full opacity-30" />
        <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-gradient-accent rounded-xl opacity-25" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-primary text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4 inline-block">
              👨‍👩‍👧‍👦 Partner's Corner
            </Badge>
            <h1 className="text-[28px] md:text-[40px] font-bold text-neutral-700 leading-[1.15] mb-3">
              Supporting Families
              <span className="block text-gradient">Every Step of the Way</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Resources, events, and support to help partner in a joyful learning journey.
            </p>
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* RESOURCES */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#f6eee7" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-secondary text-white px-4 py-2 rounded-full font-medium mb-3">
              Resources
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Parent Resources</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Helpful guides and materials to support your parenting journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentResources.map((resource, idx) => {
              const tone = toneFor(resource.color);
              const Icon = resource.icon;
              return (
                <Card
                  key={idx}
                  className="rounded-2xl p-6 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: tone.bg, color: tone.fg }}
                  >
                    <Icon className="w-8 h-8" stroke="currentColor" fill="none" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-neutral-800 mb-2">{resource.title}</h3>
                  <p className="text-neutral-700 text-sm mb-4 leading-relaxed">{resource.description}</p>
                  <Button
                    className="rounded-xl px-5 py-2.5 font-semibold shadow-sm hover:shadow-md transition-all"
                    style={{ backgroundColor: tone.fg, color: "white" }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
        <WaveBottom fill="#e9f2ef" />
      </section>

      {/* TIPS */}
      <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
        <WaveTop fill="#e9f2ef" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-accent text-white px-4 py-2 rounded-full font-medium mb-3">
              Tips & Guidance
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Parenting Tips</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Expert advice to help support development at home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {parentTips.map((section, index) => (
              <Card key={index} className="rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}
                  >
                    <Heart className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-neutral-800">{section.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "hsl(var(--premium-orange))" }}
                      />
                      <span className="text-neutral-700 text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#eee7fa" />
      </section>

      {/* EVENTS */}
      <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
        <WaveTop fill="#eee7fa" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-primary text-white px-4 py-2 rounded-full font-medium mb-3">
              Events
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Upcoming Events</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Join us for special events and family activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {events.map((event, idx) => (
              <Card
                key={idx}
                className="rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "hsl(var(--light-orange))", color: "hsl(var(--premium-orange))" }}
                  >
                    <Calendar className="w-6 h-6" stroke="currentColor" fill="none" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-800 text-lg mb-1">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-sm font-medium" style={{ color: "hsl(var(--premium-orange))" }}>
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#e9eefc" />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 md:py-16 bg-section-1 relative overflow-hidden">
        <WaveTop fill="#e9eefc" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-secondary text-white px-4 py-2 rounded-full font-medium mb-3">
              Testimonials
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">What Parents Say</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">Hear from our parent community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]">
                <div className="flex gap-1 mb-4" style={{ color: "hsl(var(--premium-yellow))" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" stroke="currentColor" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-neutral-700 mb-4 italic leading-relaxed">
                  “{t.text}”
                </blockquote>
                <div className="border-t border-[hsl(var(--neutral-100))] pt-4">
                  <div className="font-semibold text-neutral-800">{t.parent}</div>
                  <div className="text-sm" style={{ color: "hsl(var(--premium-orange))" }}>
                    Parent of {t.child}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* CONTACT/SUPPORT CTA */}
      {/* CONTACT/SUPPORT CTA — subtle, high-contrast on light card, on-brand buttons */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#f6eee7" />

        <div className="container mx-auto px-4">
          <div
            className="
        relative max-w-4xl mx-auto rounded-3xl overflow-hidden
        p-8 md:p-10 text-center shadow-sm
        border border-[hsl(var(--neutral-100))] bg-white
      "
          >
            {/* soft brand tint corners */}
            <div
              className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full"
              style={{ backgroundColor: "hsl(var(--light-orange))" }}
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-8 w-28 h-28 rounded-full"
              style={{ backgroundColor: "hsl(var(--light-pink))" }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neutral-900">
                Need Support or Have Questions?
              </h2>
              <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
                Our parent support team is here to help every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* Primary: warm brand button */}
                <Button
                  className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                  style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Parent Support
                </Button>

                {/* Secondary: outlined in brand color */}
                <Button
                  variant="outline"
                  className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                  style={{
                    borderColor: "hsl(var(--premium-orange))",
                    color: "hsl(var(--premium-orange))",
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Meeting
                </Button>
              </div>

              {/* reassurance */}
              <p className="mt-4 text-xs text-neutral-600">
                Response within 1 business day.
              </p>
            </div>
          </div>
        </div>

        <WaveBottom fill="#e3e9fb" />
      </section>


      {/* Footer */}
      <footer className="relative bg-[#f4f7ff]">
        <WaveTop fill="#e3e9fb" />
        <Footer />
      </footer>
    </div>
  );
};

export default PartnersCornerPage;

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock, Users, Star, Calendar, Download, PlayCircle,
  BookOpen, Palette, Music, Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

/* Waves */
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

/* THEME-CORRECT COLOR MAP (uses your HSL CSS variables) */
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
      // no light-blue token provided; using neutral-50 + purple as brand cool accent
      return { bg: "hsl(var(--neutral-50))", fg: "hsl(var(--premium-purple))" };
    default:
      return { bg: "hsl(var(--light-orange))", fg: "hsl(var(--premium-orange))" };
  }
};

const ProgramsPage = () => {
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
      capacity: "8-10 children per class",
      description:
        "Gentle introduction to learning through sensory play, basic social skills, and nurturing care in our safe environment.",
      features: [
        "Circle Time",
        "Culture Connect",
        "Language",
        "Numeracy",
        "Montessori",
        "Art & Craft",
        "Cognitive, Intra & Interpersonal Activity",
        "Storytelling",
        "Outdoor Play",
      ],
      color: "green",
      icon: "🌱",
      image:
        "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Mont1",
      age: "3 - 4 years",
      capacity: "12-15 children per class",
      description:
        "Building independence with structured play, early learning concepts, and creative exploration activities.",
      features: [
        "Circle Time",
        "Cultural Connect",
        "Language",
        "Numeracy",
        "Montessori",
        "Art & Craft",
        "Storytelling",
        "Outdoor Play",
        "Music & Movement",
      ],
      color: "blue",
      icon: "🌿",
      image:
        "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Mont2",
      age: "4 - 5 years",
      capacity: "15-18 children per class",
      description:
        "Pre-academic skills development with structured learning, cultural activities, and social skill building.",
      features: [
        "Circle Time",
        "Culture Connect",
        "Language",
        "Numeracy",
        "Montessori",
        "Art & Craft",
        "Storytelling",
        "Music & Movements",
        "Outdoor Play",
        "Hindi",
        "Tamil",
      ],
      color: "pink",
      icon: "🌸",
      image:
        "https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Mont3",
      age: "5 - 6 years",
      capacity: "18-20 children per class",
      description:
        "School readiness program with advanced learning concepts, leadership development, and comprehensive preparation.",
      features: [
        "Circle Time",
        "Culture Connect",
        "Language",
        "Numeracy",
        "Montessori",
        "Art & Craft",
        "Storytelling",
        "Music & Movements",
        "Outdoor Play",
        "Hindi",
        "Tamil",
      ],
      color: "orange",
      icon: "🌳",
      image:
        "https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const specialPrograms = [
    {
      name: "Cultural Heritage",
      time: "Weekly sessions",
      icon: Globe,
      color: "orange",
      description: "Exploring traditions and values",
    },
    {
      name: "Creative Arts",
      time: "Daily activities",
      icon: Palette,
      color: "purple",
      description: "Painting, crafts, and creativity",
    },
    {
      name: "Music & Movement",
      time: "3x per week",
      icon: Music,
      color: "green",
      description: "Songs, dance, and rhythm",
    },
    {
      name: "Reading Club",
      time: "Daily sessions",
      icon: BookOpen,
      color: "blue",
      description: "Stories and early literacy",
    },
  ];

  const dailySchedule = [
    { time: "8:30 - 9:00 AM", activity: "Welcome & Morning Circle", icon: "🌅", description: "Warm greetings and sharing time" },
    { time: "9:00 - 10:00 AM", activity: "Learning Time", icon: "📚", description: "Structured educational activities" },
    { time: "10:00 - 10:30 AM", activity: "Healthy Snack Break", icon: "🍎", description: "Nutritious snacks and social time" },
    { time: "10:30 - 11:30 AM", activity: "Creative Arts & Crafts", icon: "🎨", description: "Artistic expression and creativity" },
    { time: "11:30 - 12:30 PM", activity: "Outdoor Play", icon: "🏃", description: "Physical activity and fresh air" },
    { time: "12:30 - 1:30 PM", activity: "Lunch & Rest Time", icon: "🍽️", description: "Healthy meals and quiet time" },
    { time: "1:30 - 2:30 PM", activity: "Story & Music Time", icon: "🎭", description: "Stories, songs, and imagination" },
    { time: "2:30 - 3:30 PM", activity: "Free Play & Departure", icon: "🎈", description: "Unstructured play and pickup" },
  ];

  return (
    <div className="min-h-screen bg-section-1">
      <Header />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-section-1 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4">
              🎓 Our Programs
            </Badge>
            <h1 className="text-[30px] md:text-[40px] font-bold text-neutral-700 leading-[1.15] mb-3">
              Age-Perfect Learning
              <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Adventures for Every Child
              </span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Carefully crafted programs that nurture each developmental stage with love, care, and educational excellence.
            </p>
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* MAIN PROGRAMS */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#f6eee7" />
        <div className="container mx-auto px-4 relative z-10 space-y-12">
          {programs.map((program, index) => {
            const tone = toneFor(program.color);
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image */}
                <div>
                  <div className="relative rounded-3xl overflow-hidden shadow-sm">
                    <img
                      src={program.image}
                      alt={`${program.name} program`}
                      className="w-full h-[300px] md:h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    <div
                      className="absolute top-4 right-4 w-14 h-14 rounded-2xl text-white text-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: tone.fg }}
                    >
                      {program.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card
                  className="rounded-3xl p-6 md:p-7 shadow-sm border"
                  style={{ backgroundColor: tone.bg, borderColor: "hsl(var(--neutral-100))" }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl text-white"
                      style={{ backgroundColor: tone.fg }}
                    >
                      {program.icon}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-neutral-800">{program.name}</h2>
                      <p className="font-semibold text-sm" style={{ color: tone.fg }}>
                        {program.age}
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-700 mb-5 leading-relaxed">{program.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-5">
                    <h4 className="font-bold text-neutral-800 text-sm">Program Highlights:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-lg shadow-sm">
                          <Star className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth={2} style={{ color: tone.fg }} />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <Button
                    className="text-white rounded-xl px-6 py-3 font-semibold shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-200"
                    style={{ backgroundColor: tone.fg }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Button> */}
                </Card>
              </div>
            );
          })}
        </div>
        <WaveBottom fill="#e9f2ef" />
      </section>

      {/* SPECIAL PROGRAMS */}
      <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
        <WaveTop fill="#e9f2ef" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium mb-3">Special Programs</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Enrichment Activities</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Additional programs to enhance your child's learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => {
              const tone = toneFor(program.color);
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-neutral-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-[2px]"
                >
                  <div
                    className="mx-auto mb-4 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: tone.bg, color: tone.fg }}
                  >
                    <Icon className="w-6 h-6" stroke="currentColor" fill="none" strokeWidth={2} />
                  </div>

                  <h3 className="font-bold text-neutral-800 mb-1">{program.name}</h3>
                  <p className="text-xs font-medium mb-1" style={{ color: tone.fg }}>
                    {program.time}
                  </p>
                  <p className="text-neutral-700 text-sm">{program.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
        <WaveBottom fill="#eee7fa" />
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
        <WaveTop fill="#eee7fa" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-medium mb-3">Daily Schedule</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">A Day in Our Program</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">Sample daily schedule for our full-day programs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {dailySchedule.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-[2px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-neutral-800 mb-1">{item.activity}</h4>
                      <p className="text-neutral-700 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <WaveBottom fill="#e9eefc" />
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-section-5 relative overflow-hidden">
        <WaveTop fill="#e9eefc" />

        <div className="container mx-auto px-4">
          <div
            className="
        relative max-w-4xl mx-auto rounded-3xl overflow-hidden
        p-8 md:p-10 text-center shadow-sm
        border border-[hsl(var(--neutral-100))] bg-white
      "
          >
            {/* soft brand tints */}
            <div
              className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full"
              style={{ backgroundColor: "hsl(var(--light-teal))" }}
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-8 w-28 h-28 rounded-full"
              style={{ backgroundColor: "hsl(var(--light-pink))" }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neutral-900">
                Ready to Begin Your Child's Adventure?
              </h2>
              <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
                Choose the perfect program for a nurturing, joyful learning journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* Primary: Download Brochure */}
                <a
                  href="/brochure.pdf" // make sure brochure.pdf is in the public folder
                  download
                >
                  <Button
                    className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                    style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </Button>
                </a>

                {/* Secondary: Watch Program Video */}
                <a
                  href="https://www.youtube.com/watch?v=w4WyoDOi460"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                    style={{
                      borderColor: "hsl(var(--premium-orange))",
                      color: "hsl(var(--premium-orange))",
                    }}
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Program Video
                  </Button>
                </a>
              </div>

              <p className="mt-4 text-xs text-neutral-600">
                No signup needed to preview the brochure.
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

export default ProgramsPage;

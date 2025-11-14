import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown, Phone, Camera, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

// importing images
import exterior1 from "../assets/Images/Exterior1.webp";
import interior2 from "../assets/Images/Interior2.webp";
import interior6 from "../assets/Images/Interior6.webp";
import interior9 from "../assets/Images/Interior9.webp";
import interior13 from "../assets/Images/Interior13.webp";
import picture1 from "../assets/Images/Picture1.webp";
import picture3 from "../assets/Images/Picture3.webp";
import picture5 from "../assets/Images/Picture5.webp";
import tulsi from "../assets/Images/tulsi.webp";

/* Waves with separator tones */
const WaveTop = ({ fill = "#f2ede6" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
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

const WaveBottom = ({ fill = "#efe8df" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
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

const GalleryPage = () => {
  useSEO({
    title: "Gallery - See Our Campus & Happy Children",
    description: "Explore photos of our vibrant learning environment in Chennai. View classrooms, outdoor play areas, cultural activities, art & craft work, and happy children engaged in play-based learning at Basil Woods Juniors.",
    keywords: "preschool photos Chennai, school gallery, campus facilities, learning environment, preschool classrooms Chennai, outdoor play area, children activities photos",
    canonical: "https://www.basilwoodschennai.in/gallery"
  });

  // Map your custom chip names to data categories
  const chips = [
    { name: "All" },
    { name: "Classroom Activities", mapTo: ["Classroom", "Learning"] },
    { name: "Outdoor Play", mapTo: ["Activities", "Play", "Environment", "Campus"] },
    { name: "Cultural Events", mapTo: ["Cultural"] }, // none now, placeholder for future
    { name: "Art & Crafts", mapTo: ["Creativity"] },
    { name: "Special Occasions", mapTo: ["Occasion"] }, // none now, placeholder
  ];

  const galleryImages = [
    { src: exterior1, title: "School Entrance", category: "Campus", description: "Welcoming environment with a safe entrance" },
    { src: interior2, title: "Learning Space", category: "Classroom", description: "Bright and engaging classroom setup" },
    { src: interior6, title: "Play Area", category: "Activities", description: "Fun indoor play and learning together" },
    { src: interior9, title: "Creative Corner", category: "Classroom", description: "Children exploring creativity and crafts" },
    { src: interior13, title: "Storytelling Zone", category: "Learning", description: "Kids enjoying stories and discussions" },
    { src: picture1, title: "Group Activity", category: "Play", description: "Collaborative and interactive fun" },
    { src: picture3, title: "Art & Craft", category: "Creativity", description: "Children expressing through art" },
    { src: picture5, title: "Learning by Doing", category: "Classroom", description: "Hands-on activities for better learning" },
    { src: tulsi, title: "Nature & Values", category: "Environment", description: "Teaching respect for plants and nature" },
  ];

  const achievements = [
    { title: "Best Preschool Award 2023", description: "Recognized for excellence in early childhood education", icon: "🏆" },
    { title: "Cultural Integration Program", description: "Award for innovative cultural learning approach", icon: "🎭" },
    { title: "Parent Choice Award", description: "Voted by parents as the most trusted preschool", icon: "❤️" },
    { title: "Safety Excellence Certificate", description: "Certified for maintaining highest safety standards", icon: "🛡️" },
  ];

  // State for active chip and filtered list
  const [activeChip, setActiveChip] = React.useState<string>("All");

  const filteredImages = React.useMemo(() => {
    if (activeChip === "All") return galleryImages;

    const chip = chips.find((c) => c.name === activeChip);
    if (!chip) return galleryImages;

    // If a chip maps to one or more underlying categories, match any of them
    const mapTo = chip.mapTo || [activeChip];
    return galleryImages.filter((img) => mapTo.includes(img.category));
  }, [activeChip]);

  return (
    <div className="min-h-screen bg-section-1">
      <Header />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-section-1 relative overflow-hidden">
        {/* soft shapes */}
        <div className="absolute top-16 right-8 w-10 h-10 bg-gradient-primary rounded-full opacity-25" />
        <div className="absolute bottom-16 left-12 w-8 h-8 bg-gradient-secondary rounded-full opacity-25" />
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-accent rounded-xl opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4 inline-block">
              📸 Gallery
            </Badge>
            <h1 className="text-[30px] md:text-[40px] font-bold text-neutral-700 leading-[1.15] mb-3">
              Capturing Precious
              <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Learning Moments
              </span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Explore the joy, wonder, and growth happening every day at Basil Woods Juniors.
            </p>
          </div>
        </div>

        <WaveBottom fill="#e9f2ef" />
      </section>

      {/* PHOTOS */}
      <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
        <WaveTop fill="#e9f2ef" />

        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <Badge className="bg-blue-100 text-[hsl(var(--premium-purple))] px-4 py-2 rounded-full font-medium mb-3">
              Photo Gallery
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Moments of Joy & Learning</h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Every picture tells a story of growth, discovery, and happiness
            </p>
          </div>

          {/* CATEGORY FILTERS (functional) */}
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2.5">
              {chips.map((chip) => {
                const isActive = chip.name === activeChip;
                return (
                  <Button
                    key={chip.name}
                    onClick={() => setActiveChip(chip.name)}
                    variant="outline"
                    className={[
                      "rounded-full px-5 py-2 text-sm font-medium transition-all border",
                      isActive
                        // Active: gradient bg, no border, and a neutral text tint on hover
                        ? "text-white border-0 hover:text-neutral-100"
                        // Inactive: neutral border, brand hover colors
                        : "text-neutral-700 border-[hsl(var(--neutral-100))] hover:text-[hsl(var(--premium-orange))] hover:border-[hsl(var(--premium-orange))]"
                    ].join(" ")}
                    style={
                      isActive
                        ? {
                          background:
                            "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))",
                        }
                        : {}
                    }
                  >
                    {chip.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* GRID (filtered) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {filteredImages.map((image, i) => (
              <Card
                key={`${image.title}-${i}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-[2px] border border-[hsl(var(--neutral-100))] group"
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4 text-neutral-700" />
                  </div>
                  <Badge
                    className="absolute top-3 left-3 text-white px-2.5 py-1 rounded-full text-[11px] font-medium border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))",
                    }}
                  >
                    {image.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-neutral-800 mb-1.5">{image.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              className="rounded-xl px-6 py-3 font-semibold shadow-sm hover:shadow-md transition-all"
              style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
              onClick={() => setActiveChip("All")}
            >
              <ChevronDown className="w-5 h-5 mr-2" />
              View More Photos
            </Button>
          </div>
        </div>
        <WaveBottom fill="#eee7fa" />
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-14 md:py-16 bg-section-5 relative overflow-hidden">
        <WaveTop fill="#eee7fa" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-yellow-100 text-[hsl(var(--premium-yellow))] px-4 py-2 rounded-full font-medium mb-3">
              Achievements
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
              Our Recognition & Awards
            </h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Celebrating our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <Card
                key={i}
                className="rounded-2xl p-6 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-bold text-neutral-800 mb-1.5">{a.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {a.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#e3e9fb" />
      </section>

      {/* CTA — aligned to site standard */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#e3e9fb" />
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-8 md:p-10 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white">
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
                Want to See More?
              </h2>
              <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
                Schedule a campus visit by contacting us at the number provided below.              </p>
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
                    onClick={() => (window.location.href = "tel:+918056179108")}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* Footer */}
      <footer className="relative bg-[#f4f7ff]">
        <WaveTop fill="#f6eee7" />
        <Footer />
      </footer>
    </div>
  );
};

export default GalleryPage;

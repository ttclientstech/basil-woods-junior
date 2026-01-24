import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown, Phone, Camera, Heart, Star, Award, Trophy, Image as ImageIcon } from "lucide-react";
import { DoodleSparkle, DoodleBird, DoodleSun, DoodleCloud } from "@/components/ui/doodles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { FaWhatsapp } from 'react-icons/fa';

// importing images
import exterior1 from "../assets/Images/Exterior1.webp";
import interior2 from "../assets/Images/Interior2.webp";
import interior6 from "../assets/Images/Interior6.webp";
import interior9 from "../assets/Images/Interior9.webp";
import interior13 from "../assets/Images/Interior13.webp";
import picture1 from "../assets/Images/Picture1.webp";
import picture2 from "../assets/Images/Picture2.webp";
import picture3 from "../assets/Images/Picture3.webp";
import picture4 from "../assets/Images/Picture4.webp";
import picture5 from "../assets/Images/Picture5.webp";
import tulsi from "../assets/Images/tulsi.webp";
import interior3 from "../assets/Images/Interior3.webp";

// Children's Day
import cd2 from "../assets/Images/ChildrendayWorkShop/2.png";
import cd8 from "../assets/Images/ChildrendayWorkShop/8.png";
import cd10 from "../assets/Images/ChildrendayWorkShop/10.png";
import cd12 from "../assets/Images/ChildrendayWorkShop/12.png";

// Dossara
import das1 from "../assets/Images/Dassara/1.JPG";
import das2 from "../assets/Images/Dassara/2.JPG";
import das5 from "../assets/Images/Dassara/5.JPG";
import das6 from "../assets/Images/Dassara/6.JPG";

// Free Play
import fp1 from "../assets/Images/Free Day Play/1.png";
import fp2 from "../assets/Images/Free Day Play/2.png";
import fp3 from "../assets/Images/Free Day Play/3.png";
import fp4 from "../assets/Images/Free Day Play/4.png";

// Beach Events
import beach1 from "../assets/Images/beach events/1.JPG";
import beach2 from "../assets/Images/beach events/2.JPG";
import beach3 from "../assets/Images/beach events/3.jpeg";
import beach4 from "../assets/Images/beach events/4.jpeg";

// Outdoor Play
import outdoor1 from "../assets/Images/outdoor/1.jpg";
import outdoor2 from "../assets/Images/outdoor/2.jpeg";

// Classroom Activities
import class1 from "../assets/Images/classroom/1.jpg";
import class2 from "../assets/Images/classroom/2.JPG";
import class3 from "../assets/Images/classroom/3.JPG";

// Art & Crafts
import art12 from "../assets/Images/arts/12.png";
import art9 from "../assets/Images/arts/9.png";
import art2396 from "../assets/Images/arts/IMG_2396.JPG";
import art2400 from "../assets/Images/arts/IMG_2400.JPG";

const GalleryPage = () => {
  useSEO({
    title: "Gallery - See Our Campus & Happy Children",
    description: "Explore photos of our vibrant learning environment in Chennai. View classrooms, outdoor play areas, cultural activities, art & craft work, and happy children engaged in play-based learning at Basil Woods Juniors.",
    keywords: "preschool photos Chennai, school gallery, campus facilities, learning environment, preschool classrooms Chennai, outdoor play area, children activities photos",
    canonical: "https://www.basilwoodschennai.in/gallery"
  });

  const chips = [
    { name: "All", color: "bg-green-500 text-white" },
    { name: "Classroom Activities", mapTo: ["Classroom", "Learning"], color: "bg-green-500 text-white" },
    { name: "Outdoor Play", mapTo: ["Activities", "Play", "Environment", "Campus"], color: "bg-green-500 text-white" },
    { name: "Art & Crafts", mapTo: ["Creativity"], color: "bg-green-500 text-white" },
    { name: "Celebrations & Events", mapTo: ["Celebration", "Event", "ChildrensDay", "Dassara", "FreePlay", "BeachDay"], color: "bg-green-500 text-white" },
  ];

  const galleryImages = [
    { src: exterior1, title: "School Entrance", category: "Campus", description: "Welcoming environment with a safe entrance", rotate: "rotate-2" },
    { src: interior2, title: "Learning Space", category: "Classroom", description: "Bright and engaging classroom setup", rotate: "-rotate-1" },
    { src: interior6, title: "Play Area", category: "Activities", description: "Fun indoor play and learning together", rotate: "rotate-3" },
    { src: interior9, title: "Creative Corner", category: "Classroom", description: "Children exploring creativity and crafts", rotate: "-rotate-2" },
    { src: interior13, title: "Storytelling Zone", category: "Learning", description: "Kids enjoying stories and discussions", rotate: "rotate-1" },
    { src: picture1, title: "Group Activity", category: "Play", description: "Collaborative and interactive fun", rotate: "-rotate-3" },
    { src: picture3, title: "Art & Craft", category: "Creativity", description: "Children expressing through art", rotate: "rotate-2" },
    { src: picture5, title: "Learning by Doing", category: "Classroom", description: "Hands-on activities for better learning", rotate: "-rotate-1" },
    { src: tulsi, title: "Nature & Values", category: "Environment", description: "Teaching respect for plants and nature", rotate: "rotate-1" },
    { src: picture2, title: "Interactive Play", category: "Play", description: "Engaging activities for kids", rotate: "rotate-2" },
    { src: picture4, title: "Happy Learning", category: "Learning", description: "Joyful learning moments", rotate: "-rotate-2" },
    { src: interior3, title: "Modern Infrastructure", category: "Campus", description: "Well-equipped facilities for children", rotate: "rotate-1" },

    // Children's Day
    { src: cd2, title: "Fun Workshop", category: "ChildrensDay", description: "Creative learning workshop", rotate: "rotate-2" },
    { src: cd8, title: "Art Time", category: "ChildrensDay", description: "Expressing through colors", rotate: "-rotate-1" },
    { src: cd10, title: "Group Fun", category: "ChildrensDay", description: "Learning together with joy", rotate: "rotate-1" },
    { src: cd12, title: "Happy Smiles", category: "ChildrensDay", description: "Celebrating childhood", rotate: "-rotate-2" },

    // Dossara
    { src: das1, title: "Dossara Celebration", category: "Dassara", description: "Traditional festivities", rotate: "rotate-2" },
    { src: das2, title: "Cultural Dress", category: "Dassara", description: "Kids in traditional attire", rotate: "-rotate-1" },
    { src: das5, title: "Festival Joy", category: "Dassara", description: "Celebrating culture and values", rotate: "rotate-1" },
    { src: das6, title: "Divine Moments", category: "Dassara", description: "Seeking blessings", rotate: "-rotate-2" },

    // Free Play
    { src: fp1, title: "Free Play Time", category: "FreePlay", description: "Unstructured fun and games", rotate: "rotate-2" },
    { src: fp2, title: "Playground Fun", category: "FreePlay", description: "Active outdoor play", rotate: "-rotate-1" },
    { src: fp3, title: "Buddies", category: "FreePlay", description: "Making new friends", rotate: "rotate-1" },
    { src: fp4, title: "Happy Moments", category: "FreePlay", description: "Joy of playing together", rotate: "-rotate-2" },

    // Beach Day
    { src: beach1, title: "Beach Day Out", category: "BeachDay", description: "Fun day at the beach", rotate: "rotate-2" },
    { src: beach2, title: "Sand Castles", category: "BeachDay", description: "Building creativity with sand", rotate: "-rotate-1" },
    { src: beach3, title: "Splash Time", category: "BeachDay", description: "Enjoying the waves", rotate: "rotate-1" },
    { src: beach4, title: "Beach Games", category: "BeachDay", description: "Active games by the shore", rotate: "-rotate-2" },

    // Outdoor Play
    { src: outdoor1, title: "Green Campus", category: "Play", description: "Exploring our lush green campus", rotate: "rotate-2" },
    { src: outdoor2, title: "Outdoor Fun", category: "Play", description: "Engaging in outdoor activities", rotate: "-rotate-1" },

    // Classroom Activities
    { src: class1, title: "Engaged Learning", category: "Classroom", description: "Focused on learning activities", rotate: "rotate-1" },
    { src: class2, title: "Group Session", category: "Classroom", description: "Collaborative learning environment", rotate: "-rotate-2" },
    { src: class3, title: "Interactive Class", category: "Classroom", description: "Participating in class activities", rotate: "rotate-2" },

    // Art & Crafts
    { src: art12, title: "Creative Art", category: "Creativity", description: "Expressing through art", rotate: "rotate-2" },
    { src: art9, title: "Fun Crafts", category: "Creativity", description: "Hands-on crafting", rotate: "-rotate-1" },
    { src: art2396, title: "Artistic Joy", category: "Creativity", description: "Joy of creating", rotate: "rotate-1" },
    { src: art2400, title: "Masterpiece", category: "Creativity", description: "Proud of their work", rotate: "-rotate-2" },
  ];

  const achievements = [
    { title: "Best Preschool 2023", description: "Excellence in early education", icon: Trophy, color: "text-yellow-500" },
    { title: "Cultural Innovation", description: "Unique cultural integration", icon: Star, color: "text-purple-500" },
    { title: "Parent's Choice", description: "Most trusted by families", icon: Heart, color: "text-red-500" },
    { title: "Safety First", description: "Certified safety standards", icon: Award, color: "text-blue-500" },
  ];

  const [activeChip, setActiveChip] = React.useState<string>("All");
  const [activeSubChip, setActiveSubChip] = React.useState<string>("All Events");



  const eventSubChips = [
    { name: "All Events", mapTo: ["Celebration", "Event", "ChildrensDay", "Dassara", "FreePlay", "BeachDay"], color: "bg-blue-500 text-white" },
    { name: "Children's Day", mapTo: ["ChildrensDay"], color: "bg-green-500 text-white" },
    { name: "Dassara", mapTo: ["Dassara"], color: "bg-green-500 text-white" },
    { name: "Free Day Play", mapTo: ["FreePlay"], color: "bg-green-500 text-white" },
    { name: "Beach Events", mapTo: ["BeachDay"], color: "bg-green-500 text-white" },
  ];

  // Reset sub-chip when main chip changes
  React.useEffect(() => {
    if (activeChip !== "Celebrations & Events") {
      setActiveSubChip("All Events");
    }
  }, [activeChip]);

  const filteredImages = React.useMemo(() => {
    let images = galleryImages;

    // 1. Filter by Main Category
    if (activeChip !== "All") {
      const chip = chips.find((c) => c.name === activeChip);
      if (chip) {
        const mapTo = chip.mapTo || [activeChip];
        images = images.filter((img) => mapTo.includes(img.category));
      }
    }

    // 2. Filter by Sub Category (if in Events)
    if (activeChip === "Celebrations & Events" && activeSubChip !== "All Events") {
      const subChip = eventSubChips.find((c) => c.name === activeSubChip);
      if (subChip) {
        const mapTo = subChip.mapTo || [activeSubChip];
        images = images.filter((img) => mapTo.includes(img.category));
      }
    }

    return images;
  }, [activeChip, activeSubChip]);

  return (
    <div className="min-h-screen bg-[#fffdf5] font-sans">
      <Header />

      {/* HERO - "Memory Lane" */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-orange-100">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200/80 to-transparent pointer-events-none" />

        {/* Floating Polaroids & Doodles */}
        <motion.div
          className="absolute top-10 left-10 text-[hsl(var(--brand-dark-green))] hidden lg:block"
          animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <DoodleBird className="w-20 h-20 opacity-80" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-10 md:right-32 w-32 h-40 bg-white p-2 shadow-lg transform rotate-6 hidden md:block z-10"
          animate={{ y: [0, -10, 0], rotate: [6, 8, 6] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="w-full h-24 bg-neutral-200 mb-2" />
          <div className="h-2 w-16 bg-neutral-100 rounded" />
        </motion.div>

        <motion.div className="absolute bottom-20 left-20 text-[hsl(var(--premium-orange))] hidden md:block" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }}>
          <DoodleSparkle className="w-12 h-12" />
        </motion.div>

        <motion.div className="hidden md:block absolute top-1/4 right-1/4 text-yellow-500" animate={{ x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }}>
          <DoodleCloud className="w-32 h-20 opacity-60" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white text-pink-600 border-2 border-pink-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
            <Camera className="w-4 h-4 mr-2 inline" />
            Our Happy Moments
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
            Capturing <span className="text-[hsl(var(--premium-orange))]">Joy</span> & <br />
            <span className="text-teal-500">Wonder</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
            Take a stroll down memory lane and see the magic that happens every day at Basil Woods Juniors.
          </p>
        </div>
      </section>

      {/* GALLERY - "The Art Wall" */}
      <section className="py-12 md:py-20 bg-[#f4f1ea] border-y-8 border-neutral-200">
        <div className="container mx-auto px-4">

          {/* Filters - "Paint Splashes" */}
          <div className="flex flex-col items-center gap-6 mb-12">
            {/* Main Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {chips.map((chip) => (
                <motion.button
                  key={chip.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveChip(chip.name)}
                  className={`px-6 py-2 rounded-full font-bold shadow-md border-2 border-white transition-all ${activeChip === chip.name
                    ? `${chip.color} ring-4 ring-white/50`
                    : "bg-white text-neutral-600 hover:bg-neutral-50"
                    }`}
                >
                  {chip.name}
                </motion.button>
              ))}
            </div>

            {/* Sub Filters for Events */}
            {activeChip === "Celebrations & Events" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {eventSubChips.map((chip) => (
                  <button
                    key={chip.name}
                    onClick={() => setActiveSubChip(chip.name)}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-all ${activeSubChip === chip.name
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white/50 text-neutral-600 border-neutral-200 hover:bg-white"
                      }`}
                  >
                    {chip.name}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Grid - "Framed Photos" */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
            {filteredImages.map((image, i) => (
              <motion.div
                key={`${image.title}-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
                className={`bg-white p-4 pb-6 shadow-xl transform ${image.rotate} transition-all duration-300 relative group`}
              >
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border border-white/50 shadow-sm transform -rotate-1 z-20" />

                <div className="overflow-hidden border border-neutral-100 bg-neutral-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover filter contrast-110"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-handwriting text-2xl font-bold text-neutral-800">{image.title}</h3>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS - "Trophy Shelf" */}
      <section className="py-24 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-amber-50 relative">
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-amber-900 font-handwriting mb-2 drop-shadow-sm">Our Trophy Shelf</h2>
            <p className="text-amber-800 font-medium">Recognizing excellence in early education</p>
          </div>

          {/* Shelf */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-end relative z-10 px-8 pb-4">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className={`text-6xl mb-4 ${a.color} drop-shadow-md transform group-hover:scale-110 transition-transform`}>
                      <Icon strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-amber-900 leading-tight mb-1">{a.title}</h3>
                    <p className="text-xs text-amber-800/80 font-medium">{a.description}</p>
                  </motion.div>
                );
              })}
            </div>
            {/* Shelf Board */}
            <div className="h-8 bg-amber-800 rounded-lg shadow-xl border-t-4 border-amber-700 mx-auto w-full" />
            <div className="h-4 bg-amber-900/50 mx-4 rounded-b-lg blur-sm" />
          </div>
        </div>
      </section>

      {/* CTA - "Guestbook" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-teal-50 rounded-3xl transform rotate-1" />
            <div className="relative bg-white border-2 border-teal-100 rounded-3xl p-10 text-center shadow-lg">
              <div className="mb-6 inline-block p-4 bg-teal-100 rounded-full text-teal-600">
                <ImageIcon className="w-8 h-8" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 font-handwriting">Want to See More?</h2>
              <p className="text-lg text-neutral-600 mb-8 font-medium">
                The best way to experience our vibrant community is to visit us in person.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => (window.location.href = "tel:+918056179108")}
                  className="bg-teal-500 hover:bg-[hsl(var(--brand-dark-green))] hover:text-white text-[hsl(var(--brand-dark-green))] font-bold py-6 px-8 rounded-xl text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  <Phone className="w-6 h-6 mr-2 " />
                  Schedule a Visit
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-teal-500 font-bold py-6 px-8 rounded-xl text-lg"
                  onClick={() => window.open("/brochure.pdf", "_blank")}
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download Brochure
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

export default GalleryPage;

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

// importing images handled via public path


const GalleryPage = () => {
  useSEO({
    title: "Gallery - See Our Campus & Happy Children",
    description: "Explore photos of our vibrant learning environment in Chennai. View classrooms, outdoor play areas, cultural activities, art & craft work, and happy children engaged in play-based learning at Basil Woods Juniors.",
    keywords: "preschool photos Chennai, school gallery, campus facilities, learning environment, preschool classrooms Chennai, outdoor play area, children activities photos",
    canonical: "https://www.basilwoodschennai.in/gallery"
  });

  const chips = [
    { name: "All", color: "bg-green-500 text-white" },
    { name: "Art and Craft", color: "bg-green-500 text-white" },
    { name: "Creative Corner", color: "bg-green-500 text-white" },
    { name: "Events", color: "bg-green-500 text-white", hasSubfolders: true },
    { name: "Learning Space", color: "bg-green-500 text-white" },
    { name: "Play Area", color: "bg-green-500 text-white" },
    { name: "Story Telling Zone", color: "bg-green-500 text-white" },
  ];

  const galleryImages = [
    // art and craft
    { src: "/assets/gallery-new/art and craft/12.png", title: "Creative Art", category: "Art and Craft" },
    { src: "/assets/gallery-new/art and craft/9.png", title: "Handmade Craft", category: "Art and Craft" },
    { src: "/assets/gallery-new/art and craft/IMG_2396.JPG", title: "Art Activity", category: "Art and Craft" },
    { src: "/assets/gallery-new/art and craft/IMG_2400.JPG", title: "School Project", category: "Art and Craft" },
    
    // creative corner
    { src: "/assets/gallery-new/creative corner/Classroom.jpg", title: "Classroom Creativity", category: "Creative Corner" },
    { src: "/assets/gallery-new/creative corner/IMG_1091.JPG", title: "Creative Work", category: "Creative Corner" },
    { src: "/assets/gallery-new/creative corner/IMG_1120.JPG", title: "Kids Art", category: "Creative Corner" },

    // events - beach event
    { src: "/assets/gallery-new/events/beach event/IMG_1050.JPG", title: "Beach Activity", category: "Events", subCategory: "Beach Event" },
    { src: "/assets/gallery-new/events/beach event/IMG_1066.JPG", title: "Sand Play", category: "Events", subCategory: "Beach Event" },
    { src: "/assets/gallery-new/events/beach event/WhatsApp Image 2025-07-01 at 9.53.32 AM.jpeg", title: "Beach Fun", category: "Events", subCategory: "Beach Event" },
    { src: "/assets/gallery-new/events/beach event/WhatsApp Image 2025-07-01 at 9.53.35 AM (1).jpeg", title: "Ocean Day", category: "Events", subCategory: "Beach Event" },
    { src: "/assets/gallery-new/events/beach event/WhatsApp Image 2025-07-01 at 9.53.36 AM (1).jpeg", title: "Group Photo", category: "Events", subCategory: "Beach Event" },
    { src: "/assets/gallery-new/events/beach event/WhatsApp Image 2025-07-01 at 9.53.36 AM.jpeg", title: "Fun at Beach", category: "Events", subCategory: "Beach Event" },

    // events - Childrens day workshop
    { src: "/assets/gallery-new/events/Childrens day workshop/10.png", title: "Workshop Joy", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/12.png", title: "Learning Fun", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/13.png", title: "Activity Time", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/2.png", title: "Happy Kids", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/4.png", title: "Creative Session", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/5.png", title: "Group Activity", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/6.png", title: "Painting Day", category: "Events", subCategory: "Childrens Day Workshop" },
    { src: "/assets/gallery-new/events/Childrens day workshop/8.png", title: "Art Workshop", category: "Events", subCategory: "Childrens Day Workshop" },

    // events - Dassara camp
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2282.JPG", title: "Dassara Celebration", category: "Events", subCategory: "Dassara Camp" },
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2329.JPG", title: "Festive Spirit", category: "Events", subCategory: "Dassara Camp" },
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2335.JPG", title: "Camp Activity", category: "Events", subCategory: "Dassara Camp" },
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2371.JPG", title: "Tradition", category: "Events", subCategory: "Dassara Camp" },
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2400.JPG", title: "Kids Celebration", category: "Events", subCategory: "Dassara Camp" },
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2461.JPG", title: "Cultural Event", category: "Events", subCategory: "Dassara Camp" },
    { src: "/assets/gallery-new/events/Dassara camp/IMG_2493.JPG", title: "Joyful Moments", category: "Events", subCategory: "Dassara Camp" },

    // events - free play day
    { src: "/assets/gallery-new/events/free play day/1.png", title: "Free Play", category: "Events", subCategory: "Free Play Day" },
    { src: "/assets/gallery-new/events/free play day/2.png", title: "Outdoor Fun", category: "Events", subCategory: "Free Play Day" },
    { src: "/assets/gallery-new/events/free play day/3.png", title: "Playground", category: "Events", subCategory: "Free Play Day" },
    { src: "/assets/gallery-new/events/free play day/4.png", title: "Joyful Play", category: "Events", subCategory: "Free Play Day" },
    { src: "/assets/gallery-new/events/free play day/5.png", title: "Kids Energy", category: "Events", subCategory: "Free Play Day" },
    { src: "/assets/gallery-new/events/free play day/7.png", title: "Active Kids", category: "Events", subCategory: "Free Play Day" },

    // learning space
    { src: "/assets/gallery-new/learning space/WhatsApp Image 2025-09-18 at 10.29.33 AM (1).jpeg", title: "Learning Zone", category: "Learning Space" },
    { src: "/assets/gallery-new/learning space/WhatsApp Image 2025-12-11 at 2.58.38 PM.jpeg", title: "Classroom Environment", category: "Learning Space" },
    { src: "/assets/gallery-new/learning space/WhatsApp Image 2025-12-11 at 2.58.58 PM.jpeg", title: "Space for Learning", category: "Learning Space" },
    { src: "/assets/gallery-new/learning space/WhatsApp Image 2025-12-11 at 2.58.59 PM (1).jpeg", title: "Modern Classroom", category: "Learning Space" },
    { src: "/assets/gallery-new/learning space/WhatsApp Image 2025-12-11 at 2.58.59 PM.jpeg", title: "Bright Learning", category: "Learning Space" },

    // play area
    { src: "/assets/gallery-new/play area/20251211_142022.jpg", title: "Playground Fun", category: "Play Area" },
    { src: "/assets/gallery-new/play area/WhatsApp Image 2025-09-18 at 10.29.29 AM (1).jpeg", title: "Active Play", category: "Play Area" },

    // story telling zone
    { src: "/assets/gallery-new/story telling zone/20251211_141851.jpg", title: "Story Time", category: "Story Telling Zone" },
    { src: "/assets/gallery-new/story telling zone/P1211662.JPG", title: "Listening Zone", category: "Story Telling Zone" },
  ];

  const achievements = [
    { title: "Best Preschool 2023", description: "Excellence in early education", icon: Trophy, color: "text-yellow-500" },
    { title: "Cultural Innovation", description: "Unique cultural integration", icon: Star, color: "text-purple-500" },
    { title: "Parent's Choice", description: "Most trusted by families", icon: Heart, color: "text-red-500" },
    { title: "Safety First", description: "Certified safety standards", icon: Award, color: "text-blue-500" },
  ];

  const [activeChip, setActiveChip] = React.useState<string>("All");
  const [activeSubChip, setActiveSubChip] = React.useState<string>("All");



  const eventSubChips = [
    { name: "All", color: "bg-blue-500 text-white" },
    { name: "Beach Event", color: "bg-green-500 text-white" },
    { name: "Childrens Day Workshop", color: "bg-green-500 text-white" },
    { name: "Dassara Camp", color: "bg-green-500 text-white" },
    { name: "Free Play Day", color: "bg-green-500 text-white" },
  ];

  // Reset sub-chip when main chip changes
  React.useEffect(() => {
    setActiveSubChip("All");
  }, [activeChip]);

  const filteredImages = React.useMemo(() => {
    let images = galleryImages;

    // 1. Filter by Main Category
    if (activeChip !== "All") {
      images = images.filter((img) => img.category === activeChip);
    }

    // 2. Filter by Sub Category (if in Events)
    if (activeChip === "Events" && activeSubChip !== "All") {
      images = images.filter((img) => img.subCategory === activeSubChip);
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
            {activeChip === "Events" && (
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
                  <h3 className="font-handwriting text-2xl font-bold text-neutral-800">
                    {image.subCategory || image.category}
                  </h3>
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
          <div className="max-w-4xl mx-auto mb-16 relative">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50" />
              <div className="relative bg-white border-4 border-dashed border-[hsl(var(--premium-orange))] rounded-3xl p-10 text-center shadow-[12px_12px_0px_0px_hsl(var(--premium-orange))]">
                <div className="mb-6 inline-block p-4 bg-orange-100 rounded-full text-orange-600">
                  <ImageIcon className="w-8 h-8" />
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 font-handwriting">Want to See More?</h2>
                <p className="text-lg text-neutral-600 mb-8 font-medium">
                  The best way to experience our vibrant community is to visit us in person.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => (window.location.href = "tel:+918056179108")}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 px-8 rounded-xl text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;

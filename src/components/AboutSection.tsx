import React from "react";
import { motion } from "framer-motion";
import { Palette, Leaf, BookOpen, Sparkles, Star, Heart, Award, Pin } from "lucide-react";
import mainImage from "../assets/Images/About.png";
import busVector from "../assets/Images/busdemo.png";
import montessoriBoy from "../assets/Images/montessori-boy.png";


import secondaryImage from "@/assets/Images/Picture2.webp";
import { 
  PinkTowerVector,
  BrownStairsVector,
  CylinderBlockVector,
  MontessoriGlobeVector,
  CulturalBookVector,
  MontessoriBeadStairVector
} from "@/components/ui/montessori-vectors";
import { 
  DoodleBird, 
  DoodleRocket, 
  DoodleSun, 
  DoodleCloud, 
  DoodleSchoolBus, 
  DoodleGlobe, 
  DoodleGraduationCap, 
  DoodleBulb,
  DoodleSparkle,
  DoodleFlower,
  DoodleMontessoriTower,
  DoodleMontessoriShapes
} from "@/components/ui/doodles";

const AboutSection = () => {
  const features = [
    { name: "Culture Connect", icon: Palette, color: "bg-orange-100 text-orange-600", border: "border-orange-400", rotate: "rotate-2", description: "Immersing children in India's rich heritage through stories and festivals." },
    { name: "Nature Learning", icon: Leaf, color: "bg-yellow-100 text-yellow-600", border: "border-orange-400", rotate: "-rotate-1", description: "Outdoor activities that foster love and respect for the environment." },
    { name: "Values-Based Learning", icon: Heart, color: "bg-yellow-100 text-yellow-600", border: "border-orange-400", rotate: "rotate-1", description: "Instilling core values like empathy, gratitude, and honesty early on." },
    { name: "Creative Adventures", icon: Sparkles, color: "bg-pink-100 text-pink-600", border: "border-orange-400", rotate: "-rotate-2", description: "Encouraging self-expression through art, music, and imaginative play." },
  ];

  return (
    <section className="py-12 md:py-24 bg-[hsl(var(--section-3))] relative overflow-hidden">
      {/* Background Texture - Paper */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Montessori Boy Graphic - Raised higher and adjusted to avoid text overlap */}
      <motion.div
        className="absolute -top-20 -right-2 md:-top-6 md:right-0 lg:right-4 opacity-100 z-20"
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img 
          src={montessoriBoy} 
          alt="Child with Montessori Blocks" 
          className="w-20 h-20 md:w-48 md:h-48 lg:w-60 lg:h-60 object-contain mr-2" 
        />
      </motion.div>

      {/* Globe - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-10 text-blue-500 opacity-100 hidden lg:block"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoodleGlobe className="w-24 h-28" />
      </motion.div>

      {/* Bird Flock - Re-added for balance since tower is gone */}
      <motion.div
        className="absolute top-24 left-[10%] text-blue-400 opacity-60 hidden lg:block"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoodleBird className="w-12 h-8" />
      </motion.div>

      {/* Pencil & Sparkles - Enlarged and lowered */}
      {/* Pink Tower - Replacing Pencil & Sparkles */}
      <motion.div
        className="absolute bottom-20 left-[15%] opacity-100 hidden lg:block z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <CulturalBookVector className="w-48 h-40" />
          <DoodleSparkle className="w-6 h-6 absolute -top-4 -right-4 text-yellow-400 fill-current animate-pulse" />
        </div>
      </motion.div>

      {/* Book - Right Side middle */}
      {/* Bead Stair - Replacing Book/Cylinder & Bulb */}
      <motion.div
        className="absolute top-[15%] -right-4 md:top-[35%] md:-right-8 opacity-100 z-10"
        animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <MontessoriBeadStairVector className="w-24 h-24 md:w-60 md:h-60" />
      </motion.div>

      {/* Bird Flock - Shifted to Left Side for balance */}
      <DoodleFlower className="absolute bottom-10 left-10 text-pink-400 opacity-60 w-12 h-12" />
      <motion.div
        className="absolute top-20 left-10 text-blue-400 opacity-60 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <DoodleBird className="w-10 h-6 absolute top-0 left-12" />
          <DoodleBird className="w-8 h-5 absolute top-6 left-0" />
        </div>
      </motion.div>


      {/* Rocket - Flying Up Left (Kept as extra 'childish' element) */}
       <motion.div
         className="absolute bottom-0 left-4 md:left-20 z-20 pointer-events-none"
         initial={{ y: 200, opacity: 0 }}
         whileInView={{ y: -600, x: 100, opacity: [0, 1, 1, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeOut", delay: 1 }}
       >
         <DoodleRocket className="w-24 h-24 transform -rotate-12 drop-shadow-lg" />
       </motion.div>

      {/* Moving Bus - Removed as requested previously, ensuring it's gone */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


          {/* Left Visuals - Organic Blob Design */}
          <motion.div
            className="relative order-first lg:order-first px-4 md:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              
              <div className="relative w-full aspect-square md:w-[120%] md:-ml-[10%]">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    {/* The Organic "Blob" Path (Original/Earlier one) */}
                    <path 
                      id="blobShape" 
                      d="M 30 100 
                         C 30 40, 70 20, 100 50 
                         C 130 80, 170 30, 170 100 
                         C 170 170, 130 180, 100 170 
                         C 70 160, 30 170, 30 100 Z"
                    />
                    <clipPath id="blobClip">
                      <use href="#blobShape" />
                    </clipPath>
                    
                    {/* Inner Glow/Shadow Filter */}
                    <filter id="innerGlow">
                      <feFlood floodColor="white" floodOpacity="0.4" result="color" />
                      <feComposite in2="SourceAlpha" operator="out" />
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in2="SourceAlpha" operator="in" />
                      <feComposite in2="SourceGraphic" operator="over" />
                    </filter>
                  </defs>

                  {/* Red Dashed Border - Reverted to single layer per request */}
                  <use 
                    href="#blobShape" 
                    fill="none" 
                    stroke="#f10b0bff" 
                    strokeWidth="1" 
                    strokeDasharray="2 2 " 
                    strokeLinecap="round"
                    transform="scale(1.05) translate(-5 -5)" 
                    className="opacity-100" 
                  />

                  {/* The Image inside the Blob Mask with Inner Glow */}
                  <g filter="url(#innerGlow)">
                    <image 
                      href={mainImage} 
                      width="100%" 
                      height="100%" 
                      preserveAspectRatio="xMidYMid slice" 
                      clipPath="url(#blobClip)"
                    />
                  </g>
                  
                  {/* Apple Stem */}
                  <path 
                    d="M 115 55 L 120 32" 
                    stroke="#532700ff" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />

                  {/* Leaf Decoration */}
                  <motion.path 
                    d="M 120 35 Q 135 15 160 25 Q 135 45 120 35" 
                    fill="#0dbd4eff" 
                    stroke="#0e8d3fff" 
                    strokeWidth="1" 
                    strokeLinecap="round" 
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />

                </svg>
                
              </div>

              {/* Wavy Background for Secondary Image */}
              <motion.div 
                className="absolute -bottom-8 -right-4 md:-bottom-14 md:-right-12 w-32 h-32 md:w-56 md:h-56 z-10 opacity-30 text-lime-600"
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 200 200" fill="currentColor">
                  <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.9,33.5C59.8,45,49.1,54.6,37.3,62.8C25.5,71,12.8,77.7,-0.4,78.4C-13.6,79.1,-27.2,73.8,-40,66.1C-52.8,58.4,-64.8,48.4,-73.4,36.2C-82,24,-87.3,9.7,-84.9,-3.3C-82.5,-16.4,-72.5,-28.1,-62.4,-38.3C-52.3,-48.5,-42.1,-57.2,-30.9,-66.2C-19.7,-75.2,-7.5,-84.5,6.1,-85.4C19.7,-86.3,39.4,-78.8,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </motion.div>

              {/* Secondary Image (Small Circle) - Overlapping */}
              <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-8 w-28 h-28 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden z-20">
                   <img src={secondaryImage} alt="Children Playing" className="w-full h-full object-cover" />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute top-0 right-0 md:-top-4 md:-right-4 z-30 bg-white p-2 md:p-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 transform rotate-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-current" />
                <div className="leading-tight">
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-wider">Award Winning</div>
                </div>
              </motion.div>


              {/* Decorative Doodle */}
              <motion.div
                className="absolute -top-12 -left-8 z-10 text-blue-400 opacity-80"
                animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <DoodleBird className="w-16 h-12 md:w-20 md:h-14" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full border-2 border-orange-400 font-bold text-sm mb-6 shadow-[2px_2px_0px_0px_rgba(251,146,60,1)] transform -rotate-1">
                <Star className="w-4 h-4 inline-block mr-2 fill-current" />
                About Basil Woods Juniors
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[hsl(var(--brand-dark-green))] leading-tight mb-6 font-handwriting relative z-10">
                India’s Top Preschool <br />
                <span className="relative inline-block px-2 mt-2">
                  <span className="relative z-10">in the Heart of Chennai</span>
                  <span className="absolute inset-0 bg-yellow-200/60 -skew-x-6 transform -rotate-1 z-0 rounded-sm" />
                </span>
              </h2>

              <p className="text-xl text-neutral-700 leading-relaxed font-medium font-handwriting">
                A perfect parenting partner offering a transformative early learning experience — blending world-class infrastructure, expert facilitators, and innovative curriculum with foundational Indian values.
              </p>


            </div>

            {/* Feature Stickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <motion.div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white border-2 ${f.border} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] cursor-default transform ${f.rotate}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  >
                    <div className={`p-3 rounded-xl ${f.color} border-2 border-current shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-black text-neutral-800 text-lg block leading-tight mb-1">{f.name}</span>
                      <p className="text-sm text-neutral-600 font-medium leading-snug">{f.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note Card Quote */}
            <div className="relative mt-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-red-500">
                <Pin className="w-6 h-6 fill-red-500 text-red-700" />
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <p className="text-neutral-800 font-bold text-lg text-center font-handwriting leading-relaxed">
                  "Our unique Culture Connect program brings India’s rich cultural heritage to life in a fun and engaging way."
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

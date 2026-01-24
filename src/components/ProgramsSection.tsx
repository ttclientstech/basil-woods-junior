
import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "@/components/ui/wave-divider";
import { Star, Heart, Clock, Cloud, Sun, Sparkles, Music, Palette, Footprints, BookOpen, Users, Book, Bus, TreePine, Lightbulb, Paintbrush } from "lucide-react";

// Import Images
import ActivityPeriodImg from "../assets/Images/Interior13.webp";
import CircleTimeImg from "../assets/Images/Interior4.webp";
import PhonicsImg from "../assets/Images/Program1.png";
import StoryTimeImg from "../assets/Images/Picture3.webp";
import FieldTripsImg from "../assets/Images/Exterior1.webp"; // Using Exterior1 for Field Trips (Bus/Outdoors)
import OutdoorPlayImg from "../assets/Images/Exterior2.webp";
import ThemeTimeImg from "../assets/Images/Program3.png";
import ArtCraftImg from "../assets/Images/Program2.png";

const ProgramsSection = () => {
  const activities = [
    {
      title: "Activity Period",
      time: "9:00 AM",
      description: "Our day begins with a warm welcome! Children transition from home to school with excitement, engaging in free play with puzzles, blocks, and sensory bins to settle in comfortably.",
      image: ActivityPeriodImg,
      icon: Sparkles,
      iconColor: "text-blue-600",
      bubbleBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
    {
      title: "Circle Time",
      time: "9:30 AM",
      description: "A time for connection! We gather to sing our 'Good Morning' songs, discuss the day's calendar, weather, and share special news, building confidence and social skills.",
      image: CircleTimeImg,
      icon: Users,
      iconColor: "text-green-600",
      bubbleBg: "bg-gradient-to-br from-green-100 to-green-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
    {
      title: "Phonics Fun",
      time: "10:00 AM",
      description: "Unlock the magic of reading! We use the multi-sensory 'Jolly Phonics' method to explore sounds, letters, and blending, laying a strong foundation for early literacy.",
      image: PhonicsImg,
      icon: BookOpen,
      iconColor: "text-amber-600",
      bubbleBg: "bg-gradient-to-br from-amber-100 to-amber-200",
      color: "bg-pink-50",
      border: "border-pink-400",
      text: "text-pink-700"
    },
    {
      title: "Story Time",
      time: "10:30 AM",
      description: "Imaginations soar! Puppets and props bring stories to life, fostering a love for books, enhancing listening skills, and expanding vocabulary in a magical setting.",
      image: StoryTimeImg,
      icon: Book,
      iconColor: "text-rose-600",
      bubbleBg: "bg-gradient-to-br from-rose-100 to-rose-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
    {
      title: "Field Trips",
      time: "11:00 AM",
      description: "Learning beyond walls! Carefully planned excursions to parks, museums, and local community helpers provide real-world experiences that spark curiosity and wonder.",
      image: FieldTripsImg,
      icon: Bus,
      iconColor: "text-blue-600",
      bubbleBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
    {
      title: "Outdoor Play",
      time: "11:30 AM",
      description: "Active bodies, happy minds! Running, climbing, and team games helps develop gross motor skills, coordination, and teamwork while enjoying the fresh air and sunshine.",
      image: OutdoorPlayImg,
      icon: TreePine,
      iconColor: "text-green-600",
      bubbleBg: "bg-gradient-to-br from-green-100 to-green-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
    {
      title: "Theme Time",
      time: "12:00 PM",
      description: "Deep dives into discovery! We explore monthly themes like 'Space', 'Our Community', or 'Seasons' through interactive projects, science experiments, and role-play.",
      image: ThemeTimeImg,
      icon: Lightbulb,
      iconColor: "text-amber-600",
      bubbleBg: "bg-gradient-to-br from-amber-100 to-amber-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
    {
      title: "Art & Craft",
      time: "12:30 PM",
      description: "Creativity unleashed! Little hands get busy with paints, clay, collage, and recycled materials, expressing themselves and developing fine motor control with every masterpiece.",
      image: ArtCraftImg,
      icon: Paintbrush,
      iconColor: "text-rose-600",
      bubbleBg: "bg-gradient-to-br from-rose-100 to-rose-200",
      color: "bg-yellow-50",
      border: "border-yellow-400",
      text: "text-yellow-700"
    },
  ];

  const midpoint = Math.ceil(activities.length / 2);
  const leftActivities = activities.slice(0, midpoint);
  const rightActivities = activities.slice(midpoint);

  return (
    <section className="py-12 md:py-24 bg-[#fff8f0] relative overflow-hidden">
      <WaveDivider position="top" fill="#f6eee7" variant={1} />

      {/* Background Doodles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Area */}
        <div className="absolute top-[5%] left-[5%] transform -rotate-12 text-orange-200 opacity-60">
          <Star className="w-24 h-24 fill-current" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[8%] right-[10%] text-yellow-300 opacity-60">
          <Sun className="w-20 h-20" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[15%] left-[30%] text-blue-100 opacity-80">
          <Cloud className="w-32 h-32 fill-current" strokeWidth={1} />
        </div>

        {/* Middle Area Left */}
        <div className="absolute top-[35%] left-[2%] text-pink-200 opacity-40">
          <Music className="w-16 h-16 transform -rotate-12" />
        </div>
        <div className="absolute top-[45%] left-[15%] text-purple-200 opacity-30">
          <Sparkles className="w-12 h-12" />
        </div>
        <div className="absolute top-[55%] left-[5%] text-green-100 opacity-60">
          <Palette className="w-20 h-20" strokeWidth={1.5} />
        </div>

        {/* Middle Area Right */}
        <div className="absolute top-[30%] right-[5%] transform rotate-12 text-teal-200 opacity-60">
          <Heart className="w-32 h-32 fill-current" strokeWidth={1.5} />
        </div>
        <div className="absolute top-[40%] right-[15%] text-orange-100 opacity-50">
          <Footprints className="w-24 h-24 transform rotate-45" strokeWidth={1} />
        </div>
        <div className="absolute top-[50%] right-[2%] transform rotate-12 text-teal-200 opacity-60">
          <Heart className="w-16 h-16 fill-current" strokeWidth={1.5} />
        </div>

        {/* Bottom Area */}
        <div className="absolute bottom-[20%] left-[10%] text-pink-200 opacity-40">
          <div className="w-16 h-16 rounded-full bg-current blur-2xl" />
        </div>
        <div className="absolute bottom-[25%] right-[10%] transform -rotate-12 text-yellow-200 opacity-50">
          <Star className="w-20 h-20 fill-current" />
        </div>
        <div className="absolute bottom-[10%] right-[30%] text-blue-100 opacity-60">
          <Cloud className="w-24 h-24 fill-current" strokeWidth={1} />
        </div>
        <div className="absolute bottom-[5%] left-[20%] text-green-200 opacity-40">
          <Sparkles className="w-14 h-14" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white border border-neutral-200 px-6 py-2 rounded-full shadow-sm mb-4 transform -rotate-2"
          >
            <span className="font-bold text-neutral-600 text-sm uppercase tracking-widest">A Day in the Life</span>
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting leading-tight">
            Every Day is a <span className="text-[hsl(var(--premium-orange))]">New Adventure!</span>
          </h2>
        </div>

        {/* Two-Column Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

          {/* LEFT COLUMN - Morning */}
          <div className="relative">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-sm tracking-wider uppercase border border-blue-300 shadow-sm">Morning Explorations</span>
            </div>

            {/* Path Left */}
            <div className="absolute left-8 md:left-[2.5rem] top-20 bottom-0 w-1 bg-blue-200 border-l-2 border-dashed border-blue-300 opacity-60" />

            <div className="space-y-16">
              {leftActivities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-20 md:pl-32"
                >
                  {/* Icon Bubble */}
                  <div className="absolute left-0 top-0 z-20">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg ${item.bubbleBg} flex items-center justify-center text-center p-1 transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300`}>
                      <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="absolute left-16 top-8 w-8 md:w-16 h-1 bg-blue-200 border-t-2 border-dashed border-blue-300" />

                  {/* Card */}
                  <div className={`
                       relative bg-white p-5 rounded-[2rem] border border-neutral-100
                       shadow-[4px_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[4px_12px_30px_rgba(0,0,0,0.12)]
                       transition-all duration-300 hover:-translate-y-1 group
                    `}>
                    {/* Tape */}
                    <div className="absolute -top-3 right-8 w-12 h-4 bg-yellow-100/50 border border-white/40 rotate-3" />

                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <div className={`absolute inset-0 ${item.color} opacity-40 rounded-full blur-xl`} />
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl shadow-sm rotate-3 group-hover:rotate-0 transition-transform" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-black ${item.text} mb-2 font-handwriting`}>{item.title}</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed font-medium">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Afternoon */}
          <div className="relative mt-12 lg:mt-0">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-sm tracking-wider uppercase border border-blue-300 shadow-sm">Afternoon Adventures</span>
            </div>

            {/* Path Right */}
            <div className="absolute left-8 md:left-[2.5rem] top-20 bottom-0 w-1 bg-blue-200 border-l-2 border-dashed border-blue-300 opacity-60" />

            <div className="space-y-16">
              {rightActivities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-20 md:pl-32"
                >
                  {/* Icon Bubble */}
                  <div className="absolute left-0 top-0 z-20">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg ${item.bubbleBg} flex items-center justify-center text-center p-1 transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300`}>
                      <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="absolute left-16 top-8 w-8 md:w-16 h-1 bg-blue-200 border-t-2 border-dashed border-blue-300" />

                  {/* Card */}
                  <div className={`
                       relative bg-white p-5 rounded-[2rem] border border-neutral-100
                       shadow-[4px_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[4px_12px_30px_rgba(0,0,0,0.12)]
                       transition-all duration-300 hover:-translate-y-1 group
                    `}>
                    {/* Tape */}
                    <div className="absolute -top-3 right-8 w-12 h-4 bg-blue-100/50 border border-white/40 -rotate-2" />

                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <div className={`absolute inset-0 ${item.color} opacity-40 rounded-full blur-xl`} />
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl shadow-sm -rotate-2 group-hover:rotate-0 transition-transform" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-black ${item.text} mb-2 font-handwriting`}>{item.title}</h3>
                        <p className="text-sm text-neutral-600 leading-relaxed font-medium">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <WaveDivider position="bottom" fill="#f6eee7" variant={3} />
    </section>
  );
};

export default ProgramsSection;

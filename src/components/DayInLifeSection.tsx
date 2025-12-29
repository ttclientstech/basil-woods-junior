import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Clock, BookOpen, Utensils, Moon, Play } from "lucide-react";
import picture1 from "@/assets/Images/Picture1.webp";
import picture2 from "@/assets/Images/Picture2.webp";
import picture3 from "@/assets/Images/Picture3.webp";
import picture4 from "@/assets/Images/Picture4.webp";

const DayInLifeSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const schedule = [
        {
            time: "8:30 AM",
            title: "Warm Welcome",
            desc: "Our day begins with bright smiles! Children arrive and settle into their classrooms with free-play, greeting friends and teachers.",
            icon: Sun,
            color: "bg-yellow-100",
            textColor: "text-yellow-600",
            image: picture1
        },
        {
            time: "9:30 AM",
            title: "Circle Time & Learning",
            desc: "We gather for songs, stories, and theme discussions. This structured time builds focus, language, and social connection.",
            icon: BookOpen,
            color: "bg-blue-100",
            textColor: "text-blue-600",
            image: picture2
        },
        {
            time: "11:00 AM",
            title: "Active Play & Exploration",
            desc: "Whether outdoors or in our sensory zones, children engage in gross motor activities, channeling their energy constructively.",
            icon: Play,
            color: "bg-green-100",
            textColor: "text-green-600",
            image: picture3
        },
        {
            time: "12:30 PM",
            title: "Nutritious Lunch",
            desc: "We practice table manners and healthy eating habits together, fostering independence and community.",
            icon: Utensils,
            color: "bg-orange-100",
            textColor: "text-orange-600",
            image: picture4
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting mb-6">
                            A Day in the <span className="text-[hsl(var(--premium-orange))]">Life</span>
                        </h2>
                        <p className="text-xl text-neutral-600 font-medium">
                            Every day is a new adventure! Here's a glimpse into the joyful routine that nurtures your child's growth.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Timeline Selection */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {schedule.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setActiveTab(idx)}
                                className={`p-4 rounded-2xl cursor-pointer transition-all border-2 flex items-center gap-4 ${activeTab === idx
                                    ? "bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-105"
                                    : "bg-neutral-50 border-transparent hover:bg-white hover:border-neutral-200"}`}
                            >
                                <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center`}>
                                    <item.icon className={`w-6 h-6 ${item.textColor}`} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-neutral-400">{item.time}</div>
                                    <div className={`font-black text-lg ${activeTab === idx ? "text-[hsl(var(--brand-dark-green))]" : "text-neutral-600"}`}>
                                        {item.title}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Display */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-white p-2 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_hsl(var(--premium-orange))]"
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-video bg-neutral-100">
                                    <img
                                        src={schedule[activeTab].image}
                                        alt={schedule[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                                        <h3 className="text-3xl text-white font-black font-handwriting mb-2">{schedule[activeTab].title}</h3>
                                        <p className="text-white/90 text-lg font-medium">{schedule[activeTab].desc}</p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 bg-yellow-400 text-black font-black p-4 rounded-full border-2 border-black shadow-md transform rotate-12 z-20">
                                    {schedule[activeTab].time}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DayInLifeSection;

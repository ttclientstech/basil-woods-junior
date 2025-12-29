import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { GraduationCap, Clock, MapPin, Building2, Users } from "lucide-react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            value: 1500,
            suffix: "+",
            label: "Number of Students",
            icon: Users,
            color: "text-[hsl(var(--premium-orange))]",
            bg: "bg-[hsl(var(--light-orange))]",
        },
        {
            id: 2,
            value: 15,
            suffix: "+",
            label: "Years of Experience",
            icon: Clock,
            color: "text-[hsl(var(--premium-green))]",
            bg: "bg-[hsl(var(--light-green))]",
        },
        {
            id: 3,
            value: 11,
            suffix: "",
            subValue: "6 Cities",
            label: "Preschools Across",
            icon: Building2,
            color: "text-[hsl(var(--premium-purple))]",
            bg: "bg-[hsl(var(--light-purple))]",
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-[hsl(var(--brand-dark-green))] font-handwriting mb-4"
                    >
                        Why Parents <span className="text-[hsl(var(--premium-pink))]">Trust Us</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-2 bg-[hsl(var(--premium-yellow))] rounded-full mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2rem] p-8 border-2 border-neutral-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-all group"
                        >
                            <div className={`w-20 h-20 mx-auto ${stat.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className={`w-10 h-10 ${stat.color}`} />
                            </div>

                            <div className="text-center">
                                <div className={`text-5xl font-black font-handwriting mb-2 ${stat.color}`}>
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                {stat.subValue && (
                                    <div className="text-xl font-bold text-neutral-500 mb-1">{stat.subValue}</div>
                                )}
                                <div className="text-xl font-bold text-neutral-700 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

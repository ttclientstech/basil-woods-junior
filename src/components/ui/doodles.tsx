import React from "react";
import { cn } from "@/lib/utils";

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    fillColor?: string;
    strokeColor?: string;
}

// --- NATURE ELEMENTS ---

export const DoodleSun = ({ className, fillColor = "#FBBF24", strokeColor = "#FBBF24", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-24", className)} {...props}>
        <circle cx="50" cy="50" r="20" stroke={strokeColor} strokeWidth="5" fill={fillColor} strokeLinecap="round" />
        <path d="M50 20V10M50 90V80M20 50H10M90 50H80M29 29L22 22M78 78L71 71M29 71L22 78M78 22L71 29" stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export const DoodleCloud = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-16", className)} {...props}>
        <path d="M10 50C4.477 50 0 45.523 0 40C0 34.477 4.477 30 10 30C10.957 16.623 22.146 6 36 6C46.864 6 56.164 12.535 60.107 21.986C62.463 19.497 65.719 18 69 18C76.732 18 83 24.268 83 32C83 32.556 82.966 33.101 82.9 33.636C87.011 34.981 90 38.86 90 43.5C90 49.299 85.299 54 79.5 54H10" stroke={strokeColor} strokeWidth="3" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleLeaf = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-20", className)} {...props}>
        <path d="M25 75C25 75 45 55 45 35C45 15 25 5 25 5C25 5 5 15 5 35C5 55 25 75 25 75Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 5V75M25 25L40 15M25 45L40 35M25 60L35 55M25 25L10 15M25 45L10 35M25 60L15 55" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleFlower = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-16 h-16", className)} {...props}>
        <path d="M30 30L30 55" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M30 30C35 20 45 20 50 30C45 40 35 40 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30C40 35 40 45 30 50C20 45 20 35 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30C25 40 15 40 10 30C15 20 25 20 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30C20 25 20 15 30 10C40 15 40 25 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="30" r="4" fill={strokeColor} />
    </svg>
);

export const DoodleBird = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-8", className)} {...props}>
        <path d="M3 15C10 25 20 25 25 15C30 25 40 25 47 15" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Re-exporting StarDoodle
export const StarDoodle = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-12", className)} {...props}>
        <path d="M25 5 L 31 18 H 45 L 34 26 L 38 40 L 25 32 L 12 40 L 16 26 L 5 18 H 19 Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- EDUCATIONAL ICONS ---

export const DoodlePencil = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-16", className)} {...props}>
        {/* Squiggly Line */}
        <path d="M140 40 C 145 30, 155 30, 160 40 S 170 50, 175 40 S 185 30, 190 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

        {/* Pencil Body Rotated */}
        <g transform="translate(10, 60) rotate(-30)">
            {/* Eraser */}
            <rect x="0" y="0" width="20" height="40" rx="5" fill="#EF4444" stroke="currentColor" strokeWidth="2" />
            {/* Metal Ferrule */}
            <rect x="20" y="0" width="10" height="40" fill="#E5E7EB" stroke="currentColor" strokeWidth="2" />
            {/* Main Yellow Body */}
            <rect x="30" y="0" width="80" height="40" fill="#FBBF24" stroke="currentColor" strokeWidth="2" />
            {/* Shine/Reflection on Body */}
            <path d="M40 10 H 100" stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
            {/* Wood Collar */}
            <path d="M110 0 L 140 20 L 110 40 Z" fill="#FDE68A" stroke="currentColor" strokeWidth="2" />
            {/* Lead Tip */}
            <path d="M140 20 L 130 14 L 130 26 Z" fill="#1F2937" />
        </g>
    </svg>
);

export const DoodleBook = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 h-16", className)} {...props}>
        <path d="M40 50V10C40 10 30 5 10 10V50C30 45 40 50 40 50Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 50V10C40 10 50 5 70 10V50C50 45 40 50 40 50Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15C25 12 35 14 35 14" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M65 15C55 12 45 14 45 14" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const DoodleBulb = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-16 h-20", className)} {...props}>
        <path d="M20 50C15 45 10 40 10 30C10 19 19 10 30 10C41 10 50 19 50 30C50 40 45 45 40 50" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 62H38M22 68H38" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M25 75C25 75 28 80 30 80C32 80 35 75 35 75" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 50H40V60H20V50Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleRocket = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-40 h-24", className)} {...props}>
        {/* Dashed Flight Path */}
        <path d="M20 80 Q 40 100, 60 70 T 100 60 T 140 80" stroke="#C084FC" strokeWidth="2" strokeDasharray="6 4" fill="none" />

        {/* Planet */}
        <g transform="translate(40, 30) scale(0.6)">
            <circle cx="30" cy="30" r="20" stroke="#A855F7" strokeWidth="3" fill="none" />
            <ellipse cx="30" cy="30" rx="35" ry="8" stroke="#A855F7" strokeWidth="3" transform="rotate(-20 30 30)" fill="none" />
        </g>

        {/* Rocket Ship */}
        <g transform="translate(140, 40) rotate(-45)">
            <path d="M30 5 C 30 5, 10 30, 10 60 H 50 C 50 30, 30 5, 30 5 Z" stroke="#9333EA" strokeWidth="3" fill="#E9D5FF" />
            <path d="M10 60 L 0 75 L 15 70" stroke="#9333EA" strokeWidth="3" fill="#E9D5FF" />
            <path d="M50 60 L 60 75 L 45 70" stroke="#9333EA" strokeWidth="3" fill="#E9D5FF" />
            <circle cx="30" cy="35" r="8" stroke="#9333EA" strokeWidth="2" fill="white" />
            <path d="M25 70 Q 30 85 35 70" stroke="#9333EA" strokeWidth="2" fill="none" />
            {/* Flame */}
            <path d="M25 75 Q 30 90 35 75" fill="#FCA5A5" opacity="0.8" />
        </g>
    </svg>
);

export const DoodleCar = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-28 h-20", className)} {...props}>
        {/* Car Body - Rounder Hatchback/Van inspired by reference */}
        <path 
          d="M15 50 L 10 50 L 10 35 Q 10 20 30 15 L 50 10 Q 70 5 90 12 Q 105 18 105 35 L 105 50 L 100 50" 
          stroke={strokeColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path d="M15 50 H 100" stroke={strokeColor} strokeWidth="3" />
        
        {/* Windows */}
        <path d="M35 18 Q 60 12 85 18" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        
        {/* Wheels */}
        <circle cx="30" cy="50" r="7" stroke={strokeColor} strokeWidth="3" />
        <circle cx="85" cy="50" r="7" stroke={strokeColor} strokeWidth="3" />
        
        {/* Blue Waves Underneath */}
        <path 
           d="M 25 65 Q 40 75 55 60 T 85 65" 
           stroke="#3B82F6" 
           strokeWidth="3" 
           strokeLinecap="round"
           fill="none"
        />
        <path 
           d="M 28 72 Q 43 82 58 67 T 88 72" 
           stroke="#60A5FA" 
           strokeWidth="3" 
           strokeLinecap="round"
           fill="none"
           opacity="0.8"
        />
    </svg>
);

// --- VEDIC & CULTURAL MOTIFS ---

export const DoodlePeacockFeather = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-24", className)} {...props}>
        <path d="M25 95C25 95 45 60 45 35C45 15 35 5 25 5C15 5 5 15 5 35C5 60 25 95 25 95Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 20C20 20 15 25 15 35C15 45 20 50 25 50C30 50 35 45 35 35C35 25 30 20 25 20Z" stroke={strokeColor} strokeWidth="2" fill="currentColor" opacity="0.2" />
        <circle cx="25" cy="35" r="5" fill={strokeColor} />
        <line x1="25" y1="5" x2="25" y2="95" stroke={strokeColor} strokeWidth="1" />
    </svg>
);

export const DoodleLotus = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 h-16", className)} {...props}>
        <path d="M40 55C40 55 10 45 10 25C10 10 25 10 40 25C55 10 70 10 70 25C70 45 40 55 40 55Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 55C40 55 30 35 40 15C50 35 40 55 40 55Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 55H65" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);


// --- ABSTRACT SHAPES & DIVIDERS ---

export const DoodleBlob = ({ className, fillColor = "#FFEDD5", ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-full h-full", className)} {...props}>
        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.9,33.5C59.8,45,49.1,54.6,37.3,62.8C25.5,71,12.8,77.7,-0.4,78.4C-13.6,79.1,-27.2,73.8,-40,66.1C-52.8,58.4,-64.8,48.4,-73.4,36.2C-82,24,-87.3,9.7,-84.9,-3.3C-82.5,-16.4,-72.5,-28.1,-62.4,-38.3C-52.3,-48.5,-42.1,-57.2,-30.9,-66.2C-19.7,-75.2,-7.5,-84.5,6.1,-85.4C19.7,-86.3,39.4,-78.8,44.7,-76.4Z" transform="translate(100 100)" fill={fillColor} />
    </svg>
);

export const DoodleWave = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-full h-4", className)} preserveAspectRatio="none" {...props}>
        <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke={strokeColor} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleSparkle = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-8 h-8", className)} {...props}>
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" stroke={strokeColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleArrow = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-16 h-8", className)} {...props}>
        <path d="M5 10H45M45 10L35 3M45 10L35 17" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleReadingBoy = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-64 h-64", className)} {...props}>
        {/* Head */}
        <circle cx="100" cy="65" r="35" fill="#FCA5A5" stroke="#1F2937" strokeWidth="3" />

        {/* Hair - Darker/Filled */}
        <path d="M65 65 C 65 30, 80 20, 100 20 C 120 20, 135 30, 135 65 C 135 65, 135 55, 125 45 C 115 55, 105 55, 100 55 C 95 55, 85 55, 75 45 C 65 55, 65 65, 65 65" fill="#4B5563" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />

        {/* Eyes (Focused Down) */}
        <path d="M85 70 Q 90 75, 95 70" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        <path d="M105 70 Q 110 75, 115 70" stroke="#1F2937" strokeWidth="2.5" fill="none" />

        {/* Nose & Mouth */}
        <path d="M100 75 V 80" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        <path d="M95 88 Q 100 92, 105 88" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Body/Shirt - Dark Blue */}
        <path d="M70 95 L 60 140 H 140 L 130 95 C 130 95, 120 100, 100 100 C 80 100, 70 95, 70 95" fill="#1E40AF" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />

        {/* Sleeves */}
        <path d="M60 140 L 58 155 L 75 155 L 75 140" fill="#1E3A8A" stroke="#1F2937" strokeWidth="2" />
        <path d="M140 140 L 142 155 L 125 155 L 125 140" fill="#1E3A8A" stroke="#1F2937" strokeWidth="2" />

        {/* Hands */}
        <circle cx="66" cy="165" r="12" fill="#FCA5A5" stroke="#1F2937" strokeWidth="2" />
        <circle cx="134" cy="165" r="12" fill="#FCA5A5" stroke="#1F2937" strokeWidth="2" />

        {/* Book - Yellow/Orange */}
        <path d="M40 180 H 160 V 200 H 40 Z" fill="#F59E0B" stroke="#1F2937" strokeWidth="3" />
        <path d="M50 165 L 40 180 H 160 L 150 165 H 50 Z" fill="#FCD34D" stroke="#1F2937" strokeWidth="2" />

        {/* Pages/Text Lines */}
        <line x1="60" y1="170" x2="90" y2="170" stroke="#1F2937" strokeWidth="1.5" />
        <line x1="60" y1="175" x2="90" y2="175" stroke="#1F2937" strokeWidth="1.5" />
        <line x1="110" y1="170" x2="140" y2="170" stroke="#1F2937" strokeWidth="1.5" />
        <line x1="110" y1="175" x2="140" y2="175" stroke="#1F2937" strokeWidth="1.5" />

        {/* Pencil in Hand */}
        <path d="M134 165 L 130 145 L 135 140" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
    </svg>
);

export const DoodleGraduationCap = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 h-16", className)} {...props}>
        {/* Shadow layer for depth */}
        <path d="M10 35 L 50 15 L 90 35 L 50 55 Z" fill="black" opacity="0.05" transform="translate(2, 2)" />
        {/* Main Cap Top */}
        <path d="M10 35 L 50 15 L 90 35 L 50 55 Z" fill="#1F2937" stroke={strokeColor} strokeWidth="2.5" />
        {/* Bottom Part */}
        <path d="M30 46 V 56 Q 50 62 70 56 V 46" fill="#374151" stroke={strokeColor} strokeWidth="2.5" strokeLinejoin="round" />
        {/* Tassel */}
        <path d="M50 35 L 90 35 L 95 60" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M92 60 H 98 L 95 70 Z" fill="#FBBF24" stroke={strokeColor} strokeWidth="1" />
    </svg>
);

export const DoodleSchoolBus = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-24", className)} {...props}>
        {/* Bus Body */}
        <path d="M10 70 V 30 Q 10 15 25 10 H 115 Q 130 10 130 25 V 70 H 10" fill="#FBBF24" stroke={strokeColor} strokeWidth="3" />
        {/* Stripe */}
        <path d="M10 50 H 130" stroke="#1F2937" strokeWidth="4" opacity="0.8" />
        {/* Windows */}
        <rect x="25" y="20" width="20" height="20" rx="3" fill="#BFDBFE" stroke={strokeColor} strokeWidth="2" />
        <rect x="55" y="20" width="20" height="20" rx="3" fill="#BFDBFE" stroke={strokeColor} strokeWidth="2" />
        <rect x="85" y="20" width="20" height="20" rx="3" fill="#BFDBFE" stroke={strokeColor} strokeWidth="2" />
        {/* Lights */}
        <circle cx="120" cy="60" r="4" fill="#EF4444" stroke={strokeColor} strokeWidth="1" />
        <circle cx="20" cy="60" r="4" fill="#FDE68A" stroke={strokeColor} strokeWidth="1" />
        {/* Wheels */}
        <circle cx="40" cy="75" r="10" fill="#1F2937" stroke={strokeColor} strokeWidth="3" />
        <circle cx="40" cy="75" r="4" fill="#9CA3AF" />
        <circle cx="100" cy="75" r="10" fill="#1F2937" stroke={strokeColor} strokeWidth="3" />
        <circle cx="100" cy="75" r="4" fill="#9CA3AF" />
    </svg>
);

export const DoodleGlobe = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-28", className)} {...props}>
        {/* Stand */}
        <path d="M20 100 Q 10 110 50 110 Q 90 110 80 100" fill="#4B5563" stroke={strokeColor} strokeWidth="3" />
        <path d="M50 110 V 90" stroke={strokeColor} strokeWidth="3" />
        <path d="M15 50 A 35 35 0 0 0 85 50" stroke="#9CA3AF" strokeWidth="4" fill="none" opacity="0.3" transform="rotate(-30 50 50)" />
        {/* Sphere */}
        <circle cx="50" cy="50" r="35" fill="#BFDBFE" stroke={strokeColor} strokeWidth="3" />
        {/* Continents (Simplified) */}
        <path d="M30 35 Q 40 25 55 35 Q 65 45 45 60 Q 30 55 30 35" fill="#34D399" opacity="0.6" />
        <path d="M65 55 Q 75 65 60 75 Q 50 65 65 55" fill="#34D399" opacity="0.6" />
        {/* Axis */}
        <line x1="50" y1="10" x2="50" y2="90" stroke={strokeColor} strokeWidth="2" transform="rotate(-23 50 50)" />
    </svg>
);

export const DoodleMontessoriTower = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-40", className)} {...props}>
        {/* Montessori Pink Tower - Stack of vibrant pink cubes */}
        <rect x="40" y="10" width="20" height="20" rx="2" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        <rect x="35" y="30" width="30" height="25" rx="2" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        <rect x="30" y="55" width="40" height="30" rx="2" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        <rect x="25" y="85" width="50" height="35" rx="2" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        {/* Shading/Highlights */}
        <rect x="42" y="12" width="6" height="16" fill="white" opacity="0.3" rx="1" />
        <rect x="37" y="32" width="8" height="21" fill="white" opacity="0.3" rx="1" />
        <rect x="32" y="57" width="10" height="26" fill="white" opacity="0.3" rx="1" />
        <rect x="27" y="87" width="12" height="31" fill="white" opacity="0.3" rx="1" />
    </svg>
);

export const DoodleMontessoriAbacus = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-24", className)} {...props}>
        {/* Frame */}
        <rect x="10" y="10" width="100" height="80" rx="5" stroke="#713F12" strokeWidth="4" />
        <line x1="10" y1="30" x2="110" y2="30" stroke="#713F12" strokeWidth="2" />
        <line x1="10" y1="50" x2="110" y2="50" stroke="#713F12" strokeWidth="2" />
        <line x1="10" y1="70" x2="110" y2="70" stroke="#713F12" strokeWidth="2" />
        {/* Beads */}
        <circle cx="25" cy="30" r="5" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
        <circle cx="38" cy="30" r="5" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
        <circle cx="85" cy="50" r="5" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
        <circle cx="98" cy="50" r="5" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1" />
        <circle cx="45" cy="70" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        <circle cx="58" cy="70" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        <circle cx="71" cy="70" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
    </svg>
);

export const DoodleMontessoriShapes = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-20", className)} {...props}>
        {/* Circle Inset */}
        <rect x="5" y="15" width="40" height="40" rx="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
        <circle cx="25" cy="35" r="12" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
        {/* Triangle Inset */}
        <rect x="55" y="15" width="40" height="40" rx="4" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
        <path d="M75 22 L 65 48 H 85 Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

export const DoodleHotAirBalloon = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-32", className)} {...props}>
        {/* Balloon */}
        <path d="M50 5 C 20 5, 5 30, 5 55 C 5 80, 30 95, 42 100 L 44 110 H 56 L 58 100 C 70 95, 95 80, 95 55 C 95 30, 80 5, 50 5 Z" fill="#F472B6" stroke={strokeColor} strokeWidth="3" strokeLinejoin="round" />
        
        {/* Decorative Patterns */}
        <path d="M50 5 V 100" stroke={strokeColor} strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
        <path d="M12 40 Q 50 65 88 40" stroke={strokeColor} strokeWidth="2" fill="none" />
        <path d="M8 60 Q 50 85 92 60" stroke={strokeColor} strokeWidth="2" fill="none" />
        
        {/* Ropes */}
        <line x1="44" y1="110" x2="42" y2="120" stroke={strokeColor} strokeWidth="2" />
        <line x1="56" y1="110" x2="58" y2="120" stroke={strokeColor} strokeWidth="2" />
        
        {/* Basket */}
        <rect x="40" y="118" width="20" height="12" rx="2" fill="#D97706" stroke={strokeColor} strokeWidth="2.5" />
        <line x1="40" y1="124" x2="60" y2="124" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
        
        {/* Highlights */}
        <path d="M25 25 Q 35 15 45 25" stroke="white" strokeWidth="3" opacity="0.4" fill="none" strokeLinecap="round" />
    </svg>
);

export const DoodleNamasteBoy = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-64 h-80", className)} {...props}>
        {/* Head */}
        <circle cx="100" cy="55" r="30" fill="#FFE4C4" stroke="#1F2937" strokeWidth="3" />
        
        {/* Hair - Spiky/Neat */}
        <path d="M70 50 C 70 20, 85 15, 100 15 C 115 15, 130 20, 130 50 C 130 50, 130 40, 120 35 C 110 45, 100 45, 100 45 C 100 45, 90 45, 80 35 C 70 40, 70 50, 70 50" fill="#1F2937" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />

        {/* Eyes (Smiling) */}
        <path d="M88 60 Q 92 63, 96 60" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        <path d="M104 60 Q 108 63, 112 60" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        
        {/* Mouth (Smile) */}
        <path d="M92 72 Q 100 78, 108 72" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none" />
        
        {/* Tilak */}
        <path d="M100 45 L 100 52" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />

        {/* Body - Traditional Kurta */}
        <path d="M75 85 L 60 180 H 140 L 125 85 C 125 85, 115 90, 100 90 C 85 90, 75 85, 75 85" fill="#FDE047" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Collar/Neck Design */}
        <path d="M100 90 V 130" stroke="#1F2937" strokeWidth="2" />
        <circle cx="100" cy="100" r="2" fill="#1F2937" />
        <circle cx="100" cy="115" r="2" fill="#1F2937" />

        {/* Sleeves */}
        <path d="M75 90 L 50 130 L 70 140 L 85 105" fill="#FDE047" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />
        <path d="M125 90 L 150 130 L 130 140 L 115 105" fill="#FDE047" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />

        {/* Hands - Namaste Pose */}
        <g transform="translate(100, 125)">
             {/* Left Hand */}
             <path d="M-5 25 C -15 20, -15 0, -5 -15 C 0 -20, 5 -15, 5 -15" fill="#FFE4C4" stroke="#1F2937" strokeWidth="2.5" />
             {/* Right Hand */}
             <path d="M5 25 C 15 20, 15 0, 5 -15" fill="#FFE4C4" stroke="#1F2937" strokeWidth="2.5" />
             {/* Palms joined line */}
             <path d="M0 -15 V 25" stroke="#1F2937" strokeWidth="2" opacity="0.6" />
        </g>
        
        {/* Legs/Pajama */}
        <path d="M70 180 L 70 230 H 95 L 95 180" fill="white" stroke="#1F2937" strokeWidth="3" />
        <path d="M105 180 L 105 230 H 130 L 130 180" fill="white" stroke="#1F2937" strokeWidth="3" />

        {/* Shoes */}
        <path d="M70 230 H 98 V 235 Q 98 240, 90 240 H 70 V 230" fill="#4B5563" stroke="#1F2937" strokeWidth="2.5" />
        <path d="M102 230 H 130 V 240 H 110 Q 102 240, 102 235 V 230" fill="#4B5563" stroke="#1F2937" strokeWidth="2.5" />

    </svg>
);

export const DoodleMandala = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-full h-full", className)} {...props}>
        {/* Outer Ring */}
        <circle cx="100" cy="100" r="90" stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="100" cy="100" r="80" stroke={strokeColor} strokeWidth="0.5" />
        
        {/* Petals */}
        <path d="M100 20 Q 120 60 100 100 Q 80 60 100 20" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <path d="M100 180 Q 120 140 100 100 Q 80 140 100 180" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <path d="M20 100 Q 60 80 100 100 Q 60 120 20 100" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <path d="M180 100 Q 140 80 100 100 Q 140 120 180 100" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        
        {/* Diagonal Petals */}
        <path d="M43 43 Q 80 80 100 100 Q 60 100 43 43" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <path d="M157 157 Q 120 120 100 100 Q 140 100 157 157" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <path d="M43 157 Q 80 120 100 100 Q 60 100 43 157" stroke={strokeColor} strokeWidth="1" opacity="0.6" />
        <path d="M157 43 Q 120 80 100 100 Q 140 100 157 43" stroke={strokeColor} strokeWidth="1" opacity="0.6" />

        {/* Center Details */}
        <circle cx="100" cy="100" r="15" stroke={strokeColor} strokeWidth="2" />
        <circle cx="100" cy="100" r="5" fill={strokeColor} />
    </svg>
);

import React from "react";
import { cn } from "@/lib/utils";

interface MontessoriVectorProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// 1. pink Tower - Isometric View
export const PinkTowerVector = ({ className, ...props }: MontessoriVectorProps) => (
  <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-40", className)} {...props}>
    {/* Base Cube (Largest) */}
    <g transform="translate(50, 140)">
      <path d="M0 25 L 50 0 L 100 25 L 50 50 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" /> {/* Top */}
      <path d="M0 25 L 50 50 V 100 L 0 75 Z" fill="#EC4899" stroke="#DB2777" strokeWidth="1" />   {/* Left */}
      <path d="M100 25 L 50 50 V 100 L 100 75 Z" fill="#BE185D" stroke="#DB2777" strokeWidth="1" /> {/* Right */}
    </g>
    
    {/* Cube 2 */}
    <g transform="translate(60, 100)">
      <path d="M0 20 L 40 0 L 80 20 L 40 40 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
      <path d="M0 20 L 40 40 V 80 L 0 60 Z" fill="#EC4899" stroke="#DB2777" strokeWidth="1" />
      <path d="M80 20 L 40 40 V 80 L 80 60 Z" fill="#BE185D" stroke="#DB2777" strokeWidth="1" />
    </g>

    {/* Cube 3 */}
    <g transform="translate(70, 68)">
      <path d="M0 15 L 30 0 L 60 15 L 30 30 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
      <path d="M0 15 L 30 30 V 60 L 0 45 Z" fill="#EC4899" stroke="#DB2777" strokeWidth="1" />
      <path d="M60 15 L 30 30 V 60 L 60 45 Z" fill="#BE185D" stroke="#DB2777" strokeWidth="1" />
    </g>

    {/* Cube 4 */}
    <g transform="translate(80, 44)">
      <path d="M0 10 L 20 0 L 40 10 L 20 20 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
      <path d="M0 10 L 20 20 V 40 L 0 30 Z" fill="#EC4899" stroke="#DB2777" strokeWidth="1" />
      <path d="M40 10 L 20 20 V 40 L 40 30 Z" fill="#BE185D" stroke="#DB2777" strokeWidth="1" />
    </g>
    
    {/* Cube 5 (Smallest shown for brevity/aesthetic) */}
    <g transform="translate(87.5, 29)">
      <path d="M0 6 L 12.5 0 L 25 6 L 12.5 12 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
      <path d="M0 6 L 12.5 12 V 24 L 0 18 Z" fill="#EC4899" stroke="#DB2777" strokeWidth="1" />
      <path d="M25 6 L 12.5 12 V 24 L 25 18 Z" fill="#BE185D" stroke="#DB2777" strokeWidth="1" />
    </g>
  </svg>
);

// 2. Brown Stairs - Isometric
export const BrownStairsVector = ({ className, ...props }: MontessoriVectorProps) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-40 h-32", className)} {...props}>
     {/* Prism 1 (Largest) - Back Left */}
     <g transform="translate(20, 80)">
       <path d="M0 20 L 40 0 L 80 20 L 40 40 Z" fill="#B45309" stroke="#78350F" strokeWidth="1" />{/* Top */}
       <path d="M0 20 L 40 40 V 80 L 0 60 Z" fill="#92400E" stroke="#78350F" strokeWidth="1" />{/* Left */}
       {/* Right Face Hidden/Connected */}
     </g>

     {/* Prism 2 - Middle */}
     <g transform="translate(50, 95)">
       <path d="M0 15 L 30 0 L 60 15 L 30 30 Z" fill="#B45309" stroke="#78350F" strokeWidth="1" />
       <path d="M0 15 L 30 30 V 60 L 0 45 Z" fill="#92400E" stroke="#78350F" strokeWidth="1" />
       <path d="M60 15 L 30 30 V 60 L 60 45 Z" fill="#78350F" stroke="#78350F" strokeWidth="1" />
     </g>

     {/* Prism 3 - Front Right */}
     <g transform="translate(80, 110)">
       <path d="M0 10 L 20 0 L 40 10 L 20 20 Z" fill="#B45309" stroke="#78350F" strokeWidth="1" />
       <path d="M0 10 L 20 20 V 40 L 0 30 Z" fill="#92400E" stroke="#78350F" strokeWidth="1" />
       <path d="M40 10 L 20 20 V 40 L 40 30 Z" fill="#78350F" stroke="#78350F" strokeWidth="1" />
     </g>
  </svg>
);

// 3. Cylinder Blocks - Wooden Block with Knobs
export const CylinderBlockVector = ({ className, ...props }: MontessoriVectorProps) => (
  <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-48 h-24", className)} {...props}>
    {/* Wooden Block Body */}
    <path d="M10 30 L 190 30 L 190 80 L 10 80 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="2" /> {/* Top Face - Simplified persepctive */}
    <path d="M10 80 L 190 80 L 170 95 L 30 95 Z" fill="#D97706" stroke="#B45309" strokeWidth="2" /> {/* Front/Bottom Side */}
    <rect x="10" y="30" width="180" height="50" rx="2" fill="#FCD34D" stroke="#D97706" strokeWidth="2" />
    
    {/* Knobs/Cylinders */}
    <g transform="translate(30, 40)">
      <circle cx="15" cy="10" r="12" fill="#FCD34D" stroke="#D97706" strokeWidth="1" /> {/* Hole 1 */}
      <circle cx="15" cy="10" r="8" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />  {/* Cylinder Top */}
      <circle cx="15" cy="10" r="2" fill="#78350F" /> {/* Knob */}
    </g>
    
    <g transform="translate(70, 40)">
      <circle cx="15" cy="10" r="10" fill="#FCD34D" stroke="#D97706" strokeWidth="1" />
      <circle cx="15" cy="10" r="7" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
      <circle cx="15" cy="10" r="2" fill="#78350F" />
    </g>

    <g transform="translate(110, 40)">
      <circle cx="15" cy="10" r="8" fill="#FCD34D" stroke="#D97706" strokeWidth="1" />
      <circle cx="15" cy="10" r="5" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
      <circle cx="15" cy="10" r="2" fill="#78350F" />
    </g>
    
     <g transform="translate(150, 40)">
      <circle cx="15" cy="10" r="6" fill="#FCD34D" stroke="#D97706" strokeWidth="1" />
      <circle cx="15" cy="10" r="4" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
      <circle cx="15" cy="10" r="1.5" fill="#78350F" />
    </g>
  </svg>
);


// 4. Red Rods
export const RedRodsVector = ({ className, ...props }: MontessoriVectorProps) => (
  <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-40 h-32", className)} {...props}>
     {/* Rod 1 */}
     <rect x="10" y="10" width="180" height="15" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
     <path d="M10 17 H 190" stroke="#FECACA" strokeWidth="2" opacity="0.4" />

     {/* Rod 2 */}
     <rect x="30" y="35" width="140" height="15" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
     <path d="M30 42 H 170" stroke="#FECACA" strokeWidth="2" opacity="0.4" />

     {/* Rod 3 */}
     <rect x="50" y="60" width="100" height="15" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
     <path d="M50 67 H 150" stroke="#FECACA" strokeWidth="2" opacity="0.4" />

     {/* Rod 4 */}
     <rect x="70" y="85" width="60" height="15" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
     <path d="M70 92 H 130" stroke="#FECACA" strokeWidth="2" opacity="0.4" />
  </svg>
);

// 5. Globe (Sandpaper/Colored)
export const MontessoriGlobeVector = ({ className, ...props }: MontessoriVectorProps) => (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-28", className)} {...props}>
        {/* Wooden Stand Base */}
        <ellipse cx="50" cy="105" rx="30" ry="10" fill="#B45309" stroke="#78350F" strokeWidth="2" />
        <rect x="45" y="85" width="10" height="20" fill="#B45309" stroke="#78350F" strokeWidth="2" />
        
        {/* Globe Axis Holder */}
        <path d="M50 10 V 90" stroke="#92400E" strokeWidth="3" transform="rotate(-23 50 50)" />
        <path d="M15 50 A 35 35 0 0 0 85 50" stroke="#B45309" strokeWidth="4" fill="none" transform="rotate(-30 50 50)" />

        {/* Sphere */}
        <circle cx="50" cy="50" r="35" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
        
        {/* Continents (Sandpaper Texture implication with noise/rough edges) */}
        <path d="M30 35 Q 40 25 55 35 Q 65 45 45 60 Q 30 55 30 35" fill="#D97706" stroke="#B45309" strokeWidth="1" opacity="0.9" /> {/* Africa-ish */}
        <path d="M65 55 Q 75 65 60 75 Q 50 65 65 55" fill="#D97706" stroke="#B45309" strokeWidth="1" opacity="0.9" /> {/* Australia-ish */}
        <path d="M25 25 Q 30 15 20 20" fill="#D97706" stroke="#B45309" strokeWidth="1" opacity="0.9" /> {/* Europe-ish */}
        
        {/* Shine */}
        <circle cx="35" cy="35" r="5" fill="white" opacity="0.2" />
    </svg>
);

// 6. Cultural Education Vector (Book + Diya + Blocks)
export const CulturalBookVector = ({ className, ...props }: MontessoriVectorProps) => (
  <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-48 h-40", className)} {...props}>
    {/* Open Book */}
    <g transform="translate(20, 80)">
       {/* Left Page */}
       <path d="M10 20 Q 40 30 80 20 V 80 Q 40 90 10 80 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
       <path d="M15 25 Q 40 35 75 25" stroke="#D97706" strokeWidth="1" opacity="0.4" fill="none" />
       <path d="M15 35 Q 40 45 75 35" stroke="#D97706" strokeWidth="1" opacity="0.4" fill="none" />
       
       {/* Right Page */}
       <path d="M80 20 Q 120 30 150 20 V 80 Q 120 90 80 80 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
       <path d="M85 25 Q 120 35 145 25" stroke="#D97706" strokeWidth="1" opacity="0.4" fill="none" />
       <path d="M85 35 Q 120 45 145 35" stroke="#D97706" strokeWidth="1" opacity="0.4" fill="none" />
       
       {/* Spine/Cover */}
       <path d="M10 80 Q 40 90 80 80 Q 120 90 150 80 L 150 85 Q 120 98 80 88 Q 40 98 10 85 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
    </g>

    {/* Diya and Elements REMOVED as per user request to keep only the book */}
  </svg>
);

// 7. Montessori Bead Stair (1-9 Colors) - Colorful & Child Friendly
export const MontessoriBeadStairVector = ({ className, ...props }: MontessoriVectorProps) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-40 h-40", className)} {...props}>
     {/* Triangle arrangement of bead bars */}
     
     {/* 1 - Red */}
     <circle cx="100" cy="20" r="8" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
     
     {/* 2 - Green */}
     <g transform="translate(92, 40)">
        <circle cx="0" cy="0" r="8" fill="#10B981" stroke="#047857" strokeWidth="1" />
        <circle cx="16" cy="0" r="8" fill="#10B981" stroke="#047857" strokeWidth="1" />
        <line x1="0" y1="0" x2="16" y2="0" stroke="#047857" strokeWidth="1" />
     </g>

     {/* 3 - Pink */}
     <g transform="translate(84, 60)">
        <circle cx="0" cy="0" r="8" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        <circle cx="16" cy="0" r="8" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        <circle cx="32" cy="0" r="8" fill="#F472B6" stroke="#DB2777" strokeWidth="1" />
        <line x1="0" y1="0" x2="32" y2="0" stroke="#DB2777" strokeWidth="1" />
     </g>

     {/* 4 - Yellow */}
     <g transform="translate(76, 80)">
       {[0, 16, 32, 48].map(x => (
         <circle key={x} cx={x} cy="0" r="8" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
       ))}
       <line x1="0" y1="0" x2="48" y2="0" stroke="#D97706" strokeWidth="1" />
     </g>

     {/* 5 - Light Blue */}
     <g transform="translate(68, 100)">
       {[0, 16, 32, 48, 64].map(x => (
         <circle key={x} cx={x} cy="0" r="8" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
       ))}
       <line x1="0" y1="0" x2="64" y2="0" stroke="#2563EB" strokeWidth="1" />
     </g>

     {/* Star/Sparkles around REMOVED as per user request */}
  </svg>
);

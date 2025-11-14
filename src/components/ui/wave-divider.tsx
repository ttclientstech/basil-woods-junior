import React from "react";

interface WaveDividerProps {
  /** Position of the wave: 'top' or 'bottom' */
  position?: "top" | "bottom";
  /** Fill color for the wave (default: section background color) */
  fill?: string;
  /** Wave variant: different path shapes for variety */
  variant?: 1 | 2 | 3 | 4;
  /** Optional className for additional styling */
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  position = "bottom",
  fill = "#f6eee7",
  variant = 1,
  className = "",
}) => {
  // Different wave path variations for visual variety
  const wavePaths = {
    1: "M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    2: "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    3: "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    4: "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  };

  const selectedPath = wavePaths[variant];
  const rotateClass = position === "top" ? "rotate-180" : "";

  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden leading-none ${rotateClass} ${className}`}
    >
      <svg
        className="relative block w-full h-[60px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={fill} d={selectedPath} />
      </svg>
    </div>
  );
};

export default WaveDivider;

// Animated wave variant (optional, for special sections)
export const AnimatedWaveDivider: React.FC<WaveDividerProps> = ({
  position = "bottom",
  fill = "#f6eee7",
  variant = 1,
  className = "",
}) => {
  const wavePaths = {
    1: "M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    2: "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    3: "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    4: "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
  };

  const selectedPath = wavePaths[variant];
  const rotateClass = position === "top" ? "rotate-180" : "";

  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden leading-none ${rotateClass} ${className}`}
    >
      <svg
        className="relative block w-full h-[60px] animate-wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={fill} d={selectedPath}>
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values={`${selectedPath};${wavePaths[((variant % 4) + 1) as 1 | 2 | 3 | 4]};${selectedPath}`}
          />
        </path>
      </svg>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Play, Sparkles, Star } from "lucide-react";
import boyVectorImg from "@/assets/Images/boy.png";
import girlVectorImg from "@/assets/Images/girl.png";

const WaveTop = ({ fill = "#e9eefc" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#e3e9fb" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  showWaves?: boolean;
};

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Begin Your Child's Adventure?",
  description = "Choose the perfect program for a nurturing, joyful learning journey.",
  primaryLabel = "Download Brochure",
  secondaryLabel = "Watch Story",
  onPrimaryClick,
  showWaves = true,
}) => {
  return (
    <section className="py-12 md:py-24 bg-[hsl(var(--section-4))] relative overflow-hidden">
      {showWaves && <WaveTop fill="#e3e9fb" />}

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Decorative Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-8 -right-8 z-20 text-yellow-400 hidden md:block"
          >
            <Star className="w-16 h-16 fill-yellow-400 stroke-black stroke-2" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 z-20 text-pink-400 hidden md:block"
          >
            <Sparkles className="w-12 h-12 fill-pink-400 stroke-black stroke-2" />
          </motion.div>

          {/* Main Ticket Container */}
          <div
            className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center border-4 border-black relative overflow-hidden transform rotate-1"
            style={{ boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
          >
            {/* Dashed Border Inner */}
            <div className="absolute inset-4 border-2 border-dashed border-neutral-300 rounded-[2rem] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block bg-yellow-300 px-4 py-1 rounded-full border-2 border-black font-bold text-sm mb-6 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                ADMISSIONS OPEN 2025-26
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight font-handwriting">
                {title}
              </h2>

              <p className="text-lg md:text-xl text-neutral-700 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="/brochure.pdf" download className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    className="w-full sm:w-auto bg-[hsl(var(--premium-orange))] text-white font-black text-lg px-8 py-4 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
                  >
                    <Download className="w-6 h-6" strokeWidth={3} />
                    {primaryLabel}
                  </motion.button>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=w4WyoDOi460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    className="w-full sm:w-auto bg-white text-neutral-900 font-black text-lg px-8 py-4 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
                  >
                    <Play className="w-6 h-6 fill-black" />
                    {secondaryLabel}
                  </motion.button>
                </a>
              </div>

              <p className="mt-8 text-sm font-bold text-neutral-500 uppercase tracking-wide">
                No signup needed to preview
              </p>
            </div>
          </div>

          {/* Girl Vector - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-10 -left-16 md:-bottom-14 md:-left-[340px] lg:-left-[420px] z-20 pointer-events-none block xl:block"
          >
            <img
              src={girlVectorImg}
              alt="School Girl"
              className="w-[120px] md:w-[400px] lg:w-[480px] h-auto drop-shadow-lg mix-blend-multiply transform scale-x-[-1]"
            />
          </motion.div>

          {/* Boy Vector - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-10 -right-16 md:-bottom-14 md:-right-[340px] lg:-right-[420px] z-20 pointer-events-none block xl:block"
          >
            <img
              src={boyVectorImg}
              alt="School Boy"
              className="w-[120px] md:w-[400px] lg:w-[480px] h-auto drop-shadow-lg mix-blend-multiply"
            />
          </motion.div>
        </motion.div>
      </div >

      {showWaves && <WaveBottom fill="#fffdf5" />}
    </section >
  );
};

export default CTA;

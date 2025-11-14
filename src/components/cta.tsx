import React from "react";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, Play } from "lucide-react";

/* Local waves so the component is self-contained */
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
  secondaryLabel = "Watch Program Video",
  onPrimaryClick,
  showWaves = true,
}) => {
  return (
    <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
      {showWaves && <WaveTop fill="#e3e9fb" />}

      <div className="container mx-auto px-4">
        <div
          className="
            relative max-w-4xl mx-auto rounded-3xl overflow-hidden
            p-8 md:p-10 text-center shadow-sm
            border border-[hsl(var(--neutral-100))] bg-white
          "
        >
          {/* soft brand tints */}
          <div
            className="pointer-events-none absolute -top-10 -right-8 w-32 h-32 rounded-full"
            style={{ backgroundColor: "hsl(var(--light-teal))" }}
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-8 w-28 h-28 rounded-full"
            style={{ backgroundColor: "hsl(var(--light-pink))" }}
          />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-neutral-900">
              {title}
            </h2>
            <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/brochure.pdf"
                download
              >
                <Button
                  className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                  style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {primaryLabel}
                </Button>
              </a>


              {/* Secondary */}
              <a
                href="https://www.youtube.com/watch?v=w4WyoDOi460"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                  style={{ borderColor: "hsl(var(--premium-orange))", color: "hsl(var(--premium-orange))" }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Story
                </Button>
              </a>

            </div>

            <p className="mt-4 text-xs text-neutral-600">
              No signup needed to preview the brochure.
            </p>
          </div>
        </div>
      </div>

      {showWaves && <WaveBottom fill="#fffdf5" />}
    </section>
  );
};

export default CTA;

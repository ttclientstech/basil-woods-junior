import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* Local waves to keep it drop-in and on-theme */
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

const WaveBottom = ({ fill = "#f6eee7" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WorkingOnIt = () => {
  return (
    <main className="relative min-h-[calc(100vh-var(--header-h))] bg-section-2 flex items-center overflow-hidden">
      <WaveTop fill="#e9eefc" />

      {/* subtle brand shapes */}
      <div className="absolute top-20 right-8 w-10 h-10 rounded-2xl opacity-20" style={{ backgroundColor: "hsl(var(--light-teal))" }} />
      <div className="absolute bottom-24 left-10 w-8 h-8 rounded-full opacity-20" style={{ backgroundColor: "hsl(var(--light-pink))" }} />
      <div className="absolute top-1/3 left-1/5 w-6 h-6 rounded-xl opacity-15" style={{ backgroundColor: "hsl(var(--light-orange))" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="px-4 py-2 rounded-full font-medium mb-4 text-white"
                 style={{ background: "linear-gradient(135deg, hsl(var(--premium-orange)), hsl(var(--premium-pink)))" }}>
            🚧 We’re working on it
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 leading-tight mb-3">
            This page is getting a little love
          </h1>

          <p className="text-neutral-700 text-base md:text-lg leading-relaxed mb-6">
            We’re polishing things up to make your experience better. Please check back soon.
          </p>

          <div className="mx-auto max-w-xl bg-white rounded-2xl p-5 shadow-sm border border-[hsl(var(--neutral-100))] text-left mb-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{ backgroundColor: "hsl(var(--neutral-50))", color: "hsl(var(--premium-orange))" }}>
                ⏳
              </div>
              <div>
                <h2 className="font-semibold text-neutral-800 mb-1">What’s happening?</h2>
                <p className="text-neutral-700 text-sm">
                  Content and design updates are in progress to match our latest theme and standards.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
              style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
            <a href="/" className="inline-block">
              <Button
                variant="outline"
                className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                style={{ borderColor: "hsl(var(--premium-orange))", color: "hsl(var(--premium-orange))" }}
              >
                Return Home
              </Button>
            </a>
          </div>

          <p className="mt-6 text-xs text-neutral-600">
            Need something urgently? Visit our Contact page or use the WhatsApp bubble below.
          </p>
        </div>
      </div>

      <WaveBottom fill="#f6eee7" />
    </main>
  );
};

export default WorkingOnIt;

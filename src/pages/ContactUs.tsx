import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Navigation,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";

/* Waves with separator tones */
const WaveTop = ({ fill = "#f2ede6" }) => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    <svg
      className="relative block w-full h-[60px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const WaveBottom = ({ fill = "#efe8df" }) => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative block w-full h-[60px]"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

/* Theme tone mapper (uses your CSS variables) */
const toneFor = (key: string) => {
  switch (key) {
    case "orange":
      return {
        bg: "hsl(var(--light-orange))",
        fg: "hsl(var(--premium-orange))",
      };
    case "green":
      return { bg: "hsl(var(--light-teal))", fg: "hsl(var(--premium-teal))" };
    case "pink":
      return { bg: "hsl(var(--light-pink))", fg: "hsl(var(--premium-pink))" };
    case "purple":
      return {
        bg: "hsl(var(--neutral-50))",
        fg: "hsl(var(--premium-purple))",
      };
    case "blue":
      return {
        bg: "hsl(var(--neutral-50))",
        fg: "hsl(var(--premium-purple))",
      };
    default:
      return {
        bg: "hsl(var(--light-orange))",
        fg: "hsl(var(--premium-orange))",
      };
  }
};

/* -------- Google Forms -> Google Sheets -------- */
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeX0qEU5GusE3dA1hLL2D6ESzldibOLqzkQxcc1E4GEl7sUtg/formResponse";

const FIELDS = {
  parentName: "entry.30303845",
  phone: "entry.1553866235",
  email: "entry.10415235",
  childName: "entry.976590721",
  childAge: "entry.1030209812",
  program: "entry.1175709318",
  message: "entry.349457783",
};

const ContactUsPage: React.FC = () => {
  useSEO({
    title: "Contact Us - Schedule a Visit to Our Preschool",
    description: "Get in touch with Basil Woods Juniors Chennai. Call +91-8056179108, visit us in Chennai, Tamil Nadu, or schedule a campus tour. We're here to answer your questions about admissions, programs, and facilities.",
    keywords: "contact preschool Chennai, preschool admission enquiry, school visit Chennai, Basil Woods contact, preschool phone number Chennai, schedule school tour",
    canonical: "https://www.basilwoodschennai.in/contact"
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    null | "success" | "error"
  >(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    // Capture the form element BEFORE any await
    const formEl = e.currentTarget as HTMLFormElement;

    // Build FormData from the captured element
    const fd = new FormData(formEl);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });

      setSubmitStatus("success");

      // Safely reset using captured ref
      if (formEl && typeof formEl.reset === "function") {
        formEl.reset();
      }

      window.alert("Submitted Successfully");
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      window.alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const contactInfo = [
    {
      title: "Visit Our Campus",
      description: "Come see our beautiful learning environment",
      icon: MapPin,
      details:
        "No. 10, Vinod Illam, 2nd St, RBI Colony, Thiruvanmiyur, Chennai, Tamil Nadu 600041",
      tone: "blue",
    },
    {
      title: "Call Us",
      description: "Speak with our admissions team",
      icon: Phone,
      details: "+91 8056179108",
      tone: "green",
    },
    {
      title: "Email Us",
      description: "Send us your questions anytime",
      icon: Mail,
      details: "Info.chennai@basilwoods.in",
      tone: "purple",
    },
    {
      title: "School Hours",
      description: "Monday to Friday",
      icon: Clock,
      details: "8:30 AM - 3:30 PM",
      tone: "orange",
    },
  ];

  const faqs = [
    { question: "What curriculum do you follow?", answer: "We follow Cambridge curriculum." },
    {
      question: "How do you ensure children’s safety?",
      answer:
        "Safety is our priority with CCTV-monitored premises, secure entry/exit, child-safe infrastructure, and trained staff in first aid.",
    },
    {
      question: "Do you conduct outdoor/play activities?",
      answer:
        "Yes, children enjoy daily outdoor play, physical activities, and seasonal events that promote motor skills and teamwork.",
    },
    {
      question: "How do you keep parents informed?",
      answer:
        "We share regular updates through parent-teacher meetings, and digital communication platforms.",
    },
    {
      question: "Do you celebrate festivals and special days?",
      answer:
        "Yes, we celebrate cultural, traditional, and value-based events to help children appreciate diversity and joy in learning.",
    },
    {
      question: "Are trial classes available?",
      answer:
        "Yes, parents may request a trial class to help their child experience our environment before enrollment.",
    },
    {
      question: "What age groups do you accept?",
      answer: "Age group 2 years to 6 years",
    },
    {
      question: "Do you provide meals and snacks?",
      answer: "We provide breakfast & mid morning snacks, Outside food is not allowed. Parents can opt for lunch or evening snacks with extended daycare",
    },
    {
      question: "Do you offer extended care hours?",
      answer: "Early drop off starts from 8.30 am to 7.30 pm",
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Tour",
      description: "Visit our campus and meet our team",
      icon: Calendar,
      tone: "orange",
    },
    {
      title: "Download Brochure",
      description: "Get detailed information about our programs",
      icon: Navigation,
      tone: "green",
    },
    {
      title: "Start Application",
      description: "Begin the admission process online",
      icon: Send,
      tone: "purple",
    },
    {
      title: "Chat with Us",
      description: "Get instant answers to your questions",
      icon: MessageCircle,
      tone: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-section-1">
      <Header />

      {/* HERO */}
      <section className="py-16 md:py-20 bg-section-1 relative overflow-hidden">
        {/* subtle shapes */}
        <div className="absolute top-16 right-8 w-10 h-10 bg-gradient-primary rounded-full opacity-25" />
        <div className="absolute bottom-16 left-12 w-8 h-8 bg-gradient-secondary rounded-full opacity-25" />
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-accent rounded-xl opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4 inline-block">
              📞 Contact Us
            </Badge>
            <h1 className="text-[30px] md:text-[40px] font-bold text-neutral-700 leading-[1.15] mb-3">
              Let&apos;s Start Your Child&apos;s
              <span className="block bg-gradient">Learning Journey Together</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              We’re here to answer questions and help discover how Basil Woods Juniors can nurture growth.
            </p>
          </div>
        </div>

        <WaveBottom fill="#f6eee7" />
      </section>

      {/* CONTACT INFO */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#f6eee7" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-blue-100 text-[hsl(var(--premium-purple))] px-4 py-2 rounded-full font-medium mb-3">
              Get in Touch
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
              Contact Information
            </h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Multiple ways to reach us and get the information needed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const tone = toneFor(info.tone);
              const Icon = info.icon;
              return (
                <Card
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-[2px] border border-[hsl(var(--neutral-100))]"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: tone.bg, color: tone.fg }}
                  >
                    <Icon
                      className="w-8 h-8"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-bold text-neutral-800 mb-1.5">
                    {info.title}
                  </h3>
                  <p className="text-neutral-700 text-sm mb-2">
                    {info.description}
                  </p>
                  <p className="font-semibold text-neutral-800 text-sm">
                    {info.details}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
        <WaveBottom fill="#e9f2ef" />
      </section>

      {/* FORM + MAP */}
      <section className="py-14 md:py-16 bg-section-3 relative overflow-hidden">
        <WaveTop fill="#e9f2ef" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <div>
              <Badge className="bg-green-100 text-[hsl(var(--premium-teal))] px-4 py-2 rounded-full font-medium mb-3">
                Send Message
              </Badge>
              <h2 className="text-2xl md:3xl font-bold text-neutral-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-neutral-700 mb-6">
                Fill out the form and we’ll reply within 24 hours.
              </p>

              <Card
                className="
                  relative bg-white rounded-2xl p-6 md:p-7 shadow-sm
                  border border-[hsl(var(--neutral-100))]
                  hover:shadow-md transition-shadow
                "
                style={{
                  boxShadow:
                    "inset 0 0 0 1px hsl(var(--neutral-100)), 0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                {/* Decorative thin orange top border ribbon */}
                <span
                  className="absolute left-0 top-0 h-1 w-full"
                  style={{ backgroundColor: "hsl(var(--premium-orange))" }}
                />

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Parent&apos;s Name *
                      </label>
                      <Input
                        name={FIELDS.parentName}
                        required
                        className="
                          rounded-xl
                          border-[hsl(var(--neutral-100))]
                          focus:border-[hsl(var(--premium-orange))]
                          focus:ring-[hsl(var(--premium-orange))]
                          focus:ring-2
                        "
                        style={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name={FIELDS.phone}
                        required
                        className="
                          rounded-xl
                          border-[hsl(var(--neutral-100))]
                          focus:border-[hsl(var(--premium-orange))]
                          focus:ring-[hsl(var(--premium-orange))]
                          focus:ring-2
                        "
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name={FIELDS.email}
                      required
                      className="
                        rounded-xl
                        border-[hsl(var(--neutral-100))]
                        focus:border-[hsl(var(--premium-orange))]
                        focus:ring-[hsl(var(--premium-orange))]
                        focus:ring-2
                      "
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Child&apos;s Name
                      </label>
                      <Input
                        name={FIELDS.childName}
                        className="
                          rounded-xl
                          border-[hsl(var(--neutral-100))]
                          focus:border-[hsl(var(--premium-orange))]
                          focus:ring-[hsl(var(--premium-orange))]
                          focus:ring-2
                        "
                        placeholder="Child's name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Child&apos;s Age
                      </label>
                      <Input
                        name={FIELDS.childAge}
                        className="
                          rounded-xl
                          border-[hsl(var(--neutral-100))]
                          focus:border-[hsl(var(--premium-orange))]
                          focus:ring-[hsl(var(--premium-orange))]
                          focus:ring-2
                        "
                        placeholder="Age in months/years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Program Interest
                    </label>
                    <select
                      name={FIELDS.program}
                      className="
                        w-full rounded-xl p-3
                        border-[hsl(var(--neutral-100))]
                        focus:border-[hsl(var(--premium-orange))]
                        focus:ring-[hsl(var(--premium-orange))]
                        focus:ring-2
                        bg-white
                      "
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option>Toddlers (2 - 3 years)</option>
                      <option>Mont 1 (3 - 4 years)</option>
                      <option>Mont 2 (4 - 5 years)</option>
                      <option>Mont 3 (5 - 6 years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name={FIELDS.message}
                      className="
                        rounded-xl min-h-[120px]
                        border-[hsl(var(--neutral-100))]
                        focus:border-[hsl(var(--premium-orange))]
                        focus:ring-[hsl(var(--premium-orange))]
                        focus:ring-2
                      "
                      placeholder="Tell us your questions..."
                    />
                  </div>

                  {/* Submit button with orange outline hover */}
                  <Button
                    className="
                      w-full rounded-xl py-3.5 font-semibold
                      shadow-sm hover:shadow-md transition-all disabled:opacity-70
                      border-2
                    "
                    style={{
                      backgroundColor: "hsl(var(--premium-orange))",
                      color: "white",
                      borderColor: "hsl(var(--premium-orange))",
                    }}
                    type="submit"
                    disabled={submitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>

                  {/* Thin orange outline container accent at bottom */}
                  <div
                    className="rounded-xl h-2 mt-2"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, hsl(var(--premium-orange)) 0 8px, transparent 8px 16px)",
                      opacity: 0.35,
                    }}
                  />

                  {/* Optional inline status */}
                  {submitStatus === "success" && (
                    <p
                      className="text-center text-sm"
                      style={{ color: "hsl(var(--premium-teal))" }}
                    >
                      Submitted Successfully
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-center text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </Card>
            </div>

            {/* MAP + QUICK ACTIONS */}
            <div>
              <Badge className="bg-purple-100 text-[hsl(var(--premium-purple))] px-4 py-2 rounded-full font-medium mb-3">
                Location
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                Find Us
              </h2>

              {/* Google Map preview (embedded) */}
              <Card className="rounded-2xl overflow-hidden shadow-sm border border-[hsl(var(--neutral-100))] mb-8">
                <div className="w-full h-64">
                  <iframe
                    title="Basil Woods Juniors - Thiruvanmiyur, Chennai"
                    src="https://www.google.com/maps?q=Basil%20Woods%20Juniors%20Thiruvanmiyur%20Chennai&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="p-4 border-t border-[hsl(var(--neutral-100))] flex items-center justify-between gap-3">
                  <div className="text-neutral-700 text-sm">
                    No. 10, Vinod Illam, 2nd St, RBI Colony, Thiruvanmiyur, Chennai, Tamil Nadu 600041
                  </div>
                  <a
                    href="https://maps.app.goo.gl/nnFyyj4U24w3mUAD6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="rounded-xl px-5 py-2 font-semibold shadow-sm hover:shadow-md"
                      style={{
                        backgroundColor: "hsl(var(--premium-purple))",
                        color: "white",
                      }}
                    >
                      Get Directions
                    </Button>
                  </a>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((a, i) => {
                  const tone = toneFor(a.tone);
                  const Icon = a.icon;
                  return (
                    <Card
                      key={i}
                      className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-[2px] border border-[hsl(var(--neutral-100))] cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-white"
                        style={{ backgroundColor: tone.fg }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-neutral-800 mb-1 text-sm">
                        {a.title}
                      </h3>
                      <p className="text-neutral-700 text-xs leading-relaxed">
                        {a.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <WaveBottom fill="#eee7fa" />
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-16 bg-section-4 relative overflow-hidden">
        <WaveTop fill="#eee7fa" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-yellow-100 text-[hsl(var(--premium-yellow))] px-4 py-2 rounded-full font-medium mb-3">
              FAQ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-700 text-base md:text-lg max-w-2xl mx-auto">
              Quick answers about programs and admissions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((f, i) => (
              <Card
                key={i}
                className="rounded-2xl p-6 shadow-sm border border-[hsl(var(--neutral-100))] bg-white hover:shadow-md transition-all hover:-translate-y-[2px]"
              >
                <h3 className="font-bold text-neutral-800 mb-2">{f.question}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  {f.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <WaveBottom fill="#e3e9fb" />
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-section-2 relative overflow-hidden">
        <WaveTop fill="#e3e9fb" />
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-8 md:p-10 text-center shadow-sm border border-[hsl(var(--neutral-100))] bg-white">
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
                Ready to Visit Our Campus?
              </h2>
              <p className="text-base md:text-lg mb-6 text-neutral-800 max-w-2xl mx-auto">
                Schedule a personalized tour and see why families choose Basil Woods Juniors.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="rounded-xl px-6 py-3 font-bold shadow-sm hover:shadow-md transition-all"
                  style={{
                    backgroundColor: "hsl(var(--premium-orange))",
                    color: "white",
                  }}
                  onClick={() => {
                    window.open(
                      "https://wa.me/918056179108?text=Hello%20Basil%20Woods%20Juniors%20Chennai!%20I%E2%80%99d%20like%20to%20schedule%20a%20campus%20visit.",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl px-6 py-3 font-bold transition-all border-2 hover:bg-white"
                  style={{
                    borderColor: "hsl(var(--premium-orange))",
                    color: "hsl(var(--premium-orange))",
                  }}
                  onClick={() => (window.location.href = "tel:+918056179108")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <p className="mt-4 text-xs text-neutral-600">
                We’ll contact back by phone/email.
              </p>
            </div>
          </div>
        </div>
        <WaveBottom fill="#f6eee7" />
      </section>

      {/* Footer */}
      <footer className="relative bg-[#f4f7ff]">
        <WaveTop fill="#f6eee7" />
        <Footer />
      </footer>
    </div>
  );
};

export default ContactUsPage;

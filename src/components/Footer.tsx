import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "/BWJ Logos.png";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  Star
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/building" }, 
    { name: "Gallery", href: "/gallery" },
    { name: "Parent Resources", href: "/partners" },
    { name: "Contact", href: "/contact" }
  ];

  const programs = [
    { name: "Toddlers (2-3 years)", href: "/programs" },
    { name: "Mont 1 (3-4 years)", href: "/programs" },
    { name: "Mont 2 (4-5 years)", href: "/programs" },
    { name: "Mont 3 (5-6 years)", href: "/programs" }
  ];

  const resources = [
    { name: "Admission Process", href: "/building" },
    { name: "Fee Structure", href: "/building" },
    { name: "School Calendar", href: "/building" },
    { name: "Parent Portal", href: "/building" }
  ];

  return (
    <footer className="bg-[#fffdf5] text-white-chalk">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* School Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Basil Woods Juniors Logo"
                  className="w-14 h-14 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-playground">BASIL WOODS</h3>
                <p className="text-sm">JUNIORS CHENNAI</p>
              </div>
            </div>

            <p className="text-sm text-white-chalk/80 mb-4 leading-relaxed">
              You really can change the world if you care enough
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-playground-yellow" />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-playground-yellow" />
                <span>+91 8056179108</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-playground-yellow" />
                <span>Info.chennai@basilwoods.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-playground-yellow font-playground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white-chalk/80 hover:text-playground-yellow transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-playground-yellow font-playground">Programs</h4>
            <div className="space-y-2">
              {programs.map((program, index) => (
                <a
                  key={index}
                  href={program.href}
                  className="block text-white-chalk/80 hover:text-playground-yellow transition-colors text-sm"
                >
                  {program.name}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-playground-yellow font-playground">Resources</h4>
            <div className="space-y-2 mb-6">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="block text-white-chalk/80 hover:text-playground-yellow transition-colors text-sm"
                >
                  {resource.name}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3 text-playground-yellow">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/people/Basil-Woods-Juniors-International-Pre-School-Day-Care-Chennai/61576063646448/?checkpoint_src=any"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white-chalk/20 hover:bg-playground-yellow hover:text-playground-blue rounded-playground flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/basilwoodsjuniors_chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white-chalk/20 hover:bg-playground-yellow hover:text-playground-blue rounded-playground flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@BWJChennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white-chalk/20 hover:bg-playground-yellow hover:text-playground-blue rounded-playground flex items-center justify-center transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white-chalk/20 bg-playground-blue/80">
        <div className="container mx-auto px-4 py-4">
          <div className="md:flex md:items-center md:justify-between text-sm">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <p className="text-white-chalk/80">
                © 2024 Basil Woods Juniors Chennai. All rights reserved.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-2 text-white-chalk/80">
              <span>Made By Talentronaut Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

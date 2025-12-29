"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function Bubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918056179108"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  )
}

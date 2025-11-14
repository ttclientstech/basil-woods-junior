"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function Bubble() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918056179108"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-primary text-white p-4 shadow-lg hover:scale-105 transition-transform block"
        aria-label="WhatsApp Bubble"
      >
        <FaWhatsapp  className="w-6 h-6" />
      </a>
    </div>
  )
}

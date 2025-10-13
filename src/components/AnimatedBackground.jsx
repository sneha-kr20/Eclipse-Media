"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const bokehs = Array.from({ length: 6 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#a62cf2a6] via-[#2d033b] to-[#0a0016] animate-gradientShift">
      {/* Floating bokeh lights */}
      {bokehs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 mix-blend-overlay blur-xl"
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${100 + Math.random() * 150}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none"></div>
    </div>
  );
}

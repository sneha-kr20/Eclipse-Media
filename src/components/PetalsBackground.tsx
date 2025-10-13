"use client";

import { useEffect, useState } from "react";

interface PetalData {
  id: number;
  left: number;   // %
  size: number;   // px
  duration: number; 
  delay: number;
  rotate: number; // initial rotation
}

const PetalsBackground: React.FC = () => {
  const [petals, setPetals] = useState<PetalData[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 30 + Math.random() * 20,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <img
          key={p.id}
          src="/images/rose.webp"
          alt="falling rose"
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            '--initial-rotate': `${p.rotate}deg`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default PetalsBackground;

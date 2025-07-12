'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoRainProps {
  fullScreen?: boolean;
  count?: number;
  speed?: number;
}

const LogoRain = ({ fullScreen = true, count = 10, speed = 6 }: LogoRainProps) => {
  const [logos, setLogos] = useState<
    { id: number; left: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10,
      delay: i * 0.5,
      duration: speed,
      size: fullScreen ? 40 : 24,
    }));
    setLogos(generated);
    
    console.log('LogoRain: Configurado para', fullScreen ? 'tela cheia' : 'container', 'com', count, 'logos');
  }, [count, speed, fullScreen]);

  const animationClass = fullScreen ? 'animate-fall' : 'animate-fall-container';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className={`absolute ${animationClass} select-none`}
          style={{
            left: `${logo.left}%`,
            animationDelay: `${logo.delay}s`,
            animationDuration: `${logo.duration}s`,
            top: fullScreen ? '-100px' : '-60px',
          }}
        >
          <Image
            src="/LOGOOOOO.png"
            alt="GCO Logo"
            width={logo.size}
            height={logo.size}
            className="opacity-70"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoRain;

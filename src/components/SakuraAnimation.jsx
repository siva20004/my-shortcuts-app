import React, { useEffect, useState } from 'react';

const SakuraAnimation = ({ theme }) => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Generate a reasonable number of petals for performance
    const petalCount = 20;
    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.5 + 0.5,
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
      rotateZ: Math.random() * 360,
    }));

    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes fall {
          0% {
            transform: translate3d(0, -10vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--petal-opacity);
          }
          90% {
            opacity: var(--petal-opacity);
          }
          100% {
            transform: translate3d(var(--drift), 110vh, 0) rotate(var(--end-rotation));
            opacity: 0;
          }
        }
        .sakura-petal {
          position: absolute;
          top: -10px;
          background: ${theme === 'dark' ? '#ffd1dc' : '#ffb7c5'};
          border-radius: 15px 0px 15px 0px;
          width: 10px;
          height: 15px;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform-style: preserve-3d;
        }
      `}</style>
      
      {petals.map(petal => {
        const drift = `${(Math.random() - 0.5) * 50}vw`;
        const endRotation = `${Math.random() * 720}deg`;
        
        return (
          <div
            key={petal.id}
            className="sakura-petal"
            style={{
              left: petal.left,
              animationDuration: petal.animationDuration,
              animationDelay: petal.animationDelay,
              '--petal-opacity': petal.opacity,
              '--drift': drift,
              '--end-rotation': endRotation,
              transform: `scale(${petal.scale}) rotateX(${petal.rotateX}deg) rotateY(${petal.rotateY}deg) rotateZ(${petal.rotateZ}deg)`
            }}
          />
        );
      })}
    </div>
  );
};

export default SakuraAnimation;

import React from 'react';

const RacingBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      
      {/* YouTube Video iframe Container for 16:9 cover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[100vh] w-[100vw] h-[56.25vw] pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/PkkV1vLHUvQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=PkkV1vLHUvQ&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&fs=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full scale-[1.2]" // Scale up slightly to hide YouTube edges/branding
        />
      </div>

      {/* Very light gradient just at the bottom to ground the layout slightly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      
      {/* Subtle Vignette so the edges aren't harsh */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />
    </div>
  );
};

export default RacingBackground;

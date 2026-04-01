import React from 'react';

export function FloatingParticles() {
  const particles = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            i % 3 === 0 ? 'bg-[#02B3AA]' : i % 3 === 1 ? 'bg-blue-400' : 'bg-[#02B3AA]/70'
          } opacity-60 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        >
          <div className={`absolute inset-0 rounded-full ${
            i % 3 === 0 ? 'bg-[#02B3AA]' : i % 3 === 1 ? 'bg-blue-400' : 'bg-[#02B3AA]/70'
          } animate-ping opacity-20`}></div>
        </div>
      ))}
      
      {/* Data Stream Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px opacity-20">
        <div className="h-full bg-gradient-to-r from-transparent via-[#02B3AA] to-transparent animate-pulse"></div>
      </div>
      
      <div className="absolute top-2/3 left-0 w-full h-px opacity-15">
        <div className="h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="absolute left-1/4 top-0 w-px h-full opacity-10">
        <div className="w-full bg-gradient-to-b from-transparent via-[#02B3AA] to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
}
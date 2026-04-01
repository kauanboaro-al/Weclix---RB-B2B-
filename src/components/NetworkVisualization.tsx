import React from 'react';

export function NetworkVisualization() {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none">
      {/* Central Sphere */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
        <div className="relative w-full h-full">
          {/* Wireframe Sphere Effect */}
          <div className="absolute inset-0 border-2 border-[#02B3AA]/40 rounded-full"></div>
          <div className="absolute inset-2 border border-[#02B3AA]/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 border border-[#02B3AA]/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#02B3AA] to-[#02B3AA]/80 rounded-full shadow-lg shadow-[#02B3AA]/50"></div>
        </div>
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-80"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[#02B3AA] to-[#02B3AA]/80 rounded-full opacity-70"></div>
      </div>

      <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-60"></div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-gradient-to-r from-[#02B3AA]/70 to-[#02B3AA]/90 rounded-full opacity-75"></div>
      </div>

      {/* Connection Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#02B3AA]/30 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#02B3AA]/30 to-transparent"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 transform rotate-45">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        </div>
      </div>

      {/* Data Flow Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#02B3AA] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#02B3AA]/70 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
}
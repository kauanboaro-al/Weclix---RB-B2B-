import React from 'react';
import { Wifi, Zap, Globe } from 'lucide-react';

export function WeclixLogo3D() {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      {/* Main cube structure */}
      <div className="relative w-full h-full transform-gpu">
        {/* Central core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-20 h-20">
            {/* Main hexagon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#02B3AA] to-[#02B3AA]/80 transform rotate-45 rounded-lg shadow-2xl animate-glow">
              <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Wifi className="w-8 h-8 text-[#02B3AA]" />
              </div>
            </div>
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#02B3AA]" />
              </div>
            </div>
            
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#02B3AA]" />
              </div>
            </div>
            
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s'}}>
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-6 h-6 bg-[#02B3AA]/80 rounded-full shadow-lg"></div>
            </div>
            
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-6 h-6 bg-[#02B3AA] rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Connection lines */}
        <div className="absolute inset-0">
          {/* Horizontal lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transform -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#02B3AA]/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#02B3AA]/20 to-transparent"></div>
          
          {/* Vertical lines */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent transform -translate-x-1/2"></div>
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#02B3AA]/20 to-transparent"></div>
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#02B3AA]/20 to-transparent"></div>
        </div>
        
        {/* Corner elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-[#02B3AA]/60 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-[#02B3AA]/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#02B3AA]/10 via-blue-500/5 to-transparent rounded-full blur-xl"></div>
    </div>
  );
}
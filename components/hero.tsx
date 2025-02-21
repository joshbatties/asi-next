import React from 'react';
import Image from 'next/image';
import Button from './button';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Desktop Image - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/desktop-hero.jpg" // Replace with your desktop image path
          alt="Steel manufacturing facility"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Mobile Image - Hidden on desktop */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/mobile-hero.jpg" // Replace with your mobile image path
          alt="Steel manufacturing facility"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-start pt-8 md:pt-8 md:justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center md:text-left md:max-w-lg md:ml-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight bg-gradient-to-br from-white from-30% via-white via-50% to-blue-600 text-transparent bg-clip-text mb-4">
              Ace Steel Innovations
            </h1>
            <p className="text-sm md:text-sm text-gray-300 font-light italic mb-8">
              Proudly supplying the Australian market with innovative steel solutions
            </p>
            <div className="text-center md:text-left inline-block w-full md:w-auto">
              <Button 
                href="#contact" 
                label="Get a quote"
                className="w-full md:w-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
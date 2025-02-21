'use client'

import React from 'react';
import Image from 'next/image';
import Button from './button';

const Introduction: React.FC = () => {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-light tracking-tight text-center mb-4">Who we are</h2>
        
        {/* Underline */}
        <div className="w-56 h-0.5 bg-blue-500 mx-auto mb-16"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 bg-black rounded-lg overflow-hidden shadow-[0_8px_20px_rgba(150,150,150,0.3)] transition-all duration-300 hover:shadow-[0_12px_25px_rgba(200,200,200,0.4)] p-6">
            
            {/* Image container - goes above text on mobile, left on desktop */}
            <div className="md:w-1/2">
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
                <Image 
                  src="/images/factory-interior.jpg" 
                  alt="Steel factory interior" 
                  width={600}
                  height={400}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            
            {/* Content container */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl mb-4 bg-gradient-to-br from-white from-50% to-[#0071ce] to-100% bg-clip-text text-transparent">
                Ace Steel Innovations: Building for the Future
              </h3>
              
              <div className="font-light text-sm text-gray-300">
                <p className="mb-4">
                  Innovation drives every project we undertake at ASI. This drive ensures we consistently deliver exceptional quality.
                </p>
                
                <p className="mb-4">
                  Our commitment goes beyond building the highest quality steel structures; we create strong relationships with our clients through our professional, friendly, and dependable approach, coupled with innovative solutions and swift adaptability.
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="md:mb-0 mb-4">
                    We look forward to working with you on your next project.
                  </p>
                  
                  <Button 
                    href="/about"
                    label="Read more"
                    className="md:w-auto w-full md:ml-4 text-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
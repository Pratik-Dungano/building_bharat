"use client";

import AnimatedHero from './AnimatedHero';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 2000); // 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gray-50 min-h-[500px] md:min-h-[600px] flex items-center pt-8 md:pt-12 lg:pt-0">
      <div className="container mx-auto px-4 md:px-8 lg:px-11 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 leading-tight mb-4 md:mb-8">
            Crack Political and policies roles with Confidence!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0">
            We offer a world class curriculum and expert mentorship to help you break into politics and policy roles. No background needed just your passion to lead and transform Bharat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg bg-orange-500 text-white text-base font-semibold hover:scale-105 transition-transform duration-200 ease-in-out origin-top-left">
              Start Learning For Free
            </button>
            <button
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg border-2 border-orange-500 bg-white text-orange-500 text-base font-semibold transition-colors duration-200 hover:bg-orange-500 hover:text-white"
            >
              Join premium
            </button>
          </div>
        </div>

        {/* Right Content - Animated transition (Desktop only) */}
        <div className="hidden lg:flex flex-1 items-center justify-center max-w-lg relative h-[400px]">
          {/* Original content fades out */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${showAnimation ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="text-center">
              <div className="text-8xl font-normal text-teal-900 leading-tight">
                Building
              </div>
              <div className="text-8xl font-bold text-orange-500 leading-tight">
                BHARAT
              </div>
            </div>
          </div>
          {/* AnimatedHero fades in */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${showAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <AnimatedHero />
          </div>
        </div>

        {/* Mobile/Tablet Hero Text (Static) */}
        <div className="lg:hidden flex-1 items-center justify-center max-w-lg relative h-[200px]">
          <div className="text-center">
            <div className="text-4xl font-normal text-teal-900 leading-tight">
              Building
            </div>
            <div className="text-4xl font-bold text-orange-500 leading-tight">
              BHARAT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

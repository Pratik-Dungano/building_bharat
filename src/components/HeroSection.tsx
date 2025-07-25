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
    <section className="relative bg-gray-50 min-h-[600px] flex items-center">
      <div className="container mx-auto px-11 flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold text-teal-900 leading-tight mb-8">
            Crack Political and policies roles with Confidence!
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-2xl">
            We offer a world class curriculum and expert mentorship to help you break into politics and policy roles. No background needed just your passion to lead and transform Bharat.
          </p>

          <div className="flex gap-6">
            <button className="w-[243px] h-[50px] rounded-lg bg-orange-500 text-white text-base font-semibold hover:scale-105 transition-transform duration-200 ease-in-out origin-top-left">
              Start Learning For Free
            </button>
            <button
              className="px-8 py-3 rounded-lg border-2 border-orange-500 bg-white text-orange-500 text-base font-semibold transition-colors duration-200 hover:bg-orange-500 hover:text-white"
            >
              Join premium
            </button>
          </div>
        </div>

        {/* Right Content - Animated transition */}
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
      </div>
    </section>
  );
}

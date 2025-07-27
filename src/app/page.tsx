"use client";

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import LogoCarousel from '@/components/LogoCarousel';
import TestimonialCard from '@/components/TestimonialCard';
import TargetAudienceCards from '@/components/TargetAudienceCards';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      title: "Student to Social Impact Leader",
      content: "Building Bharat transformed the way I learn and think. With hands on projects, expert mentorship, and constant support, I discovered my leadership potential. I never imagined I'd lead initiatives in my own town while learning from top mentors across India. The journey wasn't easy, but the Building Bharat team made it achievable every step, every doubt, every win was celebrated. If you're serious about growing and giving back to India, this is where you start.",
      name: "Priya Sharma",
      role: "Student Leader, Nagpur",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/84d121e81d0fafa8242b5e26b215481d26862455?width=692",
      active: true
    },
    {
      title: "Small Village to National Level Fellowship",
      content: "Before Building Bharat, I had big dreams but no direction. The courses opened up opportunities I never thought possible – from rural innovation challenges to real-world community projects. The mentors treated us like family and pushed us to aim higher. Today, I'm mentoring students from my own village and applying for fellowships that once felt out of reach. This platform is a launchpad for every Indian youth who wants to create change",
      name: "Ravi Kumar",
      role: "Youth Fellow, Bihar",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/18d45f7795acb671a4522af1a47ce6a9cc9ac39a?width=692",
      active: false
    },
    {
      title: "From Doubt to Impactful Career Path",
      content: "I used to believe students from tier 3 colleges couldn't compete. But Building Bharat changed my mindset. Through their programs, I built a strong portfolio, worked on local issues, and even led a state-level hackathon! This journey isn't just about jobs it's about purpose. I'm more confident, skilled, and connected to a mission bigger than myself.",
      name: "Sneha Joshi",
      role: "UX Intern & Community Volunteer, Pune",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8bc1416ad8151d587ba6364fa62545c3f1aaad66?width=692",
      active: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />

      {/* Logo Carousel Section */}
      <section className="py-8 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <LogoCarousel />
        </div>
      </section>

      {/* Stories That Inspire Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 text-center mb-8 md:mb-16">
            Stories That Inspire
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
                    {testimonials[currentTestimonial].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div className="space-y-1 md:space-y-2">
                    <p className="font-bold text-lg md:text-xl text-orange-500">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                  <div className="w-full max-w-sm md:w-80 h-64 md:h-80 lg:h-96 bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-16 md:w-24 h-1.5 md:h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TargetAudienceCards />
    </div>
  );
}

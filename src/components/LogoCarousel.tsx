import React from "react";

const logos = [
  {
    id: "dex-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fdf954bf95dbc380f517032dc7e67854457e6206?width=166",
    alt: "dex",
    highlight: false
  },
  {
    id: "smart-neta-1", 
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b5528768ddd0feb57fe91cdb9fbfbbd727e55219?width=182",
    alt: "Smart Neta",
    highlight: false
  },
  {
    id: "political-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b0c503c0ead46259bc8dec3a3a365565f02fbb34?width=120", 
    alt: "Political",
    highlight: false
  },
  {
    id: "cyover-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/c9c937dd1a19c28cd38449dbd8aa802dd98f4baa?width=200",
    alt: "Cyover",
    highlight: false
  },
  {
    id: "leadtech-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b8b27f85d0753f0f423f54ac916d4874b186fe8d?width=216",
    alt: "Leadtech",
    highlight: false
  },
  {
    id: "triangle-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/b24c71b46e59c5982d7a33ef20e7fd5ec71a8fe1?width=96",
    alt: "Triangle",
    highlight: false
  },
  {
    id: "3c-1",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/98405749cc7f8466747273849a270b67304c5861?width=210",
    alt: "3C",
    highlight: false
  },
  {
    id: "logo-2",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/eb584ab078513e288daa156e8778691d2511bf76?width=148",
    alt: "Company",
    highlight: false
  },
  {
    id: "cyover-2",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/c9c937dd1a19c28cd38449dbd8aa802dd98f4baa?width=200",
    alt: "Cyover",
    highlight: false
  },
  {
    id: "triangle-2",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/cab9f362084a64fcd5900e7bd53b8a9aa3f7f74e?width=88",
    alt: "Triangle",
    highlight: false
  },
  {
    id: "logo-3",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/63d9660744abf821bb1b85df98a2c43e5ea31903?width=112",
    alt: "Company",
    highlight: false
  },
  {
    id: "smart-neta-2",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/043fcc5ddad2456828bd47b6b4f8a54f4ded8bfc?width=184",
    alt: "Smart Neta",
    highlight: false
  },
  {
    id: "rajneethi",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4730c80bb810cad1d97050a454df4e54e1f46a42?width=236",
    alt: "Rajneethi",
    highlight: true
  },
  {
    id: "leadtech-2",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/670f815bf93ef7aabeeba643e9e5089c43e9d3db?width=216",
    alt: "Leadtech",
    highlight: false
  },
  {
    id: "smart-neta-3",
    src: "https://api.builder.io/api/v1/image/assets/TEMP/e132ac816521bc804bab9dabc918c82092d63638?width=182",
    alt: "Smart Neta",
    highlight: false
  }
];

export function LogoCarousel() {
  // Create multiple copies for seamless scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full relative overflow-hidden bg-transparent py-6 md:py-8 lg:py-16">
      {/* Blur gradients on the sides */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 lg:w-32 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Main scrolling container */}
      <div className="relative group">
        <div className="flex animate-scroll-left group-hover:animation-pause gap-2 md:gap-3 lg:gap-4 w-max">
          {extendedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className={`flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[126px] h-[32px] sm:h-[40px] md:h-[48px] lg:h-[52px] rounded-[6px] sm:rounded-[8px] md:rounded-[10px] border border-[rgba(0,70,68,0.47)] px-1.5 sm:px-2 md:px-3 py-1 md:py-2 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-[#004644] hover:z-10 relative ${
                logo.highlight
                  ? 'bg-[#DDD4D4] shadow-sm'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel; 
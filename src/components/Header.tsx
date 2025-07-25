"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Courses', href: '#' },
    { label: 'For college', href: '#' },
    { label: 'Internships', href: '#' },
    { label: 'Blogs', href: '#' },
  ];

  return (
    <header className="w-full sticky top-4 z-50 pointer-events-none">
      <div className="px-4">
        <style>{`
          .nav-pill-bg {
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: #f97316; /* orange-500 */
            z-index: -1;
            transition: width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
            width: 0%;
            opacity: 0;
          }
          .group:hover .nav-pill-bg {
            width: 100%;
            opacity: 1;
          }
          .nav-link-active .nav-pill-bg {
            width: 100%;
            opacity: 1;
          }
        `}</style>
        <div
          className={`max-w-[1400px] mx-auto bg-white rounded-3xl border border-orange-200 flex items-center justify-between px-12 py-5 pointer-events-auto transition-all duration-700 ${visible ? 'opacity-100 shadow-[0_4px_24px_0_rgba(255,140,0,0.10),0_1.5px_0_0_#FFE5CC]' : 'opacity-0'}`}
        >
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/ec2b6b5c5060116b822828527f66356147c70790?width=112"
            alt="Building Bharat Logo"
            width={45}
            height={44}
            className="flex-shrink-0 lg:w-[56px] lg:h-[55px]"
          />

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative group text-lg font-normal transition-colors duration-300 px-3 py-1.5 overflow-hidden ${link.active ? 'text-white font-semibold nav-link-active' : 'text-gray-700 hover:text-white'}`}
                style={{ zIndex: 1, display: 'inline-block' }}
              >
                {/* Orange pill background */}
                <span className="nav-pill-bg" />
                {link.label}
              </a>
            ))}
          </nav>

          <button className="hidden lg:flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-500 text-orange-500 text-lg font-medium hover:bg-orange-500 hover:text-white transition-colors">
            Start Learning
          </button>

          {/* Mobile CTA */}
          <button className="lg:hidden flex items-center justify-center px-3 py-2 rounded-lg border-2 border-orange-500 text-orange-500 text-base font-medium hover:bg-orange-500 hover:text-white transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </header>
  );
}

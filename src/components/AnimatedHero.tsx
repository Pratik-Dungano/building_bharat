"use client";

import { useState, useEffect } from "react";

const AnimatedHero = () => {
  const items = [
    { icon: "brain", label: "Political consulting" },
    { icon: "notes", label: "Public Policy" },
    { icon: "graduation", label: "Fellowships" },
    { icon: "mic", label: "MLA/MP internships" },
    { icon: "research", label: "Research" },
    { icon: "bulb", label: "Think Tanks" },
  ];

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3); // Positive for left-to-right, negative for right-to-left
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Circular arrangement calculation
  const radius = 180; // px, distance from center
  const center = 210; // px, center of the container
  const iconCount = items.length;

  function getPosition(index: number) {
    const angle = (2 * Math.PI * index) / iconCount - Math.PI / 2 + (rotation * Math.PI / 180);
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { left: `${x}px`, top: `${y}px` };
  }

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "brain":
        return (
          <svg className="w-12 h-12 text-orange-500" viewBox="0 0 61 61" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24.192 55.9167C22.9465 51.856 21.0678 48.8284 18.5558 46.8341C14.7878 43.8438 8.80089 45.703 6.58964 42.6174C4.37839 39.5319 8.13878 33.8589 9.45791 30.5115C10.777 27.1641 4.39999 25.981 5.1447 25.0304C5.64033 24.3967 8.86358 22.5683 14.8145 19.5455C16.5047 9.90407 22.7491 5.08337 33.5478 5.08337C49.7459 5.08337 55.917 18.816 55.917 27.5517C55.917 36.2849 48.4445 45.6941 37.8 47.7236C36.8486 49.1097 38.2211 51.8407 41.9175 55.9167"/>
          </svg>
        );
      case "notes":
        return (
          <svg className="w-12 h-12 text-orange-500" viewBox="0 0 58 58" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 16.25C20 15.5596 20.5596 15 21.25 15H43.75C44.4404 15 45 15.5596 45 16.25C45 16.9404 44.4404 17.5 43.75 17.5H32.5H21.25C20.5596 17.5 20 16.9404 20 16.25ZM20 26.3269C20 25.6791 20.5252 25.1538 21.1731 25.1538H43.8269C44.4748 25.1538 45 25.6791 45 26.3269C45 26.9748 44.4748 27.5 43.8269 27.5H33.1944H21.1731C20.5252 27.5 20 26.9748 20 26.3269ZM20 36.1538C20 35.6865 20.3788 35.3077 20.8462 35.3077H26.5H32.3483C32.8156 35.3077 33.1944 35.6865 33.1944 36.1538C33.1944 36.6212 32.8156 37 32.3483 37H26.5H20.8462C20.3788 37 20 36.6212 20 36.1538Z"/>
            <path d="M54 7C54 5.89543 53.1046 5 52 5H15C13.8954 5 13 5.89543 13 7V52C13 53.1046 13.8954 54 15 54H52C53.1046 54 54 53.1046 54 52V7Z"/>
          </svg>
        );
      case "graduation":
        return (
          <svg className="w-12 h-12 text-orange-500" viewBox="0 0 66 52" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M63 37.9716V29.5V21.5L64.8926 20.6518C65.5669 20.2984 65.9916 19.5979 65.9999 18.831C66.0081 18.066 65.5968 17.3572 64.9307 16.9883L33.9078 0.255707C33.2872 -0.0872589 32.5365 -0.0852452 31.9117 0.261878L1.05887 17.0153C0.402059 17.3843 -0.00409291 18.0847 3.11108e-05 18.8445C0.00415513 19.6043 0.41862 20.2995 1.08368 20.6613L14.6404 27.9352C14.4703 28.2376 14.3651 28.5827 14.3651 28.9548V46.5437C14.3652 46.837 14.4268 47.1269 14.5458 47.3945C14.6649 47.6621 14.8387 47.9013 15.0559 48.0964C15.5034 48.4966 19.7883 52 32.8893 52C45.9438 52 50.3442 48.6888 50.803 48.3116C51.2824 47.9177 51.5597 47.3273 51.5597 46.7017V28.6616C51.5597 28.3696 51.4989 28.0921 51.3917 27.8406L61 23V30.5V37.9716C59.7772 38.6929 58.5 40.0273 58.5 41.5571C58.5 43.8529 60.7225 45.5106 63 45.5106C65.2775 45.5106 65.9278 43.8529 65.9278 41.5571C65.9278 40.0179 64.2321 38.6897 63 37.9716Z"/>
          </svg>
        );
      case "mic":
        return (
          <svg className="w-12 h-12 text-orange-500" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M25.667 17.7356L11.681 36.8456C11.3519 37.2951 11.1946 37.8476 11.2374 38.4031C11.2802 38.9586 11.5203 39.4804 11.9144 39.8743L13.8207 41.7829C14.2205 42.1823 14.7517 42.423 15.3156 42.4604C15.8795 42.4977 16.4377 42.3291 16.8867 41.9859L35.2104 27.9999"/>
            <path d="M38.5002 49.4059C36.1668 47.8333 33.5348 46.6666 30.3335 46.6666C25.5315 46.6666 21.1682 52.1639 16.3335 51.3333C11.4988 50.5026 9.8585 43.4723 12.8335 40.8333"/>
            <path d="M37.3337 28C43.777 28 49.0003 22.7766 49.0003 16.3333C49.0003 9.88997 43.777 4.66663 37.3337 4.66663C30.8903 4.66663 25.667 9.88997 25.667 16.3333C25.667 22.7766 30.8903 28 37.3337 28Z"/>
          </svg>
        );
      case "research":
        return (
          <svg className="w-12 h-12 text-orange-500" viewBox="0 0 59 59" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M41.7921 29.4999V41.792M31.9579 41.792V36.8749M7.375 36.8749L14.3323 29.9177M19.6671 17.2079C17.7111 17.2079 15.8352 17.9849 14.4521 19.368C13.0691 20.7511 12.2921 22.6269 12.2921 24.5829C12.2921 26.5389 13.0691 28.4147 14.4521 29.7978C15.8352 31.1809 17.7111 31.9579 19.6671 31.9579C21.623 31.9579 23.4989 31.1809 24.882 29.7978C26.2651 28.4147 27.0421 26.5389 27.0421 24.5829C27.0421 22.6269 26.2651 20.7511 24.882 19.368C23.4989 17.9849 21.623 17.2079 19.6671 17.2079Z"/>
          </svg>
        );
      case "bulb":
        return (
          <svg className="w-12 h-12 text-orange-500" viewBox="0 0 58 55" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.7697 41.3532C20.6643 38.7613 18.9501 36.3253 16.6378 34.0657C14.1933 31.6785 12.5158 28.6169 11.8194 25.2719C11.1231 21.9269 11.4395 18.4502 12.7282 15.2859C14.017 12.1215 16.2197 9.41308 19.0549 7.50643C21.8902 5.59977 25.2294 4.58142 28.6462 4.58142C32.0629 4.58142 35.4021 5.59977 38.2374 7.50643C41.0726 9.41308 43.2753 12.1215 44.5641 15.2859C45.8529 18.4502 46.1693 21.9269 45.4729 25.2719C44.7765 28.6169 43.099 31.6785 40.6545 34.0657C38.2689 36.3963 36.518 38.9171 36.518 41.6053V45.2605C36.518 46.628 35.9748 47.9395 35.0078 48.9065C34.0408 49.8735 32.7293 50.4167 31.3618 50.4167H25.9237C24.5561 50.4167 23.2446 49.8735 22.2776 48.9065C21.3107 47.9395 20.7674 46.628 20.7674 45.2605L20.7697 41.3532Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-[420px] h-[420px] mx-auto">
      {/* Animated icons with variant-based positions */}
      {items.map((item, index) => (
        <div
          key={item.icon}
          className="absolute flex flex-col items-center"
          style={getPosition(index)}
        >
          <div className="flex justify-center mb-2">
            {renderIcon(item.icon)}
          </div>
          <div className="text-sm font-medium text-[#184C43] text-center mt-2">
            {item.label}
          </div>
        </div>
      ))}
      {/* Center logo (fixed, does not animate) */}
      <div
        className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center"
        style={{ transform: 'translate(-10%, 80%)' }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold leading-tight">
            <span className="text-[#184C43] font-bold">Building</span>
            <br />
            <span className="text-[#F97316] font-bold">BHARAT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 
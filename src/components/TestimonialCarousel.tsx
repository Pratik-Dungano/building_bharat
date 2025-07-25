import React from 'react';

interface Testimonial {
  image: string;
  title: string;
  description: string;
  name: string;
  role: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex gap-6 min-w-max">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start min-w-[340px] max-w-[400px] p-6"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-xl object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{testimonial.description}</p>
              <div className="flex flex-col md:flex-row md:items-center gap-1 text-xs text-gray-500">
                <span className="font-medium text-orange-500">{testimonial.name}</span>
                <span className="hidden md:inline mx-2">|</span>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel; 
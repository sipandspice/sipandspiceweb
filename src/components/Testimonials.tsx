import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The Ethiopian Yirgacheffe from Flavorful Origins is simply outstanding. The fruity notes and floral aroma make every morning special. Their subscription service ensures I never run out!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Home Chef',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'As someone who loves cooking with authentic spices, I\'ve been blown away by the quality and freshness. The Kashmiri chili and saffron have transformed my dishes to restaurant quality.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Tea Connoisseur',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'I\'ve tried countless tea brands, but the organic oolong from Flavorful Origins stands out. The careful packaging preserves every subtle note, and their sustainable practices make me feel good about my purchase.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover why food enthusiasts and flavor seekers choose our products for their kitchens.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 lg:-left-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-amber-800" />
            </button>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover rounded-full border-4 border-amber-100"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 rounded-full p-1.5">
                      <Star size={16} className="text-white fill-white" />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonials[activeIndex].rating ? "text-amber-500 fill-amber-500" : "text-stone-300"}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="italic text-stone-700 mb-4">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-medium text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-stone-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 lg:-right-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-amber-800" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-amber-600' : 'bg-amber-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
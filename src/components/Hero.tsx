import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in">
            Discover Extraordinary <span className="text-amber-500">Flavors</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-100 animate-fade-in-delay">
            Thoughtfully sourced coffee, tea, and spices from around the world, 
            delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <a
              href="/shop"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Shop Now <ArrowRight size={18} />
            </a>
            <a
              href="/about"
              className="px-8 py-3 bg-transparent border border-white hover:bg-white/10 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
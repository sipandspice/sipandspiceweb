import React from 'react';
import { Leaf, Globe, Award } from 'lucide-react';

const OriginStory = () => {
  return (
    <section className="py-16 px-4 bg-stone-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our <span className="text-amber-500">Story</span>
            </h2>
            <p className="text-stone-300 mb-6">
              Founded in 2014, Flavorful Origins began as a passion project by two friends who traveled the world in search of authentic flavors and traditional cultivation methods.
            </p>
            <p className="text-stone-300 mb-8">
              Today, we work directly with small-scale farmers and cooperatives across the globe, ensuring fair compensation while preserving traditional farming practices that yield the most extraordinary flavors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-stone-800 p-5 rounded-lg">
                <Leaf size={24} className="text-amber-500 mb-3" />
                <h3 className="font-medium text-lg mb-2">Sustainable</h3>
                <p className="text-stone-400 text-sm">100% organic, environmentally conscious farming practices</p>
              </div>
              
              <div className="bg-stone-800 p-5 rounded-lg">
                <Globe size={24} className="text-amber-500 mb-3" />
                <h3 className="font-medium text-lg mb-2">Ethical</h3>
                <p className="text-stone-400 text-sm">Fair trade partnerships with artisan producers worldwide</p>
              </div>
              
              <div className="bg-stone-800 p-5 rounded-lg">
                <Award size={24} className="text-amber-500 mb-3" />
                <h3 className="font-medium text-lg mb-2">Premium</h3>
                <p className="text-stone-400 text-sm">Carefully selected for exceptional taste and quality</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Coffee farmer harvesting beans" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Tea plantation" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img 
                src="https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Spice market" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Coffee roasting process" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Customer Favorites</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover our most beloved products, handpicked for their exceptional quality and unique flavor profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/shop"
            className="inline-flex items-center text-amber-800 hover:text-amber-600 font-medium transition-colors duration-300"
          >
            View All Products <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
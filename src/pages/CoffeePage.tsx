import React from 'react';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

function CoffeePage() {
  const coffeeProducts = getProductsByCategory('coffee');

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Premium Coffee Collection</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium coffee beans, sourced from the world's finest growing regions and roasted to perfection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {coffeeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CoffeePage;
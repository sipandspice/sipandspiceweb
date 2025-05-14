import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getProductsByCategory } from '../data/products';

const CategorySection = ({ category }: { category: string }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const products = getProductsByCategory(category);
  
  // Get unique subcategories for this category
  const subcategories = ['all', ...new Set(products.map(p => p.subcategory))];
  
  // Filter products based on active filter
  const filteredProducts = activeFilter === 'all'
    ? products.slice(0, 4) // Show first 4 for "all"
    : products.filter(p => p.subcategory === activeFilter).slice(0, 4);

  const getCategoryTitle = () => {
    switch (category) {
      case 'coffee': return 'Premium Coffee';
      case 'tea': return 'Organic Teas';
      case 'spices': return 'Exotic Spices';
      default: return category;
    }
  };

  const getCategoryImage = () => {
    switch (category) {
      case 'coffee': return 'https://images.pexels.com/photos/2074129/pexels-photo-2074129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'tea': return 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      case 'spices': return 'https://images.pexels.com/photos/4198188/pexels-photo-4198188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
      default: return '';
    }
  };

  return (
    <section className={`py-16 px-4 ${category === 'tea' ? 'bg-stone-100' : ''}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {getCategoryTitle()}
            </h2>
            <p className="text-stone-600 max-w-2xl">
              {category === 'coffee' && 'Ethically sourced, freshly roasted beans from the world\'s finest growing regions.'}
              {category === 'tea' && 'Hand-picked, organic teas cultivated with care and tradition.'}
              {category === 'spices' && 'Authentic, aromatic spices to transform your culinary creations.'}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href={`/${category}`}
              className="px-6 py-2 bg-amber-800 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center gap-2"
            >
              View All <ChevronRight size={16} />
            </a>
          </div>
        </div>

        <div className="overflow-x-auto mb-8">
          <div className="flex space-x-2 min-w-max">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveFilter(sub)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 capitalize ${
                  activeFilter === sub
                    ? 'bg-amber-800 text-white'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {sub === 'all' ? 'All' : sub}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-lg">
          <div className="aspect-[3/1] bg-cover bg-center" style={{ backgroundImage: `url('${getCategoryImage()}')` }}>
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="container mx-auto px-8 md:px-12">
                <div className="max-w-lg text-white">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                    {category === 'coffee' && 'From Bean to Cup'}
                    {category === 'tea' && 'Discover the Art of Tea'}
                    {category === 'spices' && 'Elevate Your Cooking'}
                  </h3>
                  <p className="mb-6">
                    {category === 'coffee' && 'Learn about our meticulous roasting process and brewing methods to get the perfect cup every time.'}
                    {category === 'tea' && 'Explore our guide to tea varieties, origins, and brewing techniques for the ultimate tea experience.'}
                    {category === 'spices' && 'Find out how our carefully selected spices can transform your everyday meals into extraordinary culinary adventures.'}
                  </p>
                  <a 
                    href={`/guide/${category}`}
                    className="px-6 py-2 bg-white text-amber-800 hover:bg-amber-50 font-medium rounded-md transition-colors duration-300 inline-block"
                  >
                    Read Our Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
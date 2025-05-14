import { useState } from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../data/products';

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md transform transition-transform duration-300 hover:scale-110"
          >
            <Heart 
              size={16} 
              className={isFavorite ? "fill-red-500 text-red-500" : "text-stone-400"}
            />
          </button>
        </div>
        
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs font-medium rounded-full">
            New
          </div>
        )}
        
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white p-3 flex justify-center transform transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <a 
            href={product.productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-950 hover:bg-yellow-900 text-white py-2 rounded-md font-medium transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            Buy Now
          </a>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1">
          <span className="text-sm font-medium text-stone-500">{product.category}</span>
        </div>
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={`${i < product.rating ? 'text-amber-500 fill-amber-500' : 'text-stone-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-stone-500">({product.reviews})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-stone-500 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
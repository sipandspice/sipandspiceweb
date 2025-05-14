import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

function TeaPage() {
  const teaProducts = getProductsByCategory('tea');

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Organic Tea Collection</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Explore our selection of premium organic teas, from classic varieties to unique blends, each carefully selected for its exceptional quality and taste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teaProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default TeaPage;
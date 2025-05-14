// import { getProductsByCategory } from '../data/products';
// import ProductCard from '../components/ProductCard';

function SpicesPage() {
  //const spicesProducts = getProductsByCategory('spices');

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Exotic Spices Collection</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Transform your culinary creations with our premium selection of authentic spices, sourced directly from the world's finest spice-growing regions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* {spicesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        Coming soon...
      </div>
    </div>
  );
}

export default SpicesPage;
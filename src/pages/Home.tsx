import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import Testimonials from '../components/Testimonials';
import OriginStory from '../components/OriginStory';

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategorySection category="coffee" />
      <CategorySection category="tea" />
      <CategorySection category="spices" />
      <OriginStory />
      <Testimonials />
    </>
  );
}

export default Home;
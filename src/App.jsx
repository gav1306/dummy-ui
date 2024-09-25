import ProductCarousel from "./components/carousel/product-carousel";
import Faq from "./components/faq/faq";
import Hero from "./components/hero/hero";
import ProductGallery from "./components/products/product-gallery";
import PrimaryLayout from "./layouts/primary";

function App() {
  return (
    <PrimaryLayout>
      <Hero />
      <ProductGallery />
      <ProductCarousel />
      <Faq />
    </PrimaryLayout>
  );
}

export default App;

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { PRODUCTS } from "../../data";

const ProductCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <section className="grid lg:grid-cols-[1fr_1fr]">
      <div className="bg-primary p-14 flex flex-col gap-4 items-center justify-center">
        <h3 className="text-2xl font-semibold text-secondary capitalize">
          share your stories
        </h3>
        <p className="text-secondary">
          We love to hear your stories and how our cakes made your day special!!
        </p>
      </div>
      <div className="p-14 flex items-center justify-center">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-sm"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {PRODUCTS.map((product, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden group/item">
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                      <img
                        className="w-full h-full object-cover group-hover/item:opacity-40"
                        src={product.img}
                        alt={product.name}
                      />
                      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible group-hover/item:visible flex flex-col items-center justify-start gap-2">
                        <span className="text-primary text-xl font-bold">
                          {product.name}
                        </span>
                        <span className="text-sm font-light italic">
                          &quot;{product.review}&quot;
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;

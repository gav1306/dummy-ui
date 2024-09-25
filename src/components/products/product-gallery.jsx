import { PRODUCTS } from "../../data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ProductGallery = () => {
  return (
    <section className="p-14">
      <h3 className="capitalize font-bold text-3xl text-center mb-12 text-primary">
        our best sellers
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-4">
        {PRODUCTS.map((product, index) => {
          let cardSpan = "";
          switch (index) {
            case 2:
              cardSpan = "md:col-span-2";
              break;
            case 6:
              cardSpan = "lg:col-span-2";
              break;
            default:
              break;
          }
          return (
            <Card
              key={index}
              className={cn(cardSpan, " grid grid-rows-[auto_1fr] ")}
            >
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] mt-auto">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-cover w-full"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ProductGallery;

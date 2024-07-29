import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface Props {
   title: string;
   products: any[];
   listClassName?: string;
   categoryId?: number;
   className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
   title,
   products,
   className,
   listClassName,
   categoryId,
}) => {
   return (
      <div className={cn("", className)}>
         <Title text={title} size="lg" className="mb-5 font-extrabold" />

         <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {products.map((product, id) => (
               <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.items[0].price}
               />
            ))}
         </div>
      </div>
   );
};

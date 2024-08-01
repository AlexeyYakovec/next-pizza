"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useIntersection } from "react-use";

import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useCategoryState } from "@/store/category";

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
   const setActiveCategoryId = useCategoryState((state) => state.setActiveId);
   const intersectionRef = React.useRef(null);
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.4,
   });

   React.useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveCategoryId(categoryId ?? 0);
      }
   }, [categoryId, intersection?.isIntersecting, title]);

   return (
      <div className={cn("", className)} id={title} ref={intersectionRef}>
         <Title text={title} size="lg" className="mb-5 font-extrabold" />
         <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {products.map((product) => (
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

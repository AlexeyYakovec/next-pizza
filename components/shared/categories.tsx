import { cn } from "@/lib/utils";
import React from "react";
import { SortPopup } from "./sort-popup";

interface Props {
   className?: string;
}

const cats = [
   "Pizza's",
   "Combo",
   "Appetizers",
   "Cocktails",
   "Coffee",
   "Beverages",
   "Desserts",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
   return (
      <div
         className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
            className
         )}
      >
         {cats.map((cat, index) => {
            return (
               <a
                  className={cn(
                     "flex items-center font-bold h-11 rounded-2xl px-5",
                     activeIndex === index &&
                        "bg-white shadow-md shadow-gray-200 text-primary"
                  )}
                  key={index}
               >
                  <button>
                     <span>{cat}</span>
                  </button>
               </a>
            );
         })}
      </div>
   );
};

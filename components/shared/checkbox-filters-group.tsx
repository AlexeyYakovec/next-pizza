"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-сheckbox";
import { Input } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
   title: string;
   items: Item[];
   className?: string;
   defaultItems: Item[];
   defaultValue?: string[];
   limit?: number;
   searchInputPlaceholder?: string;
   onChange?: (values: string[]) => void;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
   items,
   title,
   className,
   defaultItems,
   defaultValue,
   limit = 4,
   searchInputPlaceholder = "Поиск...",
   onChange,
}) => {
   const [showAll, setShowAll] = React.useState(false);
   const [value, setValue] = React.useState<string[]>(defaultValue || []);

   const list = showAll ? items : defaultItems?.slice(0, limit);

   return (
      <div className={cn("", className)}>
         <p className="font-bold mb-6">{title}</p>

         {showAll && (
            <div className="mb-5">
               <Input
                  placeholder={searchInputPlaceholder}
                  className="bg-gray-50"
               />
            </div>
         )}

         <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {list.map((item, index) => {
               return (
                  <FilterCheckbox
                     text={item.text}
                     key={String(item.value)}
                     value={item.value}
                     endAdornment={item.endAdornment}
                     checked={false}
                     onCheckedChange={(ids) => console.log(ids)}
                  />
               );
            })}
         </div>

         {items.length > limit && (
            <div
               className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}
            >
               <button
                  onClick={() => setShowAll(!showAll)}
                  className={`text-primary ${!showAll ? "mt-4" : "mt-0"}`}
               >
                  {showAll ? "Скрыть" : "+ Показать все"}
               </button>
            </div>
         )}
      </div>
   );
};

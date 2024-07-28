import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox } from "./index";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
   className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
   return (
      <div className={cn(className)}>
         <Title text="Фильтрация" size="sm" className="mb font-bold mb-6" />

         {/*Checkbox*/}
         <div className="flex flex-col gap-4">
            <FilterCheckbox text="Можно собирать" value="1" />
            <FilterCheckbox text="Новинки" value="2" />
         </div>

         {/*range checkbox*/}
         <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">
               <Input
                  type="number"
                  placeholder="0"
                  min={0}
                  max={30000}
                  defaultValue={0}
               />
               <Input
                  type="number"
                  placeholder="1000"
                  min={0}
                  value={500}
                  max={30000}
               />
            </div>
            <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
         </div>
         <CheckboxFiltersGroup
            title="Ингредиенты"
            className="mt-12"
            defaultItems={[
               { text: "Сырный соус", value: "1" },
               { text: "Моццарелла", value: "2" },
               { text: "Солёные огурчики", value: "4" },
               { text: "Чеснок", value: "3" },
            ]}
            items={[
               { text: "Сырный соус", value: "1" },
               { text: "Моццарелла", value: "2" },
               { text: "Чеснок", value: "3" },
               { text: "Солёные огурчики", value: "4" },
               { text: "Сырный соус", value: "1" },
               { text: "Моццарелла", value: "2" },
               { text: "Чеснок", value: "3" },
               { text: "Солёные огурчики", value: "4" },
               { text: "Сырный соус", value: "1" },
               { text: "Моццарелла", value: "2" },
               { text: "Чеснок", value: "3" },
               { text: "Солёные огурчики", value: "4" },
               { text: "Сырный соус", value: "1" },
               { text: "Моццарелла", value: "2" },
               { text: "Чеснок", value: "3" },
               { text: "Солёные огурчики", value: "4" },
            ]}
            limit={6}
         />
      </div>
   );
};

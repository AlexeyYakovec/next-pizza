import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox } from "./index";

interface Props {
   className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
   return (
      <div className={cn(className)}>
         <Title text="Filtration" size="sm" className="mb font-bold" />

         <div className="flex flex-col gap-4">
            <FilterCheckbox text="Можно собирать" value="1" />
            <FilterCheckbox text="Новинки" value="2" />
         </div>
      </div>
   );
};

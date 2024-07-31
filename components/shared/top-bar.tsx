import { cn } from "@/lib/utils";
import React from "react";

import { Categories, SortPopup, Container } from "./index";

interface Props {
   className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
   return (
      <div
         className={cn(
            "sticky top-0 bg-gray-100 py-5 shadow-lg shadow-black/5 z-10",
            className
         )}
      >
         <Container className="flex items-center justify-between px-5">
            <Categories />
            <SortPopup />
         </Container>
      </div>
   );
};

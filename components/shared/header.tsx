import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
   className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
   return (
      <header className={cn("border border-b", className)}>
         <Container className="flex items-center justify-between py-8">
            {/*Logo */}
            <div className="flex items-center gap-3">
               <Image src="/logo.png" alt="Logo" width={35} height={35} />
               <div>
                  <h1 className="text-2xl uppercase font-black mb-1">
                     Next-pizza
                  </h1>
                  <p className="text-sm text-gray-400 leading-3">
                     It couldn't be any tastier
                  </p>
               </div>
            </div>

            <div className="flex gap-4">
               {/*Sign in button */}
               <div className="flex items-center gap-3">
                  <Button
                     className="flex items-center gap-2"
                     variant={"outline"}
                  >
                     <User size={16} />
                     Войти
                  </Button>
               </div>

               {/*Shopping cart button */}
               <div>
                  <Button className="group relative">
                     <b>520 ₽</b>
                     <span className="h-full w-[1px] bg-white/30 mx-3"></span>
                     <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                        <ShoppingCart
                           size={16}
                           className="relative mr-2"
                           strokeWidth={2}
                        />
                        <b>3</b>
                     </div>
                     <ArrowRight
                        size={20}
                        className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                     />
                  </Button>
               </div>
            </div>
         </Container>
      </header>
   );
};

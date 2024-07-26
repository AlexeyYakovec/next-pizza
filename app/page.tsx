import {
   Categories,
   Container,
   Filters,
   SortPopup,
   Title,
   TopBar,
} from "@/components/shared";

export default function Home() {
   return (
      <>
         <Container className="mt-10">
            <Title text="all pizza" size="lg" className="font-extrabold" />
         </Container>
         <TopBar />

         <Container className="pb-14 mt-5">
            <div className="flex gap-[60px]">
               {/* Фильтрация */}
               <div className="w-[250px]">
                  <Filters />
               </div>

               {/* Список товаров */}
               <div className="flex-1">
                  <div className="flex flex-col gap-16">Список товаров</div>
               </div>
            </div>
         </Container>
      </>
   );
}

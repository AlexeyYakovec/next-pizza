import {
   Categories,
   Container,
   Filters,
   SortPopup,
   Title,
   TopBar,
   ProductsGroupList,
} from "@/components/shared";

export default function Home() {
   return (
      <>
         <Container className="mt-10">
            <Title text="Каталог" size="lg" className="font-extrabold" />
         </Container>
         <TopBar />

         <Container className="pb-14 mt-10">
            <div className="flex gap-[60px]">
               {/* Фильтрация */}
               <div className="w-[250px]">
                  <Filters />
               </div>

               {/* Список товаров */}
               <div className="flex-1">
                  <div className="flex flex-col gap-16">
                     <ProductsGroupList
                        title="Пиццы"
                        products={[
                           {
                              id: 1,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 2,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 3,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 4,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 5,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 6,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                        ]}
                        categoryId={1}
                     />
                     <ProductsGroupList
                        title="Комбо"
                        products={[
                           {
                              id: 1,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 2,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                           {
                              id: 3,
                              name: "Пепперони",
                              price: 1200,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D6122BB3424B593BB15EACE3197.avif",
                              items: [{ price: 1200 }],
                           },
                        ]}
                        categoryId={2}
                     />
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}

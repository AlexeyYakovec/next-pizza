import {
   Categories,
   Container,
   SortPopup,
   Title,
   TopBar,
} from "@/components/shared";

export default function Home() {
   return (
      <>
         <Container className="mt-10">
            <Title text="all pizza" size="lg" className="font-extrabold" />
            <TopBar />
         </Container>
      </>
   );
}

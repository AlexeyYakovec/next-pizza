import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
   subsets: ["latin"],
   variable: "--font-montserrat",
   weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   title: "Next Pizza | Main",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={montserrat.className}>
            <main className="min-h-screen">{children}</main>
         </body>
      </html>
   );
}

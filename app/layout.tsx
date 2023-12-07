import { Providers } from "@/lib/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import NavBar from "@/components/navBar/NavBar";
import { Suspense } from "react";
import MenuDropdown from "@/components/navBar/menu/menuDropdown/menuDropdown";
export const metadata: Metadata = {
  title: "Discount Dash",
  description: "Tu app de ofertas",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
       <head>
       </head>
       <body>
         <Providers>
          <NavBar/>
           <Toaster position="bottom-center" richColors />
          {props.children}
          <MenuDropdown/>
        </Providers>
      </body>
    </html>
  );
}

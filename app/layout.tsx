
import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import NavBar from "@/components/navBar/NavBar"


export const metadata: Metadata = {
  title: "Discount Dash",
  description: "Tu app de ofertas",
};

export default function RootLayout(props: React.PropsWithChildren) {
   return (
    <Providers>
      <html lang="en">
        <body>
          <NavBar />
          {props.children}
        </body>
      </html>
    </Providers>
  );
}

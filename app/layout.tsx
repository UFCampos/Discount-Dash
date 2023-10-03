
import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/navBar/NavBar'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "Discount Dash",
  description: "Tu app de ofertas",
};

export default function RootLayout(props: React.PropsWithChildren) {
   return (
    <Providers>
      <html lang="en">
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body>
          <NavBar />
          {props.children}
        </body>
      </html>
    </Providers>
  );
}

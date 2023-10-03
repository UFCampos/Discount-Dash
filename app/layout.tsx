
import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/navBar/NavBar'
import { Suspense } from 'react'
import MenuDropdown from '@/components/navBar/menu/menuDropdown/menuDropdown'

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
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </head>
        <body>
          <NavBar />
          <div className='global-cont'>
            {props.children}
            <MenuDropdown/>
          </div>
        </body>
      </html>
    </Providers>
  );
}

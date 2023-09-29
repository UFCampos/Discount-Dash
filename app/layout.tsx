"use client"
import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import NavBar from '@/components/navBar/NavBar'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Discount Dash',
  description: 'Tu app de ofertas',
}
export default function RootLayout(props: React.PropsWithChildren) {
  const pathname = usePathname()
  


  
  return (
    <Providers>
      <html lang="en">
        <body>
          {
          pathname === "/"
          ?null 
          :<NavBar />
        }
          
          {props.children}
        </body>
      </html>
    </Providers>
  )
}
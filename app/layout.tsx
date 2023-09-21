import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discount Dash',
  description: 'Tu app de ofertas',
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className='red-text'>
          {props.children}
        </body>
      </html>
    </Providers>
  )
}
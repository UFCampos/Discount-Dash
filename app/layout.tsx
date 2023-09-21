import { Providers } from '@/lib/providers'
import './globals.css'


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

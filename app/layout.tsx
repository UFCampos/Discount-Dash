import { Providers } from '@/lib/providers'
import NavBar from '@/components/navBar/NavBar'
import './globals.css'
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
  )
}

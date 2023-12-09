import { Providers } from '@/lib/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import NavBar from '@/components/navBar/NavBar'
import MenuDropdown from '@/components/navBar/menu/menuDropdown/menuDropdown'
export const metadata: Metadata = {
	title: 'Discount Dash',
	description: 'Tu app de ofertas'
}

export default function RootLayout (props: React.PropsWithChildren): JSX.Element {
	return (
		<html lang="en" className="bg-slate-200">
			<head>
			</head>
			<body>
				<Providers>
					<NavBar/>
					<Toaster position="bottom-center" richColors />
					<main className='w-full flex items-center min justify-center text-center'>
						{props.children}
					</main>
					<MenuDropdown/>
				</Providers>
			</body>
		</html>
	)
}

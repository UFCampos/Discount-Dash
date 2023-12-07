'use client'

import { NextUIProvider } from '@nextui-org/react'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { store } from '@/lib/redux/store'

export function Providers ({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<Provider store={store}>
			<NextUIProvider>
				{children}
			</NextUIProvider>
		</Provider>
	)
}
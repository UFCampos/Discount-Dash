'use client';
import { NextUIProvider } from '@nextui-org/react';

/* Core */
import { Provider } from 'react-redux';

/* Instruments */
import { store } from './redux/store';

export const Providers = (props: React.PropsWithChildren) => {
    return (
        <Provider store={store}>
            <NextUIProvider className='dark'>
                {props.children}
            </NextUIProvider>
        </Provider>
    )
}

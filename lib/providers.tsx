'use client';

/* Core */
import {Provider} from 'react-redux';

/* Instruments */
import {store} from './redux/store';

export const Providers = (props: React.PropsWithChildren) => <Provider store={store}>{props.children}</Provider>;

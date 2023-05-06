import React from 'react';
import { CafeDataMainProvider } from '../ContentsProvider/CafeDataMainProvider';
import Routes from './Routes';

export default function Providers() {
    return (
        <CafeDataMainProvider>
            <Routes />
        </CafeDataMainProvider>
    );
}
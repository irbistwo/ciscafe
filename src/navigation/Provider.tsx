import React from 'react';
import { CafeDataMainProvider } from '../ContentsProvider/CafeDataMainProvider';
import Routes from './Routes';
import {CafeAuthProvider} from "../ContentsProvider/CafeAuthProvider";

export default function Providers() {
    return (
        <CafeAuthProvider>
            <CafeDataMainProvider>
            <Routes />
            </CafeDataMainProvider>
        </CafeAuthProvider>
    );
}

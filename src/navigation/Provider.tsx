import React from 'react';
import { AuthProvider } from '../auth/AuthProvider';
import Routes from './Routes';

export default function Providers() {
    console.log("index");
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}
"use client";
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';

// import {NextUIProvider} from "@nextui-org/system";
const NextUIProvider = dynamic(() => import('@nextui-org/system').then(mod => mod.NextUIProvider), { 
    ssr: false 
  });
  
interface Props {
    children: ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <NextUIProvider>
            <SessionProvider>
                {children}
            </SessionProvider>
        </NextUIProvider>
    );
}

export default Providers;
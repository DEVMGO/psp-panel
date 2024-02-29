import React, { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
// import type { AppProps } from "next/app";
import Head from 'next/head';
import LayoutContainer from '@/components/layout/LayoutContainer';
import "@/styles/globals.css";

type LayoutType = 'L1';

type LayoutProps = {
  children: React.ReactNode;
};

const layouts: Record<LayoutType, React.FC> = {
  L1: LayoutContainer as React.FC,
};

interface AppProps {
  Component: React.ComponentType<any> & {
    layout?: LayoutType;
  };
  pageProps: Record<string, any>;
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const layoutComponent: any = layouts[Component.layout || 'L1'];
  const Layout: React.FC<LayoutProps> = layoutComponent
    ? layoutComponent
    : ({ children }: any) => <>{children}</>;
    return (
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <title>سامانه هم رسان</title>
            </Head>
              <div className="w-full flex items-start justify-center">
                <div className="w-full">
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </div>
              </div>
        </Hydrate>
      </QueryClientProvider>
    );
}

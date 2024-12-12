import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Questify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta
          name="description"
          content="Web application that contains leetcode problems and video solutions"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

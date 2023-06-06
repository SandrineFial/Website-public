import styles from '../styles/globals.css';
import React from "react";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {

  return (
    <>
    <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <meta name="robots" content="index, follow"/>
    </Head>
      <main className='bg-white '>
        <Navbar />
          <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

export default App;

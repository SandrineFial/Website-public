//require('dotenv').config();
import React from "react";
import styles from '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactGA from "react-ga4";

function App({ Component, pageProps }) {
  
  if (typeof window !== "undefined") {
    const TRACKING_ID = "G-WP...";
    ReactGA.initialize(TRACKING_ID);
    const splitLocation = window.location.pathname;
    ReactGA.send({
      hitType: "pageview",
      page: splitLocation,
    });
  }
  
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

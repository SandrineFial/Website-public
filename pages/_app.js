import styles from '../styles/globals.css';
import React from "react";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {

  const metaDescription = "Développeur Sénior Freelance, je vous propose la création et mise à jour de vos sites internet, ainsi que de vos applications web et mobiles."
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

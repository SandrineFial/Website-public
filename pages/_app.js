import 'tailwindcss/tailwind.css';
import styles from '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Nav } from 'react-bootstrap';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Freelance - développeur web - application mobile</title>
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

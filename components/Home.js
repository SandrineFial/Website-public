import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileScreen, faDesktop } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
      <div className="container mx-auto px-4">
        <div className='flex flex-row justify-center items-center mt-5'>
          <Image src={ require=('/s-fialon.jpg') } alt="S. Fialon" width="115" height="100"
          className='rounded-full' />
          <h1 className="text-4xl text-left m-5">
            Sandrine Fialon<br/>
            Développeur Web et Applications Mobiles
          </h1>
        </div>
        <div className='text-center m-5'>
          <p>Vous voulez renforcer vos équipes pour créer ou mettre à jour un site internet ou une application mobile ?</p>
          <p>Voici les outils et langages de programmation que j'utilise.</p>
          <p>Mon code respectent les normes W3C et est adapté au référencement naturel.</p>
        </div>

        <div className='flex flex-row justify-center items-stretch'>
          <div className='shadow-lg rounded-lg m-5 bg-slate-200'>
            <div className='p-5 bg-slate-100 text-3xl'>
              <h2><FontAwesomeIcon icon={ faDesktop } size="xs" /> Sites internet</h2>
            </div>
            <div className='px-10 py-5 '>
              <ul className='list-disc'>
                <li>Langage de programmation
                  <ul>
                    <li>React JS</li>
                    <li>PHP (Symfony)</li>
                  </ul>
                </li>
                <li>Mise en page / animation
                  <ul>
                    <li>CSS (Boostrap, Talwindcss)</li>
                    <li>Javascript (Jquery)</li>
                  </ul>
                </li>
                <li>Serveur :
                  <ul>
                    <li>Node JS</li>
                    <li>Wamp / Mamp</li>
                  </ul>
                </li>
                <li>Bases de données :
                  <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                  </ul>
                </li>
                <li>CMS :
                  <ul>
                    <li>Wordpress</li>
                    <li>Joomla</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg rounded-lg m-5 bg-slate-200'>
            <div className='p-5 bg-slate-100 text-3xl'>
              <h2><FontAwesomeIcon icon={ faMobileScreen } size="xs" /> Applications mobiles</h2>
            </div>
            <div className='px-10 py-5'>
              <p>Androïd et Iphone</p>
              <ul className='list-disc'>
                <li>Langage de programmation
                  <ul>
                    <li>React Native JS</li>
                  </ul>
                </li>
                <li>Mise en page
                  <ul>
                    <li>CSS (Boostrap, Talwindcss...)</li>
                  </ul>
                </li>
                <li>
                  Base de données :
                  <ul>
                    <li>MongoDB</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='shadow-lg rounded-lg m-5 bg-slate-200'>
            <div className='p-5 bg-slate-100 text-3xl'>
              <h2><FontAwesomeIcon icon={ faGlobe } size="xs" /> Outils du Web</h2>
            </div>
            <div className='px-10 py-5'>
              <ul className='list-disc'>
                <li>Référencement naturel :
                  <ul>
                    <li>SEO</li>
                  </ul>
                </li>
                <li>Outils de Versioning :
                  <ul>
                    <li>GITHub</li>
                  </ul>
                </li>
                <li>Gestion de projet :
                  <ul>
                    <li>Miro</li>
                    <li>Asana</li>
                  </ul>
                </li>
                <li>Graphisme :
                  <ul>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Indesign</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <button className='rounded-full bg-white p-3 m-10 text-center'>
            Tarif journalier : 400 €
          </button>
        </div>
      </div>
  );
  }

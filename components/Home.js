import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileScreen, faDesktop, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";

export default function Home() {

  const metaDescription = "Développeur Sénior Freelance, je vous propose la création et mise à jour de vos sites internet, ainsi que de vos applications web et mobiles."
 
  return (

    <div>
      <Helmet>
          <title>Freelance - développeur web - application mobile</title>
          <link rel="canonical" href="https://fialons-web.fr" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Développeur Freelance" key="Freelance" />
          <meta property="og:description" content={metaDescription}/>
          <meta name="description" content={metaDescription}/>
      </Helmet>
    <div className=" mx-10 px-4 my-10">
        <div className='text-center flex flex-col justify-center items-center mt-5'>
          
          <h1 className="text-4xl text-center md:text-left mt-5 mb-10">
            Développeur Web et Applications Mobiles
          </h1>
          <div className='flex flex-col md:flex-row justify-center items-center '>
            <Image src={ require=('/s-fialon.jpg') } alt="S. Fialon" width="80" height="70"
          className='rounded-full' />
            <h2 className="text-2xl text-center md:text-left m-5">Sandrine Fialon</h2>
          </div>
        </div>
        <div className='text-center my-5 md:my-10'>
          <p>Vous voulez renforcer vos équipes pour créer ou mettre à jour un site internet ou une application mobile ?</p>
          <p>Voici les outils et langages de programmation que j'utilise.</p>
          <p>Mon code respectent les normes W3C et est adapté au référencement naturel.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-stretch'>
          
        <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-red-400 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2><FontAwesomeIcon icon={ faDesktop } size="xs" /> Sites internet</h2>
            </div>
            <div className='bg-red-400 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl rounded-b-3xl bg-white'>
                <ul className=''>
                  <li className='mb-5'><span className='font-bold'>Langage de programmation :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> React JS</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> PHP (Symfony)</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Mise en page / animation</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> CSS (Boostrap, Talwindcss)</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Javascript (Jquery)</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Serveur :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Node JS</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Wamp / Mamp</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Bases de données :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> MongoDB</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> MySQL</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>CMS :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Wordpress</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Joomla</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-lime-400 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2><FontAwesomeIcon icon={ faMobileScreen } size="xs" /> Applications mobiles</h2>
            </div>
            <div className='bg-lime-400 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white'>
                <p>Androïd et Iphone</p>
                <ul className='list-disc'>
                  <li className='mb-5 mt-5'><span className='font-bold'>Langage de programmation</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> React Native JS</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Mise en page</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> CSS (Talwindcss)</li>
                    </ul>
                  </li>
                  <li className='mb-5'>
                  <span className='font-bold'>Base de données :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> MongoDB</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-sky-200 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2><FontAwesomeIcon icon={ faGlobe } size="xs" /> Outils du Web</h2>
            </div>
            <div className='bg-sky-200 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white'>
                <ul className='list-disc'>
                  <li className='mb-5'><span className='font-bold'>Référencement naturel :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> SEO</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Outils de Versioning :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> GITHub</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Gestion de projet :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Miro</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Asana</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Graphisme :</span>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Photoshop</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Illustrator</li>
                      <li><FontAwesomeIcon icon={faCheck} className="text-green-500" /> Indesign</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Link href="/contact">
            <button className='rounded-full bg-slate-100 p-3 m-10 text-center'>
              Tarif journalier : 400 €
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  }

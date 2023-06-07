import Image from 'next/image';
import Link from 'next/link';
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileScreen, faDesktop, faCheck, faUp, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from "react-scroll-to-top";

export default function Home() {

  const metaDescription = "Développeur Sénior Freelance, je vous propose la création et mise à jour de vos sites internet, ainsi que de vos applications web et mobiles."
  const metaTitle = "Freelance - développeur web - application mobile";
  return (

    <div className=" mx-10 px-4 my-10">
        <Helmet>
            <title>{metaTitle}</title>
            <link rel="canonical" href="https://fialons-web.fr" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metaTitle} key="Freelance" />
            <meta property="og:description" content={metaDescription}/>
            <meta name="description" content={metaDescription}/>
        </Helmet> 
        <div className='text-center flex flex-col justify-center items-center mt-5'>
          
          <h1 className="text-4xl text-center md:text-left mt-5 mb-10">
            Développeur Web et Applications Mobiles
          </h1>
          <div className='flex flex-col md:flex-row justify-center items-center '>
            <Image src={ require=('/s-fialon.jpg') } alt="S. Fialon" width={85} height={80} className='rounded-full' />
            <h2 className="text-2xl text-center md:text-left m-5">Sandrine Fialon</h2>
          </div>
        </div>
        <div className='text-center my-5 md:my-10'>
          <p className='text-2xl mb-4'>Vous voulez renforcer vos équipes<br/> pour créer ou mettre à jour un site internet ou une application mobile ?</p>
          <p>Voici les outils et langages de programmation que j'utilise.</p>
          <p>Mon code respectent les normes W3C et est adapté au référencement naturel.</p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-stretch'>
          
        <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-red-400 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2 className='flex items-center'><FontAwesomeIcon icon={ faDesktop } className='w-12 h-12 p-2 mr-2' /> Sites internet</h2>
            </div>
            <div className='bg-red-400 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl rounded-b-3xl bg-white'>
                <ul className=''>
                  <li className='mb-5'><span className='font-bold'>Langage de programmation :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> React JS</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> PHP (Symfony)</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Mise en page / animation</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> CSS (Boostrap, Talwindcss)</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Javascript (Jquery)</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Serveur :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Node JS</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Wamp / Mamp</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Bases de données :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> MongoDB</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> MySQL</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>CMS :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Wordpress</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Joomla</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-lime-400 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2 className='flex items-center'><FontAwesomeIcon icon={ faMobileScreen } className='w-12 h-12 p-2 mr-2' /> Applications mobiles</h2>
            </div>
            <div className='bg-lime-400 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white'>
                <p>Androïd et Iphone</p>
                <p className='bg-slate-100 pl-2 my-2'>Outils utilisés :</p>
                <ul className='list-disc'>
                  <li className='mb-5 mt-5'><span className='font-bold'>Langage de programmation</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> React Native JS</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Mise en page</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> CSS (Talwindcss)</li>
                    </ul>
                  </li>
                  <li className='mb-5'>
                  <span className='font-bold'>Base de données :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> MongoDB</li>
                    </ul>
                  </li>
                </ul>
                <p className='bg-slate-100 pl-2 mb-2'>Fonctionnalités :</p>
                <ul>
                  <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Photo / vidéo</li>
                  <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Map et Géolocalisation</li>
                  <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Upload de fichiers</li>
                  <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Appel à des API</li>
                  <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Authentification sécurisée</li>
                  <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Déploiement avec Expo</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-sky-200 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2 className='flex items-center'><FontAwesomeIcon icon={ faGlobe } className='w-12 h-12 p-2 mr-2' /> Outils du Web</h2>
            </div>
            <div className='bg-sky-200 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white'>
                <ul className='list-disc'>
                  <li className='mb-5'><span className='font-bold'>Référencement naturel :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> SEO</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Outils de Versioning :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> GITHub</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Gestion de projet</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Miro</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Asana</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Design Sprint</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Miro</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Whimsical</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Figma</li>
                    </ul>
                  </li>
                  <li className='mb-5'><span className='font-bold'>Graphisme :</span>
                    <ul>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Photoshop</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Illustrator</li>
                      <li className='flex items-center'><FontAwesomeIcon icon={faCheck} className="text-green-500 w-8 h-8 p-2" /> Indesign</li>
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
        <p className='text-center'>Je suis disponible dans les Bouches-du-Rhône, essentiellement sur Marseille, Aix-en-Provence et communes limitrophes ainsi qu'à distance.</p>
     
      <ScrollToTop smooth component={ <FontAwesomeIcon icon={ faCircleUp }/> }  />
    </div>
  );
  }

import styles from '../styles/Home.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faCertificate, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Parcours() {
  return (
    
      <div className="container mx-auto px-4">
        <h1 className="text-4xl m-5">
          <FontAwesomeIcon icon={faRoad} size="xs" /> Parcours
        </h1>
        <div className='m-5'>
          <p>Développeur pendant près de 10 ans dans des boites d'informatique et agences Web, je suis depuis peu freelance dans ce domaine.
            <br/>Voici en quelques mots mon parcours professionnel.</p>
        </div>
        <div className='flex flex-row justify-center items-stretch'>
          <div className='shadow-lg rounded-lg m-5 bg-slate-200'>
            <div className='p-5 bg-slate-100 text-3xl'>
              <h2><FontAwesomeIcon icon={ faHandshake } size="xs" /> Expériences professionnelles</h2>
            </div>
            <div className='px-10 py-5 '>
              <h3 className='mb-2'>DÉVELOPPEUR WEB et INFOGRAPHISTE</h3>
              <p className='italic'>2015 - 2019<br/>
                Monte-Carlo Multimédia, Monaco</p>
              <p className='mb-5'>Création de sites internet.<br/>
                Fullstack : Back et FrontEnd.<br/>
                SEO, référencement de site internet.</p>

              <h3 className='mb-2'>DÉVELOPPEUR WEB, INFOGRAPHISTE</h3>
              <p className='italic'>2015 - 2010<br/> 
              Micrologik, Menton</p>
              <p>Sites vitrines et sites e-commerce (Marketplace).<br/>
                Création PAO de flyers, affiches et brochures imprimés / BAT avec une imprimerie en ligne.</p>

            </div>
          </div>

          <div className='shadow-lg rounded-lg m-5 bg-slate-200'>
            <div className='p-5 bg-slate-100 text-3xl'>
              <h2><FontAwesomeIcon icon={ faCertificate } size="xs" /> Formations</h2>
            </div>
            <div className='px-10 py-5 '>
              <h3 className='mb-2'>RNCP 6 DÉVELOPPEUR WEB ET MOBILE</h3>
              <p className='italic'>2023<br/>
                La Capsule, Marseille</p>
              <p className='mb-5'>Chef de Projet<br/>
                Création de sites internet et d'applications mobiles Fullstack : Back et FrontEnd.<br/>
                Avec ReactJS, MongoDB et React Native.</p>

              <h3 className='mb-2'>LICENCE PRO INFORMATIQUE MULTIMÉDIA (IMASH)</h3>
              <p className='italic'>2009 - 2008<br/>Université Nice Sophia Antipolis</p>
              <p>Création de site internet.
              PHP, HTML/CSS, MYSQL</p>
            </div>
          </div>
       </div>

      </div>
  );
}


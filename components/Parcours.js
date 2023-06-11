import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faCertificate, faHandshake, faLink, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";
import Link from 'next/link';

export default function Parcours() {
  const metaDescription = "Qui suis-je ? Découvrez mon parcours de développeur Full Stack Freelance en allant à l'essentiel.";
  const metaTitle = "Parcours - CV - Freelance - développeur web et mobile";

  return (
    
    <div className=" mx-10 px-4 my-10">

      <Helmet>
        <title>{metaTitle}</title>
        <link rel="canonical" href="https://fialons-web.fr/parcours" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} key="Parcours - CV - Freelance" />
        <meta property="og:description" content={metaDescription}/>
        <meta name="description" content={metaDescription}/>
      </Helmet>

      <h1 className="text-4xl my-5 flex">
        <FontAwesomeIcon icon={faRoad} className='w-12 h-12 p-2 mr-2' /> Parcours
      </h1>
        <div className='my-5'>
          <p>Développeur pendant près de 10 ans dans des boites d'informatique et agences Web, voici en quelques mots mon parcours professionnel.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-stretch'>
          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-sky-200 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2 className='flex items-center'><FontAwesomeIcon icon={ faHandshake } className='w-12 h-12 p-2 mr-2' /> Expériences professionnelles</h2>
            </div>
            <div className='bg-sky-200 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white rounded-b-3xl'>
                <h3 className='mb-2 card-title'>DÉVELOPPEUR WEB et INFOGRAPHISTE</h3>
                <p className='italic mb-3'>2015 - 2019<br/>
                  Monte-Carlo Multimédia, Monaco</p>
                <p className='mb-5'>Création de sites internet.<br/>
                  Fullstack : Back et FrontEnd.<br/>
                  SEO, référencement de site internet.</p>

                <h3 className='mb-2 card-title'>DÉVELOPPEUR WEB, INFOGRAPHISTE</h3>
                <p className='italic mb-3'>2015 - 2010<br/> 
                Micrologik, Menton</p>
                <p>Sites vitrines et sites e-commerce (Marketplace).<br/>
                  Création PAO de flyers, affiches et brochures imprimés / BAT avec une imprimerie en ligne.</p>
              </div>
            </div>
          </div>

          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-sky-200 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2 className='flex items-center'><FontAwesomeIcon icon={ faCertificate } className='w-12 h-12 p-2 mr-2' /> Formations</h2>
            </div>
            <div className=' bg-sky-200 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white'>
                <h3 className='mb-2 card-title'>RNCP 6 DÉVELOPPEUR WEB ET MOBILE</h3>
                <p className='italic mb-3'>2023<br/>
                  La Capsule, Marseille</p>
                <p className='mb-5'>
                  Création de sites internet et d'applications mobiles Fullstack : Back et FrontEnd.<br/>
                  Avec ReactJS, MongoDB et React Native.</p>

                <h3 className='mb-2 card-title'>LICENCE PRO INFORMATIQUE MULTIMÉDIA (IMASH)</h3>
                <p className='italic mb-3'>2009 - 2008<br/>Université Nice Sophia Antipolis</p>
                <p>Création de site internet.
                PHP, HTML/CSS, MYSQL</p>
              </div>
            </div>
          </div>
       </div>

       <div className='flex flex-col md:flex-row justify-center items-stretch'>
          <div className='shadow-lg m-5 rounded-3xl rounded-tr-3xl bg-white'>
            <div className='p-5 text-3xl bg-sky-200 rounded-tr-3xl rounded-bl-3xl rounded-tl-3xl rounded-b-none'>
              <h2 className='flex items-center'><FontAwesomeIcon icon={ faBullseye } className='w-12 h-12 p-2 mr-2' /> Autres</h2>
            </div>
            <div className=' bg-sky-200 rounded-b-3xl'>
              <div className='px-10 py-5 rounded-tr-3xl bg-white'>
                <h3 className='mb-2 card-title'>DIPLOME D'ÉTAT et CQP Animateur Tir à l'Arc</h3>
                <p className='italic mb-3'>2021<br/>
                  FFTA (Fédération Française de Tir à l'arc)</p>
                <p className='mb-5'>
                  Entrainement en club et animations extra-fédérales.<br/>
                  Formation des Entraineurs Fédéraux (<abbr title='Équipe Technique Régionale'>ETR</abbr> PACA).</p>
                <p><Link href="https://boxdelarcher.fr" rel="noopener noreferrer" target='_blank'>
                  <div className='flex items-center cursor-pointer hover:text-slate-400'>
                    <FontAwesomeIcon icon={faLink} size="xs" className='md:text-lg text-2xl w-8 h-8 mr-2' /> Site web
                  </div>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
  );
}


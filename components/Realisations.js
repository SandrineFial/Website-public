import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";

export default function Realisations() {

  const metaDescription = "Voici les sites web, les applications web et mobiles que j'ai réalisé avec différents langages de programmation : PHP, Javascript Css. Avec les Frawmeword React JS ou alos Symfony.";
  const metaTitle = "Réalisations : sites web, applications mobiles";

  const tabSites = [
    { "img": "/site-briefcreativ.png", "alt": "BriefCreativ", 
      "titre": "ReactJS Tailwind", "description":"Génération des routes en BackEnd. Framework DaisyUi." },
    { "img": "/site-grand-prix.jpg", "alt": "Grad Prix de Monaco", 
        "titre": "PHP", "description":"Site développé en PHP. Site Multilangues. Gestion de billeterie en ligne." },
    { "img": "/site-entrainement.webp", "alt": "Entrainement", 
      "titre": "CodeIgniter framework PHP", "description":"Site de gestion d'entrainement, de statistiques. Effets Jquery et CSS avec bootstrap." },
    { "img": "/site-immobilier.webp", "alt": "Immobilier", 
    "titre": "Symfony", "description":"Site développé en PHP avec récupération des données SQL. Intégration de maquette html." },
    { "img": "/site-labeaume.webp", "alt": "Labeaume", 
      "titre": "Wordpress", "description":"Site créé avec Wordpress. Gestion du site par le client. Site optimité pour le référencement SEO." },
    { "img": "/site-monacohotel.webp", "alt": "MonacoHotel", 
      "titre": "Symfony multilangues", "description":"Site de réservation en lien avec Booking. SEO multilangues." },
  ];
    
  const sites = tabSites.map(
    (data, k) => { 
      return ( 
        <div key={ "sites_"+k}
          className="card md:h-96 md:w-96 bg-base-100 border-1 border-slate-100 shadow-xl my-5 mockup-window border bg-base-100">
          <figure>
              <div className="flex justify-center bg-base-200">                    
                <img src={data.img} alt={data.alt} className='transition duration-300 hover:scale-150 hover:-translate-y-1 h-48 w-96 object-contain'/>
              </div>
          </figure>
          <div className="card-body">
            <div className=''>
              <h2 className="card-title">{data.titre}</h2>
              <p>{data.description}</p>
            </div> {/*}
            <div className="card-actions justify-end">
              <figure><img src="/site-entrainement.webp" alt="Entrainement" className='h-24 w-24' /></figure>
            </div> */}
          </div>
        </div>
       ) }
  )


  const tabImgFlyers = [
    { "img": "flyer-asian.jpg", "alt":"Flyer Asian store"},
    { "img": "flyer-boulanger.jpg", "alt":"Flyer Boulangerie"},
    { "img": "flyer-boutique.jpg", "alt":"Flyer Boutique"},
    { "img": "flyer-EHPAD-var.jpg", "alt":"Sport sante"},
    { "img": "affiche-ordi.jpg", "alt":"Affiche ordi"},
    { "img": "affiche-maintenance.jpg", "alt":"Affiche maintenance"},
    { "img": "affiche-pc.jpg", "alt":"Affiche PC"},
  ];

  const tabImgCV = [
    { "img": "carte-visite-cuisinier.jpg", "alt": "CV cuisinier" },
    { "img": "carte-visite-demenagement.jpg", "alt": "CV Demenageur" },
    { "img": "carte-visite-infirmiere.jpg", "alt": "CV Infirmière" },
    { "img": "carte-visite-menage.jpg", "alt": "CV Menage" },
  ];

  const imgFlyers = tabImgFlyers.map(
    (data, k) => { 
      const lienImg = "/infographie/"+data.img;
      return ( <img key={ "flyers_"+k} src={lienImg} alt={data.alt} className="h-64 shadow-xl mb-4 transition duration-300 hover:scale-150 hover:-translate-y-1"/> ) }
  )

  const imgCV = tabImgCV.map(
    (data, k) => { 
      const lienImg = "/infographie/"+data.img;
      return ( <img key={ "cv_"+k} src={lienImg} alt={data.alt} className="h-40 shadow-xl mb-4 transition duration-300 hover:scale-125 hover:-translate-y-1"/> ) }
  )

  return (

    <div>
      <Helmet>
          <title>{metaTitle}</title>
          <link rel="canonical" href="https://fialons-web.fr/realisations" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metaTitle} key="Websites, applications" />
          <meta property="og:description" content={metaDescription}/>
          <meta name="description" content={metaDescription}/>
      </Helmet>
      <div className=" mx-10 px-4 my-10">
        <h1 className="text-4xl my-5 flex">
          <FontAwesomeIcon icon={faImage} className='w-12 h-12 p-2 mr-2 ml-0'/>Réalisations
        </h1>
        <p>Vous trouvez ici quelques sites web que j'ai réalisés, utilisant différentes technologies.</p>
        <p>Tous les sites que je créé respectent les normes W3C et sont Responsives, adaptables sur toutes les interfaces (mobiles, tablettes et ordinateurs).</p>

        <div className='divide-y'>
            <div className='my-10'>
              <h2 className='py-5 font-bold text-2xl bg-slate-100 pl-2 border-1 border-slate-100 border-b-slate-600 rounded-t-lg'>Web</h2>
              <div className='flex md:flex-row flex-col md:space-x-5 justify-center md:flex-wrap items-center'>

                {sites}
              
              </div>
            </div>

            <div className='my-10'>
              <h2 className='py-5 font-bold text-2xl bg-slate-100 pl-2 border-1 border-slate-100 border-b-slate-600 rounded-t-lg'>Infographie, print</h2>

              <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center p-4 space-x-4">
                {imgFlyers}
              </div>   

              <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center p-4 space-x-4">
                  {imgCV}
              </div>  
            </div>


            <div className='my-10'>
              <h2 className='py-5 font-bold text-2xl bg-slate-100 pl-2 border-1 border-slate-100 border-b-slate-600 rounded-t-lg'>Applications mobiles</h2>
              <div className='flex md:flex-row flex-col md:space-x-5 justify-center items-center'>

                <div className="card md:w-96 md:h-96 bg-base-100 shadow-xl my-5">
                  <figure className='bg-slate-200'>
                    <img src="/appli-generateur-seance.jpg" alt="Appli mobile" className='transition duration-300 hover:scale-150 hover:-translate-y-1 h-60 w-96 object-contain' />
                  </figure>
                  <div className="card-body">
                    <div className=''>
                      <h2 className="card-title">Générateur de séances</h2>
                      <p>Application mobile en cours de développement avec React Native.</p>
                    </div> 
                    
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
      <ScrollToTop smooth component={ <FontAwesomeIcon icon={ faCircleUp }/> }  />
    </div>
  );
}


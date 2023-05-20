import styles from '../styles/Home.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Realisations() {
  return (
    <div className=" mx-10 px-4 my-10">
      <h1 className="text-4xl m-5">
        <FontAwesomeIcon icon={faImage} size="xs" /> Réalisations
      </h1>
      <p>Vous trouvez ici quelques sites web que j'ai réalisés, utilisant différentes technologies.</p>
      <p>Tous les sites que je créé respectent les normes W3C et sont Responsives, adaptables sur toutes les interfaces (mobiles, tablettes et ordinateurs).</p>

      <div className='divide-y'>
          <div className='my-10'>
            <h2 className='py-5 font-bold text-2xl'>Web</h2>
            <div className='flex md:flex-row flex-col md:space-x-5 justify-center items-center'>

                <div className="card md:w-96 bg-base-100 shadow-xl my-5">
                  <figure>
                    <div className="mockup-window border bg-base-300">
                      <div className="flex justify-center bg-base-200">                    
                        <img src="/site-entrainement.webp" alt="Entrainement" />
                      </div>
                    </div>  
                  </figure>
                  <div className="card-body">
                    <div className=''>
                      <h2 className="card-title">BackEnd - FrontEnd</h2>
                      <p>Site de gestion d'entrainement, de statistiques. Codé avec php, javascript et bootstrap.</p>
                    </div> {/*}
                    <div className="card-actions justify-end">
                      <figure><img src="/site-entrainement.webp" alt="Entrainement" className='h-24 w-24' /></figure>
                    </div> */}
                  </div>
                </div>

                <div className="card md:w-96 bg-base-100 shadow-xl my-5">
                  <figure>
                    <div className="mockup-window border bg-base-300">
                      <div className="flex justify-center bg-base-200">
                        <img src="/site-immobilier.webp" alt="Immobilier" />
                      </div>
                    </div>                    
                  </figure>
                  <div className="card-body">
                    <div className=''>
                      <h2 className="card-title">FullStack : FrontEnd + BackEnd</h2>
                      <p>Site développé avec le framework php Symfony.</p>
                    </div> {/*
                    <div className="card-actions justify-end">
                      <figure><img src="/site-immobilier.webp" alt="Immobilier" className='h-24 w-24' /></figure>
                    </div> */}
                  </div>
                </div>

                <div className="card md:w-96 bg-base-100 shadow-xl my-5">
                  <figure>
                    <div className="mockup-window border bg-base-300">
                      <div className="flex justify-center bg-base-200">
                        <img src="/site-labeaume.webp" alt="Labeaume" />
                      </div>
                    </div>  
                  </figure>
                  <div className="card-body flex">
                    <div className=''>
                      <h2 className="card-title">Wordpress</h2>
                      <p>Site créé avec Wordpress. Gestion du site par le client.</p>
                      <p>Site Full Référencement.</p>
                    </div> {/*
                    <div className="card-actions justify-end">
                      <figure><img src="/site-labeaume.webp" alt="Labeaume" className='h-24 w-24' /></figure>
                    </div> */}
                  </div>
                </div>

                <div className="card md:w-96 bg-base-100 shadow-xl my-5">
                  <figure>
                    <div className="mockup-window border bg-base-300">
                      <div className="flex justify-center bg-base-200">
                        <img src="/site-monacohotel.webp" alt="MonacoHotel" />                  
                      </div>
                    </div>  
                  </figure>
                  <div className="card-body flex flex-row">
                    <div className=''>
                      <h2 className="card-title">Site multilangues</h2>
                      <p>Site de réservation en lien avec Booking. SEO multilangues. Créé avec Symfony.</p>
                    </div> {/*}
                    <div className="card-actions justify-end">
                      <figure><img src="/site-monacohotel.webp" alt="MonacoHotel" className='h-24 w-24' /></figure>
                  </div>*/}
                  </div>
                </div>

            </div>
          </div>

          <div className='my-10'>
            <h2 className='py-5 font-bold text-2xl'>Applications mobiles</h2>

          <div className='flex md:flex-row flex-col md:space-x-5 justify-center items-center'>

            <div className="card md:w-96 bg-base-100 shadow-xl my-5">
              <figure className='bg-slate-200'><img src="/appli-generateur-seance.jpg" alt="Appli mobile" /></figure>
              <div className="card-body">
                <div className=''>
                  <h2 className="card-title">Générateur de séances</h2>
                  <p>Application mobile en cours de développement avec React Native.</p>
                </div> 
                
              </div>
            </div>
          </div>


          </div>

          <div className='my-10'>
            <h2 className='py-5 font-bold text-2xl'>Infographie, print</h2>

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center p-4 space-x-4">
                <img src="/infographie/flyer-asian.jpg" alt="Flyer Asian store" className="h-64 shadow-xl mb-4"/>
                <img src="/infographie/flyer-boulanger.jpg" alt="Flyer Boulangerie"  className="h-64 shadow-xl mb-4"/>
                <img src="/infographie/flyer-boutique.jpg" alt="Flyer Boutique"  className="h-64 shadow-xl mb-4"/>
                <img src="/infographie/flyer-stage-ete.jpg" alt="Stage sport été" className="h-64 shadow-xl mb-4"/>
                <img src="/infographie/affiche-ordi.jpg" alt="Affiche ordi" className="h-64 shadow-xl mb-4"/>
                <img src="/infographie/affiche-maintenance.jpg" alt="Affiche maintenance"  className=" h-64 shadow-xl mb-4"/>
                <img src="/infographie/affiche-pc.jpg" alt="Affiche PC"  className="h-64 shadow-xl mb-4"/>
            </div>   

            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center p-4 space-x-4">
                <img src="/infographie/carte-visite-cuisinier.jpg" alt="CV cuisinier" className="h-32 shadow-xl mb-4"/>
                <img src="/infographie/carte-visite-demenagement.jpg" alt="CV Demenageur" className="h-32 shadow-xl mb-4"/>
                <img src="/infographie/carte-visite-infirmiere.jpg" alt="CV Infirmière" className="h-32 shadow-xl mb-4"/>
                <img src="/infographie/carte-visite-menage.jpg" alt="CV Menage" className="h-32 shadow-xl mb-4"/>
                
            </div>  
          </div>
      </div>

    </div>
  );
}


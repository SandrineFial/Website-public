import React, { useState, useRef } from 'react';
import { Helmet } from "react-helmet";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const MAIL_REACT_APP_TEMPLATE_ID="template_mail_website";
const MAIL_REACT_APP_SERVICE_ID="website_react-contact";
const MAIL_REACT_APP_PUBLIC_KEY="apFfcvXqsGlvOjOSD";

export default function Contact() {
  const form = useRef();
  const [ nomMsg, setnomMsg ] = useState("");
  const [ mailMsg, setmailMsg ] = useState("");
  const [ textMsg, settextMsg ] = useState("");
  const [ msgEnvoye, setMsgEnvoye ] = useState("");
  
  const metaDescription = "Vous souhaitez renforcez votre équipe pour la création et mise à jour de vos sites internet, ainsi que de vos applications web et mobiles ? Un devis ou d'autres informations, je me ferais un plaisir de vous répondre. Je suis disponible sur Marseille, Aix-en-Provence et communes limitrophes ainsi qu'à distance."
  const metaTitle = "Contact - Freelance - développeur web - application mobile";
 
  const envoiMail = (e) => {
    
    if(nomMsg!=="" && mailMsg !=="" && textMsg!=="") {
        e.preventDefault(); 
        let templateParams = {
          user_name: nomMsg,
          user_email: mailMsg,
          message: textMsg
        };
        console.log('Champs envoyé : FORM',form.current);
        emailjs.send( 
          MAIL_REACT_APP_SERVICE_ID, MAIL_REACT_APP_TEMPLATE_ID, templateParams, MAIL_REACT_APP_PUBLIC_KEY
        ).then( (result) => { 
          //console.log("Retour", result);
          setnomMsg(""); 
          setmailMsg(""); 
          settextMsg("");
          setMsgEnvoye("Message envoyé. Merci");
        }, 
        (error) => { 
            console.log("Non envoyé", error.text); }
        ); 

    } else { }
  }
  
  return (
      <div className='md:w-3/4 mx-auto'>
        
      <Helmet>
        <title>{metaTitle}</title>
        <link rel="canonical" href="https://fialons-web.fr/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} key="Contact Freelance" />
        <meta property="og:description" content={metaDescription}/>
        <meta name="description" content={metaDescription}/>
      </Helmet>
       <div className='flex flex-col md:flex-row justify-center items-center my-10 mx-10'>
          <Image src={ require=('/s-fialon.jpg') } alt="S. Fialon" width={115} height={110} className='rounded-full' />
          <div className='flex flex-col md:flex-row justify-center items-center bg-slate-100 rounded-3xl md:rounded-full pb-5 md:pb-0 ml-5 md:mt-0 -mt-10 pt-5 md:pt-0 divide-x'>
            <h1 className="text-3xl text-left m-10">
              Sandrine Fialon<br/>
              <span className='text-2xl'>Développeur Web<br/>et Applications Mobiles</span>
            </h1>
            <div className='pl-5 pr-5'>
              <div className='flex flex-row justify-start items-center p-2'>
                <div className='text-xl w-9 h-9 bg-sky-200 rounded-full p-2 mr-2'><FontAwesomeIcon icon={ faPhone }/></div>
                <div>Téléphone : <Link href="tel:0683874742">06.83.87.47.42</Link></div>
              </div>
              <div className='flex flex-row justify-start items-center p-2'>
                <div className='text-xl w-9 h-9 bg-sky-200 rounded-full p-2 mr-2'><FontAwesomeIcon icon={ faEnvelope}/></div>
                <div>Email : fialon.sandrine_at_gmail.com</div>
              </div>
              <div className='flex flex-row justify-start items-center p-2'>
                <div className='text-xl w-8 h-8 bg-sky-200 rounded-full p-2 mr-2'><FontAwesomeIcon icon={ faLocationDot }/></div>
                <div>Adresse : Marseille 8e</div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto text-center mb-10 px-10'>
        <p className='text-center text-2xl mb-4'>Disponible dans les Bouches-du-Rhône,<br/>sur Marseille, Aix-en-Provence et communes limitrophes<br/>
        et à distance.</p>
          <p>N'hésitez pas à me contacter pour un projet commun dans le web.<br/>
            Je ne manquerais pas de vous répondre.</p>
            { msgEnvoye !== "" ? 
              (<div className='bg-green-200 rounded-lg mt-4 p-2 mx-auto container max-w-xs md:max-w-md'>{msgEnvoye}</div>)
              : ""
            }
        </div>
        
        <form ref={form} onSubmit={envoiMail}>
            <div className="p-5 mx-auto mb-10 rounded-lg container bg-slate-100 max-w-xs md:max-w-md">
                <div className='mb-3 flex flex-col justify-center items-center'>
                  <input type="text" placeholder="Nom prénom" name='user_name'
                    className="input input-bordered input-md w-full max-w-md mb-5"
                    onChange={(e) => setnomMsg(e.target.value)} value={nomMsg} required />
                  <input type="email" placeholder="E-mail" name='user_email'
                    className="input input-bordered input-md w-full max-w-md mb-5"
                    onChange={(e) => setmailMsg(e.target.value)} value={mailMsg} required />
                  <textarea placeholder="Message" name='message'
                  className="textarea textarea-bordered textarea-md w-full max-w-md mb-5"
                  onChange={(e) => settextMsg(e.target.value)} value={textMsg} required ></textarea>
                  <div>
                    <button type='submit' className="bg-sky-200 rounded-lg px-10 p-3 shadow hover:bg-sky-600 hover:text-white cursor-pointer flex justify-center items-center">
                      <span className='w-10 h-10'><FontAwesomeIcon icon={ faEnvelope} className='mr-2 text-xs' size='xs' /></span>
                     Envoyer
                    </button>
                  </div>
                </div>
            </div>
          </form>
        
      </div>
      
  );
}
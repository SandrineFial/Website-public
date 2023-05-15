import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Contact() {
  const [nomMsg, setNomMsg] = useState('');
  const [mailMsg, setMailMsg] = useState('');
  const [textMsg, setTextlMsg] = useState('');

  const envoiMail = () => {

  }

  return (
      <div className=''>
       <div className='flex flex-row justify-center items-center mt-10 mb-10'>
          <Image src={ require=('/s-fialon.jpg') } alt="S. Fialon" width="115" height="110"
          className='rounded-full' />
          <div className='flex flex-row justify-center items-center bg-slate-300 rounded-lg ml-5'>
            <h1 className="text-4xl text-left m-10">
              Sandrine Fialon<br/>
              <span className='text-2xl'>Développeur Web<br/>et Applications Mobiles</span>
            </h1>
            <div className='border-l-slate-400 border-2 border-slate-300 pl-5 pr-5'>
              <div className='flex flex-row justify-start items-center p-2'>
                <FontAwesomeIcon icon={ faPhone } className='bg-sky-200 rounded-full p-2 mr-2' />
                <div>Téléphone : 06.83.87.47.42</div>
              </div>
              <div className='flex flex-row justify-start items-center p-2'>
                <FontAwesomeIcon icon={ faEnvelope} className='bg-sky-200 rounded-full p-2 mr-2' /> 
                <div>Email : fialon.sandrine_at_gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto text-center mb-10'>
          <p>N'hésitez pas à me contacter pour un projet commun dans le web.<br/>
            Je ne manquerais pas de vous répondre.</p>
        </div>
          <form  onSubmit={ envoiMail }>
            <div className="p-5 container mx-auto mb-10 border-3 border-slate-300 rounded">
                <div className='flex flex-row justify-start items-center w-full mb-3'>
                  <label className='w-3/12 p-3'>Nom prénom</label>
                  <input type='text' value={nomMsg} className='w-9/12 p-3'/>
                </div>
                <div className='flex flex-row justify-start items-center w-full mb-3'>
                  <label className='w-3/12 p-3'>Mail</label>
                  <input type='email' value={mailMsg} className='w-9/12 p-3'/>
                </div>
                <div className='flex flex-row justify-start items-center w-full mb-3'>
                  <label className='w-3/12 p-3'>Message</label>
                  <textarea value={textMsg} className='w-9/12 p-3'/>
                </div>
                <div>
                  <input type='submit' value='Envoyer' className="bg-sky-200 rounded-lg px-10 p-3 shadow" />
                </div>
            </div>
          </form>
      </div>
  );
}


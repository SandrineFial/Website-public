import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
/*
import { ApiClient, Configuration, TransactionalEmailsApi } from 'sib-api-v3-sdk';
const defaultClient = ApiClient.instance;
const API_KEY = "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";
defaultClient.authentications['api-key'].apiKey = API_KEY;
const transactionalEmailsApi = new TransactionalEmailsApi();
*/
//import { TransactionalEmailsApi } from 'sib-api-v3-sdk';
//const apiInstance = new TransactionalEmailsApi();
//import SibApiV3Sdk from "sib-api-v3-sdk"; // NE MARCHE PAS
//var SibApiV3Sdk = require('sib-api-v3-sdk');
/*
import axios from 'axios';
//import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeTemplate from "../emails/WelcomeTemplate";
import { sendEmail } from "../lib/email";
// const nodemailer = require("nodemailer");
*/

export default function Contact() {
  
  const [ form, setForm ] = useState({ nomMsg: '', mailMsg: '', textMsg: '' });
  const [ nomMsg, setnomMsg ] = useState("");
  const [ mailMsg, setmailMsg ] = useState("");
  const [ textMsg, settextMsg ] = useState("");
  
  const metaDescription = "Vous souhaitez renforcez votre équipe pour la création et mise à jour de vos sites internet, ainsi que de vos applications web et mobiles ? Un devis ou d'autres informations, je me ferais un plaisir de vous répondre. Je suis disponible sur Marseille, Aix-en-Provence et communes limitrophes ainsi qu'à distance."
  const metaTitle = "Contact - Freelance - développeur web - application mobile";

  const envoiMail = async (e) => {
    if(nomMsg!=="" && mailMsg !=="" && textMsg!=="") {
      /*
      const sendSmtpEmail = {
          to: [{ "email": "fialon.sandrine@gmail.com", "name": "To Name" }],
          sender: { "email": "from@example.com", "name": "From Name" },
          subject: "Subject of the message",
          htmlContent: "<html><body><h1>Hi!</h1><p>Test email sent from React App using Sendinblue API.</p></body></html>"
      };
      transactionalEmailsApi.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function(error) {
        console.error(error);
    });*/
/*
      apiInstance.sendTransacEmail({
        "subject":"Test Subject",
        "sender":{
            "name":"John Doe",
            "email":"johndoe@example.com"
        },
        "to":[
            {
                "email":"jane.doe@example.com",
                "name":"Jane Doe"
            }
        ],
        "htmlContent":"<html><body><h1>Hello, World!</h1></body></html>"
      })
      .then((data) => {
        console.log('API called successfully. Returned data: ' + data);
      }, (error) => {
        console.error(error);
      });
*/
      /*
      var defaultClient = SibApiV3Sdk.ApiClient.instance;

      // Configure API key authorization: api-key
      var apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = API_KEY
      // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
      //apiKey.apiKeyPrefix['api-key'] = "Token"

      // Configure API key authorization: partner-key
      var partnerKey = defaultClient.authentications['partner-key'];
      partnerKey.apiKey = API_KEY
      // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
      //partnerKey.apiKeyPrefix['partner-key'] = "Token"

      var api = new SibApiV3Sdk.AccountApi()
      api.getAccount().then(function(data) {
        console.log('API called successfully. Returned data: ' + data);
      }, function(error) {
        console.error(error);
      }); */
      /*
      var defaultClient = SibApiV3Sdk.ApiClient.instance;
      
      var apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = API_KEY;
      var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
      var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
            
      emailCampaigns.name = "Campaign sent via the API";
      emailCampaigns.subject = "Web Message Freelance";
      emailCampaigns.sender = {"name": "From name", "email": mailMsg};
      emailCampaigns.type = "classic";
      // Content that will be sent\
      emailCampaigns.htmlContent = textMsg;
      // Select the recipients\
      // Make the call to the client\
      apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
        console.log('API called successfully. Returned data: ' + data);
      }, function(error) {
      console.error(error);
      });
*/
    } else {

    }
    /*
    await sendEmail({
      to: "kiran@example.com",
      subject: "Welcome to NextAPI",
      html: render(WelcomeTemplate()),
    });
    return res.status(200).json({ message: "Email sent successfully" });
    */
    /*
    e.preventDefault();

    axios.post('/send-email', form)
      .then((res) => {
        console.log(res);
        setForm({ ...form, [e.target.name]: '' });
      })
      .catch((err) => console.log(err));
      */
/*
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: nomMsg+' <'+mailMsg+'>', // sender address
        to: "archestia@gmail.com", // list of receivers
        subject: "Message site Webdev Freelance", // Subject line
        text: textMsg, // plain text body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    */

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
        </div>
        {/*  
        <form onSubmit={ () => envoiMail }>
            <div className="p-5 mx-auto mb-10 rounded-lg container bg-slate-100 max-w-xs md:max-w-md">
                <div className='mb-3 flex flex-col justify-center items-center'>
                  <input type="text" placeholder="Nom prénom" className="input input-bordered input-md w-full max-w-md mb-5"
                    onChange={(e) => setnomMsg(e.target.value)} value={nomMsg} required />
                  <input type="email" placeholder="E-mail" className="input input-bordered input-md w-full max-w-md mb-5"
                    onChange={(e) => setmailMsg(e.target.value)} value={mailMsg} required />
                  <textarea placeholder="Message" className="textarea textarea-bordered textarea-md w-full max-w-md mb-5"
                  onChange={(e) => settextMsg(e.target.value)} value={textMsg} required ></textarea>
                  <div>
                    <button className="bg-sky-200 rounded-lg px-10 p-3 shadow hover:bg-sky-600 hover:text-white cursor-pointer flex justify-center items-center">
                      <span className='w-10 h-10'><FontAwesomeIcon icon={ faEnvelope} className='mr-2 text-xs' size='xs' /></span>
                     Envoyer
                    </button>
                  </div>
                </div>
            </div>
          </form>
        */}
      </div>
      
  );
}
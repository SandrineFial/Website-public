import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (

    <footer className="footer footer-center p-4 bg-sky-950 text-neutral-content">
      <div className="items-center grid-flow-col">
        
        <div className='w-6 h-3 cursor-pointer mr-2'>
          <Link href="https://www.linkedin.com/in/fialonsandrine/">
              <FontAwesomeIcon icon={ faLinkedinIn }/>
          </Link>
        </div>
        <div className='w-6 h-3 cursor-pointer'>
          <Link href="tel:0683874742">
              <FontAwesomeIcon icon={ faPhone }/>
          </Link>
        </div>
      </div> 
      <div className="grid-flow-col gap-4">
        <p>Copyright © 2023 - S. Fialon</p>
      </div>
    </footer>

  );
}

export default Footer;

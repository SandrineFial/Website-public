import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (

    <footer className="footer footer-center p-4 bg-sky-950 text-neutral-content">
      <div className="items-center grid-flow-col">
        
        <Link href="/">
          <div className='md:block hidden'>
            <Image src="/logo.png" alt="Logo" width={70} height={50} />
          </div>
        </Link>
        <p>Copyright © 2023 - S. Fialon</p>
      </div> 
      <div className="grid-flow-col gap-4">
        <div className='w-7 h-7 cursor-pointer'>
          <Link href="https://www.linkedin.com/in/fialonsandrine/">
              <FontAwesomeIcon icon={ faLinkedinIn }/>
          </Link>
        </div>
        <div className='w-7 h-7 cursor-pointer'>
          <Link href="tel:0683874742">
              <FontAwesomeIcon icon={ faPhone }/>
          </Link>
        </div>
      </div>
    </footer>

  );
}

export default Footer;

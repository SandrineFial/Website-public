import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImage, faCommentDots, faRoad } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <div className='bg-sky-600'>
      <div className="flex flex-row p-3 justify-center items-center">
      <Image src="/logo.png" alt="Logo" width={70} height={50} />
        <Link href="/" className='cursor-pointer'>
          <div className="p-4">
            <FontAwesomeIcon icon={faHouse}size="xs" /> Accueil
          </div>
        </Link>
        <Link href="/realisations" className='cursor-pointer'>
          <div className="p-4">
            <FontAwesomeIcon icon={faImage} size="xs" /> Réalisations
          </div>
        </Link>
        <Link href="/parcours" className='cursor-pointer'>
          <div className="p-4">
            <FontAwesomeIcon icon={faRoad} size="xs" /> Parcours
          </div>
        </Link>
        <Link href="/contact" className='cursor-pointer'>
          <div className="p-4">
            <FontAwesomeIcon icon={faCommentDots} size="xs" /> Contact
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faImage, faCommentDots, faRoad } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <div className='bg-sky-600 py-5 bg-gradient-to-t from-sky-400 to-sky-600'>
      <div className="flex flex-row justify-center items-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={70} height={50} />
            </Link>
          </li>
          <li>
            <Link href="/realisations">
              <div className="p-4 cursor-pointer hover:text-slate-300 text-white">
                <FontAwesomeIcon icon={faImage} size="xs" className='md:text-lg text-3xl' /> <span className='md:block hidden'>Réalisations</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/parcours">
              <div className="p-4 cursor-pointer hover:text-slate-300 text-white">
                <FontAwesomeIcon icon={faRoad} size="xs" className='md:text-lg text-3xl' /> <span className='md:block hidden'>Parcours</span>
              </div>
            </Link>
          </li>
          <li>

            <Link href="/contact">
              <div className="p-4 cursor-pointer hover:text-slate-300 text-white">
                <FontAwesomeIcon icon={faCommentDots} size="xs" className='md:text-lg text-3xl' /> <span className='md:block hidden'>Contact</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

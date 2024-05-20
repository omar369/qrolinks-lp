import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { NavMenu } from './nav-menu';
import Image from 'next/image';
import logo from '../../public/images/logo1.png';
import Link from 'next/link';

const MainNav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-black bg-opacity-50 text-white px-10 py-1">
      <div className="flex items-center px-10">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={logo.width / 3}
            height={logo.height / 3}
          />
        </Link>
        <NavMenu />
      </div>
      <div className="flex items-center px-10">
        <FaFacebook className="mr-3 text-2xl" />
        <FaInstagram className="mr-3 text-2xl" />
        <FaWhatsapp className="mr-3 text-2xl" />
      </div>
    </nav>
  );
};

export default MainNav;

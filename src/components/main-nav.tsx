'use client';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { NavMenu } from './nav-menu';
import Image from 'next/image';
import logo from '../../public/images/logo_negativo.svg';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Importamos los íconos de hamburguesa y cerrar

const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-col sm:flex-row items-center justify-between bg-black bg-opacity-50 text-gray-300 px-4 sm:px-10 py-2 sm:py-1">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={logo.width / 3}
            height={logo.height / 3}
          />
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      <div
        className={`sm:flex ${
          isOpen ? 'flex' : 'hidden'
        } flex-col sm:flex-row items-center px-4 sm:px-10 mt-2 sm:mt-0`}
      >
        <NavMenu />
        <div className="flex items-center mt-2 sm:mt-0 ">
          <FaFacebook className="mr-3 text-lg" />
          <Link href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61560813964412">
            <FaFacebook className="mr-3 text-lg" />
          </Link>
          <Link href="https://www.instagram.com/qrolinks/">
            <FaInstagram className="mr-3 text-lg" />
          </Link>
          <FaWhatsapp className="mr-3 text-lg" />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;

import React, { useState } from 'react';
import Logo from "@/assets/images/logo.png"
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className=" py-4 px-5 md:px-10 flex justify-between items-center">
      <div >
        <Link href="/" className="flex items-center ">
        <Image
          src={Logo}
          alt="Logo"
          className="w-8 h-8 mr-2"
        />
        <div className="font-bold text-xl ml-2">AI Namecard</div>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>
      <nav className={`hidden md:flex`}>
        <ul className="md:flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div>
      <nav className={` ${isMenuOpen?'block':'hidden'} md:hidden pb-5`}>
        <ul className="flex flex-col items-end gap-2 mr-5">
          <li>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;

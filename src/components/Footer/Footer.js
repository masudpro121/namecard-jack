import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed w-full bottom-0">
      <p>&copy; {new Date().getFullYear()} AI NameCard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} AI NameCard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

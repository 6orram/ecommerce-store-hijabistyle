import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const MiniNavbar: React.FC = () => {
  return (
    <div className="bg-black text-white py-2">
      {/* Contact Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto">
        <div className="flex items-center mb-2 sm:mb-0">
          <div className="mr-4 flex items-center gap-2">
            <FaPhone />
            <a href='tel:+212 638-884420'>+212 638-884420</a>
          </div>
          <div className="mr-4 flex items-center gap-2">
            <MdEmail />
            <a href='mailto:hijabistyle067@gmail.com'>hijabistyle067@gmail.com</a>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="hidden sm:flex items-center">
          <h3 className="text-lg font-semibold mr-4">Suivez-nous</h3>
          <a href="https://www.instagram.com/hijabi_style10/" className="text-white mr-4">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white mr-4">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-white">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;

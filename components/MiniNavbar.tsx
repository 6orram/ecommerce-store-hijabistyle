import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const MiniNavbar: React.FC = () => {
  return (
    <div className="bg-pink-500 text-white py-2"> {/* Set the background color to pink */}
      {/* Contact Info Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center container mx-auto">
        <div className="flex items-center mb-2 sm:mb-0">
          <div className="mr-4 flex items-center gap-2 transition-transform transform hover:scale-110">
            <FaPhone />
            <a href='tel:+212 638-884420'>+212 638-884420</a>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="hidden sm:flex items-center">
          <h3 className="text-lg font-semibold mr-4">Suivez-nous</h3>
          <a href="https://www.instagram.com/hijabi_style10/" target="_blank" className="text-white mr-4 transition-transform transform hover:scale-110">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100028444911292&ref=xav_ig_profile_web" target="_blank" className="text-white mr-4 transition-transform transform hover:scale-110">
            <FaFacebookF size={24} />
          </a>
          <a href="https://api.whatsapp.com/message/RADAXNMWDGCVN1?autoload=1&app_absent=0" target="_blank" className="text-white transition-transform transform hover:scale-110">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;

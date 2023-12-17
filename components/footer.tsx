import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-area section-gap border-t-2 bg-pink-500 text-white">
      <div className="container mx-auto pt-6">
        <div className="grid grid-cols-1 gap-8 text-center">
          <div className="col-span-1 flex justify-center">
            <div className="mb-8 text-center">
              <h6 className="text-xl font-bold mb-4">Suivez-nous</h6>
              <p className="text-gray-200">Réseaux Sociaux</p>
              <div className="footer-social flex justify-center items-center gap-6 mt-4">
                <a href="https://www.instagram.com/hijabi_style10/" target="_blank" className="text-white text-2xl transform transition-transform hover:scale-125" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100028444911292&ref=xav_ig_profile_web" target="_blank" className="text-white text-2xl transform transition-transform hover:scale-125" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://api.whatsapp.com/message/RADAXNMWDGCVN1?autoload=1&app_absent=0" target="_blank" className="text-white text-2xl transform transition-transform hover:scale-125" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 text-center">
            <p className="text-gray-200 mb-4">
              Copyright &copy;{new Date().getFullYear()}{' '}
              <a href="#" className="font-bold">
                HIJABI STYLE
              </a>{' '}
              Corporation. Tous les droits réservés.
            </p>
            <div className="border-t-2 border-white py-4">
              <p className="text-gray-200">
              Site web créé {' '}
                <i className="fa fa-hand-paper-o" aria-hidden="true"></i> par{' '}
                <a
                  href="https://gorram.netlify.com/"
                  target="_blank"
                  className="font-bold"
                >
                  Gorram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

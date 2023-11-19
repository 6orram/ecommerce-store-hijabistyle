import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-area section-gap border-t-2">
      <div className="container mx-auto pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="col-span-1 flex justify-center">
            <div className="mb-8 text-center">
              <h6 className="text-xl font-bold mb-4">À propos de nous</h6>
              <p className="text-gray-600">
              Nous sommes une entreprise de mode, vous propose une sélection exceptionnelle de hijabs, robes et abayas. Notre passion consiste à améliorer votre style et à vous offrir des pièces uniques qui allient élégance et confort.
              </p>
              <p className="text-gray-600 mt-4">
                Copyright &copy;{new Date().getFullYear()}{' '}
                <a href="#" className="text-zinc-950 font-bold">
                  HIJABI STYLE
                </a>{' '}
                Corporation. Tout les droits reservés. <br />
                Site web propulsé{' '}
                <i className="fa fa-hand-paper-o" aria-hidden="true"></i> par{' '}
                <a
                  href="https://gorram.netlify.com/"
                  target="_blank"
                  className="text-zinc-950 font-bold"
                >
                  6orram
                </a>
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-8 text-center">
              <h6 className="text-xl font-bold mb-4">Contactez-nous</h6>
              <form className="mt-4 text-left">
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="form-input py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-zinc-950 w-full"
                    placeholder="Entrez votre nom"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="text"
                    className="form-input py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-zinc-950 w-full"
                    placeholder="Entrez votre numéro de téléphone"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="form-input py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-zinc-950 w-full"
                    placeholder="Entrez votre message"
                  />
                </div>
                <button
                  type="submit"
                  className="click-btn btn border border-black text-balck-500 px-2 py-2 transition-all duration-300 hover:bg-black hover:text-white hover:border-white"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="mb-8 text-center">
              <h6 className="text-xl font-bold mb-4">Suivez nous</h6>
              <p className="text-gray-600">Réseaux Sociaux</p>
              <div className="footer-social flex justify-center items-center gap-6 mt-4">
                <a href="https://www.instagram.com/hijabi_style10/" className="text-zinc-950 text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-zinc-950 text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-zinc-950 text-2xl">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

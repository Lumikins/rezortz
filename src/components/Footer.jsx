import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { links } from "../data";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-primary-purple/5">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        {/* logo and social icons */}
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="uppercase cursor-pointer">rezortz</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
        {/* menus */}
        <div className="flex justify-between">
          <ul className="capitalize lg:flex lg:gap-8">
            <li className="cursor-pointer hover:text-primary-purple">carrières</li>
            <li className="cursor-pointer hover:text-primary-purple">presse</li>
            <li className="cursor-pointer hover:text-primary-purple">commercial</li>
            <li className="cursor-pointer hover:text-primary-purple">juridique</li>
          </ul>
          <ul className="text-right lg:flex lg:gap-8">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-primary-purple"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-10">
          &copy; Rezortz 2023. Tous droits réservés - KrassDev.
        </p>
    </footer>
  );
};

export default Footer;

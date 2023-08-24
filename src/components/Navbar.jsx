import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { links } from "../data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex w-full justify-between items-center h-20 px-4 absolute text-white z-10">
      <h1 className="uppercase cursor-pointer">Rezortz</h1>
      <ul className="hidden md:flex items-center gap-20">
        {links.map((link) => (
          <li key={link.id} className="cursor-pointer hover:scale-125 duration-300">
            {link.name}
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-5">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>
      {/* hamburger */}
      <div
        className="md:hidden block z-10 cursor-pointer"
        onClick={handleToggle}
      >
        {toggle ? <AiOutlineClose size={20} color="black" className="hover:scale-150 duration-300" /> : <AiOutlineMenu size={20} />}
      </div>
      {/* mobile navbar */}
      <div
        className={
          toggle
            ? "absolute left-0 top-0 w-full bg-white text-primary-purple px-4 py-[1.4rem]"
            : "hidden"
        }
        onClick={handleToggle}
      >
        <ul>
          <h1 className="uppercase text-black">Rezortz</h1>
          {links.map((link) => (
            <li
              key={link.id}
              className="md:text-xl py-4 border-b border-primary-blue cursor-pointer"
            >
              {link.name}
            </li>
          ))}
          <div className="flex flex-col gap-5 py-8">
            <button>Recherche</button>
            <button>Compte</button>
          </div>
          <div className="flex items-center justify-evenly gap-10 my-8">
            <FaFacebook className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";
//import LOGO from '../assets/images/LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backfrop-blur-[10px] m-5 p-3 md:p-0">
        {/*Logo*/}
        <img src="" alt="Logo" className="h-7 ml-6 -mb-1" />

        {/*Navigation Links*/}
        <ul
          className={`
          ${isOpen ? "flex" : "hidden"} 
          menu-wrapper`}
        >
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/*Hire Me Button*/}
        <button className="">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;

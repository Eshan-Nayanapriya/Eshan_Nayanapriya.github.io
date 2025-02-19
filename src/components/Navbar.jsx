import React, { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";
//import LOGO from '../assets/images/LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true); //always open on larger screens
      } else {
        setIsOpen(false); //always close on smaller screens
      }
    };

    //set initial state based on screen size
    handleResize();

    //listen to resize events
    window.addEventListener("resize", handleResize);

    //cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border-2 border-[#fee6cc] backfrop-blur-[10px] m-5 p-3 md:p-0">
        {/*Logo*/}
        <img src="" alt="Logo" className="h-7 ml-6 -mb-1" />

        {/*Hamburger Menu (visible in smaller screens)*/}
        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

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
        <button
          className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary
                          rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

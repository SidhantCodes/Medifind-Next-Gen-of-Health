import React, { useState } from 'react';
import { navlinks } from '../constants';
import { close, logo, menu } from '../assets';
import Button from './Button';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[120px] h-[35px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] mt-3 ${
              active === nav.title ? "text-[#1B8FA1]" : "text-[#41B5C5]"
            } hover:text-[#1B8FA1] ${index === navlinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))}
        <Button />
      </ul>
      

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle? close : menu} alt='menu' className="w-[20px] h-[20px] cursor-pointer" onClick={() => setToggle(!toggle)} />
        <div className={`${!toggle ? "hidden" : "flex"} p-6 box-style absolute top-20 right-0 mx-4 my-2 min-w-[140px]  sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navlinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] px-3 py-1 ${
                  active === nav.title ? "text-black" : "text-[#2f2f2f]"
                } hover:text-1B8FA1 ${index === navlinks.length - 1 ? "mb-0" : "mb-3"}`}
                onClick={() => {
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>  
              </li>
            ))}
            <Button />
          </ul>
          
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Link } from 'react-router-dom';
import { li } from 'framer-motion/client';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, settoggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt='logoimg' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex hover:text-red-300 hover:scale-125 transition-transform duration-300'>
            Bharath 
            <span className='sm:block hidden'>|NIT GOA Graduate

            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-red-300 hover:scale-125 transition-transform duration-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu} alt="menuimg" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>settoggle(!toggle)} />
          <div className={`${!toggle?'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((nav) => (
              <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-red-300 hover:scale-125 transition-transform duration-300 text-[16px] font-poppins font-medium cursor-pointer`}
              onClick={() => {
                settoggle(!toggle);
                setActive(nav.title);
              }}
            >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
          ))}
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
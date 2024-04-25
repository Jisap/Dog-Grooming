import React from 'react';
import { navigation } from '../data'
import { Link as ScrollLink } from 'react-scroll'

const links = [
  { name: 'Home', target: 'home', offset: -100 },
  { name: 'Appointment', target: 'appointment', offset: -80 },
  { name: 'Prices', target: 'prices', offset: -40 },
  { name: 'Contact', target: 'contact', offset: 0 },
]

const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        {/* {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a 
                href={item.href}
                className='capitalize hover:text-orange transition'
              >
                {item.name}
              </a>
            </li> 
          )
        })} */}
        {links.map((link, index) => {
          return (
            <ScrollLink
              offset={link.offset}
              to={link.target}
              smooth
              spy
              activeClass='active'
              key={index}
              className='capitalize hover:text-orange transition cursor-pointer'
            >
              {link.name}
            </ScrollLink>
          )
        })}
      </ul>
    </nav>
  )
};

export default Nav;

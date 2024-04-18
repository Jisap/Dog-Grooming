import React from 'react';
import { navigation } from '../data'

const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        {navigation.map((item, index) => {
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
        })}
      </ul>
    </nav>
  )
};

export default Nav;

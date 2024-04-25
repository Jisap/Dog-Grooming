import React from 'react';
import Logo from '../assets/img/logo-white.svg'
import { social } from '../data'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant' 


const footerContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: 'linear',
    },
  },
}

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
}

const Footer = () => {
  return (
    <footer className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <motion.div 
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between'
        >
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* copyright text */}
          <motion.div 
            variants={footerItem}
            className='text-[15px]'
          >
            &copy; Copyright 2024. All rights reserved.
          </motion.div>
          {/* socials */}
          <motion.div 
            variants={footerItem}
            className='flex gap-x-4'
          >
            {social.map((item, index) => {
              const Icon = item.icon
              return (
                <a href={item.href} key={index}>
                  <div className='bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 rounded-full 
                  flex justify-center items-center transition text-2xl'
                >
                    <Icon />
                  </div>
                </a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
};

export default Footer;

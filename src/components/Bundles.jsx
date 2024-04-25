import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant' 


const Bundles = ({bundles}) => {
  return (
    <motion.div 
      variants={fadeIn('up', 1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }} 
      className='flex flex-col md:flex-row justify-between gap-[30px]'
    >
      {bundles.map((bundle, index) => {
        const {name, price, list} = bundle
        return (
          <div 
            key={index}
            className='w-full max-w-1/3 bg-white shadow-primary text-center h-[560px] rounded-[60px] py-12 px-8'  
          >
            {/* price */}
            <div className='text-5xl font-bold text-blue mb-4'>
              ${price}
            </div>
            {/* name */}
            <div className='capitalize mb-12 text-blue font-medium'>
              {name}
            </div>
            {/* list */}
            <div className='flex flex-col gap-y-4 max-w-[230px] mx-auto'>
              {list.map((item, index) => {
                return (
                  <div 
                    key={index}
                    className='flex items-center gap-x-3'  
                  >
                    <BsCheckCircleFill className='text-orange text-xl'/>
                    <div className='capitalize'>
                      {item}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </motion.div>
  )
};

export default Bundles;

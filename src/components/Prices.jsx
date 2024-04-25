import React, { useState, useEffect } from 'react';
import { bundleData } from '../data.js';
import Bundles from './Bundles';
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant' 

const Prices = () => {

  const[index, setIndex] = useState(0);
  const[bundles, setBundles] = useState([]);

  useEffect(() => {
    setBundles(bundleData[0].services) // [{smart}, {premium}, {royal}]
  },[]);

  const getBundle = (name) => {
    const newBundle = bundleData.find((bundle) => { // [{small}, {medium}, {big}, {super}]
      return bundle.name === name;
    });
    setBundles(newBundle.services)
  }

  return (
    <section className='py-12 lg:py-24' id='prices'>
      <div className='container mx-auto'>
        {/* text */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }} 
          className='text-center mb-20'
        >
          <div className='text-orange font-semibold mb-3'>Our Prices</div>
          <h2 className='h2 mb-3'>How Big Your Dog is ?</h2>
          <p className='text-lg text-blue'>Choose your dog category</p>
        </motion.div>
        {/* grid */}
        <motion.div 
          variants={fadeIn('up', 1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }} 
          className='grid grid-cols-4 gap-4 lg:gap-[30px]'
        >
          {bundleData.map((item, idx) => {
              const {name, image, dogCategory} = item;
              return (
                <div 
                  key={idx}
                  className='cursor-pointer text-center'
                  onClick={() => {
                    setIndex(idx)
                    getBundle(name)  
                  }}  
                >
                  {/* image */}
                  <div className='mb-2 lg:mb-8 hover:scale-105 transition-all duration-300'>
                    <img 
                      src={image} 
                      alt='' 
                      className='w-full'
                    />
                  </div>
                  <h3 className='lg:text-2xl capitalize font-semibold text-blue lg:mb-2'>
                    {name}
                  </h3>
                  {/* category text*/}
                  <div 
                    className={`${ index === idx 
                      ? 'border-b-4 border-orange transition-all after:xl:w-5 after:lg:w-5  after:lg:h-5 after:xl:h-5 after:bg-triangle after:xl:bg-no-repeat after:lg:bg-no-repeat after:xl:block after:lg:block after:lg:left-[100px] after:xl:left-[130px] after:lg:absolute after:xl:absolute after:lg:-bottom-6 after:xl:-bottom-6 relative' 
                      : 'border-b-4 border-transparent'
                    } pb-4 mb-12`}>
                    <div className='hidden lg:block capitalize'>{dogCategory}</div>
                  </div>
                </div>
              )
          })}
        </motion.div>
        {/* bundles */}
        <Bundles bundles={bundles}/>
      </div>
    </section>
  )
};

export default Prices;

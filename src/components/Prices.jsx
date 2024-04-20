import React, { useState } from 'react';
import { bundleData } from '../data.js';
import Bundles from './Bundles';
 
const Prices = () => {

  const[index, setIndex] = useState(0);
  const[bundles, setBundles] = useState([])

  return (
    <section className='py-12 lg:py-24' id='prices'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='text-center mb-20'>
          <div className='text-orange font-semibold mb-3'>Our Prices</div>
          <h2 className='h2 mb-3'>How Big Your Dog is ?</h2>
          <p className='text-lg text-blue'>Choose your dog category</p>
        </div>
        {/* grid */}
        <div className='grid grid-cols-4 gap-4 lg:gap-[30px]'>
          {bundleData.map((item, idx) => {
              const {name, image, dogCategory} = item;
              return (
                <div 
                  className='cursor-pointer text-center'
                  onClick={() => setIndex(idx)}  
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
        </div>
      </div>
    </section>
  )
};

export default Prices;

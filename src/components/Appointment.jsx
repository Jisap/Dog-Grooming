import React from 'react';
import DogImg from '../assets/img/dogs/dog-appointment.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant'


const Appointment = () => {
  return (
    <section className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-0 relative min-h-[584px]' id='appointment'>
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}  
        className='container mx-auto'
      >
        <div>
          {/* image */}
          <div className='hidden w-full max-w-[790px] mx-auto lg:flex justify-center'>
            <img src={DogImg} alt='' />
          </div>
          {/* form */}
          <form className='bg-yellow py-8 px-6 w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] text-center
          flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Consigue una cita</h2>
            <input className='input-control' type='text' placeholder='Full name'/>
            <input className='input-control' type='text' placeholder='Email address'/>
            <input className='input-control' type='text' placeholder='Phone number'/>
            <button className='btn w-full max-w-[514px]'>
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
};

export default Appointment;

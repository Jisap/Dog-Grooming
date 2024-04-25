import React from 'react';
import  DogImg from '../assets/img/dogs/dog-contact.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant'


const Contact = () => {
  return (
    <section className="bg-yellow-secondary pt-6" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* image */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="order-1 lg:-order-1 lg:mt-16"
          >
            <img 
              src={DogImg} 
              alt="" 
              className="-mb-[12px]"
            />
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-orange font-semibold mb-3">Contact</div>
            <div className="text-4xl text-blue font-extrabold">+ 1 000 10 84 000</div>
            <div className="mb-7 text-blue">Opening Hours: Mon - Sun: 10am - 6pm</div>
            <button className="btn">Get an appointment</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Contact;

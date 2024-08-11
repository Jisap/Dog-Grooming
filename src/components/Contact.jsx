import React from 'react';
import  DogImg from '../assets/img/dogs/dog-contact.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant'
import { Link as ScrollLink } from 'react-scroll'


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
            <div className="text-orange font-semibold mb-3">Contacto</div>
            <div className="text-4xl text-blue font-extrabold">+ 1 000 10 84 000</div>
            <div className="mb-7 text-blue">Horario:  Lunes - Sábado:  10am - 6pm</div>
            <ScrollLink
              offset={-50}
              to="appointment"
              smooth
              spy
              key={123}
            >
              <button className="btn">Consigue una cita</button>
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Contact;

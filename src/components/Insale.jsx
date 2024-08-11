import React, { useState } from 'react';
import { fadeIn } from "../lib/variant"
import { motion } from "framer-motion"
import CustomButton from "./CustomButton"
import premiado1 from '../assets/img/dogs/Ra1.jpeg'
import premiado2 from '../assets/img/dogs/Ra2.jpeg'
import premiado3 from '../assets/img/dogs/Ra3.jpeg'
import premiado4 from '../assets/img/dogs/Ra4.jpeg'
import Modal from "./Modal"

const classes = [
  {
    name: 'Premiado 1',
    img: premiado1,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus praesentium dolorum?'
  },
  {
    name: 'Premiado 2',
    img: premiado2,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus praesentium dolorum?'
  },
  {
    name: 'Premiado 3',
    img: premiado3,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus praesentium dolorum?'
  },
  {
    name: 'Premiado 5',
    img: premiado4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus praesentium dolorum?'
  },
]


const Insale = () => {

  const [modalContent, setModalContent] = useState(null);

  const openModal = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  }

  return (
    <section id="class">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        {classes.map((item, index) => {
          return (
            <div key={index} className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center">
              
              <img
                src={item.img}
                className="object-cover w-full h-full"
                alt=''
              />

              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 left-0 z-9"></div>
              
              {/* text & button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-orange"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  className="text-white"
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  onClick={() => openModal(item)}
                >
                  <CustomButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Read more"
                  />
                </motion.div>
              </div>
            </div>
            
          )
        })}
      </motion.div>
      
      {
        modalContent && (
          <Modal isOpen={modalContent !== null} onClose={closeModal}>
            <img src={modalContent.img} alt='' />
            <h1 className='my-2 text-xl'>{modalContent.name}</h1>
            <p>{modalContent.description}</p>
          </Modal>
        )
      }

    </section>
  )
}

export default Insale
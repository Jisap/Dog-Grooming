"use client"

import { motion } from "framer-motion"
import { brandImages } from "../data.js"




const brandContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: 'linear',
    },
  },
}

const brandItem = {
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

const Brands = () => {

  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto">
        <motion.div 
          variants={brandContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className=" grid grid-cols-2 lg:grid-cols-6 py-8"
        >
          {brandImages.map((img, index) => {

            return (
              <motion.div 
                key={index}
                variants={brandItem}
              >
                <a href={img.href} className="group">
                  <img 
                    src={img.src}
                    // width={204}
                    // height={106}
                    alt=''
                    className="opacity-50 group-hover:opacity-100 transition-all mx-auto h-[200px] w-[200px] object-contain"
                  />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Brands
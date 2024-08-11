import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';
import { Pagination, Navigation, Autoplay } from 'swiper'
import { heroSlider } from '../data'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant'
import { Link as ScrollLink } from 'react-scroll'



const HeroSlider = () => {
  return (
    <Swiper 
      modules={[Pagination, Navigation, Autoplay]}
      // autoplay={true}  
      // loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      className="heroSlider"
    >
      {heroSlider.map((slide, index) => {
        const { title, subtitle, image, buttonText } = slide
        return (
          <SwiperSlide 
            className="py-12 lg:py-16"
            key={index}
          >
            <div className='container mx-auto text-center lg:text-left'>
              <div className="flex flex-col justify-between items-center lg:flex-row">
                <div className="flex-1">
                  <motion.h1 
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-blue text-[36px] leading-tight lg:text-[72px] lg:leading-[98px] font-extrabold mb-4"
                  >
                    {title}
                  </motion.h1>
                  <motion.p 
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-base lg:text-[18px] lg:leading-8 max-w-[540px] mb-8"
                  >
                    {subtitle}
                  </motion.p>
                  <ScrollLink
                    offset={-50}
                    to="appointment"
                    smooth
                    spy
                    key={123}
                  >
                    <motion.button
                      variants={fadeIn('up', 0.8)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}
                      className="btn mb-8 lg:mb-0"
                    >
                      Contact us
                    </motion.button>
                  </ScrollLink>
                </div>
                <motion.div 
                  variants={fadeIn('left', 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex-1 flex justify-center"
                >
                  <img 
                    src={image} 
                    className="h-96 lg:h-auto"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default HeroSlider;

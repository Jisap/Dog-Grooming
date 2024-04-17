import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper.css';
import { Pagination, Navigation, Autoplay } from 'swiper'
import { heroSlider } from '../data'


const HeroSlider = () => {
  return (
    <Swiper>
      {heroSlider.map((slide, index) => {
        const { title, subtitle, image, buttonText } = slide
        return (
          <SwiperSlide key={index}>
            <div className='container mx-auto'>
              <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button>button text</button>
              </div>
              <div>
                <img src={image} />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default HeroSlider;

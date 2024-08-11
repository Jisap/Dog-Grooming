import React from 'react';
import  Hero from './components/Hero'
import Header from './components/Header'
import Appointment from './components/Appointment'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Brands from './components/Brands'
import About from './components/About';
import Insale from './components/Insale';

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header />
      <Hero />
      <About />
      <Insale />
      <Appointment />
      <Prices />
      <Brands />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;
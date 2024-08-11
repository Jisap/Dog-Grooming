import { FaDumbbell, FaUsers, FaMedal } from 'react-icons/fa'
import { IoIosPricetags } from 'react-icons/io'
import { motion } from 'framer-motion'
import { fadeIn } from '../lib/variant'
import Achievements from './Achievements'
import { MdBuild } from 'react-icons/md';


const featured = [
  {
    icon: <FaMedal />,
    title: 'Entrenadores galardonados',
    subtitle: 'Nuestros entrenadores, galardonados en competiciones, garantizan el mejor entrenamiento para tu mascota..'
  },
  {
    icon: <IoIosPricetags />,
    title: 'Precios excelentes',
    subtitle: 'Los precios que se muestran son los de reserva. El precio final dependerá de su morfología genética, tamaño y color y edad.'
  },
  {
    icon: <MdBuild />,
    title: 'Equipamiento moderno',
    subtitle: 'Contamos con equipamiento moderno para ofrecer el mejor cuidado y entrenamiento a tu mascota.'
  },
]

const About = () => {
  return (
    <section
      className="pt-8 pb-14 lg:pt-16 lg:pb-28 lg:mb-0 bg-yellow/10"
      id="about"
    >
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2 mb-9'>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center'
          >
            Sobre nosotros
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='max-w-[600px] mx-auto text-center'
          >
            Nos dedicamos a la crianza de perros de raza con amor y dedicación. Nos aseguramos de que cada cachorro crezca en un entorno saludable y lleno de cariño, con atención veterinaria constante y cuidados expertos.
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'
        >
          {featured.map((feature, index) => {
            return (
              <div
                className='flex flex-col justify-center items-center gap-4 border p-10'
                key={index}
              >
                <div className='text-4xl bg-blue text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>{feature.icon}</div>
                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                  <h4 className='h3 text-orange'>{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
        {/* achievements */}
        <motion.div
          variants={fadeIn('up', 1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  )
}

export default About
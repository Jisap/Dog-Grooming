// import hero slider images
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';
// import dog category images
import DogCateg1 from './assets/img/dogs/dog-categ-1.png';
import DogCateg2 from './assets/img/dogs/dog-categ-2.png';
import DogCateg3 from './assets/img/dogs/dog-categ-3.png';
import DogCateg4 from './assets/img/dogs/dog-categ-4.png';
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'home',
    href: '#home',
    offset: -100
  },
  {
    name: 'prices',
    href: '#prices',
    offset: -80
  },
  {
    name: 'contact',
    href: '#contact',
    offset: 0
  },
  {
    name: 'get an appointment',
    href: '#appointment',
    offset: -40
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'Pequeños compañeros, grandes alegrías.',
    image: HeroSlideImage1 ,
    subtitle:
      'Elige a tu nuevo amigo y prepárate para vivir experiencias llenas de cariño y diversión.',
    buttonText: 'Get an appointment',
  },
  {
    id: 2,
    title: 'La compañía perfecta para cualquier hogar',
    image: HeroSlideImage2 ,
    subtitle:
      'Conecta con un pequeño amigo que transformará tu hogar con su ternura y energía.',
  },
  {
    id: 3,
    title: 'Encuentra la dulzura en formato mini hoy mismo.',
    image: HeroSlideImage3 ,
    subtitle:
      'Descubre el compañero ideal para llenar tu vida de amor, alegría y momentos inolvidables',
  },
];

export const bundleData = [
  {
    id: 1,
    image: DogCateg1 ,
    name: 'Westies',
    dogCategory: 'West Higland White',
    services: [
      {
        name: '2 meses',
        price: 150,
        list: ['wash', 'ears cleaning', 'nail cut', 'perfumed'],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '3 meses',
        price: 150,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '4 meses',
        price: 130,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
    ],
  },
  {
    id: 2,
    name: 'Shih Tzu',
    image: DogCateg2 ,
    dogCategory: 'Shihtzu',
    services: [
      {
        name: '2 meses',
        price: 80,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '3 meses',
        price: 100,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '4 meses',
        price: 120,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
    ],
  },
  {
    id: 3,
    name: 'Biewer',
    image: DogCateg3 ,
    dogCategory: 'Biewer Yorkshire Terrier',
    services: [
      {
        name: '2 meses',
        price: 140,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '3 meses',
        price: 160,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '4 meses',
        price: 180,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
    ],
  },
  {
    id: 4,
    name: 'Bichon Maltes',
    image: DogCateg4 ,
    dogCategory: 'Maltes',
    services: [
      {
        name: '2 meses',
        price: 200,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '3 meses',
        price: 210,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
      {
        name: '4 meses',
        price: 220,
        list: [
          'Desparasitados',
          'Cartilla',
          'Microchip',
          'Garantía vírica',
        ],
        photos: [DogCateg1, DogCateg2, DogCateg3, DogCateg4]
      },
    ],
  },
];

export const social = [
  {
    icon: AiFillYoutube,
    href: '#',
  },
  {
    icon: AiFillInstagram ,
    href: '#',
  },
  {
    icon: AiFillGithub ,
    href: '#',
  },
];

export const brandImages = [
  {
    src: 'src/assets/img/brands/brand1.png',
    href: '#',
  },
  {
    src: 'src/assets/img/brands/brand2.png',
    href: '#',
  },
  {
    src: 'src/assets/img/brands/brand3.png',
    href: '#',
  },
  {
    src: 'src/assets/img/brands/brand4.png',
    href: '#',
  },
  {
    src: 'src/assets/img/brands/brand5.png',
    href: '#',
  },
  {
    src: 'src/assets/img/brands/brand6.png',
    href: '#',
  },
]

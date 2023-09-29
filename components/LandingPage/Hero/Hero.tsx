"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css'; // Importa tus estilos CSS aquí

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagen = [
    {
      src: '/hamburguesa.jpg',
      wi: 300,
      he: 200,
    },
    {
      src: '/empanadas2.jpeg',
      wi: 300,
      he: 200,
    },
    {
      src: '/helado.jpeg',
      wi: 300,
      he: 200,
    },
    {
      src: '/images.jpg',
      wi: 300,
      he: 200,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar automáticamente a la siguiente imagen
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagen.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <section className="text-gray-400 bg-gray-900 body-font py-10 text-center">
        <div className={styles.slider}>
          <ul className={styles.imageList}>
            {imagen.map((product, index) => (
              <li
                key={index}
                className={styles.slide}
                style={{
                  transform: `translateX(-${100 * currentIndex}%)`,
                }}
              >
                <Image
                  className={styles.imagenContainer}
                  src={product.src}
                  width={product.wi}
                  height={product.he}
                  alt="img"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="container mx-auto flex px-5 py-1 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"></h1>
            <p className="leading-relaxed mb-8">Welcome to the app where you can buy a lot of things at a very nice price</p>
            <div className="flex justify-center">
              <Link href="/home">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Market
                </button>
              </Link>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Restaurant</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

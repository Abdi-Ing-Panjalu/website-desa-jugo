'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import background from '@/assets/images/app/wisata/dholo/dholo-0.png';
import backgroundcard from '@/assets/images/background-1.png';
import petajugo from '@/assets/images/peta-jugo.png';
import Link from 'next/link';
import Line from '@/components/Line'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Page() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div> 

        <motion.div
          className="relative z-20 flex flex-col items-center justify-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          <h1 className="text-white text-8xl font-bold mb-4">Desa Jugo</h1>
          <h3 className="text-white text-xl mb-2">Kecamatan Mojo, Kabupaten Kediri</h3>
          <h3 className="text-white text-xl">Jawa Timur</h3>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="w-full h-[calc(100vh-250px)] bg-white px-8 flex flex-col md:flex-row items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="flex-1 flex flex-col justify-center px-8 bg-white rounded-lg mx-4">
          <Image src={petajugo} alt="Petajugo" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 mx-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 self-start mb-12">Mengenal Jugo</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Desa Jugo merupakan salah satu desa yang merupakan bagian dari Kecamatan Mojo,
            Kabupaten Kediri. Terkenal dengan sebutan lain Area Wisata Besuki,
            Desa Jugo merupakan salah satu desa wisata yang menawarkan berbagai destinasi wisata yang memukau.
            Desa Jugo juga merupakan desa penghasil komoditas agro berupa kopi, susu, dan cengkeh.
          </p>
        </div>
      </motion.section>

      <Line/>

      {/* Explore Section */}
      <motion.section
        className="w-full p-8 flex flex-col items-center min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        
        <h1 className="text-6xl font-bold mt-8 mb-24">Jelajahi Jugo</h1>
         
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First row with two cards */}
          <Link href="/wisata" passHref>
            <div className="relative bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={backgroundcard}
                alt="Image 1"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-white">Wisata</h2>
              </div>
            </div>
          </Link>

          <Link href="/pemetaan" passHref>
            <div className="relative bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={backgroundcard}
                alt="Image 2"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-5xl font-bold text-white">Pemetaan</h2>
              </div>
            </div>
          </Link>

          {/* Second row with a single centered card */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <Link href="https://storymaps.arcgis.com/stories/adfc6c31520d4313a76109f837ee6f92" passHref>
              <div className="relative bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={backgroundcard}
                  alt="Image 3"
                  className="w-full h-60 object-cover rounded-t-lg"
                />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-5xl leading-tight font-bold text-white text-center">Storymaps Potensi Lokal Jugo</h2>
              </div>
              </div>
            </Link>
          </div>
        </div>



        
      </motion.section>
    </div>
  );
}

export default Page;

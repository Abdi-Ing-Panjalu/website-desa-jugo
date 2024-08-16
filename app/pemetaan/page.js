'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import CardWisata from '@/components/CardWisata'
import background from '@/assets/images/app/wisata/dholo/dholo-0.png';
import ternak from "@/assets/images/app/pemetaan/ternak-2.png"
import { motion } from 'framer-motion';
import Link from "next/link"
import Image from "next/image"
import backgroundcard from '@/assets/images/background-1.png';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function wisata() {
  return (

    <div>
      <Navbar/>
      <section className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-left justify-center text-left" style={{ backgroundImage: `url(${background.src})` }}>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Content */}
        <motion.div
          className='relative ml-24 z-20'
          initial="hidden"
          animate="visible"
          variants={fadeIn} // Animation applied only to the text
        >
          <motion.h1 className="text-white text-7xl font-bold mb-8" variants={fadeInUp}>Pemetaan Desa Jugo</motion.h1>
          <motion.h3 className="text-white text-xl mb-2" variants={fadeInUp}>Kecamatan Mojo, Kabupaten Kediri</motion.h3>
          <motion.h3 className="text-white text-xl" variants={fadeInUp}>Jawa Timur</motion.h3>
        </motion.div>
      </section>

      {/* Explore Section */}
      <motion.section
        className="w-full p-8 flex flex-col items-center min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        
        <h1 className="text-5xl font-bold mt-8 mb-16">Pemetaan Tersedia</h1>
         
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First row with two cards */}
          <Link href="/pemetaan/ternak" passHref>
            <div className="relative bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={backgroundcard}
                alt="Image 1"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white text-center">Sebaran Ternak Ruminansia</h2>
              </div>
            </div>
          </Link>


          <Link href="/pemetaan/longsor" passHref>
            <div className="relative bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image
                src={backgroundcard}
                alt="Image 2"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">Pemetaan Longsor</h2>
              </div>
            </div>
          </Link>

          {/* Second row with a single centered card */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <Link href="/pemetaan/lahan" passHref>
              <div className="relative bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={backgroundcard}
                  alt="Image 3"
                  className="w-full h-60 object-cover rounded-t-lg"
                />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <h2 className="text-4xl leading-tight font-bold text-white text-center">Penggunaan Lahan</h2>
              </div>
              </div>
            </Link>
          </div>
        </div>



        
      </motion.section>

      {/* <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-16">Pemetaan Tersedia</h1>

        <div className="w-full flex justify-center mb-20">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-32">
            <CardWisata
              title="Sebaran Ternak Ruminansia"
              imageUrl={ternak} // replace with your image path
              link={"/pemetaan/ternak"}
            />
            <CardWisata
              title="Rawan Longsor"
              imageUrl={ternak} // replace with your image path
              link={"/pemetaan/longsor"}
            />
          </div>
        </div>

        <div className="w-full flex justify-center mb-10">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <CardWisata
                title="Penggunaan Lahan"
                imageUrl={ternak} // replace with your image path
                link={"/pemetaan/lahan"}
              />
            </div>
          </div>
        </div>
      </section> */}




      {/* <section
        className="w-full h-50 bg-white p-32 flex"
      >
        <div className="flex-1 flex-col items-center justify-center ml-12">
          <h1 className="text-black mt-12 text-5xl font-bold">Pemetaan Ternak</h1>
          <p className='my-12'> Plis le aku males gatau mau nulis apa. Tolong seseorang yang pinter copywriting bantu aku T_T </p>
          
          <a href="#" className='text-lg text-right content-end'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={irenggolo} alt="Petajugo" className="w-5/6 mr-6 items-center justify-center rounded-xl" />
          
        </div>
      </section>

      <section
        className="w-full h-50 bg-white p-32 flex" style={{ backgroundColor: '#4B3619' }}
      >
        <div className="flex-1 flex justify-center">
          <Image src={dholo} alt="Petajugo" className="w-5/6 mr-6 items-center justify-center rounded-xl" />
          
        </div>
        <div className="flex-1 flex-col items-center justify-center ml-12">
          <h1 className="text-white mt-12 text-5xl font-bold">Pemetaan Penggunaan Lahan Desa</h1>
          <p className='my-12 text-white'> Plis le aku males gatau mau nulis apa. Tolong seseorang yang pinter copywriting bantu aku T_T </p>
          
          <a href="#" className='text-white text-lg text-right content-end'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
        </div>
      </section>

      <section
        className="w-full h-50 bg-white p-32 flex"
      >
        <div className="flex-1 flex-col items-center justify-center ml-12">
          <h1 className="text-black mt-12 text-5xl font-bold">Pemetaan Rawan Longsor</h1>
          <p className='my-12'> Plis le aku males gatau mau nulis apa. Tolong seseorang yang pinter copywriting bantu aku T_T </p>
          
          <a href="#" className='text-lg text-right content-end'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={irenggolo} alt="Petajugo" className="w-5/6 mr-6 items-center justify-center rounded-xl" />
          
        </div>
      </section> */}



    </div>

    
  )
}

export default wisata
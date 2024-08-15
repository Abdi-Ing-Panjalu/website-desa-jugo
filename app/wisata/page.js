'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import CardWisata from '@/components/CardWisata'
import background from "@/assets/images/background-1.png"
import prongos2 from "@/assets/images/app/wisata/prongos-2.png"
import prongos3 from "@/assets/images/app/wisata/prongos-3.png"
import warkop from "@/assets/images/app/wisata/warkop-billiard-1.jpg"
import irenggolobg from "@/assets/images/app/wisata/irenggolo-bg.png"
import dholobg from "@/assets/images/app/wisata/dholo-bg.png"
import keloksongo from "@/assets/images/app/wisata/kelok-songo.png"
import Image from "next/image"; 

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function wisata() {
  return (
    <div>
      <Navbar />
      <section
        className="w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-left justify-center text-left"
        style={{ backgroundImage: `url(${background.src})` }} // Background image applied directly
      >
        <motion.div
          className='ml-24'
          initial="hidden"
          animate="visible"
          variants={fadeIn} // Animation applied only to the text
        >
          <motion.h1 className="text-white text-7xl font-bold mb-8" variants={fadeInUp}>Wisata Desa Jugo</motion.h1>
          <motion.h3 className="text-white text-xl mb-2" variants={fadeInUp}>Kecamatan Mojo, Kabupaten Kediri</motion.h3>
          <motion.h3 className="text-white text-xl" variants={fadeInUp}>Jawa Timur</motion.h3>
        </motion.div>
      </section>

      <motion.section 
        className="w-full h-auto bg-white p-8 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h1 className="text-3xl font-bold mt-12 mb-8" variants={fadeInUp}>Jelajahi Keindahan Wisata Jugo</motion.h1>
        <motion.p className="text-xl mt-4 mb-12 max-w-2xl mx-auto text-center" variants={fadeInUp}>
          Jelajahi keindahan alam yang masih alami, nikmati berbagai aktivitas outdoor yang seru, dan temukan keindahan yang hanya bisa ditemukan di sini.
        </motion.p>
      </motion.section>

      <section 
        className="relative w-full h-500"
      >
        <Image
          src={irenggolobg} 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7E471C]/85 via-[#7E471C]/55 via-24% via-[#7E471C]/40 via-39% to-[#7E471C]/20 z-20"></div>

        <motion.div 
          className="absolute inset-0 flex flex-col items-start justify-center ml-24 z-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-full" style={{ maxWidth: '38.46%' }}>
            <h1 className="text-white text-5xl font-bold text-left">Air Terjun Ironggolo</h1>
            <p className='my-12 text-white text-left text-lg'>
              Salah satu dari dua air terjun yang terdapat di Desa Jugo. Terletak di lereng gunung wilis, Air Terjun Irenggolo menawarkan pemandangan air mengalir dari tebing setinggi 80 meter.
            </p>
            <a href="/wisata/irenggolo" className='text-white text-lg text-left block'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
          </div>
        </motion.div>
      </section>

      <motion.section 
        className="w-full h-50 bg-white p-32 flex items-center justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div className="flex-1 flex justify-center items-center" variants={fadeInUp}>
          <motion.div variants={fadeInUp} className="w-full flex justify-center"> 
            <Image src={prongos2} alt="Cafe Prongos" className="w-5/6 ml-6 rounded-xl" />
          </motion.div>
        </motion.div>
        
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-black mt-12 text-5xl font-bold">Cafe Prongos</h1>
          <p className='my-12 text-lg'>
            Destinasi singgah favorit ketika mengunjungi kawasan wisata besuki. Menawarkan berbagai makanan dan minuman dengan suguhan pemandangan yang memukau.
          </p>
          <a href="/wisata/prongos" className='text-lg'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
        </div>

        <motion.div className="flex-1 flex justify-center items-center" variants={fadeInUp}>
          <motion.div variants={fadeInUp} className="w-full flex justify-center"> 
            <Image src={prongos3} alt="Cafe Prongos" className="w-5/6 mr-6 rounded-xl" />
          </motion.div>
        </motion.div>
      </motion.section>

      <section 
        className="relative w-full h-500"
      >
        <Image
          src={dholobg} 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#7E471C]/85 via-[#7E471C]/55 via-24% via-[#7E471C]/40 via-39% to-[#7E471C]/20 z-20"></div>

        <motion.div 
          className="absolute inset-0 flex flex-col items-end justify-center mr-24 z-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="w-full" style={{ maxWidth: '38.46%' }}>
            <h1 className="text-white text-5xl font-bold text-right">Air Terjun Dholo</h1>
            <p className='my-12 text-white text-right text-lg'>
              Terletak di sisi ujung desa Jugo, Air Terjun Dholo menawarkan pemandangan menakjubkan berupa air terjun dari ketinggian 90 meter. Air terjun Dholo dapat dicapai dengan menempuh 1000 anak tangga sebelum sampai ke lokasi.
            </p>
            <a href="/wisata/dholo" className='text-white text-lg text-right block'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
          </div>
        </motion.div>
      </section>

      <motion.section 
        className="w-full h-auto bg-white p-8 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h1 className="text-5xl font-bold mt-8 mb-16" variants={fadeInUp}>Destinasi Wisata Lainnya</motion.h1>
        <motion.div className="w-full flex justify-center" variants={fadeInUp}>
          <div className="flex w-full max-w-4xl justify-between">
            <CardWisata
              title="Kelok 9"
              imageUrl={keloksongo} 
              link={"/wisata"}
            />
            <CardWisata
              title="Warkop Billiard"
              imageUrl={warkop} 
              link={"/wisata"}
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default wisata;
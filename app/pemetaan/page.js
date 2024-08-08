import React from 'react'
import Navbar from '@/components/Navbar'
import CardWisata from '@/components/CardWisata'
import background from "@/assets/images/background-1.png"
import petajugo from "@/assets/images/peta-jugo.svg"
import irenggolo from "@/assets/images/ironggolo-1.jpeg"
import prongos from "@/assets/images/cafe-prongos-1.jpg"
import warkop from "@/assets/images/warkop-billiard-1.jpg"
import dholo from "@/assets/images/dholo-7.jpeg"
import Image from "next/image"; 

function wisata() {
  return (

    <div>
      <Navbar/>
      <section
        className="w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-left justify-center text-left"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className='ml-24'>
          <h1 className="text-white text-7xl font-bold mb-8 ">Pemetaan Desa Jugo</h1>
          <h3 className="text-white text-xl mb-2">Kecamatan Mojo, Kabupaten Kediri</h3>
          <h3 className="text-white text-xl">Jawa Timur</h3>
        </div>
      </section>

      <section
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
      </section>

      <section>
      <div className="relative w-full h-96"> {/* Adjust height as needed */}
      <Image
        src={irenggolo}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-20"></div>
      <div className="absolute left-0 top-0 bottom-0 flex items-center pl-8 z-30">
        <h1 className="text-black text-4xl font-bold">Centered Text</h1>
      </div>
    </div>  
      </section>


    </div>

    
  )
}

export default wisata
import React from 'react'

import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import background from "@/assets/images/background-1.png"
import petajugo from "@/assets/images/peta-jugo.png"
import Image from "next/image"; 
import Line from '@/components/Line'


function page() {
  return (
    <div>
      <Navbar />
      <section
        className="w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h1 className="text-white text-8xl font-bold mb-4">Desa Jugo</h1>
        <h3 className="text-white text-xl mb-2">Kecamatan Mojo, Kabupaten Kediri</h3>
        <h3 className="text-white text-xl">Jawa Timur</h3>
      </section>

      <section className="w-full h-[calc(100vh-200px)] bg-white px-8 flex flex-col md:flex-row items-center">
      <div className="flex-1 flex flex-col justify-center px-8 bg-white rounded-lg mx-4">
        <Image
          src={petajugo}
          alt="Petajugo"
          className="w-full h-auto rounded-lg"
        />
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
      </section>
      
      {/* <div className="flex flex-col items-center justify-center">
        <Line />
      </div> */}

      <section className="w-full p-8 flex flex-col items-center min-h-screen">
        <h1 className=" text-6xl font-bold mb-32 ">Jelajahi Jugo</h1>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <Image
            src={background} // Replace with your image path
            alt="Image 1"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-white">Wisata</h2>
          </div>
          </div>

          <div className="bg-white shadow-lg mx-10 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              src={background} // Replace with your image path
              alt="Image 1"
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <h2 className="text-5xl font-bold text-white">Pemetaan</h2>
            </div>
          </div>
        </div>
      </section>


    </div>
    
  )
}

export default page
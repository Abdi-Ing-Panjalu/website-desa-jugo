import React from 'react'

import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import background from "@/assets/images/background-1.png"
import petajugo from "@/assets/images/peta-jugo.svg"
import Image from "next/image"; 


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

      <section className="w-full h-[calc(100vh-64px)] bg-white p-8 flex flex-col md:flex-row items-center">
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white rounded-lg mx-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mengenal Jugo</h1>
        <Image
          src={petajugo}
          alt="Petajugo"
          className="w-full h-auto rounded-lg"
        />
      </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 mx-4">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Desa Jugo merupakan salah satu desa yang merupakan bagian dari Kecamatan Mojo, 
          Kabupaten Kediri. Terkenal dengan sebutan lain Area Wisata Besuki, 
          Desa Jugo merupakan salah satu desa wisata yang menawarkan berbagai destinasi wisata yang memukau.  
          Desa Jugo juga merupakan desa penghasil komoditas agro berupa kopi, susu, dan cengkeh.
        </p>
      </div>
      </section>

      <section
        className="w-full h-screen bg-white p-16 flex flex-col items-center justify-center"
        style={{ backgroundColor: '#4B3619' }}
      >
        <h1 className="text-white text-6xl font-bold mb-8">Jelajahi Jugo</h1>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <Card
            title="Wisata"
            description="A beautiful landscape with a serene view."
            imageUrl={background} // replace with your image path
          />
          <Card
            title="Pemetaan"
            description="A beautiful landscape with a serene view."
            imageUrl={background} // replace with your image path
          />
          <Card
            title="Produk Lokal"
            description="A beautiful landscape with a serene view."
            imageUrl={background} // replace with your image path
          />
        </div>
      </section>


    </div>
    
  )
}

export default page
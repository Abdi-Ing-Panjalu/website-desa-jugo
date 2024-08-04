import React from 'react'

import Navbar from '@/components/navbar'
import Card from '@/components/card'
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

      <section
        className="w-full h-[calc(100vh-64px)] bg-white p-24 flex"
      >
        <div className="flex-1 flex-col items-center justify-center ml-12">
          <h1 className="text-black text-5xl font-bold">Mengenal Jugo</h1>
          <Image src={petajugo} alt="Petajugo" className="w-5/6 h-auto my-10 items-center justify-center" />
        </div>
        <div className="flex-1 flex justify-center">
          <p> Plis le aku males gatau mau nulis apa. Tolong seseorang yang pinter copywriting bantu aku T_T </p>
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
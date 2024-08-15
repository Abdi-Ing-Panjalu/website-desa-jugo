import React from 'react'
import Navbar from '@/components/Navbar'
import Image from "next/image"; 
import PetaLahan from "@/assets/images/app/pemetaan/peta-lahan.png"

function ternak() {
  return (

    <div>
      <Navbar/>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-6"> Pemetaan Lahan</h1>

        <div className="max-w-7xl mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                src={PetaLahan} // replace with your image path
                alt="Description of the image"
                width={1200}
                height={600}
                className="w-full object-cover"
                />
                
            </div>
        </div>
      </section>


    </div>

    
  )
}

export default ternak
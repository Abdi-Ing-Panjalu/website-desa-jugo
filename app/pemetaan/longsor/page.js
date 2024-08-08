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
import PetaLongsor from "@/assets/images/peta-longsor.png"

function longsor() {
  return (

    <div>
      <Navbar/>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-6"> Pemetaan Longsor</h1>

        <div className="max-w-7xl mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                src={PetaLongsor} // replace with your image path
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

export default longsor
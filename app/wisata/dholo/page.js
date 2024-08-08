import React from 'react'
import Navbar from '@/components/Navbar'
import CardWisata from '@/components/CardWisata'
import CardGaleri from '@/components/CardGaleri'
import background from "@/assets/images/background-1.png"
import petajugo from "@/assets/images/peta-jugo.svg"
import irenggolo from "@/assets/images/ironggolo-1.jpeg"
import prongos from "@/assets/images/cafe-prongos-1.jpg"
import warkop from "@/assets/images/warkop-billiard-1.jpg"
import dholo from "@/assets/images/dholo-7.jpeg"
import dholo1 from "@/assets/images/dholo-1.jpeg"
import dholo2 from "@/assets/images/dholo-2.jpeg"
import dholo3 from "@/assets/images/dholo-3.jpeg"
import dholo4 from "@/assets/images/dholo-4.jpeg"
import dholo5 from "@/assets/images/dholo-5.jpeg"
import dholo6 from "@/assets/images/dholo-6.jpeg"
import dholo7 from "@/assets/images/dholo-7.jpeg"
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
          <h1 className="text-white text-7xl font-bold mb-8 ">Air Terjun Dholo</h1>
          <h3 className="text-white text-xl mb-2">Kecamatan Mojo, Kabupaten Kediri</h3>
          <h3 className="text-white text-xl">Jawa Timur</h3>
        </div>
      </section>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-12">Galeri</h1>

        <div className="w-full flex justify-center">
          <div className="flex w-full max-w-6xl justify-between my-4">
            <CardGaleri
              imageUrl={dholo1} // replace with your image path
              link={"/wisata"}
            />
            <CardGaleri
              imageUrl={dholo2} // replace with your image path
              link={"/wisata"}
            />
            <CardGaleri
              imageUrl={dholo3} // replace with your image path
              link={"/wisata"}
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex w-full max-w-6xl justify-between my-4">
            <CardGaleri
              imageUrl={dholo4} // replace with your image path
              link={"/wisata"}
            />
            <CardGaleri
              imageUrl={dholo7} // replace with your image path
              link={"/wisata"}
            />
            <CardGaleri
              imageUrl={dholo6} // replace with your image path
              link={"/wisata"}
            />
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-12">Lokasi</h1>

        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="md:w-1/2 w-full h-64 md:h-auto relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59327.22801119483!2d111.8597850901085!3d-7.889146194187188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785719e4403d47%3A0x759179e2a1ba4f4a!2sAir%20Terjun%20Dolo!5e0!3m2!1sen!2sid!4v1722946233843!5m2!1sen!2sid"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none"
              ></iframe>
            </div>
            <div className="md:w-1/2 w-full p-4 md:p-6 flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Air Terjun Dolo</h1>
              <p className="text-gray-600 mb-4">
                Air Terjun Dolo is a beautiful waterfall located in the region. It is known for its scenic beauty and peaceful surroundings. Visitors often enjoy the tranquil environment and the natural beauty of the area.
              </p>
              <p className="text-gray-600">
                The waterfall is a popular destination for both locals and tourists, offering a refreshing escape from the hustle and bustle of everyday life. Be sure to bring a camera to capture the stunning scenery!
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>

    
  )
}

export default wisata
import React from 'react'
import Navbar from '@/components/Navbar'
import CardGaleri from '@/components/CardGaleri'
import background from "@/assets/images/background-1.png"
import dholo1 from "@/assets/images/app/wisata/dholo/dholo-1.jpeg"
import dholo2 from "@/assets/images/app/wisata/dholo/dholo-2.jpeg"
import dholo3 from "@/assets/images/app/wisata/dholo/dholo-3.jpeg"
import dholo4 from "@/assets/images/app/wisata/dholo/dholo-4.jpeg"
import dholo5 from "@/assets/images/app/wisata/dholo/dholo-5.jpeg"
import dholo6 from "@/assets/images/app/wisata/dholo/dholo-6.jpeg"
import dholo7 from "@/assets/images/app/wisata/dholo/dholo-7.jpeg"
import Image from "next/image"; 

function wisata() {
  return (

    <div>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
        <Navbar />
      </nav>
      <section
        className="relative w-full h-[calc(100vh-64px)] bg-cover bg-center flex flex-col items-start justify-center text-left"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="relative ml-24 animate-fadeIn">
          <h1 className="text-white text-7xl font-bold mb-8">Air Terjun Dholo</h1>
          <h3 className="text-white text-xl mb-2">Kecamatan Mojo, Kabupaten Kediri</h3>
          <h3 className="text-white text-xl">Jawa Timur</h3>
        </div>
      </section>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-12">Galeri</h1>
        <div className="flex flex-wrap justify-center gap-10 w-full max-w-6xl">
          {[dholo1, dholo2, dholo3, dholo4, dholo5, dholo7].map((image, index) => (
            <div key={index} className="group transition-transform transform hover:scale-105">
              <CardGaleri
                imageUrl={image}
                link={"/wisata"}
              />
            </div>
          ))}
        </div>
      </section>


      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-12">Lokasi</h1>

        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row bg-white shadow-lg min-h-fit rounded-lg overflow-hidden border border-gray-200">
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
              <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-20">Air Terjun Dolo</h1>
              <p className="text-gray-800 text-lg 600 mt-10 mb-20">
              Dusun Besuki, Desa Jugo, Kecamatan Mojo, Hutan, Blimbing, Kediri, Kabupaten Kediri, Jawa Timur 64162
              </p> 
            </div>
          </div>
        </div>
      </section>



    </div>

    
  )
}

export default wisata
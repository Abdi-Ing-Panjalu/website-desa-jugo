import React from 'react'
import Navbar from '@/components/Navbar'
import CardWisata from '@/components/CardWisata'
import background from "@/assets/images/background-1.png"
import petajugo from "@/assets/images/peta-jugo.png"
import irenggolo from "@/assets/images/ironggolo-1.jpeg"
import prongos2 from "@/assets/images/prongos-2.jpg"
import prongos3 from "@/assets/images/prongos-3.jpg"
import warkop from "@/assets/images/warkop-billiard-1.jpg"
import dholo from "@/assets/images/dholo-7.jpeg"
import irenggolobg from "@/assets/images/irenggolo-bg.png"
import dholobg from "@/assets/images/dholo-bg.png"
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
          <h1 className="text-white text-7xl font-bold mb-8 ">Wisata Desa Jugo</h1>
          <h3 className="text-white text-xl mb-2">Kecamatan Mojo, Kabupaten Kediri</h3>
          <h3 className="text-white text-xl">Jawa Timur</h3>
        </div>
      </section>

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-12 mb-8">Jelajahi Keindahan Wisata Jugo</h1>

        <p className="text-xl mt-4 mb-12 max-w-2xl mx-auto text-center"> Jelajahi keindahan alam yang masih alami, nikmati berbagai aktivitas outdoor yang seru, dan temukan keindahan yang hanya bisa ditemukan di sini.</p>
      </section>

      {/* <section
        className="w-full h-50 bg-white p-32 flex"
      >
        <div className="flex-1 flex-col items-center justify-center ml-12">
          <h1 className="text-black mt-12 text-5xl font-bold">Air Terjun Ironggolo</h1>
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
          <h1 className="text-white mt-12 text-5xl font-bold">Air Terjun Dholo</h1>
          <p className='my-12 text-white'> Plis le aku males gatau mau nulis apa. Tolong seseorang yang pinter copywriting bantu aku T_T </p>
          
          <a href="#" className='text-white text-lg text-right content-end'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
        </div>
      </section> */}

<section>
      <div className="relative w-full h-500"> {/* Adjust height as needed */}
      <Image
        src={dholobg} // Replace with your image path
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#7E471C]/85 via-[#7E471C]/55 via-24% via-[#7E471C]/40 via-39% to-[#7E471C]/20 z-20"></div> {/* Gradient overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center ml-24 z-30">
          <div className="w-full" style={{ maxWidth: '38.46%' }}>
            <h1 className="text-white text-5xl font-bold text-left">Air Terjun Ironggolo</h1>
            <p className='my-12 text-white text-left'>
            Salah satu dari dua air terjun yang terdapat di Desa Jugo. Terletak di lereng gunung wilis, Air Terjun Irenggolo menawarkan pemandangan air mengalir dari tebing setinggi 80 meter.
            </p>
            <a href="/wisata/irenggolo" className='text-white text-lg text-left block'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
          </div>
        </div>
      </div>
      </section>

      <section
        className="w-full h-50 bg-white p-32 flex"
      >
        <div className="flex-1 flex justify-center">
          <Image src={prongos2} alt="Petajugo" className="w-5/6 mr-6 items-center justify-center rounded-xl" />
          
        </div>
        <div className="flex-1 flex-col items-center justify-center ">
          <h1 className="text-black mt-12 text-5xl text-center font-bold">Cafe Prongos</h1>
          <p className='my-12 text-center'> Destinasi singgah favorit ketika mengunjungi kawasan wisata besuki. Menawarkan berbagai makanan dan minuman dengan suguhan pemandangan yang memukau</p>
          
          <a href="/wisata/prongos" className='text-lg text-center content-end'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={prongos3} alt="Petajugo" className="w-5/6 mr-6 items-center justify-center rounded-xl" />
          
        </div>
      </section>

      <section>
      <div className="relative w-full h-500"> {/* Adjust height as needed */}
      <Image
        src={dholobg} // Replace with your image path
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-l from-[#7E471C]/85 via-[#7E471C]/55 via-24% via-[#7E471C]/40 via-39% to-[#7E471C]/20 z-20"></div> {/* Gradient overlay */}
        <div className="absolute inset-0 flex flex-col items-end justify-center mr-24 z-30">
          <div className="w-full" style={{ maxWidth: '38.46%' }}>
            <h1 className="text-white text-5xl font-bold text-right">Air Terjun Dholo</h1>
            <p className='my-12 text-white text-right'>
              Terletak di sisi ujung desa Jugo, Air Terjun Dholo menawarkan pemandangan menakjubkan berupa air terjun dari ketinggian 90 meter. Air terjun Dholo dapat dicapai dengan menempuh 1000 anak tangga sebelum sampai ke lokasi.
            </p>
            <a href="/wisata/dholo" className='text-white text-lg text-right block'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>
          </div>
        </div>
      </div>
      </section>



      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-16">Destinasi Wisata Lainnya</h1>

        <div className="w-full flex justify-center">
          <div className="flex w-full max-w-4xl justify-between">
            <CardWisata
              title="Kelok 9"
              imageUrl={prongos2} // replace with your image path
              link={"/wisata"}
            />
            <CardWisata
              title="Warkop Billiard"
              imageUrl={warkop} // replace with your image path
              link={"/wisata"}
            />
          </div>
        </div>
      </section>


    </div>

    
  )
}

export default wisata
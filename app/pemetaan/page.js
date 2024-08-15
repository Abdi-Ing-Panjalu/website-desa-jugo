import React from 'react'
import Navbar from '@/components/Navbar'
import CardWisata from '@/components/CardWisata'
import background from "@/assets/images/background-1.png"
import ternak from "@/assets/images/app/pemetaan/ternak-2.png"

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

      <section className="w-full h-auto bg-white p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold mt-8 mb-16">Pemetaan Tersedia</h1>

        <div className="w-full flex justify-center mb-20">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-32">
            <CardWisata
              title="Sebaran Ternak Ruminansia"
              imageUrl={ternak} // replace with your image path
              link={"/pemetaan/ternak"}
            />
            <CardWisata
              title="Rawan Longsor"
              imageUrl={ternak} // replace with your image path
              link={"/pemetaan/longsor"}
            />
          </div>
        </div>

        <div className="w-full flex justify-center mb-10">
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <CardWisata
                title="Penggunaan Lahan"
                imageUrl={ternak} // replace with your image path
                link={"/pemetaan/lahan"}
              />
            </div>
          </div>
        </div>
      </section>




      {/* <section
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
      </section> */}



    </div>

    
  )
}

export default wisata
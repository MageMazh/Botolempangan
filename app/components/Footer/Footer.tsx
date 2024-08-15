import React from 'react'
import Image from 'next/image'
import 'leaflet/dist/leaflet.css';

import Maps from '../Maps';

function Footer() {

  return (
    <div className="bottom-0">
    <div className="bg-[#875A23] grid md:grid-cols-2 gap-8 p-14">
      <div className="flex flex-col gap-10 justify-center">
        <div>
          <Image
            src="/images/Logo_Maros_Text.svg"
            width={250}
            height={250}
            alt=""
            className="w-[32rem] h-16"
          />
        </div>
          <p className='text-[#F2F2F2] text-justify heading-s'>Sebuah desa yang bertempat di kecamatan Bontoa, kabupaten Maros, Provinsi Sulawesi Selatan, Indonesia</p>
      </div>
      {/* <section>
        <h2>Kontak Desa</h2>

      </section> */}
      <Maps />
    </div>
    {/* <div className="bg-[#875A23] text-[#F2F2F2] text-text-s md:text-text-m text-center py-3 px-14">
      <p>
        Copyright © 2024 Desa Wisata Botolempangan. Develop By KKN Unhas Gel. 112
      </p>
    </div> */}
  </div>
  )
}

export default Footer
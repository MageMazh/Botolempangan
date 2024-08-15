import React from "react";

function Hero() {
  return (
    <section className="absolute top-0 w-full">
      <div className="relative top-0 bg-[url('/images/hero.webp')] bg-cover bg-center h-[50vh] lg:h-[100vh] px-14 flex items-center lg:flex-row flex-col justify-space text-white gap-10 lg:gap-20">
        <div className="absolute left-0 top-0 h-[50vh] lg:h-screen w-screen bg-black opacity-40"></div>
        <div className="flex flex-col justify-center items-center w-full h-full mt-8 lg:mt-0 z-20 text-center">
          <h2 className="text-heading-s lg:text-5xl text-white-text font-extrabold mb-2">
            SELAMAT DATANG DI <br /> DESA WISATA BOTOLEMPANGAN
          </h2>
          <p className="text-text-m lg:text-heading-s font-light">
            Desa wisata yang memiliki daya tarik luar biasa dengan keindahan
            alam yang memukau.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

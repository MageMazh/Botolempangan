"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import YouTube from "react-youtube";
import Footer from "./components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [videoError, setVideoError] = useState(false);
  const opts = {
    height: "390",
    width: "1170",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.pauseVideo();
  };

  const onError = () => {
    setVideoError(true);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <section className="px-14 mt-[47vh] lg:mt-[95vh]">
        <h1 className="font-bold text-heading-m lg:text-heading-l text-[#094067] my-8">
          Video Profile Desa Wisata Botolempangan
        </h1>
        {!videoError ? (
          <div className="video-responsive">
            <YouTube
              className="mb-16"
              videoId="T7O5matwLGY"
              opts={opts}
              onReady={onReady}
              onError={onError}
            />
          </div>
        ) : (
          <div className="fallback">
            <p>Video tidak dapat diputar saat ini. Silakan coba lagi nanti.</p>
          </div>
        )}
      </section>

      <section className="px-14 py-8 mb-8 bg-[#D8EEFE]">
        <h1 className="font-bold text-heading-m md:text-heading-l text-[#094067] mb-8">
          Mempelajari Sejarah Desa Botolempangan
        </h1>
        <section className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <p className="text-text-m lg:text-text-l text-justify mb-4">
              Botolempangan adalah sebuah nama yang dilatarbelakangi oleh
              sejarah dan diabadikan di beberapa daerah lain sebagai nama
              kampung maupun nama jalan di kota-kota. Nama ini sering dijumpai
              dalam tulisan maupun pengucapan sebagai &#34;Bontolempangan&#34;
              bagi orang yang tidak mengetahuinya, padahal yang benar adalah
              &#34;BOTOLEMPANGAN&#34;. BOTOLEMPANGAN terdiri dari dua kata, BOTO
              dan LEMPANGAN.
            </p>
            <Link href="/sejarah">
              <button className="bg-[#3DA9FC] transition duration-150 ease-out hover:ease-in rounded-lg p-3 text-white-text text-text-m md:text-text-l font-medium w-fit hover:bg-[#094067]">
                Baca Lebih Lanjut
              </button>
            </Link>
          </div>

          <Image
            className="w-full h-full rounded-md"
            src="/images/Sejarah.jpg"
            width={400}
            height={400}
            alt="Sejarah Gambar"
          />
        </section>
      </section>

      <section className="px-14 mb-16">
        <h1 className="font-bold text-heading-m lg:text-heading-l text-[#094067] mt-16 mb-8">
          Menjelajahi Keindahan Wisata Desa Botolempangan
        </h1>
        <section className="grid md:grid-cols-2 gap-8">
          <Image
            className="w-full h-full rounded-md"
            src="/images/wisata.jpg"
            width={400}
            height={400}
            alt="Sejarah Gambar"
          />
          <div className="flex flex-col justify-between">
            <p className="text-text-m md:text-text-l text-justify mb-4">
              Beraneka ragam wisata yang berada Kabupaten Maros, termasuk
              Destinasi Wisata Karts Ujung Bulu yang terletak Dusun Ujung bulu,
              Desa Botolempangan, Kecamatan Bontoa. Estetika keindahan alam di
              Destinasi Wisata Karts Ujung Bulu tak hanya menampilkan keelokan
              alam, namun menawarkan nilai yang kaya akan sejarah, seperti yang
              kita ketahui. Karts Ujung Bulu menyajikan panorama bebatuan
              labirin, yang telah diakui oleh UNESCO Global Geopark
              Maros-Pangkep.
            </p>
            <Link href="/pariwisata">
              <button className="flex transition duration-150 ease-out hover:ease-in bg-[#3DA9FC] rounded-lg p-3 text-text-m md:text-text-l text-white-text font-medium w-fit justify-items-end hover:bg-[#094067]">
                Lihat Lebih Banyak
              </button>
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}

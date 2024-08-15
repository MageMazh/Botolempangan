"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "@madzadev/image-slider/dist/index.css";
import Image from "next/image";

export default function Sejarah() {
  const images = [
    { url: "/images/1-sejarah.jpg" },
    { url: "/images/2-sejarah.jpg" },
    { url: "/images/3-sejarah.jpg" },
    { url: "/images/4-sejarah.jpg" },
    { url: "/images/5-sejarah.jpg" },
  ];

  return (
    <main>
      <Navbar />
      <section className="flex flex-col px-14 gap-8">
        <section className="pt-8">
          <h1 className="text-heading-s md:text-heading-m font-bold text-[#094067]">
            Sejarah Desa Botolempangan
          </h1>
        </section>
        <article className="flex flex-col gap-3">
          <section>
            <div className="flex flex-row items-center gap-2">
              <div className="w-1 h-10 bg-[#3DA9FC]"></div>
              <h1 className="text-[#3DA9FC] text-heading-s md:text-heading-m font-bold">
                Nama Desa
              </h1>
            </div>
          </section>
          <section>
            <p className="text-justify text-text-m md:text-text-l">
              Botolempangan adalah sebuah nama yang dilatarbelakangi oleh
              sejarah dan diabadikan di beberapa daerah lain sebagai nama
              kampung maupun nama jalan di kota-kota. Nama ini sering dijumpai
              dalam tulisan maupun pengucapan sebagai &#34;Bontolempangan&#34;
              bagi orang yang tidak mengetahuinya, padahal yang benar adalah
              &#34;BOTOLEMPANGAN&#34;. BOTOLEMPANGAN terdiri dari dua kata,
              <strong> BOTO</strong> dan <strong> LEMPANGAN</strong>.
              <br />
              <br />
              Menurut sejarah, <strong>BOTO</strong> adalah gelar yang diberikan
              kepada seorang pengembara yang tidak diketahui asal-usulnya namun
              memiliki keahlian pada masa pemerintahan Kerajaan Gowa. Dalam
              bahasa Makassar, disebut <i>Tau Tarrus</i>. Gelar ini bisa
              disandang oleh beberapa orang tertentu. Namun, Botolempangan bukan
              hanya <i>Tau Tarrusu</i> tetapi juga digelari
              <i> Tunipakammayya Kananna</i>. Ia dipercaya memiliki kemampuan
              untuk mengetahui hal-hal yang akan terjadi dan kebenarannya telah
              teruji pada masa pemerintahan Raja Gowa.
              <br />
              <br />
              <strong>LEMPANGAN</strong> adalah nama kampung yang berasal dari
              bahasa Bugis, Leppangen, yang berarti tempat singgah atau
              persinggahan. Kampung ini dihuni oleh penduduk yang berbahasa
              Makassar, sehingga nama tersebut kemudian berubah menjadi
              Lempangan. Masyarakat percaya bahwa sosok manusia tersebut pernah
              berdiam di kampung ini, sehingga nama kampung ini diberi nama
              Lempangan. Di kampung ini terdapat sebuah tanda yang diakui oleh
              masyarakat turun-temurun, yaitu sebuah batu nisan yang berbentuk
              batu asahan (batu gosok) di atas sebuah kuburan. Masyarakat
              setempat mengetahui bahwa kuburan tersebut adalah pusara mendiang
              yang sampai saat ini dipelihara dan sering dikunjungi oleh orang
              dari luar daerah maupun masyarakat desa sendiri. Akhirnya, nama
              awal kampung tersebut digelar Kampung Lempangan yang kini menjadi
              ibu kota desa. Keterpaduan dari dua nama yang mempunyai makna
              sejarah ini disepakati pada musyawarah pembentukan desa pada tahun
              1965, dan diberilah nama <strong>BOTOLEMPANGAN</strong> sebagai
              nama desa.
            </p>
          </section>
        </article>
        <article className="flex flex-col gap-3">
          <section>
            <div className="flex flex-row items-center gap-2">
              <div className="w-1 h-10 bg-[#3DA9FC]"></div>
              <h1 className="text-[#3DA9FC] text-heading-s md:text-heading-m font-bold">
                Sejarah Singkat Pemerintahan Desa
              </h1>
            </div>
          </section>
          <section>
            <p className="text-text-m md:text-text-l text-justify">
              Desa Botolempangan pada masa silam disebut Koordinator di bawah
              wilayah kekuasaan distrik Bontoa. Pada tahun 1965, sebelum
              pemberontakan G30S/PKI, Desa Botolempangan terbentuk melalui
              musyawarah yang dipimpin oleh Ismail (dikenal sebagai Galla
              Samaila), pejabat koordinator pada masa itu. Desa Botolempangan
              pertama kali dipimpin oleh Bapak Basrah Dg Masiga (dikenal sebagai
              Galla Salenrang) yang berkedudukan di Kampung Lempangan di bawah
              wilayah pemerintahan Kecamatan Bantimurung. Pada tahun 1992, Desa
              Botolempangan dimekarkan menjadi dua desa sehingga dibentuk Desa
              Persiapan Salenrang setelah terbentuknya Pemerintahan Kecamatan
              Maros Utara. Selanjutnya, Desa Botolempangan beralih kembali pada
              wilayah Pemerintahan Kecamatan Maros Utara yang berkedudukan di
              Panjallingan. Pada tahun 2001, setelah pergantian nama, Maros
              Utara diubah namanya menjadi Bontoa, sehingga Desa Botolempangan
              sekarang berada di bawah wilayah Kecamatan Bontoa.
            </p>
          </section>
        </article>
        <section className="flex flex-row overflow-x-scroll scroll-smooth mb-12">
          <section className="w-max flex gap-4 ">
            {images.map((image, index) => (
              <section
                key={index}
                className={`relative -z-10 flex h-[200px] w-[240px] md:h-[360px] md:w-[480px]`}
                draggable={false}
              >
                <Image
                  fill
                  className="rounded-md"
                  src={image.url}
                  alt={""}
                  priority
                  key={index}
                  draggable={false}
                  style={{
                    objectFit: "fill",
                    objectPosition: "center bottom",
                  }}
                />
              </section>
            ))}
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}

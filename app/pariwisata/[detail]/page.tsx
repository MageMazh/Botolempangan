"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Image from "next/image";
function DetailWisata() {
  const images = [
    { url: "/images/karst-1.webp" },
    { url: "/images/karst-2.webp" },
    { url: "/images/karst-3.webp" },
    { url: "/images/karst-10.jpg" },
    { url: "/images/karst-5.webp" },
    { url: "/images/karst-6.jpg" },
    { url: "/images/karst-7.webp" },
    { url: "/images/karst-8.webp" },
  ];

  return (
    <main>
      <Navbar />
      <section className="flex flex-col px-14 gap-8">
        <section className="pt-8">
          <h1 className="text-heading-m md:text-heading-l font-bold text-[#094067]">
            Destinasi Wisata Desa Botolempangan
          </h1>
        </section>
        <article className="flex flex-col gap-3">
          <section>
            <div className="flex flex-row items-center gap-2">
              <div className="w-1 h-10 bg-[#3DA9FC]"></div>
              <h1 className="text-[#3DA9FC] text-heading-s md:text-heading-m font-bold">
                Istana Karst
              </h1>
            </div>
          </section>
          <section className="flex flex-row overflow-x-scroll scroll-smooth ">
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
          <section>
            <p className="text-text-m md:text-text-l text-justify mb-12">
              Istana Karst merupakan salah satu destinasi wisata alam yang
              terletak di Desa Wisata Botolempangan, Kabupaten Maros, Sulawesi
              Selatan. Kabupaten Maros dikenal dengan kekayaan alamnya, terutama
              formasi karst yang unik dan memukau. Istana Karst di Botolempangan
              menjadi salah satu daya tarik utama bagi wisatawan lokal maupun
              mancanegara yang ingin menikmati keindahan alam yang belum
              terjamah dan mempelajari keunikan geologi daerah tersebut.
              Keindahan Alam Istana Karst di Botolempangan menawarkan
              pemandangan spektakuler dari formasi batuan karst yang menjulang
              tinggi dan membentuk lanskap yang dramatis seperti menara karst
              serta guanya. Panorama keindahan alam Istana Karst tidak kalah
              menarik jika dibandingkan dengan destinasi - destinasi wisata alam
              lainnya yang ada di Kabupaten Maros, perpaduan antara karst dan
              danau dan pepohonan yang masih hijau menandakan semua masih alami.
              Dikawasan Istana karst masih sering dijumpai beberapa hewan
              seperti monyet dan angsa. Desa Wisata Botolempangan menawarkan
              berbagai aktivitas bagi pengunjung yang ingin menjelajahi
              keindahan Istana Karst. Beberapa aktivitas yang populer di
              antaranya eksplorasi gua dimana bagi yang menyukai petualangan,
              eksplorasi gua menjadi aktivitas yang menarik. Pengunjung dapat
              memasuki gua-gua karst dan melihat langsung sejarah gua
              didalamnya. Fotografi alam yang mana keindahan alam Istana Karst
              menjadikannya tempat yang ideal untuk fotografi. Wisatawan dapat
              mengabadikan momen-momen indah dan unik dari formasi batuan karst,
              gua, dan alam lainnya.
            </p>
          </section>
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default DetailWisata;

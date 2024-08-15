"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

function pariwisata() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col px-14 gap-8">
        <section className="pt-8">
          <h1 className="text-heading-m md:text-heading-l font-bold text-[#094067]">
            Pariwisata Desa Botolempangan
          </h1>
        </section>
        <section>
          <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-10 bg-[#3DA9FC]"></div>
            <h1 className="text-[#3DA9FC] text-heading-s md:text-heading-m font-bold">
              Menikmati Keindahan Alam yang Menakjubkan di Istana Karst
            </h1>
          </div>
        </section>
        <section className="mb-8">
          <section className="relative gap-8 z-0">
            <main className={`relative -z-10 flex h-[420px] grow`}>
              <Image
                fill
                src={"/images/hero-istana-karst.jpg"}
                className="rounded-md"
                alt={""}
                priority
                draggable={false}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <main className="absolute flex flex-col md:flex-row justify-end md:items-end  h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] rounded-md">
                <section className="flex flex-col gap-1 px-6 py-2 md:py-6 w-full justify-center ">
                  <span className="text-text-l md:text-heading-s text-white font-bold">
                    Istana Karst
                  </span>
                  <p className="w-full text-neutral-normal text-text-m md:text-text-l text-white">
                    Dusun Ujung Bulu, Desa Botolempangan
                  </p>
                </section>
                <section className="px-6 pt-2 pb-6 md:pt-6">
                  <Link href={"/pariwisata/istana-karst"}>
                    <button className="transition duration-150 ease-out hover:ease-in bg-transparent w-max h-fit rounded-[26px] p-[8px_16px] border border-solid border-[#F2F2F2] cursor-pointer hover:bg-[#875A23] font-semibold">
                      <span className="text-text-s md:text-text-m text-[#F2F2F2]">
                        Lihat Lebih Banyak {">"}
                      </span>
                    </button>
                  </Link>
                </section>
              </main>
            </main>
          </section>
        </section>
        <section>
          <div className="flex flex-row items-center gap-2">
            <div className="w-1 h-10 bg-[#3DA9FC]"></div>
            <h1 className="text-[#3DA9FC] text-heading-s md:text-heading-m font-bold">
              Destinasi Wisata Lain yang Tak Kalah Menarik untuk Dieksplorasi
            </h1>
          </div>
        </section>
        <section className="flex flex-wrap justify-center gap-6 mb-16">
          <main
            className={`relative -z-10 flex h-[240px] md:h-[360px] w-full md:grow md:w-0`}
          >
            <Image
              fill
              src={"/images/bulu-sipong.jpg"}
              className="rounded-md"
              alt={""}
              priority
              draggable={false}
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
            <main className="absolute flex items-end h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] rounded-md">
              <section className="flex flex-col gap-1 p-6 w-full">
                <span className="text-text-l lg:text-heading-s text-white font-bold">
                  Bulu&#39; Sipong
                </span>
                <p className="h-fit w-full text-neutral-normal text-text-m lg:text-text-l text-white">
                  Dusun Tamangesang, Desa Botolempangan
                </p>
              </section>
            </main>
          </main>
          <main
            className={`relative -z-10 flex h-[240px] md:h-[360px] w-full md:grow md:w-0`}
          >
            <Image
              fill
              src={"/images/gua-pengantin.jpg"}
              alt={""}
              className="rounded-md"
              priority
              draggable={false}
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
            />
            <main className="absolute flex items-end h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] rounded-md">
              <section className="flex flex-col gap-1 p-6 w-full">
                <span className="text-text-l lg:text-heading-s text-white font-bold">
                  Gua Pengantin
                </span>
                <p className="h-fit w-full text-neutral-normal text-text-m lg:text-text-l text-white">
                  Dusun Tangarapang, Desa Botolempangan
                </p>
              </section>
            </main>
          </main>
          <main
            className={`relative -z-10 flex h-[240px] md:h-[360px] w-full md:grow md:w-0`}
          >
            <Image
              fill
              src={"/images/mata-air.jpg"}
              alt={""}
              className="rounded-md"
              priority
              draggable={false}
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
            />
            <main className="absolute flex items-end h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] rounded-md">
              <section className="flex flex-col gap-1 p-6 w-full">
                <span className="text-text-l lg:text-heading-s text-white font-bold">
                  Sakeang
                </span>
                <p className="h-fit w-full text-neutral-normal text-text-m lg:text-text-l text-white">
                  Dusun Tangarapang, Desa Botolempangan
                </p>
              </section>
            </main>
          </main>
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default pariwisata;

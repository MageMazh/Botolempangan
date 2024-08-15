import React from "react";
import Image from "next/image";

function Slider(key: any, url: string) {
  return (
    <section
      key={key}
      className={`relative -z-10 flex h-[200px] w-[240px] md:h-[360px] md:w-[480px]`}
      draggable={false}
    >
      <Image
        fill
        className="rounded-md"
        src={url}
        alt={""}
        priority
        key={key}
        draggable={false}
        style={{
          objectFit: "fill",
          objectPosition: "center bottom",
        }}
      />
    </section>
  );
}

export default Slider;

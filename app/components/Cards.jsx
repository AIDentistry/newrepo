"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function Cards({hero_image}) {
  return (
    <>
      <Swiper
        effect={""}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="md:w-[500px] md:h-[500px] xl:w-[300px] xl:h-[300px] w-[340px] max-sm:w-[320px] h-[300px] p-8 rounded-xl"
      >
        <SwiperSlide style={{ width: "fill", height: "fill" }}>
          <Image
            className="w-full h-auto"
            src={hero_image}
            alt="Next.js Logo"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

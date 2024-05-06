"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SectionD() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <section className="w-full  flex flex-col h-auto mb-8 ">
        <h1 className="font-bold text-[#4b575f] md:text-4xl text-2xl mb-2 block text-center">
          What Our Clients Have To Say
        </h1>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="md:w-3/5 w-4/5 "
        >
          <SwiperSlide
            style={{
              width: "fill",
              height: "fill",
              display: "block",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="bg-gradient-to-r from-white to-white bg-clip-text text-center max-sm:text-2xl text-3xl font-bold text-transparent p-8 my-2">
              We certainly was heading for divorce, until we met Dr Bakhe
              Dlamini. Thank you so much!
            </h1>
            <h1 className="bg-gradient-to-r from-white to-white bg-clip-text text-center max-sm:text-lg text-xl font-bold text-transparent p-0 my-2">
              Mrs A - Kenya, Nairobi{" "}
            </h1>
          </SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </section>
    </>
  );
}

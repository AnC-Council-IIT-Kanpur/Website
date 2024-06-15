"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="absolute inset-0 z-0">
      <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="h-full dark:hidden object-cover w-full  transition-opacity duration-500 ease-in-out"
              speed={2000}
            >
              <SwiperSlide>
                <Image
                  src="/images/banner/anciitk_cover.jpeg"
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner/light-02.jpeg"
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner/light-03.jpeg"
                  alt="Slide 3"
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              speed={2000}
              className="h-full dark:block object-cover w-full  transition-opacity duration-500 ease-in-out"
            >
              <SwiperSlide>
                <Image
                  src="/images/banner/bg1.jpg"
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner/dark-02.jpeg"
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner/dark-03.jpeg"
                  alt="Slide 3"
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
            </Swiper>

      </div>
      
      <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🏛️ Welcome to IIT-Kanpur's Research Wing
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Pioneering Research for{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                a Better Future
              </span>
            </h1>
            <p className="text-black dark:text-white">
              The Research Wing of the council aims at cultivating and promoting research interests in the student community. It aims to provide students the freedom and opportunities to work upon diverse areas of business, technology and existing industrial and national challenges as well as pursue their own ideas so as to become innovators and future leaders.
            </p>
            <div className="mt-10">
              <form onSubmit={handleSearch}>
                <div className="flex flex-wrap gap-5">
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search research topics..."
                    aria-label="Search research topics"
                    className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />
                  <button
                    aria-label="Search button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          <div className="md:w-1/2 mt-10 lg:mt-0">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

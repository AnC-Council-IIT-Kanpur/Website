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
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://www.facebook.com/ANCIITK" aria-label="social icon">
                    <svg
                      className="fill-[#000000] dark:fill-white transition-all duration-300 dark:hover:fill-primary hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="social icon">
                    <svg
                      className="fill-[#000000] dark:fill-white transition-all duration-300 dark:hover:fill-primary hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/anciitk" aria-label="social icon">
                    <svg
                      className="fill-[#000000] transition-all dark:fill-white duration-300 dark:hover:fill-primary hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/anciitk/" aria-label="instagram icon">
                  <svg className= "fill-[#000000] transition-all  dark:fill-white dark:hover:fill-primary duration-300 hover:fill-primary "
                  xmlns="http://www.w3.org/2000/svg"  
                  viewBox="0 0 50 50" 
                  width="24px" 
                  height="24px"
                  fill="none">
                    <g clipPath="url(#clip0_48_1600)">
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                    </g>
                      <defs>
                        <clipPath id="clip0_48_1600">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                
              </ul>
            </motion.div>
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

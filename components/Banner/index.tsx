"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = ({ banners, title, description, socialLinks }) => {
  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="absolute inset-0 z-0">
        {banners.map((banner, index) => (
          <Swiper
            key={index}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: banner.delay, disableOnInteraction: false }}
            loop={true}
            speed={2000}
            className={`h-full ${banner.className} object-cover w-full transition-opacity duration-500 ease-in-out`}
          >
            {banner.slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="object-cover w-full h-full"
                  fill
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
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
              🏛️ {title}
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              {description.title}{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                {description.highlight}
              </span>
            </h1>
            <p className="text-black dark:text-white">
              {description.text}
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
                  {socialLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} aria-label={link.label}>
                        <svg
                          className="fill-[#000000] dark:fill-white transition-all duration-300 dark:hover:fill-primary hover:fill-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d={link.iconPath} fill="" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
          <div className="md:w-1/2 mt-10 lg:mt-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

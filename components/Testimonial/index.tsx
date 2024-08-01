"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import Link from "next/link";

interface HeaderInfo {
  title: string;
  subtitle: string;
  description: string;
  readMore: string;
  link: string;
}
interface Review {
  id: number;
  name: string;
  destination?: string;
  image: any;
  content: string;
  designation: string;
  intern: string;
  link: string;
};
interface TestimonialProps {
  data: Review[];
  headerInfo: HeaderInfo;
}
const Testimonial : React.FC<TestimonialProps> = ({ data, headerInfo }) => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: headerInfo.title,
                subtitle: headerInfo.subtitle,
                description: headerInfo.description
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

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
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {data.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center items-center h-full">
  <Link
    href={headerInfo.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primary-dark"
  >{headerInfo.readMore}
  </Link>
</div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;

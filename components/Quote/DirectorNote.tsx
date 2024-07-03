"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleQuote from "./SingleQuote";
import { Quote, HeaderInfo } from "@/types/quote";

interface DirectorNoteProps {
  headerInfo: HeaderInfo;
  quotes: Quote[];
}

const DirectorNote: React.FC<DirectorNoteProps> = ({ headerInfo, quotes }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <div className="text-center mb-12">
          <SectionHeader headerInfo={headerInfo} />
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-8 xl:px-0"
      >
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="py-8"
        >
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id}>
              <SingleQuote quote={quote} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </motion.div>
    </section>
  );
};

export default DirectorNote;

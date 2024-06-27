"use client";

import SectionHeader from "components/Common/SectionHeader";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleQuote from "./SingleQuote";
import { productClubQuoteData } from "./productClubQuoteData"; // Assuming you have a file with quote data specific to the Product Club

const ProductClubSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <SectionHeader
            headerInfo={{
              title: `PRODUCT CLUB`,
              subtitle: `Member Quotes`,
              description: `A collection of inspiring quotes from members of the Product Club about their experiences and contributions.`,
            }}
          />
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
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="py-8"
        >
          {productClubQuoteData.map((quote) => (
            <SwiperSlide key={quote.id}>
              <SingleQuote quote={quote} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ProductClubSection;

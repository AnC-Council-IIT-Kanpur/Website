"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const images = [
    "/images/hero/image1.jpg",
    "/images/hero/image2.jpg",
    "/images/hero/image3.jpg",
    "/images/hero/image4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Explore Academics and Career Development at IITK
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Academics and Career Council,
                <span className="relative ml-1 inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  IIT Kanpur
                </span>
              </h1>
              <p>
                The Academics and Career Council at IIT Kanpur, under the
                Student's Gymkhana, is dedicated to empowering students with all
                their academic and research needs. Whether you are an
                Undergraduate or a Postgraduate student, we are here to help you
                with your academic and career-related queries and help you to
                achieve your goals.
              </p>

              <div className="mt-10 font-bold text-black">
                Scroll down for more information related to AnC Wings and Clubs.
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div key={index} className="w-full h-[350px] flex-shrink-0">
                    <Image
                      src={src}
                      width={500}
                      height={350}
                      alt={`Slide ${index}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

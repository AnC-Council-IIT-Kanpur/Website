// "use client";
// import React from "react";
// import Image from "next/image";
// import SectionHeader from "components/Common/SectionHeader";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const PastCollaborators = () => {
//   const collaborators = [
//     {
//       key: "1",
//       title: "MERLIN AI",
//       description: "Learn the process of generating and refining product ideas.",
//       image: "/images/collaborators/MerlinAI.jpeg", // Update with actual image path
//       resources: [
//         { type: "Presentation", link: "#", label: "View Presentation" },
//         { type: "Recording", link: "#", label: "Watch Recording" },
//       ],
//     },
//     {
//       key: "2",
//       title: "NEXT LEAP",
//       description: "Master the fundamentals of prototyping for product development.",
//       image: "/images/collaborators/nextleap_logo.jpeg", // Update with actual image path
//       resources: [
//         { type: "Presentation", link: "#", label: "View Presentation" },
//         { type: "Recording", link: "#", label: "Watch Recording" },
//       ],
//     },
//     {
//       key: "3",
//       title: "Doremon Den",
//       description: "Master the fundamentals of prototyping for product development.",
//       image: "/images/collaborators/DoremonDen.jpeg", // Update with actual image path
//       resources: [
//         { type: "Presentation", link: "#", label: "View Presentation" },
//         { type: "Recording", link: "#", label: "Watch Recording" },
//       ],
//     },
//     {
//       key: "4",
//       title: "Joget",
//       description: "Master the fundamentals of prototyping for product development.",
//       image: "/images/collaborators/Joget.jpeg", // Update with actual image path
//       resources: [
//         { type: "Presentation", link: "#", label: "View Presentation" },
//         { type: "Recording", link: "#", label: "Watch Recording" },
//       ],
//     },
//     {
//       key: "5",
//       title: "PM School",
//       description: "Master the fundamentals of prototyping for product development.",
//       image: "/images/collaborators/PMSchool.png", // Update with actual image path
//       resources: [
//         { type: "Presentation", link: "#", label: "View Presentation" },
//         { type: "Recording", link: "#", label: "Watch Recording" },
//       ],
//     },
//     // Add more sessions as needed
//   ];

//   return (
//     <>
//       {/* <!-- ===== Past Sessions Start ===== --> */}
//       <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           {/* <!-- Section Title Start --> */}
//           <div className="animate-fadeInUp mx-auto text-center">
//             <SectionHeader
//               headerInfo={{
//                 title: `OUR COLLABORATORS`,
//                 subtitle: `Explore Our Previous Collaborations`,
//                 description: `Discover presentations and recordings from our past workshops.`,
//               }}
//             />
//           </div>
//           {/* <!-- Section Title End --> */}
//         </div>

//         <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0 animate-fadeInUp">
//           <div className="absolute -bottom-15 -z-1 h-full w-full">
//             <Image
//               fill
//               src="/images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//             />
//           </div>

//           <Swiper
//             spaceBetween={30}
//             slidesPerView={3}
//             modules={[Pagination, Navigation, Autoplay]}
//             pagination={{ clickable: true }}
//             navigation={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             speed={2000}
//             className="h-full dark:block object-cover w-full transition-opacity duration-500 ease-in-out"
//           >
//             {collaborators.map((collaborator) => (
//               <SwiperSlide key={collaborator.key}>
//                 <div
//                   className="p-7.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark group relative rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 animate-fadeInUp"
//                 >
//                   <div className="relative h-40 w-full mb-7.5">
//                     <Image
//                       src={collaborator.image}
//                       alt={collaborator.title}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded-t-lg"
//                     />
//                   </div>
//                   <h3 className="mb-2.5 text-xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                     {collaborator.title}
//                   </h3>
//                   <p className="mb-7.5 text-black dark:text-white">
//                     {collaborator.description}
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//       {/* <!-- ===== Past Sessions End ===== --> */}
//     </>
//   );
// };

// export default PastCollaborators;


"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "components/Common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PastCollaborators = () => {
  const collaborators = [
    {
      key: "1",
      title: "MERLIN AI",
      description: "Learn the process of generating and refining product ideas.",
      image: "/images/productClubCollaborators/MerlinAI.jpeg", // Update with actual image path
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
        key: "2",
      title: "NEXT LEAP",
      description: "Master the fundamentals of prototyping for product development.",
      image: "/images/productClubCollaborators/nextleap_logo.jpeg", // Update with actual image path
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
        key: "3",
      title: "Doremon Den",
      description: "Master the fundamentals of prototyping for product development.",
      image: "/images/productClubCollaborators/DoremonDen.jpeg", // Update with actual image path
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
        key: "4",
      title: "Joget",
      description: "Master the fundamentals of prototyping for product development.",
      image: "/images/productClubCollaborators/Joget.jpeg", // Update with actual image path
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    {
        key: "5",
      title: "PM School",
      description: "Master the fundamentals of prototyping for product development.",
      image: "/images/productClubCollaborators/PMSchool.png", // Update with actual image path
      resources: [
        { type: "Presentation", link: "#", label: "View Presentation" },
        { type: "Recording", link: "#", label: "Watch Recording" },
      ],
    },
    // Add more sessions as needed
  ];

  return (
    <>
      {/* <!-- ===== Past Sessions Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate-fadeInUp mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: "OUR COLLABORATORS",
                subtitle: "Explore Our Previous Collaborations",
                description: "Discover presentations and recordings from our past workshops.",
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0 animate-fadeInUp">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop={true}
            speed={1500}
            className="h-full dark:block object-cover w-full transition-opacity duration-500 ease-in-out"
          >
            {collaborators.map((collaborators, index) => (
              <SwiperSlide key={collaborators.key}>
                <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                <div
                key={index}
                className="p-7.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark group relative rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 animate-fadeInUp"
                >
                <div className="relative h-40 width-full mb-7.5">
                  <Image
                    src={collaborators.image}
                    alt={collaborators.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <h3 className="mb-2.5 text-xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  {collaborators.title}
                </h3>
                <p className="mb-7.5 text-black dark:text-white">
                  {collaborators.description}
                </p>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        {/* </div> */}
      </section>
      {/* <!-- ===== Past Sessions End ===== --> */}
    </>
  );
};

export default PastCollaborators;
import React from "react";
import { Team } from "@/types/team";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SingleTeam = ({ team }: { team: Team }) => {
  const { icon, title, designation, role, description, phone, linkedin, email } = team;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-100 w-100 items-center  justify-center justify-content-center rounded-[50%] ">
          <Image src={icon} width={200} height={200} alt="title" className="rounded-[50%]" />
        </div>
        <h2 className="mb-2 mt-7.5 text-xl font-semibold text-black text-center dark:text-white xl:text-itemtitle">
          {title}
        </h2>
        <p className="text-center">{designation}, {role}</p>
        <p className="flex items-center justify-center mt-2 text-sm text-center">{phone}
          <Link href={linkedin} aria-label="social icon" className="inline-block ml-3">
            <svg
              className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
              width="18"
              height="18"
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
          </Link>
        </p>
      </motion.div>
    </>
  );
};

export default SingleTeam;
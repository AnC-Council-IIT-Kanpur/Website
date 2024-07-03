"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import Link from 'next/link'
const MainEvents = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PAST EVENTS`,
                subtitle: `Celebrating Excellence`,
                description: `Highlighted events hosted by the Academic and Career Council at IIT Kanpur`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
            <Image
              src="/images/logo/carrer_connect.png"
              width={250}
              height={250}
              alt="Dotted"
            />
              <h6 className="mb-2.5 mt-6 text-2xl font-bold text-black dark:text-white">
                Career Connect
              </h6>
              <p className='mt-6'>The Academics and Career Council organized CAREER CONNECT, a three-day event for all undergraduate and postgraduate students, from 10th to 12th February 2023.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black text-lg font-bold last:mb-0 dark:text-manatee">
                    Planned events
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Programming Pathshala
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Product Management
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Crypto Trading Hackathon
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unorthodox Career Choices
                  </li>

                </ul>
              </div>

              <button
                aria-label="Explore more about the event"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <Link href='https://career-connect.anciitk.in/'>
                  <span className="duration-300 group-hover/btn:pr-2">
                    Explore More
                  </span>
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
            <Image
              src="/images/logo/anc_logo2.png"
              width={250}
              height={250}
              alt="Dotted"
            />
              <h6 className="mb-2.5 text-2xl font-bold mt-6 text-black dark:text-white">
                NSRC
              </h6>
              <p className='mt-6'>The 5th National Students’ Research Convention 2023 (NSRC ’23), took place from 3-5 March, 2023, with the theme 'MedTech and Healthcare: The Welfare of Humanity'.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black text-md font-bold last:mb-0 dark:text-manatee">
                    Competition Themes at NSRC
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Biomechanics & Biophysics
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Medical imaging
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Medical instrumentations
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Medical sensing & Implant
                  </li>
                </ul>
              </div>

              <button
                aria-label="Explore more about the event"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <Link href='https://www.iitk.ac.in/new/national-students-research-convention-23'>
                  <span className="duration-300 group-hover/btn:pr-2">
                    Explore More
                  </span>
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
            <Image
              src="/images/logo/irs.png"
              width={250}
              height={250}
              alt="Dotted"
            />
              <h6 className="mb-2.5 text-2xl font-bold mt-6 text-black dark:text-white">
                IRS
              </h6>
              <p className='mt-6'>Academics and Career Council organised IRS where the PG and UG students of IIT Kanpur from various engineering and sciences disciplines showcased their research to the larger community.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black text-md font-bold last:mb-0 dark:text-manatee">
                    Professors at the Symposium
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Prof. SN Tripathi
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Prof. Manoj Harbola
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Prof. Sandeep Verma
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Prof. Abhay Karandikar
                  </li>
                </ul>
              </div>

              <button
                aria-label="Explore more about the event"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <Link href='https://www.iitk.ac.in/new/irs-2023'>
                  <span className="duration-300 group-hover/btn:pr-2">
                    Explore More
                  </span>
                </Link>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default MainEvents;

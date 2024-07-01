"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Grad = () => {
    return (
        <section className="relative pb-20 overflow-hidden pt-35 md:pt-40 xl:pb-25 xl:pt-46">
            <div className="px-4 mx-auto max-w-c-1390 md:px-8 2xl:px-0">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-8 text-4xl font-bold text-center text-black dark:text-white">
                        Graduate Research Application Directory
                    </h2>
                    <p className="mx-8 mb-5 text-center text-black text-md dark:text-white">
                        The Prospect of attending an International Graduate School harbours the will to innovate
                        and expand imagination at its helm and once you decide to kindle the fire, all you need is an elegant application to take you all the way.This Guide aims to enable you to traverse the ins and outs of the concept of Applying to an
                        International Graduate School. The Guide is a compilation of the experiences and proficiency
                        of our recent alumni who underwent similar sentiments and doubts and ultimately overcame
                        them in favour of their application. Details of the individuals have been mentioned at the end.
                    </p>
                    <div className='flex items-center justify-center w-full '>
                        <Link href="https://drive.google.com/file/d/1oeSLXFXlEEI8zctiDi3vh6Hc9yvrp65I/view?fbclid=IwAR3MjWFcypZIr8HuNmgo-5BINrh1KBcKAtUnihDGJhTNXg-wv2OBa-q981A" target="_blank">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-md px-5 py-2.5 text-center me-2 mb-2">Link to GRAD</button>
                        </Link>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Grad;

"use client";

import { motion } from "framer-motion";

const CalendarView = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
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
          <h2 className="mb-5 text-3xl font-bold text-black dark:text-white">
            Upcoming Talks & Seminars
          </h2>
          <p className="mb-5 text-lg text-black dark:text-white">
            The Research wing routinely conducts a number of events, talks, and sessions, covering various aspects of research and work (including career options, research opportunities (on & off campus), guidance sessions, departmental orientation sessions, and technical workshops). Managers of the wing bear the responsibility of organizing these sessions with the assistance of the council secretaries.
            Join us for insightful talks and seminars hosted by leading experts in various fields. Stay updated with our calendar to never miss an event.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primary-dark"
          >
            View Calendar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarView;

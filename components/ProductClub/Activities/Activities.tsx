"use client";

import React from "react";
import { motion } from "framer-motion";
import activitiesData from "./activitiesData";
import ActivityCard from "./ActivityCard";
import SectionHeader from "components/Common/SectionHeader";

const Activities = () => {
  return (
    <section id="activities" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "OUR ACTIVITIES",
            subtitle: "Explore Our Dynamic Product Development Activities",
            description: `Discover the exciting activities organized by the Product Club at IITK, including workshops, hackathons, mentorship programs, and more. Engage with peers, develop your skills, and bring your ideas to life.`,
          }}
        />

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activitiesData.map((activity, index) => (
            <ActivityCard key={index} activity={activity} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;

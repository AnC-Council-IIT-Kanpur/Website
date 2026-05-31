"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";


const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-6 lg:py-25 xl:py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Core Structure of the ANC Council",
              subtitle: "Wings Under the AnC Council",
              description: `The Academics and Career Council primarily has seven wings to ensure efficient operation`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {/* <!-- Features item Start --> */}
            
            {featuresData.map((feature, key) => (
              
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;

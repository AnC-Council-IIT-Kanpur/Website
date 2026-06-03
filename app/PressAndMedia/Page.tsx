"use client";

import React, { useState, useEffect } from 'react';
import SectionHeader from '@/components/Common/SectionHeader';
import Link from 'next/link';

// Mock Data structure mirroring the same pattern used for faculty playlist elements
const PRESS_RELEASES_DATA = [
  {
    id: "solar-man-workshop",
    title: "AnC Council (PG) Hosts 'Solar Man of India' Prof. Chetan Singh Solanki for Climate Workshop",
    description: "In a joint collaboration with Vigyan Bharati and Student Gymkhana, IIT Kanpur's Academic and Career Council (PG) hosted an impactful climate action seminar covered extensively by national newspapers.",
    publishDate: "May 22, 2026",
    badge: "Mega Event",
    featuredImage: "/images/press-and-media/press-and-media.jpeg", // Pulled from your static/public directory
    publications: ["Dainik Jagran", "Amar Ujala", "Times of India", "Amrit Vichar", "AAJ"]
  }
];

export default function PressMediaPage() {
  const [pressItems, setPressItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mimicking the loading architecture used in KnowYourFacultyPage
    async function loadPressData() {
      try {
        setPressItems(PRESS_RELEASES_DATA);
      } catch (error) {
        console.error("Error setting press data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPressData();
  }, []);

  return (
    <div className="pb-20 pt-40 min-h-screen bg-white">
      {/* Reusing your custom dynamic SectionHeader styling setup */}
      <SectionHeader
        headerInfo={{
          title: '✨ ANC SPOTLIGHT',
          subtitle: 'Press & Media Hub',
          description: `Official media coverages and student council achievements of the Academics and Career Council, IIT Kanpur.`,
        }}
      />

      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 mt-10">
        {loading ? (
          <p className="text-center text-body-color">Loading articles...</p>
        ) : pressItems.length === 0 ? (
          <p className="text-center text-body-color">No media coverage available at the moment.</p>
        ) : (
          <div className="space-y-12">
            {pressItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-stroke p-6 sm:p-8 lg:p-10 shadow-solid-3 hover:shadow-solid-4 transition duration-300 grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Media Image display Wrapper */}
                <div className="w-full h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden relative border border-stroke flex items-center justify-center">
                  <img 
                    src={item.featuredImage} 
                    className="w-full h-full object-contain p-2" 
                    alt={item.title} 
                  />
                </div>

                {/* Content Details Content Area */}
                <div className="flex flex-col justify-between h-full py-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> {item.badge}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 hover:text-primary transition duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-body-color text-base mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Dynamic Badges Container */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.publications.map((pub, idx) => (
                        <span 
                          key={idx} 
                          className="text-[11px] bg-gray-50 text-waterloo px-2.5 py-1 rounded font-medium border border-stroke"
                        >
                          {pub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stroke">
                    <span className="text-xs text-waterloo font-medium">Published: {item.publishDate}</span>
                    <Link 
                      href={`/article-${item.id}`} 
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-primary text-white rounded-xl text-sm font-medium transition duration-200 shadow-sm"
                    >
                      Read Full Story &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

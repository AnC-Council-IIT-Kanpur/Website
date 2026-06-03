"use client";

import React from 'react';
import Link from 'next/link';

export default function ArticleSolarManPage() {
  return (
    <div className="pb-20 pt-40 min-h-screen bg-gray-50">
      <main className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white p-6 sm:p-10 md:p-12 shadow-solid-3 rounded-2xl border border-stroke">
          
          {/* Back Navigation Bar */}
          <div className="mb-8">
            <Link 
              href="/press-media" 
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline transition"
            >
              &larr; Back to Press & Media Hub
            </Link>
          </div>

          {/* Meta Information Container */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-waterloo mb-4">
            <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              National Press Release
            </span>
            <span className="font-medium">Published: May 22, 2026</span>
            <span className="text-stroke">|</span>
            <span className="text-black font-semibold">Location: IIT Kanpur Campus</span>
          </div>

          {/* Article Header Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight tracking-tight mb-6">
            AnC Council (PG) Hosts 'Solar Man of India' Prof. Chetan Singh Solanki for a Mega Climate Awareness Workshop
          </h1>

          {/* Author/Organizer Badge block */}
          <div className="flex items-center gap-3 border-y border-stroke py-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm">
              AnC
            </div>
            <div>
              <p className="text-sm font-bold text-black">Academics and Career Council (PG)</p>
              <p className="text-xs text-waterloo">Joint Initiative with Student Gymkhana, Vigyan Bharati & KV IITK</p>
            </div>
          </div>

          {/* Main Newspaper Cutting Showcase section */}
          <div className="rounded-xl overflow-hidden bg-white mb-10 border border-stroke max-w-lg mx-auto shadow-sm">
            <img 
              src="/WhatsApp Image 2026-05-31 at 16.27.19.jpeg" 
              className="w-full h-auto object-cover" 
              alt="Dainik Jagran News Article" 
            />
          </div>

          {/* Story Context details written out */}
          <div className="text-black leading-relaxed space-y-6 text-base sm:text-md">
            <p className="font-bold text-lg">
              <span className="font-black text-primary uppercase tracking-wide">KANPUR:</span> To address the crucial global threat of climate change, the Academic and Career Council (PG) of IIT Kanpur organized an interactive workshop.
            </p>
            <p className="text-body-color">
              The session was conducted by the globally acclaimed environmentalist <strong>"Solar Man of India," Prof. Chetan Singh Solanki</strong> as part of his 100-day nationwide <em>'Bharat Climate Satyagraha Yatra'</em>. The event highlighted clean alternatives and energy mindfulness tools.
            </p>
          </div>

          {/* Clickable Papers Segment */}
          <div className="mt-12 pt-8 border-t border-stroke">
            <h3 className="text-lg font-bold text-black mb-3">Media Coverage & Newspaper Excerpts</h3>
            <p className="text-sm text-waterloo mb-6">Click on any publication card below to open its official newspaper excerpt view:</p>
            
            <div className="grid gap-4">
              {/* Card 1: Dainik Jagran */}
              <a 
                href="/WhatsApp Image 2026-05-31 at 16.27.19.jpeg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-4 bg-gray-50 rounded-xl border border-stroke hover:border-primary hover:bg-gray-50/50 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-primary block mb-0.5 group-hover:underline">Dainik Jagran (Kanpur City Page-I)</span>
                    <p className="text-xs text-body-color italic">"Focused primarily on the 'Seemit Jeevan Sankalp' and resource protection."</p>
                  </div>
                  <span className="text-xs bg-white text-waterloo border border-stroke px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">View ↗</span>
                </div>
              </a>

              {/* Card 2: Amar Ujala */}
              <a 
                href="/WhatsApp Image 2026-05-31 at 16.27.9.jpeg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-4 bg-gray-50 rounded-xl border border-stroke hover:border-primary hover:bg-gray-50/50 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-primary block mb-0.5 group-hover:underline">Amar Ujala (My City Page-05)</span>
                    <p className="text-xs text-body-color italic">"Highlighted the interactive lamp-lighting ceremony and event milestones."</p>
                  </div>
                  <span className="text-xs bg-white text-waterloo border border-stroke px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">View ↗</span>
                </div>
              </a>

              {/* Card 3: Times of India */}
              <a 
                href="/WhatsApp Image 2026-05-31 at 16.27.18.jpeg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-4 bg-gray-50 rounded-xl border border-stroke hover:border-primary hover:bg-gray-50/50 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-primary block mb-0.5 group-hover:underline">The Times of India (Page-04)</span>
                    <p className="text-xs text-body-color italic">"Featured details on technical carbon footprint metrics and the 150-minute workshop."</p>
                  </div>
                  <span className="text-xs bg-white text-waterloo border border-stroke px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">View ↗</span>
                </div>
              </a>

              {/* Card 4: Amrit Vichar */}
              <a 
                href="/WhatsApp Image 2026-05-31 at 16.27.1.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-4 bg-gray-50 rounded-xl border border-stroke hover:border-primary hover:bg-gray-50/50 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-primary block mb-0.5 group-hover:underline">Amrit Vichar (Page-VIII)</span>
                    <p className="text-xs text-body-color italic">"Lauded the synergy between IIT Kanpur's core council teams and KV school students."</p>
                  </div>
                  <span className="text-xs bg-white text-waterloo border border-stroke px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">View ↗</span>
                </div>
              </a>

              {/* Card 5: AAJ Paper */}
              <a 
                href="/WhatsApp Image 2026-05-31 at 16.27.20.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block p-4 bg-gray-50 rounded-xl border border-stroke hover:border-primary hover:bg-gray-50/50 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-primary block mb-0.5 group-hover:underline">AAJ Newspaper (Page-11)</span>
                    <p className="text-xs text-body-color italic">"Emphasized nature protection as a collective responsibility and honored council members."</p>
                  </div>
                  <span className="text-xs bg-white text-waterloo border border-stroke px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">View ↗</span>
                </div>
              </a>
            </div>
          </div>

        </article>
      </main>
    </div>
  );
}

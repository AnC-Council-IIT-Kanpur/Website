import React from 'react';

export default function ArticleSolarMan() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-white p-6 sm:p-10 md:p-16 shadow-xs rounded-2xl border border-slate-100">
        
        <div class="mb-8">
            <a href="/press-media" class="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition">
                &larr; Back to Press & Media Hub
            </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">National Press Release</span>
          <span className="font-medium">Published: May 22, 2026</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-semibold">Location: IIT Kanpur Campus</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-6">
          AnC Council (PG) Hosts 'Solar Man of India' Prof. Chetan Singh Solanki for a Mega Climate Awareness Workshop
        </h1>

        <div className="flex items-center gap-3 border-y border-slate-100 py-4 mb-10">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-xs">AnC</div>
          <div>
            <p className="text-sm font-bold text-slate-950">Academics and Career Council (PG)</p>
            <p className="text-xs text-slate-500">Joint Initiative with Student Gymkhana, Vigyan Bharati & KV IITK</p>
          </div>
        </div>

        {/* Core Newspaper Cut Box */}
        <div className="rounded-2xl overflow-hidden bg-white mb-10 shadow-sm border border-slate-100 max-w-xl mx-auto">
          <img src="/WhatsApp Image 2026-05-31 at 16.27.19_2.jpeg" className="w-full h-auto object-cover" alt="Dainik Jagran News Article" />
        </div>

        <div className="text-slate-700 leading-relaxed space-y-6 text-base sm:text-lg">
          <p className="font-bold text-slate-950 text-lg sm:text-xl">
            <span className="font-black text-blue-600 uppercase tracking-wide">KANPUR:</span> To address the crucial global threat of climate change, the Academic and Career Council (PG) of IIT Kanpur organized an interactive workshop.
          </p>
          <p>
            The session was conducted by the globally acclaimed environmentalist <strong>"Solar Man of India," Prof. Chetan Singh Solanki</strong> as part of his 100-day nationwide <em>'Bharat Climate Satyagraha Yatra'</em>.
          </p>
        </div>

        {/* 📰 CLICKABLE NEWSPAPER BLOCKS */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-extrabold text-slate-950 mb-4">Media Coverage & Newspaper Excerpts</h3>
          <p className="text-sm text-slate-500 mb-6">Click on any newspaper below to view its official press cutting or image:</p>
          
          <div className="space-y-4">
            
            {/* Dainik Jagran Link */}
            <a href="/WhatsApp Image 2026-05-31 at 16.27.19_2.jpeg" target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/30 transition duration-200 group">
              <div className="flex justify-between items-start">
                <div>
                  <strong class="text-sm text-blue-600 block mb-1 group-hover:underline">Dainik Jagran (Kanpur City Page-I)</strong>
                  <p className="text-sm text-slate-700 italic">"Focused primarily on the 'Seemit Jeevan Sankalp' and the urgency of protecting future resources."</p>
                </div>
                <span className="text-xs bg-white text-slate-400 border border-slate-200 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-200 font-medium">View Image ↗</span>
              </div>
            </a>

            {/* Amar Ujala Placeholder */}
            <a href="#" className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-purple-300 hover:bg-purple-50/30 transition duration-200 group">
              <div className="flex justify-between items-start">
                <div>
                  <strong class="text-sm text-purple-600 block mb-1 group-hover:underline">Amar Ujala (My City Page-05)</strong>
                  <p className="text-sm text-slate-700 italic">"Highlighted the interactive lamp-lighting ceremony and community engagement milestones."</p>
                </div>
                <span className="text-xs bg-white text-slate-400 border border-slate-200 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-200 font-medium">View Image ↗</span>
              </div>
            </a>

          </div>
        </div>

      </article>
    </main>
  );
}

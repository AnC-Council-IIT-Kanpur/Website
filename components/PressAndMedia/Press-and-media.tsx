import React from 'react';

export default function PressMedia() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* HERO HEADER */}
      <div className="text-center md:text-left mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          ✨ AnC Spotlight
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-950 mt-4 tracking-tight">Press & Media Hub</h1>
        <p className="text-slate-500 mt-3 text-lg max-w-2xl leading-relaxed">
          Official media coverages and student council achievements of the Academics and Career Council, IIT Kanpur.
        </p>
      </div>

      {/* MAIN PORTAL CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* MAIN FEATURED STORY */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-100 overflow-hidden grid md:grid-cols-2 gap-0 mb-16 hover:shadow-md transition duration-300">
          <div className="h-64 md:h-full min-h-[400px] bg-slate-900 relative">
            {/* React me image import ya direct public path se use hoti hai */}
            <img 
              src="/images/press-and-media/press-and-media.jpeg" 
              className="w-full h-full object-contain bg-white" 
              alt="Dainik Jagran Coverage - Solar Man Event" 
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> Mega Event
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 tracking-tight leading-snug">
              AnC Council (PG) Hosts 'Solar Man of India' Prof. Chetan Singh Solanki for Climate Workshop
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In a joint collaboration with Vigyan Bharati and Student Gymkhana, IIT Kanpur's Academic and Career Council (PG) hosted an impactful climate action seminar covered extensively by national newspapers.
            </p>
            
            {/* Newspaper Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium border border-slate-200">Dainik Jagran</span>
              <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium border border-slate-200">Amar Ujala</span>
              <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium border border-slate-200">Times of India</span>
              <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium border border-slate-200">Amrit Vichar</span>
            </div>

            <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-medium">Published: May 22, 2026</span>
              {/* Agar React Router hai to <Link to="/article"> use karein, Next.js hai to <Link href="/article"> */}
              <a href="/article-solar-man" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition shadow-xs">
                Read Full Story &rarr;
              </a>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

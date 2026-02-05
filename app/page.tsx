'use client';

import React, { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const FORMSPREE_ID = "https://formspree.io/f/xgolwkjn"; 

const PROJECTS = [
  {
    title: "Insighte Stream",
    url: "https://insighte-stream.vercel.app/",
    tags: ["Next.js", "Streaming", "UI/UX"],
    desc: "A high-performance data and media streaming interface."
  },
  {
    title: "Scene City",
    url: "https://scenecity.netlify.app/",
    tags: ["Web Design", "Creative", "Frontend"],
    desc: "A visually immersive urban-themed digital experience."
  },
  {
    title: "Eedreess Portfolio",
    url: "https://eedreess.vercel.app/",
    tags: ["Personal Brand", "Next.js", "Business"],
    desc: "Strategic personal branding site built for conversion."
  },
  {
    title: "Habu Peti",
    url: "https://habu-peti.vercel.app/",
    tags: ["Commercial", "Product", "React"],
    desc: "E-commerce and product showcase for specialized retail."
  },
  {
    title: "Psychic Journey",
    url: "https://psychicjourney.vercel.app/",
    tags: ["Experience", "Framer Motion", "Interactive"],
    desc: "An interactive storytelling journey with complex animations."
  },
  {
    title: "Spaku Kleaners",
    url: "https://spakukleaners.vercel.app/",
    tags: ["Service Business", "Automation", "SEO"],
    desc: "Full-service business platform for operational cleaning management."
  }
];

const TECH_GROUPS = [
  {
    category: "Frontend Experience",
    items: [
      { name: "Next.js 15", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
      { name: "React 19", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
      { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
      { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" }
    ],
    color: "text-blue-600"
  },
  {
    category: "Backend Architecture",
    items: [
      { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "Express", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
      { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "Prisma ORM", logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
      { name: "Next API", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" }
    ],
    color: "text-emerald-600"
  },
  {
    category: "Business & Strategy",
    items: [
      { name: "Entrepreneurship", logo: "💼" },
      { name: "Product Roadmap", logo: "🗺️" },
      { name: "Market Analysis", logo: "📊" },
      { name: "ROI Focus", logo: "📈" },
      { name: "B.Sc. Business", logo: "🎓" }
    ],
    color: "text-purple-600"
  }
];

const SERVICES = [
  {
    title: "The MVP Launchpad",
    desc: "Transforming entrepreneurial ideas into high-performance prototypes focused on speed-to-market.",
    icon: "🚀"
  },
  {
    title: "Business Automation",
    desc: "Developing custom Node.js backends and tools to eliminate operational bottlenecks.",
    icon: "⚙️"
  },
  {
    title: "High-Conversion Web",
    desc: "SEO-optimized Next.js frontends designed with a business mindset to drive revenue.",
    icon: "📈"
  }
];

// --- HELPER COMPONENTS ---
const ConfettiBurst = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(40)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 rounded-sm animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#06b6d4', '#a855f7', '#fbbf24', '#ffffff'][Math.floor(Math.random() * 4)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default function Portfolio() {
  const [viewModes, setViewModes] = useState<Record<number, boolean>>({});
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const toggleView = (idx: number) => {
    setViewModes(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopy = (url: string, idx: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('SENDING');
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(FORMSPREE_ID, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('SUCCESS');
      } else {
        setFormStatus('ERROR');
      }
    } catch (err) {
      setFormStatus('ERROR');
    }
  }

  return (
    <main className="relative min-h-screen text-zinc-900 overflow-x-hidden selection:bg-white/30 font-sans">
      
      {/* Sharp Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-blue-500 opacity-90" />
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-white/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-200/30 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-4 md:top-8 left-0 right-0 z-50 px-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-5 md:px-8 py-4 bg-white/20 backdrop-blur-3xl border border-white/40 rounded-full shadow-2xl">
            <span className="font-black text-[10px] md:text-xs tracking-[0.2em] text-zinc-900 uppercase">OMONIYI.A</span>
            
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-700">
              <a href="#stack" className="hover:text-black transition-colors">Stack</a>
              <a href="#projects" className="hover:text-black transition-colors">Projects</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </div>

            <a 
              href="/Omoniyi_Abdulmuizz_Abimbola_Modern_CV-1.pdf" 
              download="Omoniyi_Abdulmuizz_Abimbola_Modern_CV-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-4 md:px-6 py-2.5 bg-black text-white rounded-full hover:scale-105 transition-all active:scale-95 shadow-lg"
            >
              Download CV
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-36 pb-16 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <p className="text-white font-mono text-[10px] md:text-xs mb-6 tracking-[0.4em] uppercase drop-shadow-sm font-bold">
              Fullstack Developer • Business & Entrepreneurship
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-black">
              ABIMBOLA <br className="hidden md:block" />
              <span className="text-white italic uppercase drop-shadow-md">Abdulmuizz</span>
            </h1>
            <p className="text-zinc-800 text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0 font-medium">
              I engineer <span className="bg-white/40 px-2 rounded">profit-driven technology</span>. 
              Merging entrepreneurial vision with fullstack execution.
            </p>
          </div>

          <div className="relative group flex justify-center items-center w-full max-w-md mx-auto lg:max-w-full">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-[3rem] md:rounded-[4rem] overflow-hidden border-4 border-white/50 shadow-2xl transition-all duration-700">
              <img 
                src="/me.JPG" 
                alt="Omoniyi Abimbola Abdulmuizz"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-16 h-16 border-b-4 border-r-4 border-white rounded-br-[2rem] pointer-events-none" />
          </div>
        </section>

        {/* Tech Arsenal */}
        <section id="stack" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/20">
          <h2 className="text-[10px] font-mono text-zinc-900 uppercase tracking-widest mb-16 italic text-center md:text-left font-bold">Technical Arsenal</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TECH_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-xl border border-white/40 p-8 md:p-12 rounded-[3rem] shadow-xl hover:bg-white/40 transition-all">
                <h3 className={`${group.color} text-[11px] font-black mb-10 uppercase tracking-[0.3em] text-center`}>{group.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="group flex flex-col items-center justify-center p-5 bg-white/50 rounded-[2rem] border border-white/60 hover:border-black/20 hover:bg-white transition-all">
                      {item.logo.startsWith('http') ? (
                        <img src={item.logo} alt={item.name} className="w-7 h-7 md:w-8 md:h-8 mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      ) : (
                        <span className="text-2xl mb-3 group-hover:scale-110 transition-transform">{item.logo}</span>
                      )}
                      <span className="text-[9px] font-black text-zinc-600 uppercase text-center group-hover:text-black transition-colors">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24 bg-white/20 backdrop-blur-md rounded-[3rem] border border-white/40 mb-24 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-4 md:p-8 text-center md:text-left group cursor-default">
                <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-black tracking-tight">{s.title}</h3>
                <p className="text-zinc-800 leading-relaxed text-sm font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section with LIVE RESPONSIVE IFRAMES */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/20">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-[10px] font-mono text-zinc-900 uppercase tracking-widest italic font-bold mb-4">Live Deployments</h2>
              <p className="text-3xl font-black text-black tracking-tighter uppercase">Direct Previews</p>
            </div>
            <p className="text-[10px] font-bold text-zinc-700 bg-white/20 px-4 py-2 rounded-full border border-white/40">Interactive Sandbox Mode Active</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group bg-white/30 backdrop-blur-xl border border-white/40 rounded-[3rem] shadow-xl hover:bg-white/50 transition-all overflow-hidden flex flex-col">
                <div className="p-8 md:p-10 flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-tighter bg-black/5 px-3 py-1 rounded-full text-zinc-700">{tag}</span>
                      ))}
                    </div>
                    {/* View Toggle Switch */}
                    <button 
                      onClick={() => toggleView(idx)}
                      className="text-[9px] font-black uppercase tracking-widest bg-black text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors"
                    >
                      {viewModes[idx] ? 'Desktop View' : 'Mobile View'}
                    </button>
                  </div>

                  <div className="flex items-start justify-between mb-4 group/title">
                    <h3 className="text-3xl font-black text-black tracking-tighter uppercase">{project.title}</h3>
                    <button 
                      onClick={() => handleCopy(project.url, idx)}
                      className="relative p-2 bg-white/50 rounded-full border border-white hover:bg-white transition-all active:scale-90"
                      title="Copy Link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      {copiedIdx === idx && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-bold py-1 px-2 rounded uppercase tracking-widest">Copied!</span>
                      )}
                    </button>
                  </div>
                  
                  {/* LIVE PREVIEW IFRAME CONTAINER */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/80 shadow-2xl mb-8 bg-white/50 flex justify-center items-center group-hover:shadow-cyan-500/10 transition-all h-[400px]">
                    <div className="absolute top-0 left-0 bg-white/90 h-8 w-full flex items-center justify-between px-4 border-b border-zinc-200 z-20">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="text-[8px] font-mono text-zinc-400 truncate max-w-[150px]">{project.url}</div>
                      <div className="w-4" />
                    </div>
                    
                    <div className={`mt-8 transition-all duration-500 shadow-2xl h-[calc(100%-32px)] ${viewModes[idx] ? 'w-[280px]' : 'w-full'}`}>
                       <iframe 
                        src={project.url} 
                        title={project.title}
                        className="w-full h-full border-none"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                       />
                    </div>
                  </div>

                  <p className="text-zinc-800 text-sm font-medium leading-relaxed mb-8">{project.desc}</p>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black group-hover:gap-5 transition-all"
                  >
                    Open Full Site <span className="text-xl">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form with Success Replacement & Confetti */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-40 flex flex-col items-center">
          <div className="relative w-full max-w-2xl bg-white/30 backdrop-blur-3xl border border-white/50 p-8 md:p-20 rounded-[3rem] shadow-2xl transition-all duration-500 overflow-hidden">
            
            {formStatus === 'SUCCESS' && <ConfettiBurst />}

            {formStatus === 'SUCCESS' ? (
              <div className="py-20 text-center animate-in fade-in zoom-in duration-700 relative z-10">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase text-black">Form Submitted!</h2>
                <p className="text-zinc-800 text-sm font-bold uppercase tracking-widest mb-8">Sent to developer BIMBALLER</p>
                <button 
                  onClick={() => setFormStatus('IDLE')}
                  className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-black">Contact</h2>
                  <p className="text-zinc-800 text-[9px] font-mono tracking-[0.4em] uppercase italic font-bold">Strategy Inquiry System</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Full Name" required className="w-full bg-white/50 border border-white/60 rounded-2xl px-6 py-5 focus:bg-white outline-none text-sm transition-all text-black placeholder:text-zinc-500" />
                    <input name="email" type="email" placeholder="Business Email" required className="w-full bg-white/50 border border-white/60 rounded-2xl px-6 py-5 focus:bg-white outline-none text-sm transition-all text-black placeholder:text-zinc-500" />
                  </div>
                  <textarea name="message" placeholder="Project Strategy & Business Goals..." rows={5} required className="w-full bg-white/50 border border-white/60 rounded-[2rem] px-6 py-5 focus:bg-white outline-none text-sm transition-all text-black placeholder:text-zinc-500" />
                  
                  <button 
                    disabled={formStatus === 'SENDING'}
                    type="submit" 
                    className="w-full py-6 rounded-2xl bg-black text-white font-black uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50"
                  >
                    {formStatus === 'SENDING' ? 'Processing...' : 'Initiate Strategy Inquiry'}
                  </button>

                  {formStatus === 'ERROR' && (
                    <p className="text-red-600 text-center text-[10px] font-black uppercase mt-4">Something went wrong. Please try again.</p>
                  )}
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 text-center border-t border-white/20">
          <div className="text-[9px] font-mono text-white tracking-[1em] uppercase mb-10 drop-shadow-sm font-bold">
            Omoniyi Abimbola Abdulmuizz // 2026
          </div>
          <div className="flex flex-wrap justify-center gap-6 px-6 text-[10px] font-black text-black uppercase tracking-widest">
            <span>Next.js 15</span>
            <span className="opacity-30">•</span>
            <span>Node.js</span>
            <span className="opacity-30">•</span>
            <span>Tailwind CSS</span>
            <span className="opacity-30">•</span>
            <span>TypeScript</span>
            <span className="opacity-30">•</span>
            <span>Business Strategy</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
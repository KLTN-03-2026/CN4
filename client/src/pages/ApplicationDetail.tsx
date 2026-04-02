const ApplicationDetail = () => {
  return (
    <body className="bg-background text-on-surface antialiased min-h-screen">
      {/* TopNavBar from Shared Components  */}
      <header className="w-full top-0 sticky z-50 bg-[#f7f9fb] dark:bg-slate-900">
        <div className="flex justify-between items-center px-12 py-6 max-w-360 mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              JobNest
            </span>
            <nav className="hidden md:flex items-center gap-8 font-manrope text-sm font-medium tracking-tight">
              <a
                className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors duration-200 ease-in-out"
                href="#"
              >
                Find Jobs
              </a>
              <a
                className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors duration-200 ease-in-out"
                href="#"
              >
                Jobs
              </a>
              <a
                className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors duration-200 ease-in-out"
                href="#"
              >
                Companies
              </a>
              <a
                className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors duration-200 ease-in-out"
                href="#"
              >
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-secondary dark:text-slate-400 hover:text-primary transition-colors">
              notifications
            </button>
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
              <img
                alt="Recruiter profile avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUhGtqBm-qkBRJHUg7_qLE0i2gd4LQAUrOMH9MLNodechIePpPtba3IojXG-opQQMXZp5fGX2DrZaKWtzQcullMd0pMd6LRbHuCOIPBarbzmNQRZEkaCpiXTTWeeUPfSKuNhs9Qmrcm-t6HWh3VZCA-81jKjfjP8Tzhsm8whdukNvNxiHJmFKLZy1FKkSa5lm1fNp2Xa73J_Dbxpek_d0-Tlcf6HuxSU2FpIpDOseJQ4HmqS1VMqv3LPwnm9NzmnZwYkPHSTJOTi0"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="pb-20 px-8 max-w-350 mx-auto pt-12">
        {/* Header Section  */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary-fixed-dim text-on-secondary-fixed px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                In Review
              </span>
              <span className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  calendar_today
                </span>
                Applied 4 days ago
              </span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-primary mb-2">
              Elena Rodriguez
            </h1>
            <p className="text-xl text-secondary font-medium">
              Senior Product Designer &amp; UI Architect
            </p>
          </div>
        </header>
        {/* Bento Grid Layout  */}
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Area (Left/Center)  */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info  */}
              <section className="bg-surface-container-low p-8 rounded-xl">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-6">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary">
                      mail
                    </span>
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium">
                        Email Address
                      </p>
                      <p className="text-on-surface font-semibold">
                        elena.rodriguez@design.io
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary">
                      call
                    </span>
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium">
                        Phone Number
                      </p>
                      <p className="text-on-surface font-semibold">
                        +1 (555) 234-8901
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary">
                      location_on
                    </span>
                    <div>
                      <p className="text-xs text-on-surface-variant font-medium">
                        Location
                      </p>
                      <p className="text-on-surface font-semibold">
                        Brooklyn, NY (Open to Remote)
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Professional Intro  */}
              <section className="bg-surface-container-low p-8 rounded-xl">
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-6">
                  Introduction
                </h4>
                <p className="text-on-surface leading-relaxed text-sm">
                  I am a detail-oriented Product Designer with 8+ years of
                  experience bridging the gap between design and engineering. My
                  focus is on creating scalable design languages that empower
                  product teams to build faster and more consistently. I thrive
                  in environments that value high-end aesthetics paired with
                  rigorous user research and technical feasibility.
                </p>
              </section>
            </div>
            {/* Skills  */}
            <section className="bg-surface-container-low p-8 rounded-xl">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-6">
                Expertise &amp; Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  UI/UX Design
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  React
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  Figma
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  System Architecture
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  Tailwind CSS
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  Design Tokens
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  TypeScript
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  Web Accessibility
                </span>
                <span className="bg-surface-container-lowest text-primary px-4 py-2 rounded-xl text-sm font-semibold shadow-sm">
                  A/B Testing
                </span>
              </div>
            </section>
            {/* CV Preview Card (Moved here)  */}
            <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant border-opacity-10 p-8">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-6">
                REsume
              </h4>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-surface-container-low rounded-xl border border-outline-variant/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-error text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">
                      Elena_Rodriguez_CV.pdf
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      PDF Document • 1.2 MB
                    </p>
                  </div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>
                  Download
                </button>
              </div>
            </section>
          </div>
          {/* Sidebar Area (Right)  */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* AI Evaluation Card (Moved here)  */}
            <section className="bg-primary text-white p-8 rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="relative mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      auto_awesome
                    </span>
                    AI Analysis
                  </h3>
                  <div className="w-16 h-16 rounded-full border-2 border-primary-fixed flex items-center justify-center shrink-0">
                    <span className="text-xl font-extrabold">
                      94
                      <span className="text-xs">%</span>
                    </span>
                  </div>
                </div>
                <p className="text-on-primary-container leading-relaxed text-sm">
                  Elena exhibits exceptional alignment with the 'Senior UI
                  Architect' role. Her portfolio demonstrates advanced
                  system-level thinking and high-fidelity React prototyping.
                  Strong emphasis on accessibility (A11y) and collaborative
                  design systems is a key differentiator compared to other
                  candidates in the pool.
                </p>
              </div>
              <div className="relative space-y-6 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary-fixed mb-4">
                    Matching Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-fixed/20 text-primary-fixed px-3 py-1 rounded-lg text-[10px] font-semibold border border-primary-fixed/20">
                      UI/UX Design
                    </span>
                    <span className="bg-primary-fixed/20 text-primary-fixed px-3 py-1 rounded-lg text-[10px] font-semibold border border-primary-fixed/20">
                      Figma
                    </span>
                    <span className="bg-primary-fixed/20 text-primary-fixed px-3 py-1 rounded-lg text-[10px] font-semibold border border-primary-fixed/20">
                      React
                    </span>
                    <span className="bg-primary-fixed/20 text-primary-fixed px-3 py-1 rounded-lg text-[10px] font-semibold border border-primary-fixed/20">
                      Design Systems
                    </span>
                    <span className="bg-primary-fixed/20 text-primary-fixed px-3 py-1 rounded-lg text-[10px] font-semibold border border-primary-fixed/20">
                      A11y
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-error-container/70 mb-4">
                    Missing Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-error/20 text-error-container px-3 py-1 rounded-lg text-[10px] font-semibold border border-error/20 opacity-80">
                      Python
                    </span>
                    <span className="bg-error/20 text-error-container px-3 py-1 rounded-lg text-[10px] font-semibold border border-error/20 opacity-80">
                      AWS
                    </span>
                    <span className="bg-error/20 text-error-container px-3 py-1 rounded-lg text-[10px] font-semibold border border-error/20 opacity-80">
                      SQL
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* Footer from Shared Components  */}
      <footer className="w-full py-12 px-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-350 mx-auto">
          <p className="text-xs font-manrope uppercase tracking-widest text-slate-600 dark:text-slate-400">
            © 2024 The Digital Curator. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              className="text-xs font-manrope uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-manrope uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs font-manrope uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              href="#"
            >
              Help Center
            </a>
            <a
              className="text-xs font-manrope uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default ApplicationDetail;

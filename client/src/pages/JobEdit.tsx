const JobEdit = () => {
  return (
    <div className="text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <div className="relative flex min-h-screen w-full flex-col bg-surface overflow-x-hidden">
        {/* Updated TopNavBar from SCREEN_16  */}
        <header className="bg-[#f7f9fb] dark:bg-slate-900 font-manrope antialiased tracking-tight top-0 z-50">
          <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-8">
              <span className="text-2xl font-black text-[#001939] dark:text-blue-50 tracking-tighter">
                JobNest
              </span>
              <div className="hidden md:flex items-center gap-6">
                <a
                  className="text-[#446279] dark:text-slate-400 font-medium hover:text-[#001939] dark:hover:text-blue-200 transition-colors"
                  href="#"
                >
                  Find Jobs
                </a>
                <a
                  className="text-[#446279] dark:text-slate-400 font-medium hover:text-[#001939] dark:hover:text-blue-200 transition-colors"
                  href="#"
                >
                  Companies
                </a>
                <a
                  className="text-[#446279] dark:text-slate-400 font-medium hover:text-[#001939] dark:hover:text-blue-200 transition-colors"
                  href="#"
                >
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-[#001939] dark:text-blue-100 hover:bg-[#f2f4f6] dark:hover:bg-slate-800 rounded-lg transition-all active:scale-95">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-surface-container-high transition-transform hover:scale-105 cursor-pointer">
                <img
                  alt="Recruiter Profile Avatar"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3nOvsy3jPcqt-ucJqs5RGgVuhKxMwaLaAXAfnZhtTgl1wLiOuwF9MYeygX-KmkOnMZQ9ZPe1BCr7Zpn4hFhou5Bt7eyUqf1b2v_joaR2hh06CE3qvyh0xN3XXipQLpaRcohJ-_2Xj34qc8Azgz-R8hAPU-GpuOrrolC9PgqegLei7ZcYkE26ifHWJ1x9bDX3bsxFNUn_oe5CgF7P0k1wJQEQRWgMjT7pL8nf8vZT4GxYQRQSrme0fUbNHjEOzfe-Q7Ct9HyybeCY"
                />
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1 flex flex-col items-center py-12 px-6 lg:px-0">
          <div className="w-full max-w-4xl space-y-12">
            {/* Hero Section  */}
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed-dim/30 text-on-secondary-fixed text-[10px] font-bold tracking-widest uppercase">
                Editing Active Listing
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                Edit Job Posting
              </h1>
              <p className="text-secondary text-lg max-w-2xl leading-relaxed">
                Refine the details for the{" "}
                <span className="text-primary font-semibold">
                  Senior Product Designer
                </span>{" "}
                role to attract high-quality candidates.
              </p>
            </div>
            {/* Form Section  */}
            <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-xl editorial-shadow space-y-10">
              {/* Basic Info  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Job Title
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all"
                    type="text"
                    value="Senior Product Designer"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Category
                  </label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all appearance-none pr-12 bg-none">
                      <option selected>Design</option>
                      <option>Engineering</option>
                      <option>Marketing</option>
                      <option>Product</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/50 pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              {/* Job Description  */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Job Description
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all leading-relaxed"
                  rows={6}
                >
                  • Lead design sprints and conceptualization for our core
                  platform features. • Collaborate with PMs and Engineers to
                  translate complex requirements into elegant UI solutions. •
                  Mentor junior designers and conduct high-quality design
                  reviews. • Maintain and evolve our "Orbit" Design System
                  across web and mobile surfaces. • Advocate for user-centric
                  research methodologies in the development cycle.
                </textarea>
              </div>
              {/* Requirements  */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Requirements
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all leading-relaxed"
                  rows={4}
                >
                  • 5+ years of experience in product design for SaaS or B2B
                  platforms. • Strong portfolio demonstrating systems thinking
                  and UI craftsmanship. • Proficiency in Figma, prototyping
                  tools, and hand-off processes. • Experience working within
                  agile cross-functional teams.
                </textarea>
              </div>
              {/* Skills Tags  */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Required Skills
                </label>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-medium">
                    Figma{" "}
                    <span className="material-symbols-outlined text-xs cursor-pointer">
                      close
                    </span>
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-medium">
                    React{" "}
                    <span className="material-symbols-outlined text-xs cursor-pointer">
                      close
                    </span>
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-medium">
                    Python{" "}
                    <span className="material-symbols-outlined text-xs cursor-pointer">
                      close
                    </span>
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-dashed border-outline text-secondary text-sm font-medium hover:bg-surface-container-low">
                    <span className="material-symbols-outlined text-sm">
                      add
                    </span>{" "}
                    Add Skill
                  </button>
                </div>
              </div>
              {/* Benefits  */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">
                  Benefits 
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all leading-relaxed"
                  rows={3}
                >
                  • Competitive equity package &amp; performance bonuses. •
                  Remote-first culture with global co-working access. • $2,500
                  annual learning and development stipend.
                </textarea>
              </div>
              {/* Financials & Expiry  */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Min Salary
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
                      $
                    </span>
                    <input
                      className="w-full bg-surface-container-high border-none rounded-xl p-4 pl-8 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all"
                      type="text"
                      value="120,000"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Max Salary
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
                      $
                    </span>
                    <input
                      className="w-full bg-surface-container-high border-none rounded-xl p-4 pl-8 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all"
                      type="text"
                      value="180,000"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-wider">
                    Expiration Date
                  </label>
                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary material-symbols-outlined">
                      calendar_today
                    </span>
                    <input
                      className="w-full bg-surface-container-high border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all"
                      type="text"
                      value="2024-12-31"
                    />
                  </div>
                </div>
              </div>
              {/* Action Footer  */}
              <div className="pt-10 border-t border-outline-variant/15 flex flex-col md:flex-row gap-4">
                <button className="flex-1 bg-primary text-on-primary py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-primary/10">
                  Save Changes
                </button>
                <button className="px-8 bg-surface-container-low text-secondary py-5 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
                  Discard
                </button>
              </div>
            </div>
            {/* Footer Context  */}
          </div>
        </main>
        {/* Updated Footer from SCREEN_16  */}
        <footer className="bg-[#f7f9fb] dark:bg-slate-950 font-manrope text-sm tracking-wide border-t border-[#c3c6d0]/15 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-8 gap-4 max-w-7xl mx-auto">
            <span className="text-[#446279] dark:text-slate-500">
              © 2024 JobNest. Curating the future of work.
            </span>
            <div className="flex gap-8">
              <a
                className="text-[#446279] dark:text-slate-500 uppercase tracking-widest text-[10px] hover:text-[#001939] dark:hover:text-blue-400 underline underline-offset-4 transition-opacity"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-[#446279] dark:text-slate-500 uppercase tracking-widest text-[10px] hover:text-[#001939] dark:hover:text-blue-400 underline underline-offset-4 transition-opacity"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-[#446279] dark:text-slate-500 uppercase tracking-widest text-[10px] hover:text-[#001939] dark:hover:text-blue-400 underline underline-offset-4 transition-opacity"
                href="#"
              >
                Support
              </a>
            </div>
          </div>
        </footer>
        {/* Signature Texture/Editorial Gradient Element  */}
        <div className="fixed bottom-0 right-0 w-96 h-96 -z-10 bg-gradient-to-tl from-primary-fixed/20 to-transparent blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default JobEdit;

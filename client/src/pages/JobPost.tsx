const JobPost = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar  */}
      <header className="bg-[#f7f9fb] dark:bg-slate-900 font-manrope antialiased tracking-tight docked full-width top-0 z-50">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black text-primary dark:text-blue-50 tracking-tighter">
              JobNest
            </span>
            <div className="hidden md:flex items-center gap-6">
              <a
                className="text-secondary dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors"
                href="#"
              >
                Find Jobs
              </a>
              <a
                className="text-secondary dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors"
                href="#"
              >
                Companies
              </a>
              <a
                className="text-secondary dark:text-slate-400 font-medium hover:text-primary dark:hover:text-blue-200 transition-colors"
                href="#"
              >
                About
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-primary dark:text-blue-100 hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-lg transition-all active:scale-95">
              <span
                className="material-symbols-outlined"
                data-icon="notifications"
              >
                notifications
              </span>
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
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header Section  */}
        <div className="mb-12">
          <h1 className="text-[3.5rem] font-extrabold tracking-tight text-primary leading-tight mb-4">
            Post a Job
          </h1>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">
            Fill in the details below to find your next exceptional hire. Your
            listing will be curated for our professional network.
          </p>
        </div>
        {/* Form Container  */}
        <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_40px_60px_-5px_rgba(25,28,30,0.06)]">
          <form className="space-y-10">
            {/* Basic Info Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Job Title
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary-fixed focus:bg-white transition-all text-on-surface placeholder:text-outline/50"
                  placeholder="e.g. Senior Product Designer"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Job Category
                </label>
                <div className="relative">
                  <select className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary-fixed focus:bg-white transition-all appearance-none text-on-surface">
                    <option disabled selected value="">
                      Select Category
                    </option>
                    <option>Design</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Product Management</option>
                    <option>Sales</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
            {/* Rich Text Areas  */}
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Job Description
                </label>
                <div className="rounded-xl overflow-hidden bg-surface-container-highest">
                  <div className="flex items-center gap-2 p-2 border-b border-outline-variant/15 bg-surface-container-high/50">
                    <button
                      className="p-1.5 hover:bg-white rounded transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">
                        format_bold
                      </span>
                    </button>
                    <button
                      className="p-1.5 hover:bg-white rounded transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">
                        format_italic
                      </span>
                    </button>
                    <button
                      className="p-1.5 hover:bg-white rounded transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">
                        format_list_bulleted
                      </span>
                    </button>
                  </div>
                  <textarea
                    className="w-full bg-transparent border-none px-5 py-4 focus:ring-0 text-on-surface placeholder:text-outline/50 resize-none"
                    placeholder="Describe the role and day-to-day responsibilities..."
                    rows={6}
                  ></textarea>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                  Requirements
                </label>
                <div className="rounded-xl overflow-hidden bg-surface-container-highest">
                  <div className="flex items-center gap-2 p-2 border-b border-outline-variant/15 bg-surface-container-high/50">
                    <button
                      className="p-1.5 hover:bg-white rounded transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">
                        format_bold
                      </span>
                    </button>
                    <button
                      className="p-1.5 hover:bg-white rounded transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-sm">
                        format_list_bulleted
                      </span>
                    </button>
                  </div>
                  <textarea
                    className="w-full bg-transparent border-none px-5 py-4 focus:ring-0 text-on-surface placeholder:text-outline/50 resize-none"
                    placeholder="List core qualifications and skills..."
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Required Skills Section  */}
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Required Skills
              </label>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary-fixed focus:bg-white transition-all text-on-surface placeholder:text-outline/50"
                    placeholder="Type a skill and press Enter..."
                    type="text"
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold text-sm"
                    type="button"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-secondary/20 transition-all hover:bg-secondary/20">
                    <span className="">Figma</span>
                    <button
                      className="flex items-center justify-center hover:text-error"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">
                        close
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-secondary/20 transition-all hover:bg-secondary/20">
                    <span className="">React</span>
                    <button
                      className="flex items-center justify-center hover:text-error"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">
                        close
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm font-semibold border border-secondary/20 transition-all hover:bg-secondary/20">
                    <span className="">Python</span>
                    <button
                      className="flex items-center justify-center hover:text-error"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-base">
                        close
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Salary Range  */}
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Salary Range 
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline font-medium">
                    $
                  </span>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl pl-8 pr-5 py-4 focus:ring-2 focus:ring-primary-fixed focus:bg-white transition-all"
                    placeholder="Min"
                    type="number"
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline font-medium">
                    $
                  </span>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl pl-8 pr-5 py-4 focus:ring-2 focus:ring-primary-fixed focus:bg-white transition-all"
                    placeholder="Max"
                    type="number"
                  />
                </div>
              </div>
            </div>
            {/* Expiration Date  */}
            <div className="space-y-2">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Benefits
              </label>
              <div className="rounded-xl overflow-hidden bg-surface-container-highest">
                <div className="flex items-center gap-2 p-2 border-b border-outline-variant/15 bg-surface-container-high/50">
                  <button
                    className="p-1.5 hover:bg-white rounded transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      format_bold
                    </span>
                  </button>
                  <button
                    className="p-1.5 hover:bg-white rounded transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      format_italic
                    </span>
                  </button>
                  <button
                    className="p-1.5 hover:bg-white rounded transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-sm">
                      format_list_bulleted
                    </span>
                  </button>
                </div>
                <textarea
                  className="w-full bg-transparent border-none px-5 py-4 focus:ring-0 text-on-surface placeholder:text-outline/50 resize-none"
                  placeholder="List company perks, healthcare, or other advantages..."
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                Expiration Date
              </label>
              <div className="gap-4">
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary-fixed focus:bg-white transition-all text-on-surface"
                      type="date"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Actions  */}
            <div className="flex flex-col gap-4 pt-6 border-t border-outline-variant/15">
              <button
                className="bg-primary text-on-primary rounded-xl px-8 py-4 font-bold tracking-tight hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 w-full"
                type="submit"
              >
                Publish Job
                <span className="material-symbols-outlined text-sm">
                  rocket_launch
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* Footer  */}
      <footer className="bg-[#f7f9fb] dark:bg-slate-950 font-manrope text-sm tracking-wide full-width border-t border-outline-variant/15 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-8 gap-4 max-w-7xl mx-auto">
          <span className="text-secondary dark:text-slate-500">
            © 2024 JobNest. Curating the future of work.
          </span>
          <div className="flex gap-8">
            <a
              className="text-secondary dark:text-slate-500 uppercase tracking-widest text-[10px] hover:text-primary dark:hover:text-blue-400 underline underline-offset-4 transition-opacity"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-secondary dark:text-slate-500 uppercase tracking-widest text-[10px] hover:text-primary dark:hover:text-blue-400 underline underline-offset-4 transition-opacity"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-secondary dark:text-slate-500 uppercase tracking-widest text-[10px] hover:text-primary dark:hover:text-blue-400 underline underline-offset-4 transition-opacity"
              href="#"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobPost;

const JobDetail = () => {
  return (
    <div className="bg-surface font-body text-on-surface">
      {/* TopNavBar Component - Updated to match SCREEN_45 style  */}
      <header className="bg-[#f7f9fb] dark:bg-slate-900 sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center px-12 py-6 max-w-360 mx-auto">
          <div className="flex items-center gap-12">
            <a
              className="text-2xl font-bold tracking-tighter text-primary dark:text-white"
              href="#"
            >
              JobNest
            </a>
            <nav className="hidden lg:flex items-center gap-8 font-manrope text-base tracking-tight">
              <a
                className="text-primary dark:text-white font-semibold border-b-2 border-primary dark:border-blue-400 pb-1 transition-all"
                href="#"
              >
                Find Jobs
              </a>
              <a
                className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-medium"
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
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-semibold text-primary dark:text-blue-100 border border-primary dark:border-blue-400 rounded-lg hover:bg-primary/5 transition-all duration-200">
              Find Candidates
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-200 transition-colors">
              Login
            </button>
            <button className="px-6 py-2.5 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-80 active:scale-95 transition-all duration-200">
              Sign Up
            </button>
          </div>
        </div>
        <div className="bg-surface-container-low dark:bg-slate-800/50 h-px w-full"></div>
      </header>
      <main className="max-w-7xl mx-auto py-12 md:py-20 px-8">
        {/* Hero Header  */}
        <header className="mb-16 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 bg-secondary-fixed-dim text-on-secondary-fixed rounded-full text-[0.7rem] font-bold tracking-widest uppercase mb-6">
            DESIGN
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Senior Product Designer
          </h1>
          <div className="flex items-center gap-4 text-secondary font-medium text-lg">
            <span className="">Stellar Systems</span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/30"></span>
            <span className="">San Francisco, CA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/30"></span>
            <span className="text-primary font-bold">Up to $150k/year</span>
          </div>
        </header>
        {/* Content Layout  */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start prose prose-slate max-w-none">
          {/* Left Column: Comprehensive Details  */}
          <section className="space-y-12">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">
                About the Role
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant mb-8">
                At Stellar Systems, we are building the next generation of
                serene intelligence tools. As a Senior Product Designer, you
                will be the guardian of our user experience, translating complex
                data structures into elegant, editorial-grade interfaces. You'll
                work closely with engineering and product leads to define the
                visual soul of our platform.
              </p>
              <h3 className="text-xl font-bold text-primary mb-6 mt-12">
                Key Responsibilities
              </h3>
              <ul className="space-y-4 text-on-surface-variant list-none p-0">
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Premium Healthcare coverage for you and your family.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Latest Tech Stack: New MacBook Pro and all necessary
                    software licenses.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Unlimited PTO policy to ensure you stay rested and inspired.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Remote-First Culture with flexible working hours across
                    timezones.
                  </span>
                </li>
              </ul>
              <h3 className="text-xl font-bold text-primary mb-6 mt-12">
                What We Are Looking For
              </h3>
              <ul className="space-y-4 text-on-surface-variant list-none p-0">
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Premium Healthcare coverage for you and your family.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Latest Tech Stack: New MacBook Pro and all necessary
                    software licenses.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Unlimited PTO policy to ensure you stay rested and inspired.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Remote-First Culture with flexible working hours across
                    timezones.
                  </span>
                </li>
              </ul>
            </div>
            {/* Benefits Tonal Card  */}
            <div className="prose prose-slate max-w-none">
              <h3 className="text-xl font-bold text-primary mb-6 mt-12">
                Benefits
              </h3>
              <ul className="space-y-4 text-on-surface-variant list-none p-0">
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Premium Healthcare coverage for you and your family.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Latest Tech Stack: New MacBook Pro and all necessary
                    software licenses.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Unlimited PTO policy to ensure you stay rested and inspired.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary-container shrink-0"
                    style={{ fontVariationSettings: "FILL 1" }}
                  >
                    check_circle
                  </span>
                  <span className="">
                    Remote-First Culture with flexible working hours across
                    timezones.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          {/* Right Column: Sidebar  */}
          <aside className="space-y-8 lg:sticky lg:top-8">
            {/* Apply Action Card  */}
            <div className="bg-surface-container-lowest p-8 shadow-[0_40px_60px_-5px_rgba(25,28,30,0.06)] border border-outline-variant/15">
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg mb-6 hover:opacity-90 transition-all">
                Apply for this position
              </button>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Salary
                  </span>
                  <span className="text-primary font-bold">Up to $150k</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Location
                  </span>
                  <span className="text-primary font-bold">
                    San Francisco, CA
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Type
                  </span>
                  <span className="text-primary font-bold">Full-Time</span>
                </div>
              </div>
            </div>
            {/* Company Info Card  */}
            <div className="bg-white p-8 border border-outline-variant/15">
              <h4 className="font-bold text-primary mb-6">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  CSS
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  HTML
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  Figma
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  React
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  UI Design
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  Data Visualization
                </span>
                <span className="px-3 py-1 bg-surface-container-low text-primary text-sm font-medium rounded-lg border border-outline-variant/10">
                  Typography
                </span>
              </div>
            </div>
            <div className="bg-white p-8 border border-outline-variant/15">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white flex items-center justify-center overflow-hidden border border-outline-variant/15">
                  <img
                    alt="Stellar Systems Logo"
                    className="w-10 h-10 object-contain"
                    data-alt="Modern geometric corporate logo in navy and white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrTm8HPPiUi0vASX_9TbRVcOBqqeRbjjMhLpmbOAcXq1tM4BYJeiHgGSejTVUPWBYO-3kHk8OLZQBG29-76EAHqueLIK3pcMPvI3Jyijd-UHD8e3_mU30mXKC1dDKsb65ny5a2sAz-ShjuY_YYbEeGK1CY80l5SaVajns25e_IWyDw34EgMpPjx82aPW9ENkNXfROZBqtnj5htnZOsquAA1AXaDuPn_UlLWAR_LDqLTRFh0-IIDicqVZhgXbTKB60HhcXcoyEmrOA"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Stellar Systems</h4>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">
                    Enterprise Intelligence
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Stellar Systems is a premier technology firm focused on creating
                serene, high-efficiency workflows for modern enterprises. We
                believe in the power of editorial design to simplify complexity.
              </p>
            </div>
            {/* Location Map Placeholder  */}
          </aside>
        </div>
      </main>
      {/* Footer Component - Updated to match Job Listings screen  */}
      <footer className="bg-[#f7f9fb] border-t border-outline-variant/15 mt-20">
        <div className="max-w-360 mx-auto px-12 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">
                JobNest
              </div>
              <p className="text-secondary text-sm max-w-sm">
                © 2024 JobNest. Curated with Serene Intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <a
                className="text-secondary text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-secondary text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-secondary text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Cookie Settings
              </a>
              <a
                className="text-secondary text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Accessibility
              </a>
              <a
                className="text-secondary text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobDetail;

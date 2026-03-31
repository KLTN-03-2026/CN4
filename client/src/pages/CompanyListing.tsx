const CompanyListing = () => {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-primary min-h-screen flex flex-col text-on-surface">
      {/* TopNavBar (Mirrored from SCREEN_160)  */}
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
                className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors font-medium"
                href="#"
              >
                Find Jobs
              </a>
              <a
                className="text-[#001939] dark:text-white font-semibold border-b-2 border-[#001939] dark:border-blue-400 pb-1 transition-all"
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
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-semibold text-primary dark:text-blue-100 border border-primary dark:border-blue-400 rounded-lg hover:bg-primary/5 transition-all duration-200">
              Find Candidates
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-200 transition-colors">
              Login
            </button>
            <button className="px-6 py-2.5 text-sm font-bold bg-[#001939] text-white rounded-lg hover:opacity-80 active:scale-95 transition-all duration-200">
              Sign Up
            </button>
          </div>
        </div>
        <div className="bg-[#f2f4f6] dark:bg-slate-800/50 h-[1px] w-full"></div>
      </header>
      <main className="w-full max-w-[1440px] mx-auto px-12 py-12 flex-grow">
        {/* Hero / Horizontal Search Section (Mirrored from SCREEN_160)  */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <h1 className="text-[#001939] font-headline font-extrabold text-6xl tracking-tight mb-10 leading-[1.1]">
              Discover leading{" "}
              <span className="text-surface-tint">companies</span>.
            </h1>
          </div>
          <div className="bg-white shadow-xl shadow-slate-200/50 p-2 rounded-2xl flex flex-row items-center gap-2 border border-slate-100">
            <div className="flex-grow relative flex items-center border-r border-slate-100">
              <span className="material-symbols-outlined absolute left-6 text-secondary">
                search
              </span>
              <input
                className="w-full bg-transparent border-none py-6 pl-16 pr-6 text-on-surface focus:ring-0 outline-none placeholder:text-outline-variant text-lg"
                placeholder="Search by company name..."
                type="text"
              />
            </div>
            <div className="w-1/4 relative flex items-center">
              <span className="material-symbols-outlined absolute left-6 text-secondary">
                location_on
              </span>
              <input
                className="w-full bg-transparent border-none py-6 pl-16 pr-6 text-on-surface focus:ring-0 outline-none placeholder:text-outline-variant text-lg"
                placeholder="Location"
                type="text"
              />
            </div>
            <button className="bg-primary text-on-primary px-12 py-5 rounded-xl font-bold text-lg hover:opacity-95 transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
              Find Companies
            </button>
          </div>
        </section>
        {/* Listings Header  */}
        <div className="flex items-end justify-between mb-10 border-b border-outline-variant/15 pb-6">
          <div>
            <span className="text-[0.7rem] font-bold tracking-[0.25em] text-secondary uppercase mb-2 block">
              Company Directory
            </span>
            <h2 className="text-3xl font-bold text-primary">
              Featured Companies
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-secondary">
              Showing 6 of 42 results
            </span>
            <div className="h-8 w-[1px] bg-outline-variant/30"></div>
            <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-surface-tint transition-colors">
              Filter{" "}
              <span className="material-symbols-outlined text-lg">tune</span>
            </button>
          </div>
        </div>
        {/* Company Card List Container (Modular card design like SCREEN_160)  */}
        <div className="flex flex-col gap-6">
          {/* Company 1: Stellar Dynamics  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-surface-tint hover:shadow-xl transition-all duration-300 relative">
            <div className="flex gap-6 mb-6">
              {/* Logo  */}
              <div className="h-24 w-24 rounded-xl border border-slate-100 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img
                  alt="Stellar Dynamics Logo"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNoC24REPD0MG5fes0HpcBPbXYnWbykOi95wnS_UkZHF9yUNely_iYbyKl_N0xgfmVxt11xY4m5PxhENPvrMmX6bUczhQwJRDWzKo1psPwzPtCf-WDaFZq9kjty0UTo3Dd567W-wRGZo_dXfE6lFrc0F8pGaFM2ts2U8d6VeTQvuYZ3sp6czyfnudioXFNG_X8n-IyPTZutplv1LmLTaYd60IGV69OdOJINaDyaVRm_F-f2sxCjhCtooQZxBxOV79W15xxiipRxm4"
                />
              </div>
              {/* Info  */}
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      Stellar Dynamics
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Technology
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        San Francisco
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#002d5e]">
                    12 Open Roles
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  Building the future of fintech with innovative solutions
                  focused on global accessibility and real-time transaction
                  processing.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Since 2012</span>
              </div>
              <button className="text-sm font-bold text-surface-tint hover:underline flex items-center gap-1">
                View Company{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Company 2: GreenShift Energy  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-surface-tint hover:shadow-xl transition-all duration-300 relative">
            <div className="flex gap-6 mb-6">
              <div className="h-24 w-24 rounded-xl border border-slate-100 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img
                  alt="GreenShift Energy Logo"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABC3yzrUtMR3UbE-0OZXqWnA97I3xBSlBpI0-EnKBrn1NoOYJknUymyM8nUkEMwzynIdvG_c240valpsc6PBA68ARwb5uqYonVL9mqcy4SgCfWgHqfZiW3yn6G3jxxigYBImgUsjDCSZY1dhxEpGcvFTRWi3gA43s2SbSajCjWWMwpSJqHpHn1p1iZ44aHguKxgBecz8fVyYCfdaCgoPFBtgxtaLQDSE6B_v-PuS1Cee6vWHB07YCX1vihlNxz7AMsNC3PTstP6Dg"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      GreenShift Energy
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Renewables
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Austin, TX
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#002d5e]">
                    8 Open Roles
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  Pioneering sustainable power grids through advanced solar
                  harvesting and next-gen battery storage systems.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Since 2018</span>
              </div>
              <button className="text-sm font-bold text-surface-tint hover:underline flex items-center gap-1">
                View Company{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Company 3: MediCore Solutions  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-surface-tint hover:shadow-xl transition-all duration-300 relative">
            <div className="flex gap-6 mb-6">
              <div className="h-24 w-24 rounded-xl border border-slate-100 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img
                  alt="MediCore Logo"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm7cnz1Rq3IeQf7DGuRAHywSSvFZUQv_wHsM4OxZVEo-fSNLpA0XV65Ti3Q9c3wqRTmOiYww3i5LQZRpoZ1mGwrX0-WSvaJzAseeAkv26jeV0kxOxJit-2XxWckTyBk2FjiZHMizd2m69-p_5N88G9hNkjAhVH2TS1XaZ-kzpscB9I7yzYl2fXeWK5UOfOW_RYtbf0N35kbxVq6SvlmwznPqzqTembEZ7qyzRhoUl_jTL_cCZzDW3XADvRuFbnkjJLAxxTxFmzfz0"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      MediCore Solutions
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Healthcare
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Boston, MA
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#002d5e]">
                    24 Open Roles
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  Developing AI-driven diagnostic tools that empower clinics to
                  provide faster, more accurate patient care worldwide.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Since 2005</span>
              </div>
              <button className="text-sm font-bold text-surface-tint hover:underline flex items-center gap-1">
                View Company{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Company 4: Nexus Robotics  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-surface-tint hover:shadow-xl transition-all duration-300 relative">
            <div className="flex gap-6 mb-6">
              <div className="h-24 w-24 rounded-xl border border-slate-100 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img
                  alt="Nexus Robotics Logo"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiz6Xw5qSl1LpAsaU5TF77a-ZSu6dip9DlbqfNgiyRyANd-wckpGw8Y132ZuQvYrAff6UCyF7JM9-LmXkWP0iy37rypJa4L7mZ7UsD7NNKB2zSg9x3Eqp4kQuijpg9rAPhybHN9F9amzfUIO8wjNQxroyDp_sA2jXCQ7AOE1qU8jAuq7xjVVj9INeXmANP845hupUJZBB5csBnd2icKcd7vrtxBJIEd0SzpCpWqEovZzDfM3Pab53R-xVBc4-bPkH4zKwt_sQmcNY"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      Nexus Robotics
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Manufacturing
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Detroit, MI
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#002d5e]">
                    5 Open Roles
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  Designing and deploying collaborative robots for precision
                  manufacturing and high-efficiency assembly lines.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Since 2015</span>
              </div>
              <button className="text-sm font-bold text-surface-tint hover:underline flex items-center gap-1">
                View Company{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Company 5: CloudSphere  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-surface-tint hover:shadow-xl transition-all duration-300 relative">
            <div className="flex gap-6 mb-6">
              <div className="h-24 w-24 rounded-xl border border-slate-100 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img
                  alt="CloudSphere Logo"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAstb9NlyBh-R9x9LFsNtefZag2aJmFGXcg10lsQlhbSsBe9o1xwCwn6sK-lL9ivRXQP20jUnrClxKCNAk-9BfgWgwL408iTNWM7bspjVR69ppRRmTyW0Awrt2n3QskH-18R9Kbz5q6rOlPFquaYYeNLMAAyOobectWd5_26LcFrrZKcFEnkeOz349KTGbCKIpgI1-6plYyskNeM_c_6HSEsX0lNJlKC9vwj3HJbY3QrS0RFGLqiNK_1sIm6eBJk8-2pBtt_XEIjlo"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      CloudSphere
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Cloud Computing
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Seattle, WA
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#002d5e]">
                    31 Open Roles
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  Global leader in secure enterprise cloud infrastructure and
                  decentralized data management services.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Since 2010</span>
              </div>
              <button className="text-sm font-bold text-surface-tint hover:underline flex items-center gap-1">
                View Company{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
          {/* Company 6: UrbanFlow  */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-surface-tint hover:shadow-xl transition-all duration-300 relative">
            <div className="flex gap-6 mb-6">
              <div className="h-24 w-24 rounded-xl border border-slate-100 bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img
                  alt="UrbanFlow Logo"
                  className="w-16 h-16 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9KE6X6mT4WlMQB_eVqh-PvpUb6kNY7fvoBNmPmYUFs3rueaAj4rY-wnhnhrFlj-wPGLpp0s22tZyMzIHJO6g568eAicSQX5ba5q61rYQgNxYYMPfwCQTKAqTpCBUDMNUmPXniqg21H2nZNRA3oSPw6sfTk80u8oUiC6ETK0ezAsx1DHc-wZ2o3MHyO_k7d8m6xyC6iZTmw4wAYMjmXWO8rL8f0YFnugxZQrQ13Uley0w4rVDFe_UFZOUS1QPGZW47s64SqcQtCeQ"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      UrbanFlow
                    </h3>
                    <div className="flex gap-2 mb-3">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Transport
                      </span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Berlin, Germany
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-[#002d5e]">
                    14 Open Roles
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                  Revolutionizing metropolitan mobility with intelligent
                  micro-transit systems and zero-emission vehicle networks.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Since 2016</span>
              </div>
              <button className="text-sm font-bold text-surface-tint hover:underline flex items-center gap-1">
                View Company{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Pagination Section (Mirrored from SCREEN_160)  */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <button className="p-2.5 rounded-lg text-secondary hover:bg-surface-container-high transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">chevron_left</span>
            <span className="text-sm font-bold pr-2">Previous</span>
          </button>
          <div className="flex items-center gap-1">
            <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold text-sm">
              1
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-container-high font-bold text-sm transition-colors">
              2
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-container-high font-bold text-sm transition-colors">
              3
            </button>
            <span className="px-2 text-outline">...</span>
            <button className="h-10 w-10 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-container-high font-bold text-sm transition-colors">
              5
            </button>
          </div>
          <button className="p-2.5 rounded-lg text-secondary hover:bg-surface-container-high transition-colors flex items-center justify-center">
            <span className="text-sm font-bold pl-2">Next</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
      {/* Footer Component (Mirrored from SCREEN_160)  */}
      <footer className="bg-[#f7f9fb] dark:bg-slate-950 w-full mt-24 border-t border-[#c3c6d0]/15">
        <div className="max-w-[1440px] mx-auto px-12 py-12 flex flex-col gap-12">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold tracking-tighter text-[#001939] dark:text-white">
                JobNest
              </span>
              <p className="font-manrope text-sm text-[#446279] dark:text-slate-400 max-w-xs">
                Curating the future of professional work with intelligence and
                serenity.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[#001939] dark:text-white text-sm uppercase tracking-widest">
                  Platform
                </span>
                <a
                  className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Find Jobs
                </a>
                <a
                  className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Companies
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[#001939] dark:text-white text-sm uppercase tracking-widest">
                  Employers
                </span>
                <a
                  className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Post a Job
                </a>
                <a
                  className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Hiring Solutions
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[#001939] dark:text-white text-sm uppercase tracking-widest">
                  Legal
                </span>
                <a
                  className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pt-10 border-t border-slate-200/50 dark:border-slate-800/50 font-manrope text-sm tracking-wide uppercase">
            <p className="text-[#446279] dark:text-slate-400">
              © 2024 JobNest Curator. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                className="text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-white transition-all duration-300"
                href="#"
              >
                Cookie Settings
              </a>
              <a
                className="text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-white transition-all duration-300"
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

export default CompanyListing;

const JobManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopNavBar  */}
      <header className="w-full top-0 sticky z-50 bg-[#f7f9fb] dark:bg-slate-900">
        <div className="flex justify-between items-center px-12 py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              JobNest
            </span>
            <nav className="hidden md:flex items-center gap-8 font-manrope text-sm font-medium tracking-tight">
              <a
                className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-white transition-colors duration-200 ease-in-out"
                href="#"
              >
                Find Jobs
              </a>
              <a
                className="dark:text-white duration-200 ease-in-out text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-white transition-colors"
                href="#"
              >
                Companies
              </a>
              <a
                className="text-[#446279] dark:text-slate-400 hover:text-[#001939] dark:hover:text-white transition-colors duration-200 ease-in-out"
                href="#"
              >
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-[#446279] dark:text-slate-400 hover:text-[#001939] transition-colors">
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
      {/* Main Content  */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-12 py-12">
        {/* Header Section  */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-label text-[0.75rem] uppercase tracking-widest text-secondary mb-2 block">
              RECRUITER DASHBOARD
            </span>
            <h1 className="font-headline text-[3.5rem] font-extrabold tracking-tight text-primary leading-none">
              Job Management
            </h1>
          </div>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-medium flex items-center gap-3 hover:opacity-90 transition-opacity shadow-lg">
            <span className="material-symbols-outlined">add</span>
            Post a Job
          </button>
        </div>
        {/* Job Listings Table  */}
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="px-8 py-6 bg-surface-container-low flex justify-between items-center">
            <h2 className="font-headline text-lg font-bold text-primary">
              Active Listings
            </h2>
            <div className="flex gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">
                  search
                </span>
                <input
                  className="pl-10 pr-4 py-2 bg-surface-container-highest border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-fixed w-64"
                  placeholder="Filter jobs..."
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="font-label text-[0.65rem] uppercase tracking-widest text-secondary border-b border-outline-variant/10">
                  <th className="px-8 py-4 font-semibold">Job Title</th>
                  <th className="px-8 py-4 font-semibold">Date Posted</th>
                  <th className="px-8 py-4 font-semibold text-center">
                    Applicants
                  </th>
                  <th className="px-8 py-4 font-semibold">Status</th>
                  <th className="px-8 py-4 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {/* Row 1: ACTIVE  */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">code</span>
                      </div>
                      <div>
                        <div className="font-bold text-primary">
                          Senior Frontend Architect
                        </div>
                        <div className="text-xs text-secondary">
                          Remote • Full-time
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-secondary">
                    Oct 12, 2023
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">
                      142
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider flex items-center w-fit gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-secondary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error-container hover:text-error text-secondary transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 2: PENDING  */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">brush</span>
                      </div>
                      <div>
                        <div className="font-bold text-primary">
                          Principal Product Designer
                        </div>
                        <div className="text-xs text-secondary">
                          London, UK • Hybrid
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-secondary">
                    Oct 10, 2023
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">
                      86
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider flex items-center w-fit gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-secondary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error-container hover:text-error text-secondary transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 3: CLOSED  */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          database
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-primary">
                          Data Engineering Manager
                        </div>
                        <div className="text-xs text-secondary">
                          Remote • Full-time
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-secondary">
                    Sep 28, 2023
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">
                      214
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider flex items-center w-fit gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                      Closed
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-secondary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error-container hover:text-error text-secondary transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Row 4: DECLINED  */}
                <tr className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">
                          campaign
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-primary">
                          Head of Growth Marketing
                        </div>
                        <div className="text-xs text-secondary">
                          New York, NY • On-site
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-secondary">
                    Sep 15, 2023
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold">
                      53
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider flex items-center w-fit gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Declined
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-secondary transition-colors"
                        title="Edit"
                      >
                        <span className="material-symbols-outlined text-lg">
                          edit
                        </span>
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-error-container hover:text-error text-secondary transition-colors"
                        title="Delete"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Updated Pagination Section  */}
          <div className="px-8 py-4 bg-surface-container-low flex justify-between items-center">
            <span className="text-[0.7rem] font-label text-secondary uppercase tracking-widest">
              Showing 4 of 12 listings
            </span>
            <nav className="flex items-center gap-2">
              <button
                className="text-[0.7rem] font-label text-secondary uppercase tracking-widest hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed px-2"
                disabled
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-on-primary text-xs font-bold transition-all shadow-sm">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-secondary text-xs font-bold transition-all">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-highest text-secondary text-xs font-bold transition-all">
                  3
                </button>
              </div>
              <button className="text-[0.7rem] font-label text-secondary uppercase tracking-widest hover:text-primary transition-colors px-2">
                Next
              </button>
            </nav>
          </div>
        </div>
      </main>
      {/* Footer  */}
      <footer className="w-full mt-auto bg-[#f2f4f6] dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-[1440px] mx-auto">
          <span className="font-manrope text-[0.75rem] uppercase tracking-widest text-[#446279] dark:text-slate-500 mb-6 md:mb-0 opacity-80">
            © 2024 JobNest. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="font-manrope text-[0.75rem] uppercase tracking-widest text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-slate-200 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-manrope text-[0.75rem] uppercase tracking-widest text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-slate-200 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-manrope text-[0.75rem] uppercase tracking-widest text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-slate-200 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Support
            </a>
            <a
              className="font-manrope text-[0.75rem] uppercase tracking-widest text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-slate-200 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JobManagement;

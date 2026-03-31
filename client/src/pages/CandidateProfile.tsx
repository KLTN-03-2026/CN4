const CandidateProfile = () => {
  return (
    <div className="bg-surface text-on-surface antialiased">
      {/* TopNavBar Component  */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm h-16">
        <div className="flex justify-between items-center px-8 h-full w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              JobNest
            </span>
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200"
                href="#"
              >
                Find Jobs
              </a>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200"
                href="#"
              >
                Companies
              </a>
              <a
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200"
                href="#"
              >
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="material-symbols-outlined text-slate-500 hover:text-primary transition-colors duration-200"
              data-icon="notifications"
            >
              notifications
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/20">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-primary leading-none">
                  Alex Rivera
                </p>
              </div>
              <img
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChT0d4U1sSZhgSmej6Xzmuo5F_viH1EVqXLX6fMFpo38yLqNmKtbTS2ns9KElNnTE_S611XmfQ8gIWDLxabg_Ku1nGPXdGgKLAndA_2n9hiAeylSqAccivqFnTzD5teXSQQQJLSVQB_fpBVN1NDjn40Ygrw6F2V5mzUyCOnHKqs2Mbxq1jcXNYWOXNRJWX9P4tj75s5Ra-dsrsv_Fq9v2CXW38eKWZkzbN9k_NZTsqSdhDuml-kag0HuMsVI4vPmEl38C9vuQp59M"
              />
            </div>
            <button className="px-5 py-2.5 text-sm font-semibold text-primary dark:text-blue-100 border border-primary dark:border-blue-400 rounded-lg hover:bg-primary/5 transition-all duration-200">
              Find Candidates
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-[800px] mx-auto px-6 py-12 pt-32">
        {/* Editorial Header  */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.1em] text-secondary uppercase mb-3 block">
            Account Settings
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-primary leading-tight">
            Profile
          </h1>
          <p className="text-secondary text-lg mt-4 max-w-2xl leading-relaxed">
            Curate your professional identity. High-quality profiles receive 3x
            more engagement from top-tier employers.
          </p>
        </div>
        {/* Single Column Stack  */}
        <div className="space-y-10">
          {/* Personal Information Card  */}
          <section className="bg-surface-container-lowest p-8 lg:p-12 rounded-xl">
            <div className="flex items-center gap-3 mb-10">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                data-icon="person"
              >
                person
              </span>
              <h2 className="text-2xl font-bold text-primary">
                Personal Information
              </h2>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-secondary uppercase px-1">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-fixed transition-all outline-none"
                    placeholder="Enter your full name"
                    type="text"
                    value="Alexander Sterling"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-secondary uppercase px-1">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-fixed transition-all outline-none"
                    placeholder="+1 (000) 000-0000"
                    type="tel"
                    value="+1 (555) 902-4823"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-secondary uppercase px-1">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-fixed transition-all outline-none"
                  placeholder="email@example.com"
                  type="email"
                  value="alex.sterling@design.co"
                />
              </div>
            </div>
          </section>
          {/* Skills Management Card  */}
          <section className="bg-surface-container-lowest p-8 lg:p-12 rounded-xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="auto_awesome"
                >
                  auto_awesome
                </span>
                <h2 className="text-2xl font-bold text-primary">Skills</h2>
              </div>
              <button className="text-primary font-bold text-sm hover:underline">
                + Add New
              </button>
            </div>
            <p className="text-secondary text-sm -mt-6 mb-8">
              Communicate your fit for new opportunities
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="group flex items-center gap-2 bg-secondary-fixed-dim/30 text-on-secondary-fixed px-5 py-2.5 rounded-full text-xs font-bold tracking-wide border border-transparent hover:border-outline-variant/20 transition-all cursor-default">
                UI DESIGN
                <span
                  className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100 transition-opacity"
                  data-icon="close"
                >
                  close
                </span>
              </div>
              <div className="group flex items-center gap-2 bg-secondary-fixed-dim/30 text-on-secondary-fixed px-5 py-2.5 rounded-full text-xs font-bold tracking-wide border border-transparent hover:border-outline-variant/20 transition-all cursor-default">
                REACT
                <span
                  className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100 transition-opacity"
                  data-icon="close"
                >
                  close
                </span>
              </div>
              <div className="group flex items-center gap-2 bg-secondary-fixed-dim/30 text-on-secondary-fixed px-5 py-2.5 rounded-full text-xs font-bold tracking-wide border border-transparent hover:border-outline-variant/20 transition-all cursor-default">
                FIGMA
                <span
                  className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100 transition-opacity"
                  data-icon="close"
                >
                  close
                </span>
              </div>
              <div className="group flex items-center gap-2 bg-secondary-fixed-dim/30 text-on-secondary-fixed px-5 py-2.5 rounded-full text-xs font-bold tracking-wide border border-transparent hover:border-outline-variant/20 transition-all cursor-default">
                TYPESCRIPT
                <span
                  className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100 transition-opacity"
                  data-icon="close"
                >
                  close
                </span>
              </div>
              <div className="group flex items-center gap-2 bg-secondary-fixed-dim/30 text-on-secondary-fixed px-5 py-2.5 rounded-full text-xs font-bold tracking-wide border border-transparent hover:border-outline-variant/20 transition-all cursor-default">
                PRODUCT STRATEGY
                <span
                  className="material-symbols-outlined text-sm cursor-pointer opacity-40 group-hover:opacity-100 transition-opacity"
                  data-icon="close"
                >
                  close
                </span>
              </div>
            </div>
          </section>
          {/* Resume Upload Card  */}
          <section className="bg-surface-container-lowest p-8 lg:p-12 rounded-xl">
            <div className="flex items-center gap-3 mb-10">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                data-icon="upload_file"
              >
                upload_file
              </span>
              <h2 className="text-2xl font-bold text-primary">Resume / CV</h2>
            </div>
            <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-surface-container-low/30 hover:bg-surface-container-low/60 transition-all cursor-pointer">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  data-icon="cloud_upload"
                >
                  cloud_upload
                </span>
              </div>
              <p className="text-primary font-bold text-lg">
                Click to update your resume
              </p>
              <p className="text-secondary text-sm mt-2">
                Support for PDF and DOCX (Max 5MB)
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="description"
                >
                  description
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-primary truncate">
                  Sterling_Resume_2024_v2.pdf
                </p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-wider mt-0.5">
                  Updated 4 days ago
                </p>
              </div>
              <button
                className="material-symbols-outlined text-secondary hover:text-error transition-colors"
                data-icon="delete"
              >
                delete
              </button>
            </div>
          </section>
          {/* Action Buttons  */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <button className="flex-1 bg-primary text-on-primary py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-xl shadow-primary/10 hover:opacity-90 active:scale-95 transition-all">
              Save Changes
            </button>
            <button className="flex-1 bg-surface-container-highest text-primary py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-surface-container-high active:scale-95 transition-all">
              Cancel
            </button>
          </div>
        </div>
      </main>
      {/* Footer  */}
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
          <div className="flex flex-row justify-between items-center pt-10 border-t border-slate-200/50 dark:border-slate-800/50 font-manrope text-sm tracking-wide">
            <p className="text-[#446279] dark:text-slate-400">
              © 2024 JobNest. Curated with Serene Intelligence.
            </p>
            <div className="flex gap-8">
              <a
                className="text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-white transition-all duration-300"
                href="#"
              >
                Support
              </a>
              <a
                className="text-[#446279] dark:text-slate-500 hover:text-[#001939] dark:hover:text-white transition-all duration-300"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CandidateProfile;

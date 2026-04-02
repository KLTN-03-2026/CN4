const CompanyProfile = () => {
  return (
    <div className="bg-background text-on-surface antialiased">
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
          </div>
        </div>
      </header>
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header Section  */}
          <div className="mb-12">
            <h1 className="text-display-lg font-bold tracking-tight text-primary mb-2">
              Company Management
            </h1>
            <p className="text-secondary body-lg">
              Curate your organization's digital identity to attract top-tier
              talent.
            </p>
          </div>
          {/* Main Form Card (Preview/Display Mode)  */}
          <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_40px_60px_-5px_rgba(25,28,30,0.06)] border border-outline-variant/15">
            <form className="space-y-10">
              {/* Logo Upload Section  */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-4 relative group cursor-pointer section-editable">
                <div className="relative">
                  <div className="w-32 h-32 rounded-xl bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/15">
                    <span
                      className="material-symbols-outlined text-4xl text-outline"
                      data-icon="business"
                    >
                      business
                    </span>
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/5 to-secondary/10 opacity-50"></div>
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="font-headline font-bold text-lg text-primary">
                    Company Logo
                  </h3>
                  <p className="text-label text-slate-500 mb-3 uppercase tracking-widest">
                    Recommended: 400x400px .PNG or .SVG
                  </p>
                  <p className="text-sm font-bold text-primary">
                    Lumina_Mark_Primary.svg
                  </p>
                </div>
                <span
                  className="material-symbols-outlined absolute top-0 right-0 text-slate-400 text-lg opacity-0 transition-opacity edit-indicator"
                  data-icon="edit"
                >
                  edit
                </span>
              </div>
              <div className="grid grid-cols-1 gap-10">
                {/* Company Name  */}
                <div className="space-y-2 relative group cursor-pointer section-editable pb-4 border-b border-outline-variant/10">
                  <div className="flex justify-between items-start">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-slate-500">
                      Company Name
                    </label>
                    <span
                      className="material-symbols-outlined text-slate-400 text-lg opacity-0 transition-opacity edit-indicator"
                      data-icon="edit"
                    >
                      edit
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-on-surface">
                    Lumina Creative Collective
                  </p>
                </div>
                {/* Industry & Location Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2 relative group cursor-pointer section-editable pb-4 border-b border-outline-variant/10">
                    <div className="flex justify-between items-start">
                      <label className="block font-label text-xs font-bold uppercase tracking-widest text-slate-500">
                        Industry
                      </label>
                      <span
                        className="material-symbols-outlined text-slate-400 text-lg opacity-0 transition-opacity edit-indicator"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </div>
                    <p className="text-on-surface">Design &amp; Creative</p>
                  </div>
                  <div className="space-y-2 relative group cursor-pointer section-editable pb-4 border-b border-outline-variant/10">
                    <div className="flex justify-between items-start">
                      <label className="block font-label text-xs font-bold uppercase tracking-widest text-slate-500">
                        Company Location
                      </label>
                      <span
                        className="material-symbols-outlined text-slate-400 text-lg opacity-0 transition-opacity edit-indicator"
                        data-icon="edit"
                      >
                        edit
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-slate-400 text-sm"
                        data-icon="location_on"
                      >
                        location_on
                      </span>
                      <p className="text-on-surface">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                {/* Website URL  */}
                <div className="space-y-2 relative group cursor-pointer section-editable pb-4 border-b border-outline-variant/10">
                  <div className="flex justify-between items-start">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-slate-500">
                      Website URL
                    </label>
                    <span
                      className="material-symbols-outlined text-slate-400 text-lg opacity-0 transition-opacity edit-indicator"
                      data-icon="edit"
                    >
                      edit
                    </span>
                  </div>
                  <p className="text-primary font-medium">
                    https://www.luminacreative.co
                  </p>
                </div>
                {/* Company Description  */}
                <div className="space-y-2 relative group cursor-pointer section-editable">
                  <div className="flex justify-between items-start">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-slate-500">
                      Company Description
                    </label>
                    <span
                      className="material-symbols-outlined text-slate-400 text-lg opacity-0 transition-opacity edit-indicator"
                      data-icon="edit"
                    >
                      edit
                    </span>
                  </div>
                  <div className="bg-surface-container-low/50 rounded-xl p-6 text-on-surface leading-relaxed text-sm">
                    <p className="mb-4">
                      Lumina Creative Collective is a multi-disciplinary design
                      studio dedicated to crafting digital experiences that
                      bridge the gap between human intuition and technological
                      capability. Founded in the heart of San Francisco, we
                      specialize in high-impact visual identity and interactive
                      platforms for emerging brands.
                    </p>
                    <p>
                      Our team thrives at the intersection of aesthetic
                      precision and functional excellence, fostering a culture
                      where radical ideas are refined into market-defining
                      solutions. We are currently expanding our creative
                      engineering team to meet the demands of our growing global
                      client list.
                    </p>
                  </div>
                </div>
              </div>
              {/* Action Buttons  */}
              <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <button
                  className="text-secondary font-semibold hover:text-primary transition-colors order-2 md:order-1"
                  type="button"
                >
                  Discard changes
                </button>
                <div className="flex gap-4 w-full md:w-auto order-1 md:order-2">
                  <button
                    className="w-full md:w-auto bg-primary text-on-primary px-10 py-3 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Supporting Cards Grid  */}
        </div>
      </main>
      {/* Footer  */}
      <footer className="bg-[#f7f9fb] dark:bg-slate-950 w-full mt-24 border-t border-outline-variant/15">
        <div className="max-w-360 mx-auto px-12 py-12 flex flex-col gap-12">
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold tracking-tighter text-primary dark:text-white">
                JobNest
              </span>
              <p className="font-manrope text-sm text-secondary dark:text-slate-400 max-w-xs">
                Curating the future of professional work with intelligence and
                serenity.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-primary dark:text-white text-sm uppercase tracking-widest">
                  Platform
                </span>
                <a
                  className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Find Jobs
                </a>
                <a
                  className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Companies
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-primary dark:text-white text-sm uppercase tracking-widest">
                  Employers
                </span>
                <a
                  className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Post a Job
                </a>
                <a
                  className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Hiring Solutions
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-primary dark:text-white text-sm uppercase tracking-widest">
                  Legal
                </span>
                <a
                  className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-secondary dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 transition-colors text-sm"
                  href="#"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pt-10 border-t border-slate-200/50 dark:border-slate-800/50 font-manrope text-sm tracking-wide">
            <p className="text-secondary dark:text-slate-400">
              © 2024 JobNest. Curated with Serene Intelligence.
            </p>
            <div className="flex gap-8">
              <a
                className="text-secondary dark:text-slate-500 hover:text-primary dark:hover:text-white transition-all duration-300"
                href="#"
              >
                Support
              </a>
              <a
                className="text-secondary dark:text-slate-500 hover:text-primary dark:hover:text-white transition-all duration-300"
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

export default CompanyProfile;

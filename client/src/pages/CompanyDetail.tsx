const CompanyDetail = () => {
  return (
    <div className="bg-surface text-on-surface antialiased">
      {/* TopNavBar  */}
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
                className="text-primary dark:text-white font-semibold border-b-2 border-primary dark:border-blue-400 pb-1 transition-all"
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
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-8">
        {/* Hero Header - Following Job Detail View style  */}
        <header className="mb-16 max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 bg-secondary-fixed-dim text-on-secondary-fixed rounded-full text-[0.7rem] font-bold tracking-widest uppercase mb-6">
            TECHNOLOGY
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Stellar Dynamics
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-secondary font-medium text-lg">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xl">
                location_on
              </span>{" "}
              San Francisco, CA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/30"></span>
            <span className="text-primary font-bold">50-200 Employees</span>
          </div>
        </header>
        {/* Main Content Grid  */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Left Column: 70% Content  */}
          <div className="space-y-16">
            {/* About Section  */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6">About Us</h2>
              <div className="prose prose-slate max-w-none text-lg leading-relaxed text-on-surface-variant space-y-6">
                <p>
                  At Stellar Dynamics, we aren't just building software; we are
                  architecting the future of decentralized infrastructure.
                  Founded on the principle of "Serene Intelligence," our
                  platform streamlines complex data ecosystems into intuitive
                  experiences for over 500 global enterprises.
                </p>
                <p>
                  Our mission is to democratize high-performance computing
                  through elegant engineering. We believe that the most powerful
                  tools should be the most beautiful to use. This commitment to
                  aesthetic excellence and technical rigor has positioned us as
                  the primary curator of next-generation cloud solutions.
                </p>
              </div>
            </section>
            {/* Culture Section  */}
            {/* Open Positions  */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-primary">
                  Open Positions
                </h2>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest">
                  4 AVAILABLE
                </span>
              </div>
              <div className="space-y-4">
                {/* Job Card 1  */}
                <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Senior Product Designer
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary font-medium">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          schedule
                        </span>{" "}
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          payments
                        </span>{" "}
                        $140k - $180k
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          public
                        </span>{" "}
                        Remote
                      </span>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    Apply Now
                  </button>
                </div>
                {/* Job Card 2  */}
                <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Systems Architect
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary font-medium">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          schedule
                        </span>{" "}
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          payments
                        </span>{" "}
                        $160k - $210k
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          domain
                        </span>{" "}
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    Apply Now
                  </button>
                </div>
                {/* Job Card 3  */}
                <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Lead Frontend Engineer
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-secondary font-medium">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          schedule
                        </span>{" "}
                        Contract
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          payments
                        </span>{" "}
                        $90 - $120/hr
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          public
                        </span>{" "}
                        Remote
                      </span>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            </section>
          </div>
          {/* Right Column: 30% Sidebar  */}
          <aside className="space-y-8 lg:sticky lg:top-24">
            {/* Company Logo Card  */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/15">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white flex items-center justify-center border border-outline-variant/15 p-2 rounded-lg">
                  <img
                    alt="Stellar Dynamics Logo"
                    className="w-full h-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX1DLQQvD_Ct3rqRLi9PWo4yD-Zi7LAawjt7AT8DX8E7dnvUq-2xPV3DLJUPT-NkQEmK8kIrmewqjAJZTGl0sByhc2hs90PDUbgjHT9hBsEL1yvniM0cT7WC-T-sFoFLZ8ivxzSR9wq9Z9clEE7KBbyvmJRBTqrZEl50lWrb9_yo7QRvnz77yhZyZDnGdmMndBG_cdCxGs92FeUejWMzRvHEL0dW-SzumzMXiT9xCNIhyXDKSWJYAiGYaa4QKY8Amj_ke0yofiS8s"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Stellar Dynamics</h4>
                  <p className="text-xs text-secondary font-medium uppercase tracking-wider">
                    Enterprise Intelligence
                  </p>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Leading provider of decentralized infrastructure and data
                orchestration tools for the modern enterprise.
              </p>
            </div>
            {/* Company Essentials  */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/15 shadow-[0_40px_60px_-5px_rgba(25,28,30,0.06)]">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.15em] mb-6">
                Company Essentials
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Company Size
                  </span>
                  <span className="text-primary font-bold">50 - 200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Founded
                  </span>
                  <span className="text-primary font-bold">Oct 2018</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Website
                  </span>
                  <a
                    className="text-primary font-bold hover:underline"
                    href="#"
                  >
                    stellardynamics.io
                  </a>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <span className="text-secondary text-sm font-medium">
                    Location
                  </span>
                  <span className="text-primary font-bold">SF, CA</span>
                </div>
              </div>
            </div>
            {/* Connect Card  */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/15">
              <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.15em] mb-4">
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined" data-icon="share">
                    share
                  </span>
                </a>
                <a
                  className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined" data-icon="link">
                    link
                  </span>
                </a>
                <a
                  className="w-10 h-10 bg-surface-container-low rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span
                    className="material-symbols-outlined"
                    data-icon="language"
                  >
                    language
                  </span>
                </a>
              </div>
            </div>
            {/* Map Location  */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/15 h-48 relative">
              <img
                className="w-full h-full object-cover"
                data-alt="minimalist map of San Francisco"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPA6hAvt8Mtf-3CYcIImcNziO2d_y1vapgOyHNdI47AEU9-m88f2fx8cqKtboovnqKhnzr7HtJDmAdtkAedG1jUBTfVNm2kY1G7WB7C5zZGwHMTSeala295Wiebu5NlVMx-MVFGuoUVvwqisFx2hYCo5KWBefcssRvLqhxg48tPYSIFcXx3rWoY9s8H--Xxh_ZRw3shJ09K6mTLaAOQmTMXaR5dt938xk-o2ey95QPxu-jbZbOYPKTISRckDDHtW5gfVCYl-f8Vfk"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg flex items-center gap-3 border border-outline-variant/10">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  push_pin
                </span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  Mission District, SF
                </span>
              </div>
            </div>
          </aside>
        </div>
      </main>
      {/* Footer  */}
      <footer className="bg-slate-50 w-full py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-lg font-bold text-slate-900 mb-2">JobNest</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              © 2024 JobNest. All rights reserved.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors font-bold"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors font-bold"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors font-bold"
              href="#"
            >
              Contact Support
            </a>
            <a
              className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors font-bold"
              href="#"
            >
              Careers
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default CompanyDetail;

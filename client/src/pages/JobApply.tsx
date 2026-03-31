const JobApply = () => {
  return (
    <div className="bg-background font-body text-on-surface antialiased">
      {/* Background Content (Job Detail View - Blurred/Dimmed)  */}
      <div
        aria-hidden="true"
        className="fixed inset-0 overflow-hidden opacity-40 grayscale-[0.2] blur-sm pointer-events-none"
      >
        {/* TopAppBar Placeholder  */}
        <header className="flex justify-between items-center px-6 py-4 w-full bg-slate-50/80 backdrop-blur-xl">
          <div className="text-lg font-bold text-slate-900">
            The Digital Curator
          </div>
          <span className="material-symbols-outlined text-slate-900">
            close
          </span>
        </header>
        <main className="max-w-5xl mx-auto px-6 pt-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center text-white text-3xl font-bold">
              L
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-primary">
                Senior Product Designer
              </h1>
              <p className="text-secondary font-medium">
                Linear • San Francisco, CA • Remote Friendly
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2 space-y-8">
              <div className="h-4 w-full bg-surface-container rounded-full"></div>
              <div className="h-4 w-5/6 bg-surface-container rounded-full"></div>
              <div className="h-4 w-4/6 bg-surface-container rounded-full"></div>
              <div className="h-32 w-full bg-surface-container-low rounded-xl"></div>
            </div>
            <div className="col-span-1 space-y-6">
              <div className="p-6 bg-surface-container-low rounded-xl h-64"></div>
            </div>
          </div>
        </main>
      </div>
      {/* Modal Overlay  */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Dimmed Backdrop  */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-md"></div>
        {/* Application Modal  */}
        <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-[0_40px_60px_-5px_rgba(25,28,30,0.15)] overflow-hidden flex flex-col max-h-[921px]">
          {/* Modal Header  */}
          <div className="px-8 pt-10 pb-6 flex justify-between items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] font-bold tracking-widest uppercase mb-4">
                Application Form
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                Apply for Senior Product Designer
              </h2>
              <p className="text-secondary mt-1">
                Submit your details to the curation team at Linear.
              </p>
            </div>
            <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-outline">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {/* Scrollable Content  */}
          <div className="px-8 pb-10 overflow-y-auto custom-scrollbar flex-grow">
            <form className="space-y-8">
              {/* Personal Info Section  */}
              <section className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name Row  */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-secondary ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/60 font-medium"
                      placeholder="Cameron Sterling"
                      type="text"
                    />
                  </div>
                  {/* Email and Phone Row  */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-secondary ml-1">
                      Email Address
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/60 font-medium"
                      placeholder="c.sterling@design.com"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-secondary ml-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/60 font-medium"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
              </section>
              {/* Resume Selection Section  */}
              <section className="flex flex-col gap-4">
                <label className="text-[10px] font-bold tracking-widest uppercase text-secondary ml-1">
                  CV / Resume
                </label>
                {/* Tabs for Resume Selection  */}
                <button
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on-primary rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                  type="button"
                >
                  <span className="material-symbols-outlined text-xl">
                    upload_file
                  </span>
                  Upload New CV
                </button>
                {/* Saved CV Card  */}
                <div className="group relative p-6 bg-surface-container-low rounded-xl flex items-center justify-between border-2 border-primary-fixed transition-all hover:bg-surface-container">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary-container shadow-sm">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        description
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-primary">
                        Sterling_Resume_2024.pdf
                      </p>
                      <p className="text-xs text-secondary">
                        Uploaded Oct 12, 2023 • 2.4 MB
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-white text-sm"
                        style={{ fontVariationSettings: "'wght' 700" }}
                      >
                        check
                      </span>
                    </div>
                  </div>
                </div>
                {/* Dropzone (Hidden by default in this state, but visible if 'Upload New' active)  */}
                <div className="hidden border-2 border-dashed border-outline-variant/30 rounded-xl p-10 flex flex-col items-center justify-center text-center space-y-3 bg-surface-container-low/30">
                  <span className="material-symbols-outlined text-outline text-4xl">
                    cloud_upload
                  </span>
                  <div>
                    <p className="font-bold text-primary">Drop your CV here</p>
                    <p className="text-xs text-secondary">
                      PDF, DOCX up to 10MB
                    </p>
                  </div>
                  <button
                    className="mt-2 px-4 py-2 text-xs font-bold text-primary underline underline-offset-4"
                    type="button"
                  >
                    Browse Files
                  </button>
                </div>
              </section>
              {/* Cover Letter (Optional Text Area)  */}
              <section className="space-y-2">
                <div className="flex justify-between items-end ml-1">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-secondary">
                    Quick Introduction
                  </label>
                  <span className="text-[10px] text-outline font-medium uppercase tracking-wider">
                    Optional
                  </span>
                </div>
                <textarea
                  className="w-full px-5 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline/60 font-medium resize-none"
                  placeholder="Briefly explain why you're a fit for Linear..."
                  rows={4}
                ></textarea>
              </section>
            </form>
          </div>
          {/* Modal Actions  */}
          <div className="px-8 py-6 bg-surface-container-low/50 flex flex-col sm:flex-row-reverse gap-3 items-center">
            <button className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all duration-200">
              Submit Application
            </button>
            <button className="w-full sm:w-auto px-10 py-4 text-secondary font-bold text-sm hover:bg-surface-container-high rounded-xl transition-all duration-200">
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Shell (Consistent with Shared Components)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 bg-slate-50/80 backdrop-blur-xl border-t border-slate-200/10 z-[110]">
        <div className="flex flex-col items-center justify-center text-slate-900 scale-110">
          <span
            className="material-symbols-outlined"
            data-icon="grid_view"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            grid_view
          </span>
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase mt-1">
            Curated
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400 opacity-60">
          <span className="material-symbols-outlined" data-icon="bookmark">
            bookmark
          </span>
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase mt-1">
            Saved
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400 opacity-60">
          <span className="material-symbols-outlined" data-icon="description">
            description
          </span>
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase mt-1">
            Applied
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-400 opacity-60">
          <span className="material-symbols-outlined" data-icon="person">
            person
          </span>
          <span className="font-manrope text-[10px] font-bold tracking-widest uppercase mt-1">
            Profile
          </span>
        </div>
      </nav>
    </div>
  );
};

export default JobApply;

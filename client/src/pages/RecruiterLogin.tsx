const RecruiterLogin = () => {
  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col">
      {/* Hero Backdrop/Ambient Texture */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container/20 blur-[120px]"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary-container/5 blur-[100px]"></div>
      </div>
      {/* Main Content */}
      <main className="grow flex flex-col items-center justify-center px-6 py-12">
        {/* Logo Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold tracking-tighter text-primary font-headline">
            JobNest
          </h1>
        </header>
        {/*Login Card*/}
        <div className="w-full max-w-md bg-surface-container-lowest rounded-xl editorial-shadow border border-outline-variant/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <header className="text-center mb-10">
              <h2 className="text-2xl font-bold text-primary mb-2 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-secondary text-sm">
                Sign in to manage your talent pipeline.
              </p>
            </header>
            <form className="space-y-6">
              {/*Email Field */}
              <div className="space-y-2">
                <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant/70 ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-lg">
                    mail
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all placeholder:text-outline/60 text-on-surface"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
              </div>
              {/*Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant/70">
                    Password
                  </label>
                  <a
                    className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-lg">
                    lock
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all placeholder:text-outline/60 text-on-surface"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
              {/* CTA Button */}
              <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:bg-primary-container active:scale-[0.98] transition-all duration-200 mt-4">
                Login
              </button>
            </form>
            {/* Footer Link */}
            <div className="mt-10 pt-8 border-t border-outline-variant/15 text-center">
              <p className="text-sm text-on-surface-variant">
                New to JobNest?
                <a
                  className="ml-1 font-bold text-primary hover:underline decoration-2 underline-offset-4"
                  href="#"
                >
                  Register your account
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Trust Badges / Editorial Note */}
        <div className="mt-12 text-center max-w-xs opacity-60">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-4">
            Trusted by 5,000+ Global Enterprises
          </p>
          <div className="flex justify-center gap-6 grayscale opacity-50">
            <span className="material-symbols-outlined text-3xl">
              corporate_fare
            </span>
            <span className="material-symbols-outlined text-3xl">token</span>
            <span className="material-symbols-outlined text-3xl">
              apartment
            </span>
          </div>
        </div>
      </main>
      {/* Footer - From Shared Components Hierarchy */}
      <footer className="w-full border-t border-slate-200/15 dark:border-slate-800/15 bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto">
          <div className="mb-4 md:mb-0">
            <p className="font-manrope text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500">
              © 2024 JobNest Global. Curated with Serene Intelligence.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="font-manrope text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-manrope text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-manrope text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Cookie Settings
            </a>
            <a
              className="font-manrope text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Accessibility
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecruiterLogin;

const CandidateLogin = () => {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col items-center justify-center p-6 selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Brand Identity Anchor */}
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tighter text-primary font-headline">
          JobNest
        </h1>
      </header>
      {/* Main Login Canvas */}
      <main className="w-full max-w-120">
        {/* Curator Card Styling applied to the Login Form */}
        <div className="bg-surface-container-lowest rounded-xl p-10 md:p-12 editorial-shadow border border-outline-variant/15">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-primary font-headline mb-2 text-center">
              Welcome Back
            </h2>
          </div>
          <form action="#" className="space-y-8" method="POST">
            {/* Email Input */}
            <div className="space-y-2">
              <label
                className="block text-[0.75rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant/80 font-label"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all duration-200 outline-none"
                id="email"
                name="email"
                placeholder="curator@jobnest.com"
                required
                type="email"
              />
            </div>
            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  className="block text-[0.75rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant/80 font-label"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="text-[0.75rem] font-semibold text-secondary hover:text-primary transition-colors duration-200"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all duration-200 outline-none"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
            </div>
            {/* Login Button */}
            <div className="pt-2">
              <button
                className="w-full bg-primary text-on-primary font-bold py-4 px-6 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/10"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          {/* Registration Redirect */}
          <div className="mt-10 pt-8 border-t border-outline-variant/15 text-center">
            <p className="text-on-surface-variant text-sm">
              New to JobNest?
              <a
                className="text-primary font-bold hover:underline underline-offset-4 ml-1"
                href="#"
              >
                Register your account
              </a>
            </p>
          </div>
        </div>
      </main>
      {/* Footer Content Anchor */}
      <footer className="mt-12 flex flex-col md:flex-row items-center gap-6">
        <div className="flex gap-8">
          <a
            className="text-[0.7rem] font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-[0.7rem] font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-[0.7rem] font-bold tracking-widest uppercase text-secondary hover:text-primary transition-colors"
            href="#"
          >
            Help Center
          </a>
        </div>
        <p className="text-[0.7rem] font-bold tracking-widest uppercase text-on-tertiary-container/60 md:ml-auto">
          © 2024 JobNest Curator. All rights reserved.
        </p>
      </footer>
      {/* Aesthetic Layering: Tonal Accents */}
      <div className="fixed top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-on-primary-container to-secondary opacity-20"></div>
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default CandidateLogin;

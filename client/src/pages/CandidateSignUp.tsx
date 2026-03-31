const CandidateSignup = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <main className="grow flex flex-col items-center justify-center px-6 py-12">
        <div className="mb-10 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary font-headline">
            JobNest
          </h1>
        </div>
        <div className="w-full max-w-120 surface-container-lowest rounded-xl p-10 md:p-12 shadow-[0_40px_60px_-5px_rgba(25,28,30,0.06)] border border-outline-variant/15">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-on-surface mb-3 tracking-tight">
              Create an account
            </h2>
            <p className="text-secondary body-lg">
              Sign up to start your career journey
            </p>
          </div>
          <form action="#" className="space-y-6">
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-on-surface-variant tracking-wide uppercase"
                style={{ fontSize: "0.75rem" }}
              >
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span
                    className="material-symbols-outlined text-outline text-sm"
                    data-icon="mail"
                  >
                    mail
                  </span>
                </div>
                <input
                  className="block w-full pl-11 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all duration-300 outline-none text-on-surface placeholder:text-outline/60"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-on-surface-variant tracking-wide uppercase"
                style={{ fontSize: "0.75rem" }}
              >
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span
                    className="material-symbols-outlined text-outline text-sm"
                    data-icon="lock"
                  >
                    lock
                  </span>
                </div>
                <input
                  className="block w-full pl-11 pr-12 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all duration-300 outline-none text-on-surface placeholder:text-outline/60"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    data-icon="visibility"
                  >
                    visibility
                  </span>
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="block text-sm font-semibold text-on-surface-variant tracking-wide uppercase"
                style={{ fontSize: "0.75rem" }}
              >
                Confirm Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span
                    className="material-symbols-outlined text-outline text-sm"
                    data-icon="lock_reset"
                  >
                    lock_reset
                  </span>
                </div>
                <input
                  className="block w-full pl-11 pr-4 py-4 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all duration-300 outline-none text-on-surface placeholder:text-outline/60"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
            <div className="pt-4">
              <button
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                type="submit"
              >
                Sign Up{" "}
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
          <div className="mt-10 pt-8 border-outline-variant/15 flex flex-col items-center gap-6">
            <p className="text-on-surface-variant text-sm">
              Already have an account?{" "}
              <a
                className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
                href="#"
              >
                Log In
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-120 text-center">
          <p className="text-secondary text-xs leading-relaxed opacity-70">
            By clicking Sign Up, you agree to our{" "}
            <a className="underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
      <footer className="w-full border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center px-12 py-8 mt-auto bg-surface dark:bg-slate-950">
        <div className="text-secondary text-sm font-['Manrope'] tracking-wide uppercase mb-4 md:mb-0">
          © 2024 JobNest. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a
            className="text-secondary text-sm font-['Manrope'] tracking-wide uppercase hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-secondary text-sm font-['Manrope'] tracking-wide uppercase hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-secondary text-sm font-['Manrope'] tracking-wide uppercase hover:text-primary transition-colors"
            href="#"
          >
            Cookie Settings
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CandidateSignup;

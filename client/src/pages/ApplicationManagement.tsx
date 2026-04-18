const ApplicationManagement = () => {
  return (
    <main className="w-full max-w-360 mx-auto px-12 py-12 selection:bg-primary-container selection:text-on-primary">
      {/* Header Section  */}
      <header className="mb-12">
        <a
          className="inline-flex items-center text-secondary text-sm font-medium mb-4 hover:text-primary transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined mr-1 text-sm">
            arrow_back
          </span>
          Back to Jobs
        </a>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2">
              Senior Frontend Architect
            </h1>
            <div className="flex items-center gap-4 text-secondary mb-6">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>{" "}
                San Francisco, CA (Remote)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/30"></span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  schedule
                </span>{" "}
                Posted Oct 01, 2023
              </span>
            </div>
            <div className="mt-8 border-t border-outline-variant/20 pt-8">
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-1">
                  Total Applicants
                </span>
                <span className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
                  124
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Search and Filters  */}
      <section className="mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-96 group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary-fixed focus:bg-surface-container-lowest transition-all placeholder:text-outline/70"
            placeholder="Search candidates by name or skill..."
            type="text"
          />
        </div>
      </section>
      {/* Applicants Table Container  */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-secondary">
              <th className="px-8 py-5 font-bold text-[0.7rem] uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-5 font-bold text-[0.7rem] uppercase tracking-wider">
                Applied Date
              </th>
              <th className="px-6 py-5 font-bold text-[0.7rem] uppercase tracking-wider">
                AI Match Score
              </th>
              <th className="px-6 py-5 font-bold text-[0.7rem] uppercase tracking-wider">
                Email Address
              </th>
              <th className="px-6 py-5 font-bold text-[0.7rem] uppercase tracking-wider">
                CV
              </th>
              <th className="px-8 py-5 font-bold text-[0.7rem] uppercase tracking-wider text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {/* Row 1  */}
            <tr className="hover:bg-surface-container/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    data-alt="Professional headshot of a male software engineer with glasses in a soft lit studio background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ53_lfAkvhgB9pJ-HvYG4owUWBGORhYi07XyFBlQ-DGC39MceZ2bj2un7HCbMMsdBI89SF2po8xeX25UiFV38qX664yMWAygyOe20dZ9bHUzZHi9m1ZOY_DeFD40S-F4SxwgepHcKD8OaTtbVAm6ulaPp6OF7HMCQRCYDTnQNTlQ2fFppmZxS8TqMZDaL3Hqt42mw6Vg9Wa0EE3rf29rtSO5Uc7kLClYFdO-w-JKn--8hBPGajftDKLSXtjcwIVBcXVoT6cQMNc"
                  />
                  <div>
                    <p className="font-bold text-primary group-hover:text-primary-container transition-colors">
                      Marcus Henderson
                    </p>
                    <p className="text-sm text-secondary">Berlin, Germany</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary">Oct 12, 2023</td>
              <td className="px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-extrabold text-primary">
                    98%
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary font-medium">
                m.henderson@email.com
              </td>
              <td className="px-6 py-6">
                <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-secondary hover:text-primary hover:bg-surface-container-highest transition-colors text-[0.7rem] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  View CV
                </button>
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-3 text-secondary">
                  <button
                    className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-secondary"
                    title="View Details"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 2  */}
            <tr className="hover:bg-surface-container/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    data-alt="Portrait of a female professional smiling warmly, creative office environment background with bokeh"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3FtQNfk95TZldc9BOnc3RmY5nziTx2Nc7rOV4UT9tkBwr-cxF1OjbCC5nTZ5LBleQMF8pWii57h0GCAW_y2C30xuJI6U9HF2G_BLqd0yzgG1tA8-W5hULI7yFtQvxMwNgSbX6EnxM57qQLKVUajw9EVobiF_egJy91-D08kXvWRDaAoYJ26RUTFB-qBRSdpjRbqMQ-TqJv3OGXn6uOZE54QvQFPj8qwmpeiGIi8TRXrfdcUic61cWst-8-KcxI0391tmJTZAFVZ0"
                  />
                  <div>
                    <p className="font-bold text-primary group-hover:text-primary-container transition-colors">
                      Elena Rodriguez
                    </p>
                    <p className="text-sm text-secondary">Austin, TX</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary">Oct 10, 2023</td>
              <td className="px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-extrabold text-primary">
                    85%
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary font-medium">
                e.rodriguez@email.com
              </td>
              <td className="px-6 py-6">
                <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-secondary hover:text-primary hover:bg-surface-container-highest transition-colors text-[0.7rem] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  View CV
                </button>
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-3 text-secondary">
                  <button
                    className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-secondary"
                    title="View Details"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 3  */}
            <tr className="hover:bg-surface-container/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    data-alt="Man with beard and friendly expression, minimalist neutral studio background, high-end corporate photography"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY7Y16-L_MAqnnTmnDansocHX4mZrB0YZhZkPXosSqf9LbdjI-YNhe_trXG8i4IkFVDCrYNBzCy2sSNpC5KtafGT42duh0Wac-Y9coau07Fbk0rXAMMIKNyMxqiNLU7I54Q5OH-PT3SSIvnEwz52VWqaPkMyJ0Epfxf1x9c1FmqrCzkd3gc-ONxjvTHnBOnwq8uD99ZqrihRGQHvW47txZbSrgGG8QfKh0404I2aDZaDUpu_9ELcLv8Zae5GQCkqhrteRCgZfuAXc"
                  />
                  <div>
                    <p className="font-bold text-primary group-hover:text-primary-container transition-colors">
                      David Chen
                    </p>
                    <p className="text-sm text-secondary">Vancouver, BC</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary">Oct 09, 2023</td>
              <td className="px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/40"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-extrabold text-secondary">
                    72%
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary font-medium">
                d.chen@email.com
              </td>
              <td className="px-6 py-6">
                <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-secondary hover:text-primary hover:bg-surface-container-highest transition-colors text-[0.7rem] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  View CV
                </button>
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-3 text-secondary">
                  <button
                    className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-secondary"
                    title="View Details"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 4  */}
            <tr className="hover:bg-surface-container/30 transition-colors group">
              <td className="px-8 py-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    data-alt="Confident young professional woman in business casual attire against a soft-focus urban workspace background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBORv8-Ve_LiFp2M8DAoSKsqwcGVrgFptVrkIXes7kOITQMRJpwejdzCgfePNCDoAQ_yfQ_oSqjyBsfNNsuE8IFb-qeOiw96s5l4nFhMo4pkugaDkRmMt6N3fPc9PUFJ9beKX2iNOnYsof0zggScn2DYyo5h-QkdLET8_ks9-Zg5YfJpSc0D9AvYrdnZ1dHIFAqswa-O0cyreL3B_bwah38JUZiLFGASlSOoCF0MS3GqFOTrELrOygAMMAsneTYLHC44uAKVIybx20"
                  />
                  <div>
                    <p className="font-bold text-primary group-hover:text-primary-container transition-colors">
                      Sarah Jenkins
                    </p>
                    <p className="text-sm text-secondary">London, UK</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary">Oct 08, 2023</td>
              <td className="px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-error/30"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-extrabold text-secondary">
                    45%
                  </span>
                </div>
              </td>
              <td className="px-6 py-6 text-sm text-secondary font-medium">
                s.jenkins@email.com
              </td>
              <td className="px-6 py-6">
                <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high text-secondary hover:text-primary hover:bg-surface-container-highest transition-colors text-[0.7rem] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">
                    description
                  </span>
                  View CV
                </button>
              </td>
              <td className="px-8 py-6 text-right">
                <div className="flex justify-end gap-3 text-secondary">
                  <button
                    className="p-2 hover:bg-surface-container-high rounded-lg transition-colors text-secondary"
                    title="View Details"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Pagination Section  */}
        <div className="px-8 py-6 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/15">
          <p className="text-sm text-secondary">
            Showing <span className="font-bold text-primary">1 - 10</span> of{" "}
            <span className="font-bold text-primary">124</span> applicants
          </p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high text-secondary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary font-bold transition-all shadow-sm">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high text-secondary transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high text-secondary transition-colors">
              3
            </button>
            <span className="px-2 text-secondary">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high text-secondary transition-colors">
              13
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container-high text-secondary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ApplicationManagement;

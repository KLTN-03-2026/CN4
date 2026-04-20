import { useEffect, useState } from "react";

type JobApplyValues = {
  fullName: string;
  email: string;
  phone: string;
  introduction: string;
  resumeFile: File | null;
};

type JobApplyProps = {
  open: boolean;
  jobTitle: string;
  companyName: string;
  onClose: () => void;
  onSubmit?: (values: JobApplyValues) => void | Promise<void>;
};

const emptyValues: JobApplyValues = {
  fullName: "",
  email: "",
  phone: "",
  introduction: "",
  resumeFile: null,
};

const JobApply = ({
  open,
  jobTitle,
  companyName,
  onClose,
  onSubmit,
}: JobApplyProps) => {
  const [values, setValues] = useState<JobApplyValues>(emptyValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, open]);

  useEffect(() => {
    if (open) {
      setValues(emptyValues);
      setIsSubmitting(false);
      setIsOverlayVisible(false);

      const animationFrameId = window.requestAnimationFrame(() => {
        setIsOverlayVisible(true);
      });

      return () => window.cancelAnimationFrame(animationFrameId);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit?.(values);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close job apply overlay"
        className={`absolute inset-0 bg-black/35 backdrop-blur-[2px] transition-opacity duration-200 ${
          isOverlayVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-2xl rounded-2xl bg-surface-container-lowest shadow-[0_30px_55px_-20px_rgba(0,0,0,0.35)] border border-outline-variant/20 transition-all duration-200 ease-out ${
          isOverlayVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-1 scale-[0.98]"
        }`}
      >
        <div className="flex items-start justify-between px-6 py-5 border-b border-outline-variant/15">
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-secondary mb-1">
              Application Form
            </p>
            <h2 className="text-2xl font-extrabold text-primary leading-tight">
              Apply for {jobTitle}
            </h2>
            <p className="text-sm text-secondary mt-1">
              Submit your details to {companyName}.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-outline hover:bg-surface-container transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest uppercase text-secondary px-1">
              Full Name
            </label>
            <input
              className="w-full rounded-xl bg-surface-container-highest px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-fixed"
              type="text"
              value={values.fullName}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  fullName: event.target.value,
                }))
              }
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-secondary px-1">
                Email
              </label>
              <input
                className="w-full rounded-xl bg-surface-container-highest px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-fixed"
                type="email"
                value={values.email}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder="name@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest uppercase text-secondary px-1">
                Phone
              </label>
              <input
                className="w-full rounded-xl bg-surface-container-highest px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-fixed"
                type="tel"
                value={values.phone}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest uppercase text-secondary px-1">
              CV / Resume
            </label>
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-outline-variant/40 bg-surface-container-low px-4 py-3 hover:border-primary/40 transition-colors">
              <span className="text-sm text-on-surface-variant truncate pr-3">
                {values.resumeFile
                  ? values.resumeFile.name
                  : "Choose a file (PDF, DOC, DOCX)"}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Browse
              </span>
              <input
                className="hidden"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(event) => {
                  const nextFile = event.target.files?.[0] ?? null;
                  setValues((current) => ({
                    ...current,
                    resumeFile: nextFile,
                  }));
                }}
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest uppercase text-secondary px-1">
              Quick Introduction
            </label>
            <textarea
              className="w-full rounded-xl bg-surface-container-highest px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-fixed resize-none"
              rows={4}
              value={values.introduction}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  introduction: event.target.value,
                }))
              }
              placeholder="Tell the recruiter why you are a great fit"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl text-secondary hover:bg-surface-container transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold hover:opacity-90 transition-all disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;

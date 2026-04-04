import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
});

const stats = [
  { label: "Students enrolled", value: "3,200+" },
  { label: "Admission accuracy", value: "98%" },
  { label: "Schools trust us", value: "140+" },
  { label: "Portal access", value: "24/7" },
];

const features = [
  {
    title: "Online Application Forms",
    description:
      "Custom forms for any class level. Students apply from anywhere, anytime — no paperwork needed.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E24B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    bg: "bg-red-50",
  },
  {
    title: "Real-time Status Tracking",
    description:
      "Parents and students see their application status live — from submitted to admitted, every step.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    bg: "bg-blue-50",
  },
  {
    title: "Instant Admission Letters",
    description:
      "Auto-generate and send official admission letters the moment a student is approved.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B6D11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    bg: "bg-emerald-50",
  },
  {
    title: "Admin Dashboard",
    description:
      "A clean, powerful dashboard for staff — review, approve, or decline applications in seconds.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E24B4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    bg: "bg-red-50",
  },
  {
    title: "Parent & Student Portals",
    description:
      "Separate, secure logins for parents and students with role-specific views and notifications.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#185FA5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bg: "bg-blue-50",
  },
  {
    title: "Fee Payment Integration",
    description:
      "Accept application and acceptance fees online, automatically reconciled to each student's record.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B6D11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    bg: "bg-emerald-50",
  },
];

const steps = [
  {
    title: "Create an Account",
    description:
      "Parents sign up in under a minute with a valid email and phone number.",
  },
  {
    title: "Fill the Application",
    description:
      "Complete the school's custom form with student details and upload required docs.",
  },
  {
    title: "School Reviews",
    description:
      "Admin reviews submissions on the dashboard and communicates directly with applicants.",
  },
  {
    title: "Get Admitted",
    description:
      "Approved students receive their official letter and enrollment details instantly.",
  },
];

const students = [
  {
    initials: "AO",
    name: "Amaka Okonkwo",
    subtitle: "JSS 1 · Applied 2h ago",
    status: "Admitted",
    statusClass: "bg-emerald-100 text-emerald-800",
    avatarClass: "bg-sky-100 text-sky-700",
  },
  {
    initials: "KA",
    name: "Kelechi Adeyemi",
    subtitle: "SSS 2 · Applied 5h ago",
    status: "In Review",
    statusClass: "bg-amber-100 text-amber-800",
    avatarClass: "bg-emerald-100 text-emerald-800",
  },
  {
    initials: "FN",
    name: "Fatima Nwosu",
    subtitle: "JSS 3 · Applied 1d ago",
    status: "Pending",
    statusClass: "bg-slate-100 text-slate-700",
    avatarClass: "bg-amber-100 text-amber-700",
  },
  {
    initials: "TE",
    name: "Taiwo Eze",
    subtitle: "SSS 1 · Applied 1d ago",
    status: "Admitted",
    statusClass: "bg-emerald-100 text-emerald-800",
    avatarClass: "bg-pink-100 text-pink-700",
  },
];

export default function Home() {
  return (
    <main
      className={`${dmSans.variable} font-sans bg-[#FAFAF8] text-[#1A1A1A]`}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-4">
        <nav className="sticky top-0 z-50 mb-10 flex items-center justify-between gap-6 rounded-3xl bg-white/90 px-6 py-4 shadow-sm shadow-black/5 backdrop-blur-sm border border-black/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E24B4A]">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span
              className={`${playfair.variable} font-[var(--font-playfair)] text-lg font-bold text-[#A32D2D]`}
            >
              Edugate
            </span>
          </div>

          <div className="hidden items-center gap-10 text-sm font-medium text-[#6B6B6B] md:flex">
            <Link href="#about" className="transition hover:text-[#1A1A1A]">
              About Us
            </Link>
            <Link
              href="#admissions"
              className="transition hover:text-[#1A1A1A]"
            >
              Admissions
            </Link>
            <Link href="#programs" className="transition hover:text-[#1A1A1A]">
              Programs
            </Link>
            <Link href="#contact" className="transition hover:text-[#1A1A1A]">
              Contact
            </Link>
          </div>

          <Link
            href="/auth/login"
            className="rounded-2xl bg-[#E24B4A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#A32D2D]"
          >
            Sign In
          </Link>
        </nav>

        <section className="grid gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FCEBEB] px-4 py-2 text-sm font-semibold text-[#A32D2D]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E24B4A]" />
              Now open — 2025/2026 session
            </div>

            <h1
              className={`${playfair.variable} font-[var(--font-playfair)] mt-8 text-5xl font-black leading-tight text-[#1A1A1A] sm:text-6xl`}
            >
              Where Students <span className="text-[#E24B4A]">Thrive</span> and
              Futures Begin.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6B6B6B] sm:text-lg">
              A seamless, modern admissions platform built for schools that care
              — apply, track, and enroll all in one place.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center rounded-2xl bg-[#E24B4A] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#A32D2D]"
              >
                Apply Now
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-8 py-3 text-sm font-medium text-[#1A1A1A] transition hover:border-[#1A1A1A]/30"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <div className="mb-6 flex items-center justify-between text-sm font-semibold text-[#6B6B6B] uppercase tracking-[0.18em]">
              <span>Applications</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
                12 new today
              </span>
            </div>

            <div className="space-y-4">
              {students.map((student) => (
                <div
                  key={student.name}
                  className="flex items-center gap-4 border-b border-black/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${student.avatarClass}`}
                  >
                    {student.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#1A1A1A]">
                      {student.name}
                    </p>
                    <p className="mt-1 text-xs text-[#6B6B6B]">
                      {student.subtitle}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${student.statusClass}`}
                  >
                    {student.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[32px] border border-black/10 bg-white px-6 py-10 shadow-sm sm:px-10">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-black text-[#E24B4A]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[#6B6B6B]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="admissions" className="py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E24B4A]">
              Why Edugate
            </p>
            <h2
              className={`${playfair.variable} font-[var(--font-playfair)] mt-4 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl`}
            >
              Everything a school needs, nothing it doesnt.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[24px] border border-black/10 bg-white p-7 transition hover:border-[#E24B4A]"
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl ${feature.bg}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B6B6B]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 py-16 shadow-sm sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E24B4A]">
              How it works
            </p>
            <h2
              className={`${playfair.variable} font-[var(--font-playfair)] mt-4 text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl`}
            >
              Simple for parents. Powerful for schools.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-black/10 p-6 text-center"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FCEBEB] text-xl font-black text-[#A32D2D]">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B6B6B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-[28px] bg-[#E24B4A] px-8 py-12 sm:px-12 sm:py-14">
            <div className="mx-auto flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl text-white">
                <h2
                  className={`${playfair.variable} font-[var(--font-playfair)] text-3xl font-bold leading-tight sm:text-4xl`}
                >
                  Ready to modernize your schools admissions?
                </h2>
                <p className="mt-4 max-w-xl text-sm text-white/80 sm:text-base">
                  Join 140+ schools already running on Edugate.
                </p>
              </div>
              <Link
                href="/auth/register"
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-[#A32D2D] transition hover:opacity-95"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </section>

        <footer className="rounded-[28px] bg-[#1A1A1A] px-6 py-10 text-sm text-white sm:px-10">
          <div className="mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div
              className={`${playfair.variable} font-[var(--font-playfair)] text-lg font-semibold`}
            >
              Edugate
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
              <Link href="#about" className="transition hover:text-white">
                Privacy
              </Link>
              <Link href="#admissions" className="transition hover:text-white">
                Terms
              </Link>
              <Link href="#contact" className="transition hover:text-white">
                Support
              </Link>
            </div>
            <div className="text-white/50">
              © 2025 Edugate. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

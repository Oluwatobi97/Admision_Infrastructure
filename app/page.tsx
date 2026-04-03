import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-red-600" />
          <span className="text-xl font-semibold text-red-700">SchoolName</span>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="#about" className="hover:text-red-600">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-red-600">
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full border border-red-600 bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Sign In
          </Link>
        </nav>
      </header>

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
        <Image
          src="/image1.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Empowering Students. Building Futures.
          </h1>
          <p className="max-w-2xl text-base text-white/90 sm:text-lg">
            A modern admission platform for the next generation — streamlined,
            secure, and built for schools.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-red-600 shadow-lg shadow-red-500/20 transition hover:bg-red-50"
          >
            Sign Up
          </Link>
        </div>
      </section>

      <section id="about" className="px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-red-700">About Us</h2>
          <p className="mt-4 text-slate-600">
            We help schools streamline their admissions process with a secure,
            easy-to-use platform that gives administrators full control and
            students a seamless experience.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-red-50 px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-red-700">Contact Us</h2>
          <p className="mt-4 text-slate-600">
            Have questions? Reach out and we’ll be happy to help you get
            started.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-red-700">Email</h3>
              <p className="mt-2 text-slate-600">support@schoolname.edu</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-lg font-semibold text-red-700">Phone</h3>
              <p className="mt-2 text-slate-600">+1 (555) 123‑4567</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-8 py-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} SchoolName. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#about" className="hover:text-red-600">
              About
            </Link>
            <Link href="#contact" className="hover:text-red-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

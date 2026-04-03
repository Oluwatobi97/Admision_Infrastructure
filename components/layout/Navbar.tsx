"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-sky-600" />
          <span className="text-lg font-semibold text-slate-900">
            School Admin
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="hidden sm:inline">Hello, Admin</span>
          <button className="rounded-md bg-slate-100 px-3 py-1.5 text-slate-700 hover:bg-slate-200">
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

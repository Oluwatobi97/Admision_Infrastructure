"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-red-600 items-center justify-center text-white">
        <h1 className="text-3xl font-bold">School Portal</h1>
      </div>

      {/* RIGHT */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow w-[350px]">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Sign In
          </h2>

          {/* ROLE SELECT */}
          <select
            className="w-full mb-4 p-3 border text-gray-700 rounded-lg"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Sign in as Student</option>
            <option value="admin">Sign in as Admin</option>
          </select>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border text-gray-700 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 border text-gray-700 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700">
            Login
          </button>

          <p className="text-sm text-center text-gray-700 mt-4">
            Don’t have an account?{" "}
            <Link href="/auth/register" className="text-red-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

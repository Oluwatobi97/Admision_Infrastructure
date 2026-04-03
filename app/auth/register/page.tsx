"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-red-600 items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Create Account</h1>
      </div>

      {/* RIGHT */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow w-[350px]">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>
            {/* ROLE SELECT */}
            <label htmlFor="role" className="block mb-2 text-sm font-medium">
              Register As
            </label>

            <select
              id="role"
              className="w-full mb-4 p-3 border rounded-lg"
              value={role}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setRole(e.target.value)
              }
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 p-3 border text-gray-700 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
            <button
              type="submit"
              className="w-full bg-red-600 cursor-pointer text-white p-3 rounded-lg hover:bg-red-700"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-red-600 ">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

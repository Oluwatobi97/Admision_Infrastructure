"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register, TRegisterDetails } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
	const [role, setRole] = useState("student");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const route = useRouter();

	const [form, setForm] = useState<TRegisterDetails>({
		schoolName: "",
		email: "",
		password: ""
	});

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await register(form);
			route.push("/admin/dashboard");
		} catch (error) {
			alert((error as Error).message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex">
			{/* LEFT */}
			<div className="hidden md:flex w-1/2 bg-[#E24B4A] items-center justify-center text-white">
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
						{/* <label htmlFor="role" className="block mb-2 text-sm font-medium">
							Register As
						</label>

						<select
							id="role"
							className="w-full mb-4 p-3 border rounded-lg"
							value={role}
							onChange={(e: ChangeEvent<HTMLSelectElement>) =>
								setRole(e.target.value)}
						>
							<option value="student">Student</option>
							<option value="admin">Admin</option>
						</select> */}

						{/* Name */}
						<input
							type="text"
							placeholder="school name"
							className="w-full mb-4 p-3 border text-gray-700 rounded-lg"
							onChange={e =>
								setForm(prev => ({ ...prev, schoolName: e.target.value }))}
						/>

						{/* Email */}
						<input
							type="email"
							placeholder="Email"
							className="w-full mb-4 p-3 border text-gray-700 rounded-lg"
							onChange={e =>
								setForm(prev => ({ ...prev, email: e.target.value }))}
						/>

						{/* Password */}
						<input
							type="password"
							placeholder="Password"
							className="w-full mb-6 p-3 border text-gray-700 rounded-lg"
							onChange={e =>
								setForm(prev => ({ ...prev, password: e.target.value }))}
						/>

						{/* Button */}
						<button
							disabled={loading}
							type="submit"
							className="w-full bg-[#E24B4A] cursor-pointer text-white p-3 rounded-lg hover:bg-[#A32D2D]"
						>
							{loading ? "Signing Up..." : "Sign Up"}
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

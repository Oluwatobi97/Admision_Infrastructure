"use client";

import { useState } from "react";
import Link from "next/link";
import { login, TLoginDetails } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	// const [role, setRole] = useState("student");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");

	const route = useRouter();

	const [form, setForm] = useState<TLoginDetails>({
		email: "",
		password: ""
	});

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await login(form);
			route.push("/auth/verifyEmail");
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
				<h1 className="text-3xl font-bold">School Portal</h1>
			</div>

			{/* RIGHT */}
			<div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
				<form
					onSubmit={handleSubmit}
					className="bg-white p-8 rounded-2xl shadow w-87.5"
				>
					<h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
						Sign In
					</h2>

					{/* ROLE SELECT
					<select
						id="role"
						title="select"
						className="w-full mb-4 p-3 border text-gray-700 rounded-lg"
						value={role}
						onChange={e => setRole(e.target.value)}
					>
						<option value="student">Sign in as Student</option>
						<option value="admin">Sign in as Admin</option>
					</select> */}

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
						className="w-full  bg-[#E24B4A] text-white p-3 rounded-lg hover:bg-[#A32D2D]"
					>
						{loading ? "Signing In..." : "Sign In"}
					</button>

					<p className="text-sm text-center text-gray-700 mt-4">
						Don’t have an account?{" "}
						<Link href="/auth/register" className="text-red-600">
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

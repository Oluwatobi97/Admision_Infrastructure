import { verifyEmail } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
	searchParams: Promise<{ token?: string }>;
};

export default async function VerifyEmail({ searchParams }: Props) {
	const { token } = await searchParams;
	if (!token) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<h1 className="text-4xl font-bold mb-4">Verify Your Email</h1>
				<p className="text-lg text-gray-600 mb-6">
					A verification link has been sent to your email address. Please check
					your inbox and click the link to verify your account.
				</p>
				<p className="text-sm text-gray-500">
					If you did not receive the email, please check your spam folder or
					request a new verification email.
				</p>
			</div>
		);
	}
	await verifyEmail(token);
	redirect("/auth/login?verified=true");
}

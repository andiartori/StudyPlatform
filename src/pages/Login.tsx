import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login, error: authError } = useAuth();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		if (email && password) {
			const success = login(email, password);
			if (success) {
				navigate("/");
			}
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<div className="flex justify-center">
						<GraduationCap className="h-12 w-12 text-indigo-600" />
					</div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>

					<div className="mt-2 text-center text-sm text-gray-500 gap-4">
						<p>
							This website meant for examples only. It is not related to any
							database and not storing any data.
						</p>

						<p className="mt-2 text-center text-sm text-gray-600">
							Available accounts:
						</p>
						<p>EMail address : student1@example.com / Password : password123</p>
						<p>Email address : student2@example.com / Password : password123</p>
					</div>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleLogin}>
					{authError && (
						<div className="rounded-md bg-red-50 p-4">
							<div className="text-sm text-red-700">{authError}</div>
						</div>
					)}
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<input
								type="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<input
								type="password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

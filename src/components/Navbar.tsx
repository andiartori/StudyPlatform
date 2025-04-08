import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, GraduationCap } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	if (!user) return null;

	return (
		<nav className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<GraduationCap className="h-8 w-8 text-indigo-600" />
						<span className="ml-2 text-xl font-semibold text-gray-900">
							Study Platform
						</span>
					</div>
					<div className="flex items-center space-x-4">
						<span className="text-gray-700">Welcome, {user.name}</span>
						<button
							onClick={handleLogout}
							className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
						>
							<LogOut className="h-5 w-5 mr-1" />
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

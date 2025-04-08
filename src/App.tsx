import React, { useEffect } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ModulePage from "./pages/ModulePage";
import Test from "./pages/Test";
import TestResults from "./pages/TestResults";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const { user, loading } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading && !user) {
			navigate("/login");
		}
	}, [user, loading, navigate]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return user ? <>{children}</> : null;
}

function App() {
	const { user } = useAuth();

	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gray-50">
				<Navbar />
				<Routes>
					<Route
						path="/login"
						element={user ? <Navigate to="/" replace /> : <Login />}
					/>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Navbar />
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/module/:id"
						element={
							<ProtectedRoute>
								<Navbar />
								<ModulePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/module/:id/test"
						element={
							<ProtectedRoute>
								<Navbar />
								<Test />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/module/:id/results"
						element={
							<ProtectedRoute>
								<Navbar />
								<TestResults />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

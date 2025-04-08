import React from "react";
import { Link } from "react-router-dom";
import { modules, testResults } from "../data/mockData";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
	return (
		<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div className="px-4 py-6 sm:px-0">
				<h1 className="text-3xl font-bold text-gray-900">Study Modules</h1>
				<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{modules.map((module) => {
						const result = testResults.find((r) => r.moduleId === module.id);
						return (
							<div
								key={module.id}
								className="bg-white overflow-hidden shadow rounded-lg"
							>
								<div className="p-6">
									<div className="flex items-center">
										<BookOpen className="h-6 w-6 text-indigo-600" />
										<h3 className="ml-2 text-lg font-medium text-gray-900">
											{module.title}
										</h3>
									</div>
									<p className="mt-2 text-sm text-gray-500">
										{module.description}
									</p>
									<div className="mt-4">
										{result ? (
											<div className="flex items-center">
												{result.score >= 7 ? (
													<CheckCircle className="h-5 w-5 text-green-500" />
												) : (
													<XCircle className="h-5 w-5 text-red-500" />
												)}
												<span className="ml-2 text-sm text-gray-500">
													Score: {result.score}/10
												</span>
											</div>
										) : null}
										<Link
											to={`/module/${module.id}`}
											className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
										>
											Start Module
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

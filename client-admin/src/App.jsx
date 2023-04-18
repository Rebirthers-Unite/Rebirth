import React, { useState } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Login from './forms/Login';
import Signup from './forms/Signup';
import Dashboard from './pages/Dashboard';
import SurvivorsDetails from './components/SurvivorsDetails';
import RootLayout from './components/layouts/RootLayout';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const renderUpdateForm = () => {
		setIsOpen(true);
		setLoading(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/dashboard"
					element={
						<Dashboard
							renderUpdateForm={renderUpdateForm}
							loading={loading}
							isOpen={isOpen}
							closeModal={closeModal}
						/>
					}
				/>
				<Route path="/survivor/:id" element={<SurvivorsDetails />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

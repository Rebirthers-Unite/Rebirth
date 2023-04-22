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
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	const renderUpdateForm = () => {
		setIsOpen(true);
	};
	const renderDeleteSurvivorModal = () => {
		setDeleteModalOpen(true);
	};

	const renderUpdateSurvivorModal = () => {
		setIsUpdating(true);
		setUpdateModalOpen(true);
	};

	const closeUpdateSurvivorModal = () => {
		setUpdateModalOpen(false);
	};

	const closeModal = () => {
		setIsOpen(false);
		setDeleteModalOpen(false);
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
							isOpen={isOpen}
							closeModal={closeModal}
						/>
					}
				/>
				<Route
					path="/survivor/:id"
					element={
						<SurvivorsDetails
							setUpdateModalOpen={setUpdateModalOpen}
							closeUpdateSurvivorModal={closeUpdateSurvivorModal}
							updateModalOpen={updateModalOpen}
							deleteModalOpen={deleteModalOpen}
							setDeleteModalOpen={setDeleteModalOpen}
							closeModal={closeModal}
							renderUpdateSurvivorModal={renderUpdateSurvivorModal}
							renderDeleteSurvivorModal={renderDeleteSurvivorModal}
							setIsOpen={setIsOpen}
							isUpdating={isUpdating}
							setIsUpdating={setIsUpdating}
						/>
					}
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

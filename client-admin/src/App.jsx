import React, { useState, useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Login from './forms/Login';
import Signup from './forms/Signup';
import Dashboard from './pages/Dashboard';
import SurvivorsDetails from './components/SurvivorsDetails';
import RootLayout from './components/layouts/RootLayout';
import StaffDetails from './components/StaffDetails';
import BlogDetails from './components/BlogDetails';
import StaffControlForm from './forms/StaffControlForm';
import UpdateStaff from './forms/UpdateStaff';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [survivors, setSurvivors] = useState([]);
	const [staff, setStaff] = useState([]);
	const [updateBlogsModalOpen, setUpdateBlogsModalOpen] = useState(false);
	const [deleteBlogsModalOpen, setDeleteBlogsModalOpen] = useState(false);
	// const [blogIsUpdating, setBlogIsUpdating] = useState(false);
	const [newSurvivor, setNewSurvivor] = useState({
		name: '',
		date_of_birth: '',
		organization: '',
		organization_contact: '',
		organization_email: '',
		guardian_name: '',
		contact_of_guardian: '',
		level_of_education: '',
		school: '',
		social_asset_building: '',
		children: '',
		date_of_entry: '',
		date_of_exit: '',
	});

	const [newStaff, setNewStaff] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		position: '',
		gender: '',
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [newBlog, setNewBlog] = useState({});

	const renderupdateform = () => {
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
	const closeUpdateBlogModal = () => {
		setUpdateBlogsModalOpen(false);
	};

	const closeDeleteBlogModal = () => {
		setDeleteBlogsModalOpen(false);
	};

	const renderDeleteBlogModal = () => {
		setDeleteBlogsModalOpen(true);
	};

	const renderUpdateBlogModal = () => {
		setUpdateBlogsModalOpen(true);
		useEffect(() => {
			setIsModalOpen(true);
		}, []);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={
					isLoggedIn ? (
						<RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					) : (
						<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					)
				}
			>
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/dashboard"
					element={
						<Dashboard
							renderupdateform={renderupdateform}
							isOpen={isOpen}
							closeModal={closeModal}
							newSurvivor={newSurvivor}
							setNewSurvivor={setNewSurvivor}
							survivors={survivors}
							setSurvivors={setSurvivors}
							staff={staff}
							setStaff={setStaff}
							newBlog={newBlog}
							setNewBlog={setNewBlog}
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
						/>
					}
				/>
				<Route
					path="/survivors/:id"
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
							newSurvivor={newSurvivor}
							setNewSurvivor={setNewSurvivor}
							survivors={survivors}
							setSurvivors={setSurvivors}
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
						/>
					}
				/>
				<Route
					path="/staff/:id"
					element={
						<StaffDetails newStaff={newStaff} setNewStaff={setNewStaff} />
					}
				/>
				<Route
					path="/blog/:id"
					element={
						<BlogDetails
							renderUpdateBlogModal={renderUpdateBlogModal}
							renderDeleteBlogModal={renderDeleteBlogModal}
							closeUpdateBlogModal={closeUpdateBlogModal}
							updateBlogsModalOpen={updateBlogsModalOpen}
							deleteBlogsModalOpen={deleteBlogsModalOpen}
							closeDeleteBlogModal={closeDeleteBlogModal}
							newBlog={newBlog}
							setNewBlog={setNewBlog}
						/>
					}
				/>
				<Route
					path="/add-staff"
					element={
						<StaffControlForm newStaff={newStaff} setNewStaff={setNewStaff} />
					}
				/>
				<Route
					path="/update-staff"
					element={<UpdateStaff staff={staff} setStaff={setStaff} />}
				/>
				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

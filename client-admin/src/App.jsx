import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './forms/Login';
import Signup from './forms/Signup';
import Dashboard from './pages/Dashboard';
import SurvivorsDetails from './components/SurvivorsDetails';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const renderUpdateForm = () => {
		// console.log('Update button has been clicked!');
		setIsOpen(true);
		setLoading(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="App" style={{ width: '100vw' }}>
			<BrowserRouter>
				<Routes>
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
					<Route path='/survivor/:id' element={ <SurvivorsDetails/> } />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

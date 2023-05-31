import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import useAuthStore from '../store/Token';
import { useNavigate } from 'react-router';

const StaffControlForm = ({ newStaff, setNewStaff }) => {
	const token = useAuthStore((state) => state.token);

	const redirect = useNavigate();
	
	const addNewStaff = (e) => {
		e.preventDefault();
		console.log(newStaff);

		fetch('https://rebiirth.onrender.com/staffs', {
			method: 'POST',
			headers: { 
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json' },
			body: JSON.stringify(newStaff),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				redirect('/')
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNewStaff((prevState) => ({ ...prevState, [name]: value }));

		console.log(newStaff);
		// console.log(survivor);
	};

	return (
		<FormControl as={'form'} onSubmit={addNewStaff}>
			<FormLabel>Name</FormLabel>
			<Input type="text" name="name" onChange={handleChange} />

			<FormLabel>Email</FormLabel>
			<Input type="text" name="email" onChange={handleChange} />

			<FormLabel>Phone Number</FormLabel>
			<Input type="text" name="phone_number" onChange={handleChange} />

			<FormLabel>Position</FormLabel>
			<Input type="text" name="position" onChange={handleChange} />

			<FormLabel>Gender</FormLabel>
			<Input type="text" name="gender" onChange={handleChange} />

			<Button type="submit" colorScheme="blue" mt={5} onClick={addNewStaff}>
				Add New Staff
			</Button>
		</FormControl>
	);
};

export default StaffControlForm;

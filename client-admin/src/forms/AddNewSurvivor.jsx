import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';

const UpdateDetailsForm = ({
	closeModal,
	newSurvivor,
	setNewSurvivor,
	isUpdating,
	closeUpdateSurvivorModal,
}) => {
	const { id } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newSurvivor);

		if (!isUpdating) {
			fetch('http://localhost:8000/survivors/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newSurvivor),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setNewSurvivor(data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			closeUpdateSurvivorModal();
		} else {
			fetch('http://localhost:8000/survivors/' + id, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newSurvivor),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setNewSurvivor(data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			closeModal();
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNewSurvivor((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<FormControl as={'form'}>
			<FormLabel>Name</FormLabel>
			<Input type="text" name="name" onChange={handleChange} />

			<FormLabel>Contact</FormLabel>
			<Input type="text" name="contact" onChange={handleChange} />

			<FormLabel>Date of Birth</FormLabel>
			<Input type="date" name="dateOfBirth" onChange={handleChange} />

			<FormLabel>Referring Organization</FormLabel>
			<Input type="text" name="referringOrganization" onChange={handleChange} />

			<FormLabel>Referring Organization Contacts</FormLabel>
			<Input
				type="text"
				name="referringOrganizationContact"
				onChange={handleChange}
			/>

			<FormLabel>Programs</FormLabel>
			<select name="programs" onChange={handleChange}>
				<option value="Test 1">Test 1</option>
				<option value="Test 1">Test 2</option>
				<option value="Test 1">Test 3</option>
				<option value="Test 1">Test 4</option>
			</select>
			{/* <Input
				type="select"
				name="programs"
				value={programs}
				onChange={handleChange}
			/> */}

			<FormLabel>Date of Entry</FormLabel>
			<Input type="date" name="dateOfEntry" onChange={handleChange} />

			<FormLabel>Date of Exit</FormLabel>
			<Input type="date" name="dateofExit" onChange={handleChange} />

			<FormLabel>Guardian</FormLabel>
			<Input type="text" name="guardian" onChange={handleChange} />

			<FormLabel>Guardian Contacts</FormLabel>
			<Input type="text" name="guardianContact" onChange={handleChange} />

			<Button onClick={handleSubmit} type="submit" colorScheme="blue" mt={5}>
				{isUpdating ? 'Update Survivor' : 'Add New Survivor'}
			</Button>
		</FormControl>
	);
};

export default UpdateDetailsForm;

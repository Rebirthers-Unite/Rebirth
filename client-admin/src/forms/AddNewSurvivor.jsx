import { CheckIcon } from '@chakra-ui/icons';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';

const UpdateDetailsForm = ({
	closeModal,
	newSurvivor,
	setNewSurvivor,
	isUpdating,
	closeUpdateSurvivorModal,
	survivors,
	names,
	survivor,
	setSurvivor,
	// setSurvivors,
}) => {
	const { id } = useParams();

	const toast = useToast();

	const showToast = () => {
		toast({
			title: 'Added Survivor',
			description: `Successfully added ${newSurvivor.name}`,
			duration: 3000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <CheckIcon />,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newSurvivor);

		if (isUpdating) {
			fetch(`http://localhost:8000/survivors/${id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(survivor),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setSurvivor(data);
				})
				.catch((error) => {
					console.error('Error:', error);
				});
			closeUpdateSurvivorModal();
			window.location.reload();
		} else {
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
					setNewSurvivor("");
				})
				.catch((error) => {
					console.error('Error:', error);
				});

			showToast();
			closeModal();
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;

		isUpdating
			? setSurvivor((prevState) => ({ ...prevState, [name]: value }))
			: setNewSurvivor((prevState) => ({ ...prevState, [name]: value }));

		console.log(newSurvivor);
		// console.log(survivor);
	};

	return (
		<FormControl as={'form'}>
			<FormLabel>Name</FormLabel>
			<Input
				type="text"
				name="name"
				value={isUpdating ? survivor.name : newSurvivor.name}
				onChange={handleChange}
			/>

			<FormLabel>Contact</FormLabel>
			<Input
				type="text"
				value={isUpdating ? survivor.contact : newSurvivor.contact}
				name="contact"
				onChange={handleChange}
			/>

			<FormLabel>Date of Birth</FormLabel>
			<Input
				type="date"
				name="dateOfBirth"
				value={isUpdating ? survivor.dateOfBirth : newSurvivor.dateOfBirth}
				onChange={handleChange}
			/>

			<FormLabel>Referring Organization</FormLabel>
			<Input
				type="text"
				name="referringOrganization"
				value={
					isUpdating
						? survivor.referringOrganization
						: newSurvivor.referringOrganization
				}
				onChange={handleChange}
			/>

			<FormLabel>Referring Organization Contacts</FormLabel>
			<Input
				type="text"
				name="referringOrganizationContact"
				value={
					isUpdating
						? survivor.referringOrganizationContact
						: newSurvivor.referringOrganizationContact
				}
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
			<Input
				type="date"
				name="dateOfEntry"
				value={isUpdating ? survivor.dateOfEntry : newSurvivor.dateOfEntry}
				onChange={handleChange}
			/>

			<FormLabel>Date of Exit</FormLabel>
			<Input
				type="date"
				name="dateofExit"
				value={isUpdating ? survivor.dateofExit : newSurvivor.dateofExit}
				onChange={handleChange}
			/>

			<FormLabel>Guardian</FormLabel>
			<Input
				type="text"
				name="guardian"
				value={isUpdating ? survivor.guardian : newSurvivor.guardian}
				onChange={handleChange}
			/>

			<FormLabel>Guardian Contacts</FormLabel>
			<Input
				type="text"
				name="guardianContact"
				value={
					isUpdating ? survivor.guardianContact : newSurvivor.guardianContact
				}
				onChange={handleChange}
			/>

			<Button onClick={handleSubmit} type="submit" colorScheme="blue" mt={5}>
				{isUpdating ? 'Update Survivor' : 'Add New Survivor'}
			</Button>
		</FormControl>
	);
};

export default UpdateDetailsForm;

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
import useAuthStore from '../store/Token';

const UpdateDetailsForm = ({
	closeModal,
	newSurvivor,
	setNewSurvivor,
	isUpdating,
	closeUpdateSurvivorModal,
	survivor,
	setSurvivor,
	// setSurvivors,
}) => {
	const token = useAuthStore((state) => state.token);
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
			fetch(`https://rebiirth.onrender.com/survivors/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
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
			// window.location.reload();
		} else {
			fetch('https://rebiirth.onrender.com/survivors/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(newSurvivor),
			})
				.then((response) => {
					if (!response.ok) {
						console.log(response);
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setNewSurvivor('');
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
		console.log(survivor);
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
			<FormLabel>Date of Birth</FormLabel>
			<Input
				type="date"
				name="date_of_birth"
				value={isUpdating ? survivor.date_of_birth : newSurvivor.date_of_birth}
				onChange={handleChange}
			/>

			<FormLabel>Organization</FormLabel>
			<Input
				type="text"
				name="organization"
				value={isUpdating ? survivor.organization : newSurvivor.organization}
				onChange={handleChange}
			/>

			<FormLabel>Organization Contacts</FormLabel>
			<Input
				type="text"
				name="organization_contact"
				value={
					isUpdating
						? survivor.organization_contact
						: newSurvivor.organization_contact
				}
				onChange={handleChange}
			/>

			<FormLabel>Organization Email</FormLabel>
			<Input
				type="text"
				value={
					isUpdating
						? survivor.organization_email
						: newSurvivor.organization_email
				}
				name="organization_email"
				onChange={handleChange}
			/>

			<FormLabel>Guardian Name</FormLabel>
			<Input
				type="text"
				value={isUpdating ? survivor.guardian_name : newSurvivor.guardian_name}
				name="guardian_name"
				onChange={handleChange}
			/>
			<FormLabel>Guardian Contact</FormLabel>
			<Input
				type="text"
				value={
					isUpdating
						? survivor.contact_of_guardian
						: newSurvivor.contact_of_guardian
				}
				name="contact_of_guardian"
				onChange={handleChange}
			/>
			<FormLabel>Education</FormLabel>
			<Input
				type="text"
				value={
					isUpdating
						? survivor.level_of_education
						: newSurvivor.level_of_education
				}
				name="level_of_education"
				onChange={handleChange}
			/>
			<FormLabel>School</FormLabel>
			<Input
				type="text"
				value={isUpdating ? survivor.school : newSurvivor.school}
				name="school"
				onChange={handleChange}
			/>

			<FormLabel>Social Assset Building</FormLabel>
			<Input
				type="text"
				value={
					isUpdating
						? survivor.social_asset_building
						: newSurvivor.social_asset_building
				}
				name="social_asset_building"
				onChange={handleChange}
			/>

						{/* <FormLabel>Children</FormLabel>
					<Input
						type="text"
						value={isUpdating ? survivor.children : newSurvivor.children}
						name="children"
						onChange={handleChange}
					/>
				 */}

					<FormLabel>Date of Entry</FormLabel>
					<Input
						type="date"
						name="date_of_entry"
						value={isUpdating ? survivor.dateOfEntry : newSurvivor.dateOfEntry}
						onChange={handleChange}
					/>

					<FormLabel>Date of Exit</FormLabel>
					<Input
						type="date"
						name="date_of_exit"
						value={isUpdating ? survivor.dateofExit : newSurvivor.dateofExit}
						onChange={handleChange}
					/>

					<Button
						onClick={handleSubmit}
						type="submit"
						colorScheme="blue"
						mt={5}
					>
						{isUpdating ? 'Update Survivor' : 'Add New Survivor'}
					</Button> 
		</FormControl>
	);
};

export default UpdateDetailsForm;

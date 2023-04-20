import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';

const NewSurvivorForm = ({
	names,
	setNames,
	contact,
	setContact,
	dob,
	setDob,
	reforg,
	setReforg,
	reforgContact,
	setReforgContact,
	programs,
	setPrograms,
	dateofEntry,
	setDateOfEntry,
	dateofExit,
	setDateOfExit,
	guardian,
	setGuardian,
	guardianContacts,
	setGuardianContacts,
}) => {
	const id = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Hello!');

		const survivorDetails = {
			names,
			contact,
			dob,
			reforg,
			reforgContact,
			programs,
			dateofEntry,
			dateofExit,
			guardian,
			guardianContacts,
		};

		fetch('http://localhost:8000/survivors/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(survivorDetails),
		}).then(() => {
			(data) => {
				
			};
		});
	};

	return (
		<FormControl as={'form'}>
			<FormLabel>Name</FormLabel>
			<Input
				type="text"
				value={names}
				onChange={(e) => setNames(e.target.value)}
			/>
			<FormLabel>Contact</FormLabel>
			<Input
				type="text"
				value={contact}
				onChange={(e) => setContact(e.target.value)}
			/>
			<FormLabel>Date of Birth</FormLabel>
			<Input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
			<FormLabel>Referring Organization</FormLabel>
			<Input
				type="text"
				value={reforg}
				onChange={(e) => setReforg(e.target.value)}
			/>
			<FormLabel>Referring Organization Contacts</FormLabel>
			<Input
				type="text"
				value={reforgContact}
				onChange={(e) => setReforgContact(e.target.value)}
			/>
			<FormLabel>Programs</FormLabel>
			<Input
				type="text"
				value={programs}
				onChange={(e) => setPrograms(e.target.value)}
			/>
			<FormLabel>Date of Entry</FormLabel>
			<Input
				type="date"
				value={dateofEntry}
				onChange={(e) => setDateOfEntry(e.target.value)}
			/>
			<FormLabel>Date of Exit</FormLabel>
			<Input
				type="date"
				value={dateofExit}
				onChange={(e) => setDateOfExit(e.target.value)}
			/>
			<FormLabel>Guardian</FormLabel>
			<Input
				type="text"
				value={guardian}
				onChange={(e) => setGuardian(e.target.value)}
			/>
			<FormLabel>Guardian Contacts</FormLabel>
			<Input
				type="text"
				value={guardianContacts}
				onChange={(e) => setGuardianContacts(e.target.value)}
			/>
			<Button onClick={handleSubmit} type="submit" colorScheme="blue" mt={5}>
				NEW
			</Button>
		</FormControl>
	);
};

export default NewSurvivorForm;

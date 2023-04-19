import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const UpdateDetailsForm = () => {

	return (
		<FormControl>
			<FormLabel>Name</FormLabel>
			<Input/>
			<FormLabel>Contact</FormLabel>
			<Input />
			<FormLabel>Date of Birth</FormLabel>
			<Input />
			<FormLabel>Referring Organization</FormLabel>
			<Input />
			<FormLabel>Referring Organization Contacts</FormLabel>
			<Input />
			<FormLabel>Programs</FormLabel>
			<Input />
			<FormLabel>Date of Entry</FormLabel>
			<Input />
			<FormLabel>Date of Exit</FormLabel>
			<Input />
			<FormLabel>Guardian</FormLabel>
			<Input />
			<FormLabel>Guardian Contacts</FormLabel>
			<Input />
			<Button type="submit" colorScheme="blue" mt={5}>
				Update
			</Button>
		</FormControl>
	);
};

export default UpdateDetailsForm;

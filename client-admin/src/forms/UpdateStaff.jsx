import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const UpdateStaff = ({}) => {
	return (
		<FormControl as={'form'}>
			<FormLabel>Name</FormLabel>
			<Input type="text" name="name" />

			<FormLabel>Email</FormLabel>
			<Input type="text" name="contact" />

			<FormLabel>Phone Number</FormLabel>
			<Input type="text" name="dateOfBirth" />

			<FormLabel>Position</FormLabel>
			<Input type="text" name="referringOrganization" />

			<Button type="submit" colorScheme="blue" mt={5}>
				Add New Staff
			</Button>
		</FormControl>
	);
};

export default UpdateStaff;

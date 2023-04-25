import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const SearchStaff = () => {
	return (
		<Flex justify={''} mr={'2rem'}>
			<FormControl mb={'1rem'}>
				<FormLabel>Search Staff</FormLabel>
				<Input />
			</FormControl>
		</Flex>
	);
};

export default SearchStaff;

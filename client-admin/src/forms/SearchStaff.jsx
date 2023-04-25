import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const SearchStaff = ({ searchStaff, setSearchStaff }) => {
	return (
		<Flex justify={''} mr={'2rem'}>
			<FormControl mb={'1rem'} onSubmit={(e) => e.preventDefault()}>
				<FormLabel>Search Staff</FormLabel>
				<Input
					role="search"
					type="text"
					value={searchStaff}
					onChange={(e) => setSearchStaff(e.target.value)}
				/>
			</FormControl>
		</Flex>
	);
};

export default SearchStaff;

import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const Search = () => {
	return (
		<Flex justify={'flex-end'} mr={"2rem"}>
			<FormControl maxW={'30%'}>
				<FormLabel>Search</FormLabel>
				<Input />
			</FormControl>
		</Flex>
	);
};

export default Search;

import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const SurvivorsSearch = ({ search, setSearch }) => {
	return (
		<Flex justify={''} mr={'2rem'}>
			<FormControl onSubmit={(e) => e.preventDefault()} mb={"1rem"}>
				<FormLabel>Search Survivor</FormLabel>
				<Input
					role="search"
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</FormControl>
		</Flex>
	);
};

export default SurvivorsSearch;

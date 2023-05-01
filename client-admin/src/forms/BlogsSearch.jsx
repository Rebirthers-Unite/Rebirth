import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const BlogsSearch = () => {
	return (
		<Flex justify={''} mr={'2rem'}>
			<FormControl maxW={'30%'} mb={'1rem'}>
				<FormLabel>Search Blog</FormLabel>
				<Input />
			</FormControl>
		</Flex>
	);
};

export default BlogsSearch;

import { HStack, List, Button } from '@chakra-ui/react';
import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<HStack justifyContent={'flex-end'} mt={'10px'}>
				{pageNumbers.map((number) => (
					<List key={number}>
						<Button
							border={'1px'}
							p={'8px'}
							borderRadius={'10px'}
							_hover={{
								color: '#fff',
								bg: 'purple.600',
							}}
							_focus={{
								bg: "purple.600"
							}}
							onClick={() => {paginate(number)}}
						>
							{number}
						</Button>
					</List>
				))}
			</HStack>
		</nav>
	);
};

export default Pagination;

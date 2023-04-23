import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import React from 'react';

const BlogCards = () => {
	return (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow="hidden"
			variant="outline"
		>
			<Image
				objectFit="cover"
				maxW={{ base: '100%', sm: '200px' }}
				src="https://via.placeholder.com/300x300"
				alt="Placeholder Image"
			/>

			<Stack>
				<CardBody>
					<Heading size="md">Blog Title Goes Here</Heading>

					<Text py="2">
						Blog preview goes here. Blog preview goes here. Blog preview goes
						here. Blog preview goes here. Blog preview goes here. Blog preview
						goes here. Blog preview goes here. Blog preview goes here.
					</Text>
				</CardBody>

				<CardFooter>
					<Button variant="solid" colorScheme="blue">
						View Blog
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default BlogCards;

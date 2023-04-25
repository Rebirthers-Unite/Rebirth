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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCards = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/blogs/').then((r) => {
			r.ok ? r.json().then((data) => setBlogs(data)) : 'Problems!';
		});
	}, []);

	return blogs.map((blog) => (
		<Card
			direction={{ base: 'column', sm: 'row' }}
			overflow="hidden"
			variant="outline"
			m={'1rem'}
		>
			<Image
				objectFit="cover"
				maxW={{ base: '100%', sm: '200px' }}
				src={blog.image}
				alt={blog.title}
			/>

			<Stack>
				<CardBody>
					<Heading size="md">{blog.title}</Heading>

					<Text py="2">{blog.body.substring(0, 100)}...</Text>
				</CardBody>

				<CardFooter>
					<Link to={`/blog/${blog.id}`}>
						<Button variant="solid" colorScheme="blue">
							View Blog
						</Button>
					</Link>
				</CardFooter>
			</Stack>
		</Card>
	));
};

export default BlogCards;

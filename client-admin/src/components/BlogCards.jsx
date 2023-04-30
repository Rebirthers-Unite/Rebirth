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
import Pagination from './Pagination';

const BlogCards = () => {
	const [blogs, setBlogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	// Get curent posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/blogs/').then((r) => {
			r.ok ? r.json().then((data) => setBlogs(data)) : 'Problems!';
		});
	}, []);

	return (
		<div>
			{currentPosts.map((blog) => (
				<Card
					direction={{ base: 'column', sm: 'row' }}
					overflow="hidden"
					variant="outline"
					m={'1rem'}
					key={blog.$oid}
				>
					<Image
						objectFit="cover"
						maxW={{ base: '100%', sm: '200px' }}
						src={blog.image_url}
						alt={blog.title}
						borderRadius={'8px'}
					/>

					<Stack>
						<CardBody>
							<Heading size="md">{blog.title}</Heading>

							<Text py="2">{blog.body.substring(0, 100)}...</Text>
						</CardBody>

						<CardFooter>
							<Link to={`/blog/${blog.id['$oid']}`}>
								<Button variant="solid" colorScheme="blue">
									View Blog
								</Button>
							</Link>
						</CardFooter>
					</Stack>
				</Card>
			))}
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={blogs.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default BlogCards;

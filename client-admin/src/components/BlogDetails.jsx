import {
	Avatar,
	Button,
	Container,
	HStack,
	Heading,
	Image,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import UpdateBlogsModal from './modals/UpdateBlogsModal';
import DeleteBlogsModal from './modals/DeleteBlogsModal';

const BlogDetails = ({
	renderDeleteBlogModal,
	renderUpdateBlogModal,
	closeUpdateBlogModal,
	updateBlogsModalOpen,
	deleteBlogsModalOpen,
	closeDeleteBlogModal,
	newBlog,
	setNewBlog
}) => {
	const [blog, setBlog] = useState({});
	const { id } = useParams();
	// const navigate = useNavigate();
	// const toast = useToast();
	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/blogs/' + id).then(
			(r) => {
				r.ok
					? r.json().then((data) => {
						console.log(data);
							setBlog(data);
					  })
					: 'Wahala!!';
			}
		);
	}, []);
	return (
		<Container maxW={'70%'}>
			<Heading>{blog.title}</Heading>
			<VStack>
				<Image
					src={blog.image_url}
					alt={blog.title}
					borderRadius={'10px'}
					mb={'1rem'}
				/>
				<HStack justify={'space-between'}>
					<HStack m={'1rem'}>
						<Avatar size={'sm'} name={blog.author} />
						<Text as={'h6'} fontWeight={'bold'}>
							{blog.author}
						</Text>
					</HStack>
					<Text as={'p'}>{blog.date}</Text>
				</HStack>
			</VStack>
			<Text mb={"1rem"}>{blog.body}</Text>
			<HStack justify={'center'} gap={"1rem"}>
				<Button onClick={renderUpdateBlogModal}>UPDATE BLOG</Button>
				<Button bg={'red.500'} onClick={renderDeleteBlogModal}>
					DELETE BLOG
				</Button>
			</HStack>
			<UpdateBlogsModal
				// renderUpdateBlogModal={renderUpdateBlogModal}
				blog={blog}
				setBlog={setBlog}
				closeUpdateBlogModal={closeUpdateBlogModal}
				updateBlogsModalOpen={updateBlogsModalOpen}
			/>
			<DeleteBlogsModal
				// renderDeleteBlogModal={renderDeleteBlogModal}
				// renderDeleteBlogModal={renderDeleteBlogModal}
				deleteModalOpen={deleteBlogsModalOpen}
				closeDeleteBlogModal={closeDeleteBlogModal}
				blog={blog}
			/>
		</Container>
	);
};
export default BlogDetails;

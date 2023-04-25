import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';
import { React, useEffect, useState } from 'react';
const UpdateBlog = ({
	blog,
	setBlog,
	closeUpdateBlogModal,
	updateBlogsModalOpen,
}) => {
	const [updateBlog, setUpdateBlog] = useState({});
	useEffect(() => setUpdateBlog(blog), []);
	const showToast = () => {
		toast({
			title: 'Updated Blog',
			description: `Successfully updated ${updateBlog.title}`,
			duration: 3000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <CheckIcon />,
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdateBlog((prevState) => ({ ...prevState, [name]: value }));
		console.log(updateBlog);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`http://localhost:8000/blogs/${blog.id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updateBlog),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setUpdateBlog(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		showToast();
		closeUpdateBlogModal();
		window.location.reload();
	};
	return (
		<FormControl onSubmit={handleSubmit}>
			<FormLabel>Blog Title</FormLabel>
			<Input
				type="text"
				value={updateBlog.title}
				onChange={handleChange}
				name="title"
				required
			/>
			<FormLabel>Image Source</FormLabel>
			<Input
				type="file"
				accept="image/png, image/jpeg"
				// value={updateBlog.image}
				onChange={handleChange}
				name="image"
				required
			/>
			<FormLabel> Author</FormLabel>
			<Input
				type="text"
				value={updateBlog.author}
				onChange={handleChange}
				name="author"
				required
			/>
			<FormLabel>Date</FormLabel>
			<Input
				type="date"
				value={updateBlog.date}
				onChange={handleChange}
				name="date"
				required
			/>
			<FormLabel>Blog Body</FormLabel>
			<Textarea
				h={'20rem'}
				value={updateBlog.body}
				onChange={handleChange}
				name="body"
				minLength={50}
				resize={'none'}
				required
			/>
			<Button onClick={handleSubmit}>POST BLOG</Button>
		</FormControl>
	);
};
export default UpdateBlog;

import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import React, {useEffect, useState } from 'react';
import useAuthStore from '../store/Token';
import { CheckIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router';

const UpdateBlog = ({
	blog,
	closeUpdateBlogModal,
}) => {
	const token = useAuthStore((state) => state.token);
	const [updateBlog, setUpdateBlog] = useState({});

	const navigate = useNavigate();
	const toast = useToast();
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
		const formData = new FormData();
		for (const x in updateBlog) {
			formData.append(`${x}`, updateBlog[x]);
		}

		fetch(`https://rebirth-ktaf.onrender.com/blogs/${blog.id['$oid']}`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
				// 'Content-Type': 'application/json',
			},
			body: formData,
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
		navigate('/dashboard');
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setUpdateBlog((prevState) => ({ ...prevState, image: file }));
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
				onChange={handleImageChange}
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

			<Button onClick={handleSubmit}>UPDATE BLOG</Button>
		</FormControl>
	);
};
export default UpdateBlog;

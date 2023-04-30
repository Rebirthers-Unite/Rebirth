// import {} from 'react-router-dom';
import { React, useState } from 'react';
import useAuthStore from '../../store/Token';
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';
const AddBlog = ({ newBlog, setNewBlog }) => {
	const token = useAuthStore((state) => state.token);

	// const showToast = () => {
	// 	toast({
	// 		title: 'Added Blog',
	// 		description: `Successfully added ${newBlog.title}`,
	// 		duration: 3000,
	// 		isClosable: true,
	// 		status: 'success',
	// 		position: 'top',
	// 		icon: <CheckIcon />,
	// 	});
	// };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewBlog((prevState) => ({ ...prevState, [name]: value }));
		console.log(newBlog);
	};
	const handleSubmit = (e) => {
		console.log(newBlog);
		e.preventDefault();
		fetch('https://rebirth-ktaf.onrender.com/blogs/', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newBlog),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setNewBlog('');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		// showToast();
	};
	return (
		<FormControl onSubmit={handleSubmit}>
			<FormLabel>Blog Title</FormLabel>
			<Input
				type="text"
				value={newBlog.title}
				onChange={handleChange}
				name="title"
				required
			/>
			<FormLabel>Image Source</FormLabel>
			<Input
				type="file"
				value={newBlog.image}
				onChange={handleChange}
				name="image"
				accept="image/png, image/jpeg"
			/>
			<FormLabel> Author</FormLabel>
			<Input
				type="text"
				value={newBlog.author}
				onChange={handleChange}
				name="author"
				required
			/>
			<FormLabel>Date</FormLabel>
			<Input
				type="date"
				value={newBlog.date}
				onChange={handleChange}
				name="date"
				required
			/>
			<FormLabel>Blog Body</FormLabel>
			<Textarea
				h={'20rem'}
				value={newBlog.body}
				onChange={handleChange}
				name="body"
				minLength={50}
				resize={'none'}
				required
			/>
			<Button type="submit" onClick={handleSubmit}>
				POST BLOG
			</Button>
		</FormControl>
	);
};
export default AddBlog;

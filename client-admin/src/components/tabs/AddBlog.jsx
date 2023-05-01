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
import { useNavigate } from 'react-router';
const AddBlog = ({ newBlog, setNewBlog }) => {

	const navigate = useNavigate()

	const token = useAuthStore((state) => state.token);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewBlog((prevState) => ({ ...prevState, [name]: value }));
		console.log(newBlog);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (const x in newBlog) {
			formData.append(`${x}`, newBlog[x]);
		}

		fetch('https://rebirth-ktaf.onrender.com/blogs/', {
			method: 'POST',
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
				setNewBlog('');
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		
		navigate("/dashboard")
		
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setNewBlog((prevState) => ({ ...prevState, image: file }));
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
				onChange={handleImageChange}
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

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

const UpdateProgram = ({
	program,
	closeUpdateProgramModal,
}) => {
	const token = useAuthStore((state) => state.token);
	const [updateProgram, setUpdateProgram] = useState({});

	const navigate = useNavigate();
	const toast = useToast();
	useEffect(() => setUpdateProgram(program), []);
	const showToast = () => {
		toast({
			title: 'Updated Program',
			description: `Successfully updated ${updateProgram.title}`,
			duration: 3000,
			isClosable: true,
			status: 'success',
			position: 'top',
			icon: <CheckIcon />,
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdateProgram((prevState) => ({ ...prevState, [name]: value }));
		console.log(updateProgram);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (const x in updateProgram) {
			formData.append(`${x}`, updateProgram[x]);
		}

		fetch(`https://rebiirth.onrender.com/programs/${program.id['$oid']}`, {
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
				setUpdateProgram(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		showToast();
		closeUpdateProgramModal();
		navigate('/programs/:id');
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setUpdateProgram((prevState) => ({ ...prevState, image: file }));
	};

	return (
		<FormControl onSubmit={handleSubmit}>
			<FormLabel>Program Title</FormLabel>
			<Input
				type="text"
				value={updateProgram.title}
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
			<FormLabel>Program Description</FormLabel>
			<Textarea
				h={'20rem'}
				value={updateProgram.description}
				onChange={handleChange}
				name="body"
				minLength={50}
				resize={'none'}
				required
			/>

			<Button onClick={handleSubmit}>UPDATE PROGRAM</Button>
		</FormControl>
	);
};
export default UpdateProgram;
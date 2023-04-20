import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';
import React from 'react';

const AddBlog = () => {
	return (
		<FormControl>
			<FormLabel>Blog Title</FormLabel>
			<Input required />
			<FormLabel>Image Source</FormLabel>
			<Input required />
			<FormLabel> Author</FormLabel>
			<Input required />
			<FormLabel>Date</FormLabel>
			<Input type="date" />
			<FormLabel>Blog Body</FormLabel>
			<Textarea h={'20rem'} resize={'none'} />
			<Button>POST BLOG</Button>
		</FormControl>
	);
};

export default AddBlog;

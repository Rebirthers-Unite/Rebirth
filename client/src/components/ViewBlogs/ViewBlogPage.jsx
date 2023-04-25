import React, { useEffect, useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

export const ViewBlogPage = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState({});

	useEffect(() => {
		fetch(`https://rebirth-ktaf.onrender.com/blogs/${id}`)
			.then((response) => response.json())
			.then((blogData) => setBlog(blogData));
	}, []);

	return (
		<div className='bg-purple-200 font-serif p-2 mt-[-95px]'>
			<h1 className='text-5xl font-bold font-serif text-center mt-28 mb-4'>
				{blog.title}
			</h1>

			<img
				className='mx-auto my-4 w-50 h-50'
				id='blog-image'
				src={blog.image_url}
				alt='blog-image'
			/>

			<div className='flex justify-center items-center mt-5'>
				<img
					className='w-12 h-12 rounded-full'
					src={'https://www.w3schools.com/howto/img_avatar.png'}
					id='admin-photo'
				/>
				<p className='text-center ml-4'>
					{blog.author}
					<br />
					{blog.date}. 4 min read
				</p>
			</div>

			<p className='mt-6 sm:justify-center sm:align-center text-lg sm:pl-4 md:pl-48 md:pr-60 md:align-center md:justify-center leading-8'>
				{blog.body}
			</p>
		</div>
	);
};

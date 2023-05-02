import React, { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';


export const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/blogs')
			.then((response) => response.json())
			.then((blogData) => setBlogs(blogData));
	}, []);

	const blogData = blogs.filter((blog) =>
		blog.title.toLowerCase().includes(search.toLowerCase())
	);

	const cards = blogData.map((blog) => {
		return (
			<BlogCard
				key={blog.id.$oid}
				id={blog.id.$oid}
				title={blog.title}
				content={blog.body}
				image={blog.image_url}
			/>
		);
	});

	return (
		<div id='blog-page' className='bg-[#CBC2F3] mt-[-140px] text-black'>
			<h1 className='text-5xl font-serif text-center sm:pt-48'>BLOGS</h1>

			<div
				id='search-bar'
				className='md:w-50 sm:w-50 sm:pl-24 sm:pr-16 sm:pt-2 md:ml-80 md:mr-72 md:pl-32 md:pr-40 md:mt-2'>
				<input
					type='text'
					className='form-control'
					placeholder='Search for Blog'
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div className='grid md:grid-cols-3 sm:grid-cols-1 sm:pl-20 sm:pr-4 shadow-xl z-0 justify-center mt-3'>
				{cards}
			</div>
		</div>
	);
};

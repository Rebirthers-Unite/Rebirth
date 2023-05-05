import React, { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import './BlogPage.css'

const BLOGS_PER_PAGE = 6; // Number of blogs to display per page

export const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/blogs')
			.then((response) => response.json())
			.then((blogData) => setBlogs(blogData));
	}, []);

	const filteredBlogs = blogs.filter((blog) =>
		blog.title.toLowerCase().includes(search.toLowerCase())
	);

	const totalBlogs = filteredBlogs.length;
	const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);

	// Determine the pagination range based on the current page
	let startPage = 1;
	let endPage = totalPages;
	if (totalPages > 5) {
		if (currentPage <= 3) {
			endPage = 5;
		} else if (currentPage >= totalPages - 2) {
			startPage = totalPages - 4;
		} else {
			startPage = currentPage - 2;
			endPage = currentPage + 2;
		}
	}

	// Get the index of the first and last blog to display on the current page
	const indexOfLastBlog = currentPage * BLOGS_PER_PAGE;
	const indexOfFirstBlog = indexOfLastBlog - BLOGS_PER_PAGE;

	// Get the blogs to display on the current page
	const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

	const cards = currentBlogs.map((blog) => {
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
			<h1 className='text-5xl font-serif text-center mt-5'>BLOGS</h1>

			<div
				id='search-bar'
				className=''>
				<input
					type='text'
					className='form-control'
					placeholder='Search for Blog'
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div className='row ms-5 mt-3'>
				{cards}
			</div>

			<div className='flex justify-center sm:mt-2'>
				{currentPage > 1 && (
					<button
						className='px-4 py-2 mx-2 rounded-lg'
						onClick={() => setCurrentPage(currentPage - 1)}>
						Prev
					</button>
				)}
				{Array.from(
					{ length: endPage - startPage + 1 },
					(_, i) => startPage + i
				).map((page) => (
					<button
						key={page}
						className={`px-4 py-2 mx-2 rounded-lg ${
							page === currentPage ? ' bg-purple-500 text-white' : ''
						}`}
						onClick={() => setCurrentPage(page)}>
						{page}
					</button>
				))}
				{currentPage < totalPages && (
					<button
						className='px-4 py-2 mx-2 rounded-lg'
						onClick={() => setCurrentPage(currentPage + 1)}>
						Next
					</button>
				)}
			</div>
		</div>
	);
};


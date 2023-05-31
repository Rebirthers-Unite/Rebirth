import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BlogCard } from './BlogCard';
// import './BlogPage.css'

const BLOGS_PER_PAGE = 6; // Number of blogs to display per page

export const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		fetch('https://rebiirth.onrender.com/blogs')
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
		<div className='bg-purple-300 mt-[-160px] text-black'>
			<h1 className='text-5xl font-serif text-center pt-40'>BLOGS</h1>

			<div className='relative md:left-[575px] sm:left-[230px] w-52 pt-4'>
				<input
					type='text'
					className={`form-control ${isFocused ? 'border-black' : ''}`}
					placeholder='Search for Blog'
					onChange={(e) => setSearch(e.target.value)}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				<div className='absolute top-10 right-3 transform -translate-y-1/2'>
					<BsSearch
						className={`text-black ${
							isFocused ? 'text-black' : 'text-gray-500'
						}`}
					/>{' '}
					{/* Add text-black class when focused */}
				</div>
			</div>

			<div className='grid md:grid-cols-3 sm:grid-cols-1 sm:pl-[110px] sm:pr-10 z-0 justify-center md:mt-5 sm:mt-6'>
				{cards}
			</div>

			<div className='flex justify-center sm:mt-2 sm:pl-10 sm:pb-4 md:pb-6'>
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


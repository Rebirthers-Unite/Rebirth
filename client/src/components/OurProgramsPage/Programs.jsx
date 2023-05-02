import React, { useEffect, useState } from 'react';
import { ProgramsCard } from './ProgramsCard';

export const Programs = () => {
	const [programs, setPrograms] = useState([]);
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 6;
	const range = 10;

	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/programs')
			.then((response) => response.json())
			.then((programData) => setPrograms(programData));
	}, []);

	const searchPrograms = programs.filter((program) =>
		program.title.toLowerCase().includes(search.toLowerCase())
	);

	const totalPages = Math.ceil(searchPrograms.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	let displayedPrograms;
	if (totalPages > range) {
		const maxRange = Math.ceil(currentPage / range) * range;
		const minRange = maxRange - range + 1;
		if (maxRange > totalPages) {
			displayedPrograms = searchPrograms.slice(totalPages - range, totalPages);
		} else {
			displayedPrograms = searchPrograms.slice(minRange - 1, maxRange);
		}
	} else {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		displayedPrograms = searchPrograms.slice(indexOfFirstItem, indexOfLastItem);
	}

	const programsCard = displayedPrograms.map((program) => {
		return (
			<ProgramsCard
				key={program.id.$oid}
				title={program.title}
				description={program.description}
				image={program.image_url}
			/>
		);
	});

	return (
		<div className='bg-purple-200 p-20 mt-[-100px] justify-center items-center'>
			<h1 className='font-serif text-5xl pt-24 text-center'>Our Programs</h1>
			<input
				className='form-input border border-white bg-white rounded p-2 md:ml-40 sm:ml-32 sm:w-56 mt-4'
				placeholder='Search by Title'
				type='text'
				id='search-input'
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className='grid md:grid-cols-2 sm:grid-cols-1 sm:pl-20 sm:pr-4 sm:ml-12 justify-center mt-3'>
				{programsCard}
			</div>
			<div className='flex justify-center mt-2'>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
					<button
						key={pageNumber}
						className={`mx-1 rounded-md py-2 px-4 ${
							currentPage === pageNumber ? 'bg-purple-500 text-white' : 'bg-white text-gray-700'
						}`}
						onClick={() => handlePageChange(pageNumber)}
					>
						{pageNumber}
					</button>
				))}
			</div>
		</div>
	);
};
import React, { useEffect, useState } from 'react';
import { ProgramsCard } from './ProgramsCard';

export const Programs = () => {
	const [programs, setPrograms] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/programs')
			.then((response) => response.json())
			.then((programData) => setPrograms(programData));
	}, []);

	const searchPrograms = programs.filter((program) =>
		program.title.toLowerCase().includes(search.toLowerCase())
	);

	const programsCard = searchPrograms.map((program) => {
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
		</div>
	);
};

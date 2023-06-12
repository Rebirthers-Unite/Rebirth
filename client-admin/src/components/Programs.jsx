import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Programs = () => {
	const [programs, setPrograms] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [programsPerPage] = useState(6);

	// Get current programs
	const indexOfLastProgram = currentPage * programsPerPage;
	const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
	const currentPrograms = programs.slice(
		indexOfFirstProgram,
		indexOfLastProgram
	);

	// Change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		fetch('https://rebiirth.onrender.com/programs/').then((r) => {
			r.ok ? r.json().then((data) => setPrograms(data)) : 'Problems!';
		});
	}, []);

	return (
		<>
			{currentPrograms.map((program) => (
				<Card
					direction={{ base: 'column', sm: 'row' }}
					overflow="hidden"
					variant="outline"
					m={'1rem'}
					key={program.$oid}
				>
					<Image
						objectFit="cover"
						maxW={{ base: '100%', sm: '200px' }}
						src={program.image_url}
						alt={program.title}
						borderRadius={'8px'}
					/>

					<Stack>
						<CardBody>
							<Heading size="md">{program.title}</Heading>

							<Text py="2">{program.description}</Text>
						</CardBody>

						<CardFooter>
							{/* Modify the link to the appropriate route */}
							<Link to={`/programs/${program.id['$oid']}`}>
								<Button variant="solid" colorScheme="blue">
									View Program
								</Button>
							</Link>
						</CardFooter>
					</Stack>
				</Card>
			))}
			<Pagination
				postPerPage={programsPerPage}
				totalPosts={programs.length}
				paginate={paginate}
			/>
		</>
	);
};

export default Programs;

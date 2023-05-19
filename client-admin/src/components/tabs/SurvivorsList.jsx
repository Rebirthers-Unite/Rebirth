import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';

const SurvivorsList = ({ renderUpdateForm, survivors }) => {
	const tableFields = ['NAME', 'DATE OF BIRTH', 'ORGANIZATION', 'CONTACT'];
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	// Get curent survivors
	const indexOfLastSurvivor = currentPage * postsPerPage;
	const indexOfFirstSurvivor = indexOfLastSurvivor - postsPerPage;
	const currentSurvivors = survivors.slice(
		indexOfFirstSurvivor,
		indexOfLastSurvivor
	);

	// Change page
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<TableContainer>
			<Table>
				<Thead>
					<Tr bg={'purple.400'}>
						{tableFields.map((e, i) => (
							<Th
								key={i}
								border={'2px solid'}
								textAlign={'center'}
								color={'black'}
							>
								{e}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{currentSurvivors.map((survivor) => (
						<Tr key={survivor.id['$oid']}>
							<Link to={`/survivors/${survivor.id['$oid']}`}>
								<Td>{survivor.name}</Td>
							</Link>
							<Td>{survivor.date_of_birth}</Td>
							<Td>{survivor.organization}</Td>
							<Td>{survivor.organization_contact}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={survivors.length}
				paginate={paginate}
			/>
		</TableContainer>
	);
};

export default SurvivorsList;

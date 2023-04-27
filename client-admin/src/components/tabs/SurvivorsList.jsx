import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SurvivorsList = ({ renderUpdateForm, survivors }) => {
	const tableFields = ['NAME', 'DATE OF BIRTH', 'ORGANIZATION', 'CONTACT'];

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
					{survivors.map((survivor) => (
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
		</TableContainer>
	);
};

export default SurvivorsList;

import {
	Button,
	HStack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SurvivorsList = ({ renderUpdateForm, survivors }) => {
	let [survId, setSurvId] = useState('');

	const tableFields = [
		'NAME',
		'CONTACT',
		'DATE OF BIRTH',
		'REFERRING ORGANIZATION',
		// 'REFERRING ORGANIZATION CONTACT',
		// 'PROGRAMS',
		// 'DATE OF ENTRY',
		// 'DATE OF EXIT',
		// 'GUARDIAN',
		// 'GUARDIAN CONTACT',
		'ACTIONS',
	];

	survId = useParams();
	const deleteSurvivor = () => {
		fetch('  http://localhost:8000/survivors/' + survId, {
			method: 'DELETE',
		}); /* .then(() => {
			history.push('/');
		}); */
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
					{survivors.map((survivor) => (
						<Tr key={survivor.id}>
							<Link
								to={`/survivor/${survivor.id}`}
								renderUpdateForm={renderUpdateForm}
							>
								<Td>{survivor.name}</Td>
							</Link>
							<Td>{survivor.contact}</Td>
							<Td>{survivor.dateOfBirth}</Td>
							<Td>{survivor.referringOrganization}</Td>
							{/* <Td>{survivor.referringOrganizationContact}</Td> */}
							{/* <Td>{survivor.programs}</Td> */}
							{/* <Td>{survivor.dateOfEntry}</Td> */}
							{/* <Td>{survivor.dateOfExit}</Td> */}
							{/* <Td>{survivor.guardian}</Td> */}
							{/* <Td>{survivor.guardianContact}</Td> */}
							<HStack className="buttons" justify={'center'}>
								<Button onClick={renderUpdateForm}>UPDATE</Button>
								<Button
									bg={'red.500'}
									onClick={() => {
										setSurvId(survivor.id);
										deleteSurvivor();
									}}
									_hover={{color: 'whitesmoke'}}
								>
									DELETE
								</Button>
							</HStack>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default SurvivorsList;

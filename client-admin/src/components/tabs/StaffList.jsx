import {
	// Link,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const StaffList = ({ staff, setStaff }) => {
	const tableFields = ['NAME', 'EMAIL', 'PHONE NUMBER', 'POSITION', 'GENDER'];

	useEffect(() => {
		fetch('http://localhost:8000/staff/').then((r) => {
			r.ok ? r.json().then((data) => setStaff(data)) : 'Problems!';
		});
	}, []);

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
					{staff.map((e) => (
						<Tr key={e.id}>
							<Link to={`/staff/${e.id}`}>
								<Td>{e.name}</Td>
							</Link>

							<Td>{e.email}</Td>
							<Td>{e.phoneNumber}</Td>
							<Td>{e.position}</Td>
							<Td>{e.gender}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default StaffList;

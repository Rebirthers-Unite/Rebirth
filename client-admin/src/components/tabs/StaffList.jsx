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
import useAuthStore from '../../store/Token';

const StaffList = ({ staff, setStaff }) => {
	const token = useAuthStore((state) => state.token);
	const tableFields = ['NAME', 'EMAIL', 'PHONE NUMBER', 'POSITION', 'GENDER'];


	useEffect(() => {
		fetch('https://rebirth-ktaf.onrender.com/staffs', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			}
		}).then((r) => {
			r.ok ? r.json().then((data) => setStaff(data)) : 'Problems!';
		});
	}, []);

	return (
		<TableContainer>
			<Table className='table'>
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
						<Tr key={e.id['$oid']}>
							<Link to={`/staff/${e.id['$oid']}`}>
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
